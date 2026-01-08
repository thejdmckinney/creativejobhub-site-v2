# Creative Job Hub - Marketing Site to App Integration Guide

## ⚠️ UPDATED APPROACH (January 2026)

**Lovable AI recommends payment-first signup for reliability:**

### Quick Overview:
1. ✅ **Marketing site** creates Stripe Checkout session (NOT direct account)
2. ✅ **Stripe** handles payment/trial setup
3. ✅ **Success redirect** uses path param: `/activate/{CHECKOUT_SESSION_ID}`
4. ✅ **App backend** verifies session and creates account
5. ✅ **User** receives "set password" email
6. ✅ **User** logs in via `/auth` (normal login)

**Why this is better:**
- No orphaned accounts from incomplete signups
- Payment intent captured before account creation
- Idempotent activation (safe to retry)
- Better conversion tracking
- Cleaner URLs with path params

---

## Overview
This guide explains how to integrate the marketing site signup with your Creative Job Hub app and Stripe billing using the recommended payment-first approach.

---

## Part 1: Recommended Marketing Site Signup Flow (NEW APPROACH 🔄)

### Why This Approach Is Better:
Lovable AI recommends payment-first signup because it's more reliable and prevents incomplete signups. User pays first via Stripe, then account is created on success.

### New Flow Overview:
```
1. Marketing site collects user info (name, email, business)
2. Creates Stripe Checkout session with trial
3. User completes payment (trial = $0, card saved for future)
4. Stripe redirects to: https://app.creativejobhub.com/activate/<stripe_session_id>
5. App verifies session and creates account
6. User receives "set password" email
7. App redirects to /auth for login
```

---

### Step 1: Marketing Site - Create Stripe Checkout Session

**Update Signup.tsx to create Stripe session instead of direct account creation:**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError('');

  try {
    // Call backend to create Stripe Checkout session
    const response = await fetch('YOUR_BACKEND_URL/api/create-trial-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        businessName: formData.businessName,
        phone: formData.phone,
      })
    });

    const { url, error } = await response.json();

    if (error) {
      setError(error);
      setIsSubmitting(false);
      return;
    }

    // Redirect to Stripe Checkout
    window.location.href = url;
  } catch (err) {
    setError('Something went wrong. Please try again.');
    setIsSubmitting(false);
  }
};
```

---

### Step 2: Backend - Create Stripe Checkout Endpoint

**Prompt for Lovable AI:**

```
Create a new backend endpoint: POST /api/create-trial-checkout

This endpoint should:

1. Accept request body:
{
  "email": "string",
  "firstName": "string", 
  "lastName": "string",
  "businessName": "string",
  "phone": "string"
}

2. Check if email already exists in your users table
   - If exists: return error "Email already registered"

3. Create Stripe Checkout Session:
```typescript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const session = await stripe.checkout.sessions.create({
  mode: 'subscription',
  customer_email: email,
  line_items: [{
    price: 'price_1Sm1a261oqunaxa7Qdy6bb7c', // Your TEST MODE price ID
    quantity: 1,
  }],
  subscription_data: {
    trial_period_days: 14,
  },
  metadata: {
    firstName: firstName,
    lastName: lastName,
    businessName: businessName,
    phone: phone,
  },
  success_url: 'https://app.creativejobhub.com/activate/{CHECKOUT_SESSION_ID}',
  cancel_url: 'https://creativejobhub.com/signup?cancelled=true',
});

return { url: session.url };
```

4. Return the session URL to redirect user to Stripe Checkout
```

**IMPORTANT NOTES:**
- ✅ Trial period is 14 days (no payment required during trial)
- ✅ Card is saved for subscription after trial
- ✅ Metadata stores user info for account creation later
- ✅ Use path param {CHECKOUT_SESSION_ID} not query param

---

### Step 3: App - Create Activation Route

**Prompt for Lovable AI:**

```
Create a new route in your app: /activate/:sessionId

This route should:

1. Extract sessionId from URL path params (not query params)

2. Call a backend function to verify and activate:
```typescript
const response = await fetch('/api/activate-trial-account', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ sessionId })
});

const result = await response.json();
```

3. Show loading state while processing

