import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email via Resend
    await resend.emails.send({
      from: 'Contact Form <noreply@creativejobhub.com>', // Update with your verified domain
      to: ['jeremy@creativejobhub.com'], // Your email address
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted from creativejobhub.com contact form</p>
      `,
    });

    // Send Slack notification (if webhook URL is configured)
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        await fetch(process.env.SLACK_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: '🔔 New Contact Form Submission',
            blocks: [
              {
                type: 'header',
                text: {
                  type: 'plain_text',
                  text: '📨 New Contact Form Submission',
                  emoji: true,
                },
              },
              {
                type: 'section',
                fields: [
                  {
                    type: 'mrkdwn',
                    text: `*Name:*\n${name}`,
                  },
                  {
                    type: 'mrkdwn',
                    text: `*Email:*\n${email}`,
                  },
                  ...(phone ? [{
                    type: 'mrkdwn',
                    text: `*Phone:*\n${phone}`,
                  }] : []),
                  ...(company ? [{
                    type: 'mrkdwn',
                    text: `*Company:*\n${company}`,
                  }] : []),
                ],
              },
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*Message:*\n${message}`,
                },
              },
              {
                type: 'context',
                elements: [
                  {
                    type: 'mrkdwn',
                    text: `Submitted from creativejobhub.com | Reply to: ${email}`,
                  },
                ],
              },
            ],
          }),
        });
      } catch (slackError) {
        // Don't fail the whole request if Slack fails
        console.error('Slack notification failed:', slackError);
      }
    }

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
