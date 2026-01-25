# Supabase Comments System Setup

## Step 1: Create the Comments Table

Go to your Supabase dashboard:
https://supabase.com/dashboard/project/ldcfmyyrhtddjujtaxsv/editor

Click on **SQL Editor** and run this SQL:

```sql
-- Create comments table
CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_slug TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index for faster queries
CREATE INDEX comments_post_slug_idx ON comments(post_slug);
CREATE INDEX comments_approved_idx ON comments(approved);

-- Enable Row Level Security
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved comments
CREATE POLICY "Anyone can read approved comments"
  ON comments FOR SELECT
  USING (approved = true);

-- Allow anyone to insert comments (they'll need approval)
CREATE POLICY "Anyone can submit comments"
  ON comments FOR INSERT
  WITH CHECK (true);
```

## Step 2: Add Environment Variables to Vercel

Go to your Vercel project dashboard:
https://vercel.com/thejdmckinney/creativejobhub-site-v2/settings/environment-variables

Add these two environment variables:
- `VITE_SUPABASE_URL` = `https://ldcfmyyrhtddjujtaxsv.supabase.co`
- `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkY2ZteXlyaHRkZGp1anRheHN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMDEyMjEsImV4cCI6MjA4NDg3NzIyMX0.KRK2GzjGEGpJHwJl34Jr3hoROofneR-CMHPmzCmlksc`

Then redeploy your site.

## Step 3: Managing Comments

### View All Comments
Go to: https://supabase.com/dashboard/project/ldcfmyyrhtddjujtaxsv/editor
- Click on **Table Editor**
- Select `comments` table
- You'll see all submitted comments

### Approve Comments
1. Find the comment you want to approve
2. Click on the row
3. Change `approved` from `false` to `true`
4. Click Save
5. The comment will now appear on your blog

### Delete Spam
1. Find the spam comment
2. Click the trash icon
3. Confirm deletion

## Features

✅ **Moderation** - All comments require approval before appearing
✅ **Clean UI** - Matches your site design perfectly
✅ **No third-party tracking** - Full control over your data
✅ **Easy management** - Approve/delete from Supabase dashboard
✅ **Email collection** - Collect emails (not displayed publicly)
✅ **Fast** - Comments load instantly from your database

## How It Works

1. Visitor fills out comment form (name, email, comment)
2. Comment is saved to Supabase with `approved = false`
3. You see notification and can review in Supabase dashboard
4. You approve the comment by setting `approved = true`
5. Comment appears on the blog post immediately

## Future Enhancements

You can add later:
- Email notifications when new comments arrive
- Reply functionality (threaded comments)
- Spam detection with Akismet
- Rich text formatting in comments
- User authentication (optional)