4. On success:
   - Show message: "Account created! Check your email to set your password."
   - Redirect to /auth after 3 seconds

5. On error:
   - Show error message
   - Provide link back to marketing site signup
```

---

### Step 4: Backend - Activate Trial Account

**Prompt for Lovable AI:**

```
Create backend endpoint: POST /api/activate-trial-account

This endpoint should:

1. Accept: { "sessionId": "cs_test_..." }

2. Verify Stripe Checkout Session:
```typescript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const session = await stripe.checkout.sessions.retrieve(sessionId);

if (session.payment_status !== 'paid' && session.payment_status !== 'unpaid') {
  return { error: 'Invalid session' };
}
```

3. Extract user info from session.metadata:
   - firstName
   - lastName  
   - businessName
   - phone
   - email (from session.customer_email)

4. Check if account already exists (idempotency check)
   - If exists: return { success: true, exists: true }

5. Create user account:
   - Generate unique user ID
   - Save to users table with status='trialing'
   - Set trial_ends_at to 14 days from now
   - Save Stripe customer_id and subscription_id

6. Create business profile with businessName

7. Send "Set Password" email using Supabase Auth or magic link

8. Return { success: true }
```

**IMPORTANT NOTES:**
- ✅ This endpoint is idempotent (safe to call multiple times)
- ✅ Account creation happens AFTER payment success
- ✅ User gets email to set password
- ✅ No token in URL - cleaner and more secure

---

### Old Implementation (For Reference Only)

**Previous approach had reliability issues with direct account creation:**

<details>
<summary>Click to see old implementation</summary>

**ENDPOINT:** `POST https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/create-trial-account`

**REQUEST:**
```javascript
fetch('https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/create-trial-account', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: formData.email,
    firstName: formData.firstName,
    lastName: formData.lastName,
    businessName: formData.businessName,
    phone: formData.phone
  })
})
```

**Issues with old approach:**
- ❌ Account created before payment intent
- ❌ Orphaned accounts if user doesn't complete setup
- ❌ Query params in URL can be unreliable
- ❌ Harder to track conversion from signup to activation

</details>

---

## Part 2: App Authentication & Onboarding

### Recommended Approach (After Stripe Activation)

### User Authentication Flow

**After account activation, the user flow is:**

1. User receives "Set Password" email with magic link or password reset link
2. User clicks link and sets their password
3. User is redirected to /auth (standard login page)
4. User logs in with email + new password
5. App checks if user needs onboarding
6. If first login, redirect to /onboarding

### Prompt for Lovable AI - Onboarding Page:

```
Create an onboarding page at /onboarding that:

1. Shows for first-time users after login
2. Display onboarding wizard with these steps:
   - Welcome screen explaining the 14-day trial
   - Business profile setup (address, service areas, industry)
   - Add first team member (optional, can skip)
   - Quick tour of key features
   - CTA to "Start Using Creative Job Hub"

3. After completion:
   - Mark user as onboarded in database
   - Redirect to /dashboard

4. Allow skipping steps (but save progress)

5. Mobile-responsive design with progress indicator

ONBOARDING UI:
- Show progress bar (Step 1 of 4, etc.)
- "Skip" button for optional steps
- "Back" and "Next" navigation
- Save progress after each step
- Clean, welcoming design
```

---

## Part 3: Trial Expiration & Upgrade Flow

### Prompt for Lovable AI:

```
Implement trial expiration and upgrade flow:

1. CREATE BACKGROUND JOB:
   - Check daily for trials expiring today
   - Send email 3 days before trial ends
   - Send email on day trial ends
   - Update user status from "trialing" to "expired" when trial ends

2. CREATE UPGRADE BANNER:
   - Show banner in app when trial_ends_at is < 7 days
   - Show blocking modal when trial has expired
   - Both should have "Upgrade Now" button

3. CREATE STRIPE CHECKOUT INTEGRATION:
   - Install stripe npm package
   - Create POST /api/create-checkout-session endpoint:
     * Accept userId
     * Create Stripe checkout session with:
       - customer_email: user.email
       - line_items: [{ price: "price_1Sm1a261oqunaxa7Qdy6bb7c", quantity: 1 }]
       - mode: "subscription"
       - success_url: "https://app.creativejobhub.com/success?session_id={CHECKOUT_SESSION_ID}"
       - cancel_url: "https://app.creativejobhub.com/dashboard"
     * Return the checkout session URL

