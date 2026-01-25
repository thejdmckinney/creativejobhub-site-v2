#!/bin/bash

# Example script to send a newsletter
# Usage: ./send-newsletter.sh

# Set your admin key (get this from your environment variables)
ADMIN_KEY="your-newsletter-admin-key-here"

# Newsletter content
SUBJECT="New Blog Post: How to Streamline Your Field Service Business"

CONTENT='
<div style="margin-bottom: 30px;">
  <h2 style="color: #1f2937; font-size: 24px; margin-bottom: 16px;">
    Hey there! 👋
  </h2>
  <p style="font-size: 16px; color: #374151; margin-bottom: 16px;">
    We just published a new blog post that we think you will love!
  </p>
</div>

<div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 30px;">
  <h3 style="color: #2563eb; font-size: 20px; margin-bottom: 12px;">
    📝 How to Streamline Your Field Service Business
  </h3>
  <p style="font-size: 16px; color: #6b7280; margin-bottom: 20px;">
    Learn the top 5 strategies successful contractors use to save time, reduce costs, and grow their business.
  </p>
  <a href="https://creativejobhub.com/blog/streamline-field-service" 
     style="display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600;">
    Read the Full Article →
  </a>
</div>

<div style="background: #f0f9ff; border-left: 4px solid #2563eb; padding: 16px; margin-bottom: 30px;">
  <p style="font-size: 14px; color: #1e3a8a; margin: 0;">
    <strong>💡 Quick Tip:</strong> Did you know that automating your scheduling can save you up to 10 hours per week? Check out our blog for more tips!
  </p>
</div>

<p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
  Thanks for being part of our community!
</p>

<p style="font-size: 16px; color: #374151;">
  Best,<br>
  The Creative Job Hub Team
</p>
'

# Send the newsletter
curl -X POST https://creativejobhub.com/api/newsletter/send \
  -H "Content-Type: application/json" \
  -d "{
    \"adminKey\": \"$ADMIN_KEY\",
    \"subject\": \"$SUBJECT\",
    \"content\": $(echo "$CONTENT" | jq -Rs .)
  }"

echo ""
echo "Newsletter sent! Check your Slack for confirmation."
