# Resend Contacts Setup Guide

## Overview

This guide shows you how to use Resend's native Contacts feature for managing newsletter subscriptions. This is **much simpler** than using Supabase or Google Sheets.

### What Changed in Resend's API

**Important Update**: Resend simplified their Contacts API! You no longer need to create separate "audiences" or manage audience IDs. All contacts are managed in a **single global contacts list** per organization.

### Benefits of Using Resend Contacts

✅ **No Database Needed** - Contacts stored natively in Resend  
✅ **No Audience IDs** - One global contacts list  
✅ **Automatic Unsubscribe** - Handled by Resend automatically  
✅ **Better Deliverability** - Email service manages the list  
✅ **Built-in Segments** - Filter contacts without code  
✅ **FREE** - Included in your Resend plan  
✅ **Simpler Setup** - Just push and deploy!

## Setup Steps

### Step 1: You're Already Set Up!

**Good news**: If you already have a Resend account with `RESEND_API_KEY` configured, you're ready to go! 

- No need to create audiences
- No audience IDs to copy
- No additional environment variables needed

### Step 2: Deploy the Updated Code

The code has been updated to work with Resend's current Contacts API:

```bash
git add -A
git commit -m "Update newsletter to use Resend Contacts (no audience ID needed)"
git push
```

Vercel will automatically deploy the changes.

### Step 3: Test the Newsletter Signup

1. Go to your site's newsletter signup form
2. Enter a test email address
3. Check your inbox for the welcome email (should arrive within seconds)
4. Go to https://resend.com/contacts
5. Verify the contact appears in your contacts list with:
   - **Email**: The email you entered
   - **First Name**: Newsletter
   - **Last Name**: Subscriber

## How It Works Now

### Old Flow (Supabase - Broken)
1. User enters email
2. Save to Supabase as "unconfirmed"
3. Send confirmation email
4. User clicks link
5. Update Supabase to "confirmed"
6. Send welcome email

### New Flow (Resend Contacts - Simple!)
1. User enters email
2. Add to Resend Contacts
3. Send welcome email immediately
4. Done! ✨

## Managing Your Subscribers

### View Contacts in Dashboard

Go to: https://resend.com/contacts

You'll see all your newsletter subscribers along with:
- Email address
- First Name: Newsletter
- Last Name: Subscriber
- Subscription status
- Date added

### View Contacts via CLI

```bash
# Install CLI (if not installed)
npm install -g resend-cli

# Login
resend login

# List all contacts
resend contacts list

# Search for specific contact
resend contacts list --email user@example.com
```

### Manually Add Contacts

```bash
# Via CLI
resend contacts create --email user@example.com --first-name "John" --last-name "Doe"
```

Or via API:
```typescript
await resend.contacts.create({
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  unsubscribed: false,
});
```

### Using Segments to Filter Newsletter Subscribers

Since your existing clients are also in Resend Contacts, you can use **Segments** to separate newsletter subscribers from clients:

1. Go to: https://resend.com/audience (Segments tab)
2. Create a segment with filters:
   - **First Name** = "Newsletter"
   - **Last Name** = "Subscriber"
3. When sending broadcasts, target this segment

Or use Properties to tag contacts:
```typescript
await resend.contacts.create({
  email: 'user@example.com',
  properties: {
    source: 'newsletter_signup',
    signup_date: new Date().toISOString(),
  }
});
```

## Sending Newsletters (3 Options)

### Option 1: Resend Dashboard (Easiest)

1. Go to: https://resend.com/broadcasts
2. Click **"Create Broadcast"**
3. Design your email
4. Select your segment (or all contacts)
5. Schedule or send immediately

### Option 2: Resend CLI (Great for Testing)

```bash
# Create broadcast from HTML file
resend broadcasts create \
  --from "Creative Job Hub <noreply@crewopspro.com>" \
  --subject "Monthly Newsletter" \
  --html-file newsletter.html

# Send to all contacts or specific segment
resend broadcasts send <broadcast_id>

# Schedule for later
resend broadcasts send <broadcast_id> --scheduled-at "tomorrow at 9am"
```

### Option 3: Keep Using /api/newsletter/send.ts (Update Required)

Update your existing endpoint to query Resend Contacts instead of Supabase:

```typescript
// Get all contacts from Resend
const { data: contacts } = await resend.contacts.list();

// Filter for newsletter subscribers if needed
const subscribers = contacts.filter(c => 
  c.firstName === 'Newsletter' && c.lastName === 'Subscriber'
);

// Send email to all
for (const contact of subscribers) {
  await resend.emails.send({
    from: 'Creative Job Hub <noreply@crewopspro.com>',
    to: contact.email,
    subject: 'Your Newsletter',
    html: emailContent,
  });
}
```

**Recommendation**: Use Resend Broadcasts (Option 1 or 2) for better tracking and management.

## Unsubscribe Handling

Resend automatically handles unsubscribes! The welcome email includes:

```html
{{unsubscribe_url}}
```

When someone clicks it:
- Resend marks them as unsubscribed
- They won't receive future broadcasts
- They stay in your contacts list (but inactive)