4. CREATE UPGRADE BUTTON HANDLER:
   ```typescript
   const handleUpgrade = async () => {
     const response = await fetch('/api/create-checkout-session', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ userId: currentUser.id }),
     });
     const { url } = await response.json();
     window.location.href = url; // Redirect to Stripe Checkout
   };
   ```

5. CREATE SUCCESS PAGE (/success):
   - Verify the Stripe session_id from query params
   - Call Stripe API to confirm payment was successful
   - Update user status to "active"
   - Update subscription_id in database
   - Show success message: "Welcome to Creative Job Hub! Your subscription is now active."
   - Redirect to dashboard after 3 seconds

6. CREATE STRIPE WEBHOOK HANDLER:
   - Endpoint: POST /api/webhooks/stripe
   - Handle these events:
     * customer.subscription.created - Set user to "active"
     * customer.subscription.updated - Update subscription status
     * customer.subscription.deleted - Set user to "cancelled"
     * invoice.payment_failed - Send email, set status to "past_due"
   - Verify webhook signature using Stripe webhook secret
```

---

## Part 4: What You Need From Stripe

### Stripe Configuration Checklist:

1. **API Keys** (Get from Stripe Dashboard → Developers → API keys):
   - ✅ Publishable Key (starts with `pk_test_` or `pk_live_`)
   - ✅ Secret Key (starts with `sk_test_` or `sk_live_`)
   
2. **Price ID** (Already have this):
   - ✅ TEST MODE: `price_1Sm1a261oqunaxa7Qdy6bb7c`
   - ✅ LIVE MODE: `price_1Sm1p16P3cMj5sLG0n5ShqUR`

3. **Webhook Secret** (Stripe Dashboard → Developers → Webhooks):
   - Create webhook endpoint pointing to: `https://app.creativejobhub.com/api/webhooks/stripe`
   - Select these events to listen for:
     * `customer.subscription.created`
     * `customer.subscription.updated`
     * `customer.subscription.deleted`
     * `invoice.payment_failed`
     * `invoice.payment_succeeded`
   - Copy the webhook signing secret (starts with `whsec_`)

4. **Test Mode vs Live Mode**:
   - Start in Test Mode for development
   - Use test credit card: `4242 4242 4242 4242`
   - Switch to Live Mode when ready to launch

---

## Part 5: Environment Variables Needed

Add these to your app's `.env` file:

```bash
# Stripe
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
STRIPE_PRICE_ID=price_1Sm1a261oqunaxa7Qdy6bb7c  # TEST MODE price ID

# App URLs
APP_URL=https://app.creativejobhub.com
MARKETING_URL=https://creativejobhub.com

# JWT (for auth tokens)
JWT_SECRET=your_random_secret_here_min_32_chars

# Email (for welcome emails)
EMAIL_FROM=jeremy@creativejobhub.com
RESEND_API_KEY=your_resend_api_key
```

---

## Part 6: Testing the Complete Flow

### 🔧 A. Set Up Stripe CLI for Local Webhook Testing

**Step 1: Install Stripe CLI** (Already done! ✅)
```bash
brew install stripe/stripe-cli/stripe
```

**Step 2: Login to Stripe**
```bash
stripe login
```
This will open your browser and ask you to allow CLI access to your Stripe account.

**Step 3: Forward Webhooks to Your Local App**

For **Lovable App** (if running locally on port 3000):
```bash
# Terminal 1: Start your Lovable app
cd ~/path/to/job-flow-hub-71
npm run dev  # or your local dev command

# Terminal 2: Forward Stripe webhooks
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

For **Testing with Production App** (Supabase edge function):
```bash
# Forward to your Supabase function URL
stripe listen --forward-to https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/stripe-webhook
```

**What This Does:**
- ✅ Captures real Stripe webhook events
- ✅ Forwards them to your local/remote server
- ✅ Shows you webhook secret for testing: `whsec_...`
- ✅ Displays all webhook events in real-time

**Step 4: Test Specific Webhook Events**

Open a new terminal and trigger test events:
```bash
# Test subscription created
stripe trigger customer.subscription.created

