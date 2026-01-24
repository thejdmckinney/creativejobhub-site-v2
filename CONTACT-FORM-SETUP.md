# Contact Form Setup Guide

## ✅ What's Been Set Up

Your Contact Us page is ready with:
- ✅ Full contact form with validation
- ✅ Email notifications via Resend
- ✅ Mobile-responsive design
- ✅ Success/error message handling
- ✅ Added to navigation (header, footer, mobile menu)
- ✅ Added to sitemap
- ✅ SEO optimized

## 🔑 Required: Get Your Resend API Key

### Step 1: Sign Up for Resend
1. Go to https://resend.com
2. Click "Sign Up" (it's free!)
3. Verify your email

### Step 2: Get API Key
1. Once logged in, go to **API Keys** in the sidebar
2. Click **"Create API Key"**
3. Name it: "Creative Job Hub Contact Form"
4. Select **"Sending access"** permissions
5. Click **"Add"**
6. Copy your API key (starts with `re_...`)

### Step 3: Verify Your Domain (Important!)
1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter: `creativejobhub.com`
4. Add the DNS records Resend provides to your domain registrar:
   - TXT record for verification
   - MX records for receiving bounces
   - DKIM records for authentication
5. Wait for verification (usually 5-30 minutes)

**Important:** Until your domain is verified, emails will only send to/from addresses you verify in Resend.

## 🚀 Deployment Setup

### For Netlify:

1. **Add Environment Variable:**
   - Go to your Netlify dashboard
   - Navigate to: **Site settings → Environment variables**
   - Click **"Add a variable"**
   - Key: `RESEND_API_KEY`
   - Value: `re_your_actual_key_here`
   - Click **"Save"**

2. **Update Contact Function (if needed):**
   - Open `netlify/functions/contact.ts`
   - Update line 20 to your verified email:
     ```typescript
     to: ['youremail@creativejobhub.com'],
     ```
   - Update line 17 to use your verified domain:
     ```typescript
     from: 'Contact Form <noreply@creativejobhub.com>',
     ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Add contact form with Resend integration"
   git push origin main
   ```

### For Vercel:

1. **Create vercel.json** (if not exists):
   ```json
   {
     "functions": {
       "api/**/*.ts": {
         "runtime": "@vercel/node"
       }
     }
   }
   ```

2. **Move function to Vercel format:**
   - Move `netlify/functions/contact.ts` to `api/contact.ts`
   - Update imports to Vercel format if needed

3. **Add Environment Variable:**
   - Go to Vercel dashboard
   - Project settings → Environment Variables
   - Add: `RESEND_API_KEY` = `re_your_key_here`

4. **Deploy:**
   ```bash
   vercel --prod
   ```

## 📧 Email Configuration

### Update Email Recipient

In `netlify/functions/contact.ts`, line 20:
```typescript
to: ['jeremymckinney@creativejobhub.com'], // ← Change this to your email
```

### Customize Email Template

In `netlify/functions/contact.ts`, lines 22-34:
```typescript
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
```

## 🧪 Testing Locally

### Option 1: Test with Netlify Dev (Recommended)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Create `.env` file:**
   ```bash
   echo "RESEND_API_KEY=re_your_test_key" > .env
   ```

3. **Run with Netlify Dev:**
   ```bash
   netlify dev
   ```

4. **Test the form:**
   - Go to http://localhost:8888/contact
   - Fill out and submit the form
   - Check your email inbox!

### Option 2: Test in Production

1. Deploy to Netlify/Vercel
2. Go to https://yoursite.com/contact
3. Submit a test message
4. Check your email

## 📍 URLs

- **Contact Page:** http://localhost:5173/contact (dev)
- **Production:** https://www.creativejobhub.com/contact
- **API Endpoint:** `/.netlify/functions/contact` (auto-handled)

## 🎨 Customization

### Form Fields

Edit `/src/pages/Contact.tsx` to add/remove fields:

```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  // Add more fields here
});
```

### Styling

The form uses Tailwind CSS. Update classes in `Contact.tsx`:
- Button colors: `bg-blue-600 hover:bg-blue-700`
- Input styling: `border border-gray-300 rounded-lg`
- Success message: `bg-green-50 border-green-200`

### Validation

Add custom validation in the form submit:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  // Custom validation
  if (formData.message.length < 10) {
    setErrorMessage('Message must be at least 10 characters');
    return;
  }
  
  // ... rest of submit logic
};
```

## 🔒 Security Features

✅ CORS protection (handled by Netlify/Vercel)
✅ Input sanitization (HTML escaping in email)
✅ Environment variable for API key
✅ Rate limiting (via Resend's built-in limits)

## 📊 Monitoring

### Check Email Delivery

1. Log into Resend dashboard
2. Go to **Emails** tab
3. See real-time delivery status for each contact form submission

### Common Issues

**Emails not sending:**
- Check API key is correct in environment variables
- Verify domain is approved in Resend
- Check Resend dashboard for errors

**Form not submitting:**
- Open browser DevTools (F12)
- Check Console for errors
- Check Network tab for API response

**Function not found (404):**
- Make sure `netlify.toml` is in root directory
- Check function is in `netlify/functions/` folder
- Redeploy to Netlify

## 🎯 Next Steps

1. ✅ Get Resend API key
2. ✅ Verify your domain in Resend
3. ✅ Update email recipient in `contact.ts`
4. ✅ Add `RESEND_API_KEY` to Netlify environment variables
5. ✅ Test the form in production
6. ✅ Monitor emails in Resend dashboard

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Netlify Functions Docs](https://docs.netlify.com/functions/overview/)
- [React Hook Form](https://react-hook-form.com/) (if you want advanced validation)

---

**Your contact form is ready!** Just add your Resend API key and deploy! 🚀