## What Changed in the Code

### api/newsletter/subscribe.ts

**Before (Supabase):**
```typescript
const { data, error } = await supabase
  .from('newsletter_subscribers')
  .insert([{ email, confirmed: false, token }]);
```

**After (Resend Contacts):**
```typescript
await resend.contacts.create({
  email,
  firstName: 'Newsletter',
  lastName: 'Subscriber',
  unsubscribed: false,
});
```

### Key Changes:
- ❌ Removed: All Supabase imports and code
- ❌ Removed: Token generation for confirmation
- ❌ Removed: `RESEND_AUDIENCE_ID` environment variable (not needed!)
- ✅ Added: Direct contact creation in Resend
- ✅ Added: Instant welcome email (no confirmation)
- ✅ Simplified: Cleaner, more reliable code

## Migration Plan (If You Have Existing Subscribers)

### Phase 1: Check if Supabase is Accessible
```bash
# Try to access your Supabase dashboard
# If paused/inaccessible, skip to Phase 4
```

### Phase 2: Export from Supabase (If Accessible)
```sql
-- Run in Supabase SQL Editor
SELECT email FROM newsletter_subscribers WHERE confirmed = true;
```
Export as CSV.

### Phase 3: Import to Resend

**Via CLI:**
```bash
# For each email in your CSV
resend contacts create --email user@example.com --first-name "Newsletter" --last-name "Subscriber"
```

**Via Script:**
```typescript
import { Resend } from 'resend';
import fs from 'fs';

const resend = new Resend(process.env.RESEND_API_KEY);
const emails = fs.readFileSync('subscribers.csv', 'utf-8').split('\n');

for (const email of emails) {
  if (email.includes('@')) {
    await resend.contacts.create({
      email: email.trim(),
      firstName: 'Newsletter',
      lastName: 'Subscriber',
    });
  }
}
```

### Phase 4: Start Fresh (If Supabase Inaccessible)
- No worries! Just deploy the new code
- Old subscribers won't get emails (Supabase is down anyway)
- New signups will work immediately
- You're building a fresh, healthy list

## Testing

### Test Newsletter Signup Flow

```bash
# 1. Visit your site
open https://creativejobhub.com

# 2. Fill out newsletter form with test email

# 3. Check email arrives (within 30 seconds)

# 4. Verify contact in Resend dashboard
open https://resend.com/contacts

# 5. Test unsubscribe link in email

# 6. Verify contact marked as unsubscribed in dashboard
```

### Test Broadcast Sending

```bash
# Create test broadcast
resend broadcasts create \
  --from "Creative Job Hub <noreply@crewopspro.com>" \
  --subject "Test Newsletter" \
  --html "<h1>Test</h1><p>This is a test broadcast.</p><p>{{unsubscribe_url}}</p>"

# Send to yourself first
resend broadcasts send <broadcast_id> --to "your-email@example.com"

# If looks good, send to all
resend broadcasts send <broadcast_id>
```

## Costs

**It's FREE!** 🎉

Resend Contacts is included in your Resend plan at no extra cost:
- Free tier: 3,000 emails/month
- Pro tier: 50,000 emails/month ($20/month)

You're only paying for email sends, not contact storage.

## Why This is Better Than Supabase/Google Sheets

| Feature | Supabase | Google Sheets | Resend Contacts |
|---------|----------|---------------|-----------------|
| **Setup Complexity** | High | Medium | ✅ Low |
| **Maintenance** | Database to manage | Webhook to maintain | ✅ None |
| **Unsubscribe** | Custom code needed | Custom code needed | ✅ Automatic |
| **Email Deliverability** | Separate concern | Separate concern | ✅ Built-in |
| **Cost** | $25/month (paused) | Free but limited | ✅ Free |
| **Audience IDs** | N/A | N/A | ✅ Not Needed! |
| **Integration** | 3rd party | 3rd party | ✅ Native |

## Troubleshooting

### "Contact already exists" Error

This is fine! The code handles it gracefully:
```typescript
if (contactError?.message?.includes('already exists')) {
  console.log('Contact already exists, continuing...');
  // Still sends welcome email
}
```

### Email Not Arriving

1. Check spam folder
2. Verify `RESEND_API_KEY` is set in Vercel
3. Check Resend dashboard for delivery logs: https://resend.com/emails
4. Verify domain is verified in Resend

### Contact Not Appearing in Dashboard

- Wait 30 seconds for sync
- Refresh the page
- Check API logs for errors

## Resources

- Resend Contacts Dashboard: https://resend.com/contacts
- Resend Broadcasts Dashboard: https://resend.com/broadcasts
- Resend API Docs: https://resend.com/docs/api-reference/contacts/create-contact
- Resend CLI Docs: https://resend.com/docs/cli/installation

## Summary

✅ **No audience IDs needed** - Resend simplified their API  
✅ **No extra environment variables** - Just `RESEND_API_KEY`  
✅ **Instant setup** - Push code and you're done  
✅ **Simpler code** - Fewer moving parts  
✅ **Better UX** - Instant subscription, no confirmation clicks  

You're all set! 🎉
