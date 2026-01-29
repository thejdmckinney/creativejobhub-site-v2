import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { subject, content, adminKey } = req.body;

    // Verify admin key
    if (!adminKey || adminKey !== process.env.NEWSLETTER_ADMIN_KEY) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Validate required fields
    if (!subject || !content) {
      return res.status(400).json({ error: 'Subject and content are required' });
    }

    // Get all confirmed, non-unsubscribed subscribers
    const { data: subscribers, error: fetchError } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('confirmed', true)
      .eq('unsubscribed', false);

    if (fetchError) {
      console.error('Failed to fetch subscribers:', fetchError);
      return res.status(500).json({ error: 'Failed to fetch subscribers' });
    }

    if (!subscribers || subscribers.length === 0) {
      return res.status(400).json({ error: 'No confirmed subscribers found' });
    }

    // Get all email addresses
    const emails = subscribers.map(sub => sub.email);

    console.log(`Sending newsletter to ${emails.length} subscribers`);

    // Send newsletter using Resend batch sending
    // Note: Resend batch endpoint allows sending to multiple recipients
    const { error: sendError } = await resend.batch.send(
      emails.map(email => ({
        from: 'Creative Job Hub <noreply@creativejobhub.com>',
        to: email,
        subject: subject,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 28px;">Creative Job Hub Newsletter</h1>
              </div>
              
              <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
                ${content}
                
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
                
                <p style="font-size: 12px; color: #9ca3af; text-align: center;">
                  Creative Job Hub - Field Service Management Software<br>
                  <a href="https://creativejobhub.com" style="color: #2563eb;">creativejobhub.com</a><br><br>
                  You're receiving this because you subscribed to our newsletter.<br>
                  Don't want these emails? Click to <a href="{{unsubscribe_url}}" style="color: #2563eb;">unsubscribe</a>.
                </p>
              </div>
            </body>
          </html>
        `,
      }))
    );

    if (sendError) {
      console.error('Failed to send newsletter:', sendError);
      return res.status(500).json({ error: 'Failed to send newsletter' });
    }

    // Notify admin via Slack
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: '📨 Newsletter Sent!',
                emoji: true,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Subject:*\n${subject}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Recipients:*\n${emails.length} subscribers`,
                },
              ],
            },
          ],
        }),
      }).catch(console.error);
    }

    return res.status(200).json({
      success: true,
      message: `Newsletter sent to ${emails.length} subscribers`,
      recipientCount: emails.length,
    });

  } catch (error) {
    console.error('Newsletter send error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
