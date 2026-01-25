# Newsletter System Setup Guide

## Overview
Complete newsletter system with subscriber storage, confirmation emails, and broadcast sending capability.

## Step 1: Create Subscribers Table in Supabase

Go to your Supabase dashboard SQL Editor:
https://supabase.com/dashboard/project/ldcfmyyrhtddjujtaxsv/editor

Run this SQL:

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

-- Create index for faster queries
CREATE INDEX newsletter_subscribers_email_idx ON newsletter_subscribers(email);
CREATE INDEX newsletter_subscribers_confirmed_idx ON newsletter_subscribers(confirmed);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Service role can do everything (for serverless functions)
-- No public policies needed - only serverless functions will access this table
```

## Step 2: Update Environment Variables

Your Supabase credentials are already configured in `.env.local`:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

**Make sure these are also added to Vercel** for production.

## Step 3: Newsletter Flow

### Signup Flow:
1. User enters email in signup form
2. Email + token saved to `newsletter_subscribers` table (confirmed = false)
3. Confirmation email sent via Resend
4. Slack notification sent

### Confirmation Flow:
1. User clicks confirmation link in email
2. Token validated and subscriber marked as confirmed
3. "Thank you for confirming" email sent
4. Subscriber can now receive newsletters

### Sending Newsletters:
Use the admin endpoint `/api/newsletter/send` to send newsletters to all confirmed subscribers.

## Step 4: Sending Your First Newsletter

To send a newsletter, make a POST request to:
```
POST https://creativejobhub.com/api/newsletter/send
```

With JSON body:
```json
{
  "subject": "Your Newsletter Subject",
  "content": "<h1>Newsletter Content</h1><p>Your HTML content here...</p>",
  "adminKey": "your-secret-admin-key"
}
```

**Security:** Set `NEWSLETTER_ADMIN_KEY` environment variable in Vercel to protect the send endpoint.

## Step 5: Unsubscribe Handling

Resend automatically handles unsubscribe links. When someone unsubscribes:
1. They're removed from Resend's audience
2. Update your Supabase table manually or via webhook

## Features

✅ Double opt-in (email confirmation required)
✅ Subscriber storage in Supabase
✅ Confirmation emails via Resend
✅ Thank you emails after confirmation
✅ Slack notifications for new signups
✅ Admin endpoint for sending newsletters
✅ Unsubscribe handling via Resend

## Future Enhancements

- Webhook to automatically mark unsubscribers in database
- Admin dashboard to manage subscribers
- Automated weekly digest of new blog posts
- Email templates system
- A/B testing for subject lines
- Analytics and open rate tracking
