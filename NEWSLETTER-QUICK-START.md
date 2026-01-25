# Newsletter Quick Start Guide

## 🚀 Setup Steps (Do These First!)

### 1. Create the Supabase Table

Go to your Supabase SQL Editor:
https://supabase.com/dashboard/project/ldcfmyyrhtddjujtaxsv/editor

Copy and paste this SQL:

```sql
-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  confirmed BOOLEAN DEFAULT false,
  confirmation_token TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  unsubscribed BOOLEAN DEFAULT false,
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes
CREATE INDEX newsletter_subscribers_email_idx ON newsletter_subscribers(email);
CREATE INDEX newsletter_subscribers_confirmed_idx ON newsletter_subscribers(confirmed);

-- Enable RLS
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
```

Click **RUN** to create the table.

### 2. Add Environment Variables to Vercel

Go to: https://vercel.com/thejdmckinney/creativejobhub-site-v2/settings/environment-variables

Add this NEW variable:
- **Key:** `NEWSLETTER_ADMIN_KEY`
- **Value:** (Generate a random string - this protects your newsletter sending endpoint)
- **Example:** `nwsl_sk_3jk2h4jk5h6j7k8l9m0n1o2p`

Make sure these are also set (should already be there):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `SLACK_WEBHOOK_URL` (optional)

### 3. Redeploy Your Site

After adding environment variables, trigger a new deployment:
```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push origin main
```

---

## 📊 How to Track Signups

### Option 1: Supabase Dashboard (Database)
Go to: https://supabase.com/dashboard/project/ldcfmyyrhtddjujtaxsv/editor

1. Click **"newsletter_subscribers"** table
2. See all signups with:
   - Email address
   - Confirmation status (confirmed = true/false)
   - Subscribe date
   - Confirmation date

### Option 2: Resend Dashboard (Emails)
Go to: https://resend.com/emails

- Track all confirmation emails sent
- See delivery status, open rates, click rates

### Option 3: Slack (Real-time Notifications)
Every signup and confirmation sends a Slack notification automatically!

---

## 📧 How to Send a Newsletter

### Method 1: Using cURL (Command Line)

```bash
curl -X POST https://creativejobhub.com/api/newsletter/send \
  -H "Content-Type: application/json" \
  -d '{
    "adminKey": "YOUR_NEWSLETTER_ADMIN_KEY",
    "subject": "Welcome to Our Newsletter!",
    "content": "<h2>Hello!</h2><p>Your newsletter content here...</p>"
  }'
```

### Method 2: Using Postman or Insomnia

1. Open Postman
2. Create new **POST** request
3. URL: `https://creativejobhub.com/api/newsletter/send`
4. Headers: `Content-Type: application/json`
5. Body (raw JSON):
```json
{
  "adminKey": "YOUR_NEWSLETTER_ADMIN_KEY",
  "subject": "New Blog Post Alert!",
  "content": "<h2>We just published something awesome!</h2><p>Check it out...</p>"
}
```

### Method 3: Using the Provided Script

1. Edit `send-newsletter.sh`
2. Update `ADMIN_KEY` with your actual key
3. Update `SUBJECT` and `CONTENT` with your newsletter
4. Run: `./send-newsletter.sh`

---

## 💡 Newsletter Content Tips

### Good Newsletter Structure:
```html
<div style="margin-bottom: 30px;">
  <h2 style="color: #1f2937; font-size: 24px; margin-bottom: 16px;">
    Hey there! 👋
  </h2>
  <p style="font-size: 16px; color: #374151; margin-bottom: 16px;">
    Your opening message...
  </p>
</div>

<div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
  <h3 style="color: #2563eb; font-size: 20px; margin-bottom: 12px;">
    📝 Your Blog Post Title
  </h3>
  <p style="font-size: 16px; color: #6b7280; margin-bottom: 20px;">
    Brief description...
  </p>
  <a href="https://creativejobhub.com/blog/your-post" 
     style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
    Read More →
  </a>
</div>
```

### Remember:
- Use inline CSS (email clients don't support external stylesheets)
- Keep it simple and clean
- Include clear call-to-action buttons
- Test with yourself first!

---

## 🔍 How It Works

### User Journey:
1. **User enters email** on your site (footer or blog page)
2. **Confirmation email sent** via Resend
3. **User clicks confirm link** in email
4. **Thank you email sent** automatically
5. **Slack notification** → you know they confirmed!
6. **User receives newsletters** when you send them

### Admin Journey (You):
1. Write your newsletter content
2. Send POST request to `/api/newsletter/send`
3. Email sent to all confirmed subscribers
4. Slack notification confirms it was sent
5. Track opens/clicks in Resend dashboard

---

## ✅ Testing Checklist

Before sending your first real newsletter:

1. [ ] Supabase table created
2. [ ] Environment variables added to Vercel
3. [ ] Site redeployed
4. [ ] Test signup with your own email
5. [ ] Confirm subscription
6. [ ] Receive thank you email
7. [ ] Send test newsletter to yourself
8. [ ] Verify email looks good

---

## 🎯 Next Steps

**Ready to send your first newsletter?**

1. Open `send-newsletter.sh`
2. Replace the admin key with yours
3. Write your newsletter content
4. Run: `./send-newsletter.sh`
5. Check Slack for confirmation!

**Questions?** Check `NEWSLETTER-SETUP.md` for more details.
