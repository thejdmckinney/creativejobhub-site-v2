import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory storage for demo - in production, use a database
// For Vercel, we'll use environment variables or external storage
interface Subscriber {
  email: string;
  confirmed: boolean;
  token: string;
  subscribedAt: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Generate confirmation token
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const confirmUrl = `https://${req.headers.host}/api/newsletter/confirm?token=${token}`;

    // Send confirmation email via Resend
    const { error: emailError } = await resend.emails.send({
      from: 'Creative Job Hub <noreply@creativejobhub.com>',
      to: email,
      subject: 'Confirm Your Newsletter Subscription',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Creative Job Hub!</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
              <p style="font-size: 16px; margin-bottom: 20px;">
                Thanks for subscribing to our newsletter! You'll get updates about:
              </p>
              
              <ul style="margin: 20px 0; padding-left: 20px;">
                <li style="margin-bottom: 10px;">Field service management tips and tricks</li>
                <li style="margin-bottom: 10px;">New features and product updates</li>
                <li style="margin-bottom: 10px;">Industry insights and best practices</li>
                <li style="margin-bottom: 10px;">Exclusive contractor resources</li>
              </ul>
              
              <p style="font-size: 16px; margin: 20px 0;">
                Please confirm your subscription by clicking the button below:
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${confirmUrl}" 
                   style="display: inline-block; background: #fbbf24; color: #1e3a8a; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                  Confirm Subscription
                </a>
              </div>
              
              <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
                If you didn't request this subscription, you can safely ignore this email.
              </p>
              
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
              
              <p style="font-size: 12px; color: #9ca3af; text-align: center;">
                Creative Job Hub - Field Service Management Software<br>
                <a href="https://creativejobhub.com" style="color: #2563eb;">creativejobhub.com</a>
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      return res.status(500).json({ error: 'Failed to send confirmation email' });
    }

    // Store subscriber data temporarily (in production, save to database)
    // For now, we'll just send the confirmation email
    // You can add database storage later

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
                text: '📧 New Newsletter Signup',
                emoji: true,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `*Email:*\n${email}`,
                },
                {
                  type: 'mrkdwn',
                  text: `*Status:*\nPending confirmation`,
                },
              ],
            },
          ],
        }),
      }).catch(console.error);
    }

    return res.status(200).json({ 
      message: 'Thanks! Check your email to confirm your subscription.',
      success: true 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
