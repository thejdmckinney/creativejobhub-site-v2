import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { token } = req.query;

  if (!token || typeof token !== 'string') {
    return res.status(400).send('Invalid confirmation link');
  }

  // Look up the subscriber by token
  const { data: subscriber, error: fetchError } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .eq('confirmation_token', token)
    .single();

  if (fetchError || !subscriber) {
    return res.status(404).send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Invalid Link - Creative Job Hub</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 16px;
            padding: 48px;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          }
          h1 { font-size: 32px; color: #1f2937; margin-bottom: 16px; }
          p { font-size: 18px; color: #6b7280; line-height: 1.6; margin-bottom: 32px; }
          .button {
            display: inline-block;
            background: #2563eb;
            color: white;
            padding: 12px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: background 0.3s;
          }
          .button:hover { background: #1e40af; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Invalid Link</h1>
          <p>This confirmation link is invalid or has expired. Please try subscribing again.</p>
          <a href="https://creativejobhub.com/blog" class="button">Go to Blog</a>
        </div>
      </body>
      </html>
    `);
  }

  // Check if already confirmed
  if (subscriber.confirmed) {
    return res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Already Confirmed - Creative Job Hub</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          .container {
            background: white;
            border-radius: 16px;
            padding: 48px;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          }
          h1 { font-size: 32px; color: #1f2937; margin-bottom: 16px; }
          p { font-size: 18px; color: #6b7280; line-height: 1.6; margin-bottom: 32px; }
          .button {
            display: inline-block;
            background: #2563eb;
            color: white;
            padding: 12px 32px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            transition: background 0.3s;
          }
          .button:hover { background: #1e40af; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Already Confirmed!</h1>
          <p>Your email is already confirmed. You're all set to receive our newsletter!</p>
          <a href="https://creativejobhub.com/blog" class="button">Read the Blog</a>
        </div>
      </body>
      </html>
    `);
  }

  // Mark subscriber as confirmed
  const { error: updateError } = await supabase
    .from('newsletter_subscribers')
    .update({
      confirmed: true,
      confirmed_at: new Date().toISOString(),
    })
    .eq('confirmation_token', token);

  if (updateError) {
    console.error('Failed to confirm subscriber:', updateError);
    return res.status(500).send('Failed to confirm subscription');
  }

  // Send thank you email
  await resend.emails.send({
    from: 'Creative Job Hub <noreply@crewopspro.com>',
    to: subscriber.email,
    subject: '🎉 Welcome to Creative Job Hub Newsletter!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🎉 You're All Set!</h1>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 18px; margin-bottom: 20px; color: #1f2937;">
              <strong>Thank you for confirming your subscription!</strong>
            </p>
            
            <p style="font-size: 16px; margin-bottom: 20px;">
              You're now part of our community. Here's what you can expect:
            </p>
            
            <div style="background: white; border-left: 4px solid #10b981; padding: 16px; margin: 20px 0; border-radius: 4px;">
              <ul style="margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 10px;"><strong>Weekly Insights:</strong> Tips to streamline your field service business</li>
                <li style="margin-bottom: 10px;"><strong>Product Updates:</strong> Be the first to know about new features</li>
                <li style="margin-bottom: 10px;"><strong>Industry News:</strong> Stay ahead with contractor business trends</li>
                <li style="margin-bottom: 10px;"><strong>Exclusive Resources:</strong> Templates, guides, and tools</li>
              </ul>
            </div>
            
            <p style="font-size: 16px; margin: 20px 0;">
              While you're here, check out our latest blog posts:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://creativejobhub.com/blog" 
                 style="display: inline-block; background: #2563eb; color: white; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Read the Blog
              </a>
            </div>
            
            <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
              Have feedback or questions? Reply to this email - we read every message!
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
  }).catch(console.error);

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
              text: '✅ Newsletter Subscription Confirmed',
              emoji: true,
            },
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Email:*\n${subscriber.email}`,
              },
              {
                type: 'mrkdwn',
                text: `*Status:*\nConfirmed ✅`,
              },
            ],
          },
        ],
      }),
    }).catch(console.error);
  }

  // Return success page
  return res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subscription Confirmed - Creative Job Hub</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .container {
          background: white;
          border-radius: 16px;
          padding: 48px;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }
        .checkmark {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }
        .checkmark svg {
          width: 48px;
          height: 48px;
          color: white;
        }
        h1 {
          font-size: 32px;
          color: #1f2937;
          margin-bottom: 16px;
        }
        p {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 32px;
        }
        .button {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
        }
        .button:hover {
          background: #1d4ed8;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="checkmark">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1>You're All Set! 🎉</h1>
        <p>
          Thanks for confirming your subscription. You'll now receive updates about field service management tips, 
          new features, and exclusive contractor resources straight to your inbox.
        </p>
        <a href="https://creativejobhub.com/blog" class="button">Read Our Blog</a>
      </div>
    </body>
    </html>
  `);
}
