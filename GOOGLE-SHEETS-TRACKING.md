# 📊 Google Sheets Signup Tracking Setup Guide

## What This Does
Every time someone fills out the signup form on creativejobhub.com, their info gets automatically logged to a Google Sheet with:
- Timestamp
- Email
- First Name
- Last Name
- Business Name
- Phone
- Source (Marketing Site Signup)

---

## Setup Steps (10 minutes)

### Step 1: Create Your Google Sheet (2 minutes)

1. Go to: https://sheets.google.com
2. Click **"Blank"** to create a new spreadsheet
3. Name it: **"Creative Job Hub - Signups"**
4. In **Row 1**, add these headers:
   - A1: `Timestamp`
   - B1: `Email`
   - C1: `First Name`
   - D1: `Last Name`
   - E1: `Business Name`
   - F1: `Phone`
   - G1: `Source`

---

### Step 2: Create Google Apps Script Webhook (5 minutes)

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. **Copy and paste this code:**

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Append a new row with the data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.firstName || '',
      data.lastName || '',
      data.businessName || '',
      data.phone || '',
      data.source || 'Unknown'
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data logged successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        businessName: 'Test Business',
        phone: '555-1234',
        source: 'Test'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click **"Save"** (💾 icon or Ctrl+S)
5. Name your project: **"Signup Logger"**

---

### Step 3: Deploy as Web App (2 minutes)

1. Click **"Deploy"** → **"New deployment"**
2. Click the gear icon (⚙️) next to "Select type"
3. Select **"Web app"**
4. Fill in the settings:
   - **Description:** "Signup form webhook"
   - **Execute as:** **Me** (your email)
   - **Who has access:** **Anyone** (this allows the webhook to work)
5. Click **"Deploy"**
6. Click **"Authorize access"**
7. Choose your Google account
8. Click **"Advanced"** → **"Go to Signup Logger (unsafe)"** (it's safe, it's your own script)
9. Click **"Allow"**
10. **Copy the Web App URL** - it looks like:
    ```
    https://script.google.com/macros/s/AKfycby.../exec
    ```

---

### Step 4: Add URL to Your Website (1 minute)

1. Open the file: `/Users/jeremymckinney/Documents/GitHub/creativejobhub-site-v2/src/pages/Signup.tsx`
2. Find this line (around line 72):
   ```typescript
   const googleSheetsUrl = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your actual URL:
   ```typescript
   const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycby.../exec';
   ```
4. Save the file

---

### Step 5: Push to Production (2 minutes)

```bash
cd /Users/jeremymckinney/Documents/GitHub/creativejobhub-site-v2
git add .
git commit -m "Add Google Sheets tracking for signups"
git push origin main
```

Vercel will auto-deploy (takes 2-3 minutes).

---

## ✅ Test It!

1. Go to: https://creativejobhub.com/signup
2. Fill out the form with test data
3. Click "Start Your Free Trial"
4. Check your Google Sheet - you should see a new row!

---

## 📊 What You'll See in the Sheet

Every signup will create a new row like this:

| Timestamp | Email | First Name | Last Name | Business Name | Phone | Source |
|-----------|-------|------------|-----------|---------------|-------|--------|
| 2026-01-08T03:45:23.123Z | john@example.com | John | Doe | Doe HVAC | 555-0123 | Marketing Site Signup |

---

## 🎨 Optional: Make It Pretty

### Add Conditional Formatting:
1. Select the entire sheet (Ctrl+A)
2. **Format** → **Conditional formatting**
3. **Format rules:**
   - Format cells if: "Date is today"
   - Background color: Light green
4. This highlights new signups!

### Add a Filter:
1. Select Row 1 (the header row)
2. Click **Data** → **Create a filter**
3. Now you can filter by date, email, business name, etc.

### Add Auto-Resize:
1. **Format** → **Column width** → **Fit to data**

---

## 🔒 Privacy & Security

**Is this secure?**
- ✅ The webhook URL is public but only accepts POST requests
- ✅ Only you can see the Google Sheet (unless you share it)
- ✅ Data is encrypted in transit (HTTPS)
- ✅ No API keys needed

**Who can see the data?**
- Only people you explicitly share the Google Sheet with
- The Apps Script runs as you, so it has the same permissions as you

---

## 🛠️ Troubleshooting

### Data not showing up?
1. Check the Apps Script execution logs:
   - Go to Apps Script editor
   - Click **Executions** (left sidebar)
   - Look for errors
2. Make sure the sheet has the correct headers in Row 1
3. Check browser console for errors (F12)

### "Authorization required" error?
- Redeploy the Apps Script web app
- Make sure "Who has access" is set to **Anyone**

### Wrong data format?
- Check that your Signup.tsx code matches the Apps Script column order
- Headers: Timestamp, Email, First Name, Last Name, Business Name, Phone, Source

---

## 📈 Advanced: Add More Tracking

Want to track more things? Update both:

**1. Apps Script (add to the appendRow array):**
```javascript
sheet.appendRow([
  data.timestamp,
  data.email,
  data.firstName,
  data.lastName,
  data.businessName,
  data.phone,
  data.source,
  data.referrer || document.referrer,  // NEW: Where they came from
  data.utmSource || '',                  // NEW: UTM parameters
]);
```

**2. Signup.tsx (add to the fetch body):**
```typescript
body: JSON.stringify({
  // ... existing fields ...
  referrer: document.referrer,
  utmSource: new URLSearchParams(window.location.search).get('utm_source')
})
```

**3. Google Sheet (add new column headers):**
- H1: `Referrer`
- I1: `UTM Source`

---

## 🎉 You're Done!

Now every signup is automatically logged to your Google Sheet in real-time!

**Benefits:**
- ✅ No Google Analytics setup needed
- ✅ Raw data you can export/analyze
- ✅ Works even if users have ad blockers
- ✅ Can share sheet with team members
- ✅ Can create charts/dashboards in Sheets
- ✅ Free forever (no API limits for personal use)

---

## 💡 Pro Tips

1. **Create a dashboard sheet:**
   - Add a second sheet called "Dashboard"
   - Use `=COUNTIF()` to count daily signups
   - Add sparkline charts

2. **Set up email notifications:**
   - Tools → Notification rules
   - Get email when sheet is edited
   - You'll know immediately when someone signs up!

3. **Export to other tools:**
   - Use Zapier to send data to Slack, email, CRM, etc.
   - Or use Google Sheets built-in integration with Google Data Studio

4. **Archive old data:**
   - Create a monthly archive sheet
   - Move old rows to keep main sheet clean
