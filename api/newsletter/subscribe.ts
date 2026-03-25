import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Welcome email template
function generateWelcomeEmail(): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Welcome to Creative Job Hub!</h1>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 18px; margin-bottom: 20px; color: #1f2937;">
            <strong>Thanks for subscribing!</strong>
          </p>
          
          <p style="font-size: 16px; margin-bottom: 20px; color: #4b5563;">
            You'll now receive updates about:
          </p>
          
          <ul style="margin: 20px 0; padding-left: 20px;">
            <li style="margin-bottom: 10px; color: #4b5563;">📊 Field service management tips and tricks</li>
            <li style="margin-bottom: 10px; color: #4b5563;">✨ New features and product updates</li>
            <li style="margin-bottom: 10px; color: #4b5563;">💡 Industry insights and best practices</li>
            <li style="margin-bottom: 10px; color: #4b5563;">🎁 Exclusive contractor resources</li>
          </ul>
          
          <p style="font-size: 16px; margin: 20px 0; color: #4b5563;">
            While you're here, check out our latest resources:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://creativejobhub.com/blog" 
               style="display: inline-block; background: #10b981; color: white; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 0 8px 8px 0;">
              Read Our Blog
            </a>
            <a href="https://creativejobhub.com/signup" 
               style="display: inline-block; background: #2563eb; color: white; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 0 8px 8px 0;">
              Start Free Trial
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="font-size: 12px; color: #9ca3af; text-align: center;">
            Creative Job Hub - Field Service Management Software<br>
            <a href="https://creativejobhub.com" style="color: #10b981;">creativejobhub.com</a>
          </p>
          
          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 15px;">
            Don't want to receive these emails? <a href="{{unsubscribe_url}}" style="color: #6b7280;">Unsubscribe</a>
          </p>
        </div>
      </body>
    </html>
  `;
}

// Old confirmation email template (keeping for reference, but not used anymore)
function generateConfirmationEmail(confirmUrl: string): string {
  return `
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
  `;
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

    // Add contact to Resend (goes to global contacts list)
    try {
      await resend.contacts.create({
        email,
        firstName: 'Newsletter',
        lastName: 'Subscriber',
        unsubscribed: false,
      });
    } catch (contactError: any) {
      // If contact already exists, that's okay - they might be re-subscribing
      if (contactError?.message?.includes('already exists')) {
        console.log('Contact already exists in audience, continuing...');
      } else {
        console.error('Failed to add contact:', contactError);
        return res.status(500).json({ error: 'Failed to add contact to mailing list' });
      }
    }

    // Send welcome email immediately (no confirmation needed)
    const { error: emailError } = await resend.emails.send({
      from: 'Creative Job Hub <noreply@crewopspro.com>',
      to: email,
      subject: '🎉 Welcome to Creative Job Hub Newsletter!',
      html: generateWelcomeEmail(),
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      // Don't fail the request - contact was added successfully
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
                text: '✅ New Newsletter Subscriber',
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
                  text: `*Status:*\nSubscribed & confirmed`,
                },
              ],
            },
          ],
        }),
      }).catch(console.error);
    }

    return res.status(200).json({ 
      message: '🎉 You\'re subscribed! Check your email for a welcome message.',
      success: true 
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
