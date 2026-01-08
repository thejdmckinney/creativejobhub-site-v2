# 🧪 Stripe Testing Quick Reference

## Stripe CLI Commands

### Setup (One-time)
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login
```

### Forward Webhooks to Local Dev
```bash
# Terminal 1: Run your app
npm run dev

# Terminal 2: Forward webhooks
stripe listen --forward-to localhost:3000/api/webhooks/stripe
# Or for Supabase edge function:
stripe listen --forward-to https://runxlgbvzgsyximttdjv.supabase.co/functions/v1/stripe-webhook
```

### Trigger Test Events
```bash
# Subscription created
stripe trigger customer.subscription.created

# Subscription updated  
stripe trigger customer.subscription.updated

# Payment failed
stripe trigger invoice.payment_failed

# Payment succeeded
stripe trigger invoice.payment_succeeded

# Subscription cancelled
stripe trigger customer.subscription.deleted

# Checkout completed
stripe trigger checkout.session.completed
```

### Retrieve Data
```bash
# Get customer info
stripe customers retrieve cus_...

# Get subscription info
stripe subscriptions retrieve sub_...

# Get checkout session
stripe checkout sessions retrieve cs_test_...

# Get price info
stripe prices retrieve price_1Sm1p16P3cMj5sLG0n5ShqUR
```

---

## Test Credit Cards

| Card Number | Purpose | Result |
|-------------|---------|--------|
| `4242 4242 4242 4242` | Success | Payment succeeds |
| `4000 0000 0000 0002` | Decline | Card declined |
| `4000 0025 0000 3155` | 3D Secure | Requires authentication |
| `4000 0000 0000 9995` | Insufficient funds | Declined - insufficient funds |
| `4000 0000 0000 0069` | Expired | Card expired |

**All test cards:**
- Expiry: Any future date (e.g., `12/28`)
- CVC: Any 3 digits (e.g., `123`)
- ZIP: Any 5 digits (e.g., `12345`)

---

## Automated Test Script

```bash
# Run all automated tests
./test-signup-flow.sh
```

**Tests Run:**
- ✅ Create checkout session
- ✅ Duplicate email prevention
- ✅ Invalid session handling
- ✅ Missing fields validation
- ✅ Price ID verification
- ✅ API response time
- ✅ Webhook availability

---

## Manual Testing Flow

### 1. Start Marketing Site
```bash
cd ~/Documents/GitHub/creativejobhub-site-v2
npm run dev
# Open: http://localhost:5173/signup
```

### 2. Fill Form & Submit
- Email: `test+1@example.com`
- Name: `Test User`
- Business: `Test Business Inc`
- Phone: `555-0123`

### 3. Complete Stripe Checkout
- Card: `4242 4242 4242 4242`
- Expiry: `12/28`
- CVC: `123`

### 4. Verify Activation
- Should redirect to: `https://app.creativejobhub.com/activate/cs_test_...`
- Check email for "Set Password" link

### 5. Verify in Stripe
- Go to: https://dashboard.stripe.com/test/customers
- Verify customer exists with trial subscription

---

## Useful Links

- **Stripe Test Dashboard**: https://dashboard.stripe.com/test
- **API Logs**: https://dashboard.stripe.com/test/logs
- **Webhooks**: https://dashboard.stripe.com/test/webhooks
- **Test Data Cleanup**: https://dashboard.stripe.com/test/data
- **Supabase Functions**: https://supabase.com/dashboard/project/runxlgbvzgsyximttdjv/functions

---

## Environment Variables Needed

```bash
# In your .env file
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...  # From `stripe listen` output
STRIPE_PRICE_ID=price_1Sm1p16P3cMj5sLG0n5ShqUR
```

---

## Common Commands

```bash
# Check Stripe CLI version
stripe version

# View help
stripe help

# List recent events
stripe events list --limit 10

# Watch events in real-time
stripe listen --print-json

# Test specific webhook event
stripe trigger checkout.session.completed

# Forward webhooks with logging
stripe listen --forward-to localhost:3000/api/webhooks/stripe --log-level debug
```

---

## Debugging Tips

1. **View live webhook events:**
   ```bash
   stripe listen --print-json
   ```

2. **Check if price exists:**
   ```bash
   stripe prices retrieve price_1Sm1p16P3cMj5sLG0n5ShqUR
   ```

3. **View API request details:**
   - Go to Dashboard → Logs
   - Click on any request to see full JSON

4. **Test webhook locally:**
   ```bash
   # Start forwarding
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   
   # In another terminal, trigger event
   stripe trigger customer.subscription.created
   ```

5. **Verify webhook secret:**
   - Copy from `stripe listen` output
   - Add to your `.env` file as `STRIPE_WEBHOOK_SECRET`