# Test subscription updated
stripe trigger customer.subscription.updated

# Test payment failed
stripe trigger invoice.payment_failed

# Test payment succeeded
stripe trigger invoice.payment_succeeded

# Test subscription cancelled
stripe trigger customer.subscription.deleted
```

---

### 🧪 B. Manual End-to-End Testing

**Test 1: Complete Signup Flow**

1. **Start Local Marketing Site**:
   ```bash
   cd ~/Documents/GitHub/creativejobhub-site-v2
   npm run dev
   ```
   Open: http://localhost:5173/signup

2. **Fill Out Signup Form**:
   ```
   Email: test+1@example.com
   First Name: Test
   Last Name: User
   Business Name: Test Business Inc
   Phone: 555-0123
   ```

3. **Submit → Should Redirect to Stripe Checkout**

4. **Complete Payment with Test Card**:
   ```
   Card: 4242 4242 4242 4242
   Expiry: 12/28
   CVC: 123
   ZIP: 12345
   ```

5. **Should Redirect to**: `https://app.creativejobhub.com/activate/cs_test_...`

6. **Verify Account Creation**:
   - Loading screen appears
   - Success message: "Account created! Check your email..."
   - Email sent to test+1@example.com

7. **Check Stripe Dashboard**:
   - Go to: https://dashboard.stripe.com/test/customers
   - Verify customer created with email
   - Check subscription has 14-day trial

**Test 2: Duplicate Email Prevention**

1. Try to sign up again with `test+1@example.com`
2. Should see error: "An account with this email already exists"

**Test 3: Cancelled Checkout**

1. Start signup flow
2. Click "Back" button on Stripe Checkout
3. Should return to: `https://creativejobhub.com/signup?cancelled=true`

**Test 4: Invalid Session ID**

1. Try to access: `https://app.creativejobhub.com/activate/cs_test_invalid123`
2. Should show error message with helpful text

**Test 5: Set Password & Login**

1. Check email inbox for test+1@example.com
2. Click "Set Password" link
3. Create password
4. Should redirect to app
5. Login with email + password
6. Should see dashboard/onboarding

---

### 🤖 C. Automated Test Script

**What the Test Script Does:**
- ✅ Automates the entire signup flow
- ✅ Creates Stripe checkout sessions programmatically
- ✅ Verifies database state after each step
- ✅ Tests error conditions (duplicate email, invalid session, etc.)
- ✅ Generates test report with pass/fail for each scenario
- ✅ Saves time - runs all tests in 30 seconds instead of 10+ minutes manual testing

**Run the Test Script:**
```bash
# Make sure you're in the marketing site directory
cd ~/Documents/GitHub/creativejobhub-site-v2

# Run the automated tests
./test-signup-flow.sh
```

**What Gets Tested:**
1. ✅ Create Stripe Checkout Session
2. ✅ Duplicate Email Prevention
3. ✅ Invalid Session ID Handling
4. ✅ Missing Required Fields Validation
5. ✅ Stripe Price ID Verification
6. ✅ API Response Time (< 5 seconds)
7. ✅ Webhook Endpoint Availability

**Sample Output:**
```
========================================
🚀 Starting Creative Job Hub Signup Flow Tests
========================================

ℹ️  Test Email: test+1704825600@example.com
ℹ️  Backend URL: https://runxlgbvzgsyximttdjv.supabase.co/functions/v1

🧪 TEST: Creating Stripe Checkout Session
✅ PASS: Checkout session created successfully
ℹ️  Checkout URL: https://checkout.stripe.com/c/pay/cs_test_...
ℹ️  Session ID: cs_test_abc123...

🧪 TEST: Testing Duplicate Email Prevention
✅ PASS: Duplicate email correctly rejected

🧪 TEST: Testing Invalid Session ID Handling
✅ PASS: Invalid session ID correctly rejected

========================================
📊 Test Summary
========================================
✅ Passed: 7/7

Next Steps:
1. Go to Stripe Dashboard: https://dashboard.stripe.com/test/customers
2. Verify test customer was created
3. Complete manual payment flow with test card: 4242 4242 4242 4242
```

---

### 📊 D. Test Data Cleanup

After testing, clean up test data:

