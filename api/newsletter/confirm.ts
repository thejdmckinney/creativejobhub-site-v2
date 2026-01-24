import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { token } = req.query;

  if (!token) {
    return res.status(400).send('Invalid confirmation link');
  }

  // In a production app, you would:
  // 1. Look up the token in your database
  // 2. Mark the subscriber as confirmed
  // 3. Store their email in the confirmed subscribers list

  // For now, we'll just show a success page
  // You can add database integration later

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
            text: {
              type: 'mrkdwn',
              text: `A subscriber confirmed their email (Token: ${token})`,
            },
          },
        ],
      }),
    }).catch(console.error);
  }

  // Redirect to a success page
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