**In Stripe Dashboard:**
1. Go to: https://dashboard.stripe.com/test/data
2. Click "Delete all test data"
3. Confirm deletion

**In Your Database (Supabase):**
```sql
-- Delete test accounts
DELETE FROM organizations WHERE name LIKE '%Test%';
DELETE FROM profiles WHERE email LIKE 'test+%@example.com';

-- Or use Supabase Dashboard:
-- Go to Table Editor → organizations → Filter → Delete
```

---

### 🔍 E. Monitoring & Debugging

**View Stripe Logs:**
1. Go to: https://dashboard.stripe.com/test/logs
2. See all API requests in real-time
3. Click any request to see full details
4. Filter by status code, endpoint, etc.

**View Supabase Function Logs:**
1. Go to Supabase Dashboard
2. Edge Functions → Select function
3. View logs tab
4. See console.log output and errors

**Common Issues & Solutions:**

| Issue | Solution |
|-------|----------|
| "Invalid session" error | Session expired or already used - create new one |
| "Email already exists" | User already signed up - use different email |
| Checkout session not creating | Check Stripe API keys are correct in backend |
| Webhook not receiving events | Verify Stripe CLI is running with correct URL |
| Trial not showing in Stripe | Check `subscription_data.trial_period_days: 14` |
| Account not created after payment | Check activate-trial-account logs in Supabase |

---

---

## Part 7: Marketing Site Integration (COMPLETED ✅)

The marketing site (`creativejobhub.com`) is now fully integrated with the backend:

**Endpoint Called:**
```
POST https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/create-trial-account
```

**On Success (New User):**
```
Redirects to: https://app.creativejobhub.com/onboarding?success=true&email=${email}&firstName=${firstName}
```

**On Success (Existing User):**
```
Shows message: "Account exists. Check your email to reset password."
Then redirects to: https://app.creativejobhub.com/auth
```

**What Happens:**
1. User fills out signup form on creativejobhub.com/signup
2. Marketing site POSTs to Lovable backend
3. Backend creates user account and sends welcome email with password setup link
4. User is redirected to onboarding page in the app
5. User clicks email link to set password
6. User can now log in and use the app

---

## Part 8: Database Schema Recommendation

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  status VARCHAR(20) DEFAULT 'trialing', -- trialing, active, past_due, cancelled, expired
  trial_ends_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Businesses table
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Auth tokens table  
CREATE TABLE auth_tokens (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  token TEXT NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Summary

**What's Done:**
✅ Marketing site signup form UI (COMPLETED)
✅ Integration guide updated with recommended flow (COMPLETED)

**What Needs Implementation (Lovable App):**
🔄 Create `/api/create-trial-checkout` endpoint (Stripe session creation)
🔄 Create `/activate/:sessionId` route (app side)
🔄 Create `/api/activate-trial-account` endpoint (account creation)
🔄 Send "Set Password" email after activation
� /onboarding page for first-time users
� Full app functionality after login

**What's Still Needed (Later):**
1. Upgrade flow with Stripe Checkout (see Part 3)
2. /success page for post-payment (see Part 3)
3. Stripe webhook handler (see Part 3)
4. Trial expiration checking (see Part 3)

**New Integration Flow (Recommended):**
```
creativejobhub.com/signup (collects info)
    ↓
POST /api/create-trial-checkout (creates Stripe session)
    ↓
Stripe Checkout (user enters payment, $0 trial)
    ↓
app.creativejobhub.com/activate/{sessionId} (verify & create account)
    ↓
POST /api/activate-trial-account (creates user + business)
    ↓
User receives "Set Password" email
    ↓
User sets password → redirected to /auth
    ↓
User logs in → sees /onboarding wizard
    ↓
User completes onboarding → /dashboard
    ↓
14-day trial starts → After trial: Upgrade prompt
```

**Key Differences from Old Flow:**
- ✅ Payment intent captured first (more reliable)
- ✅ Account created only after successful Stripe session
- ✅ Path params instead of query params (cleaner URLs)
- ✅ No orphaned accounts from incomplete signups
- ✅ Better conversion tracking
- ✅ Idempotent activation endpoint

Use the Lovable AI prompts in Parts 2-3 to complete the remaining pieces!
