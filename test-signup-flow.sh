#!/bin/bash

# 🧪 Creative Job Hub - Signup Flow Test Script
# This script automates testing of the complete Stripe signup flow

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
BACKEND_URL="https://runxlgbvzgsyximttdjv.supabase.co/functions/v1"
TEST_EMAIL="test+$(date +%s)@example.com"  # Unique email for each run

# Test Results
PASSED=0
FAILED=0

# Helper Functions
print_header() {
    echo -e "\n${BLUE}========================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}========================================${NC}\n"
}

print_test() {
    echo -e "${YELLOW}🧪 TEST: $1${NC}"
}

print_pass() {
    echo -e "${GREEN}✅ PASS: $1${NC}"
    ((PASSED++))
}

print_fail() {
    echo -e "${RED}❌ FAIL: $1${NC}"
    ((FAILED++))
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

# Test 1: Create Stripe Checkout Session
test_create_checkout() {
    print_test "Creating Stripe Checkout Session"
    
    RESPONSE=$(curl -s -X POST "${BACKEND_URL}/create-trial-checkout" \
        -H "Content-Type: application/json" \
        -d "{
            \"email\": \"${TEST_EMAIL}\",
            \"firstName\": \"Test\",
            \"lastName\": \"User\",
            \"businessName\": \"Test Business Inc\",
            \"phone\": \"555-0123\"
        }")
    
    if echo "$RESPONSE" | grep -q "url"; then
        CHECKOUT_URL=$(echo "$RESPONSE" | grep -o '"url":"[^"]*"' | cut -d'"' -f4)
        print_pass "Checkout session created successfully"
        print_info "Checkout URL: ${CHECKOUT_URL}"
        
        # Extract session ID from URL
        SESSION_ID=$(echo "$CHECKOUT_URL" | grep -o 'cs_test_[^/]*')
        echo "$SESSION_ID" > /tmp/stripe_session_id.txt
        print_info "Session ID: ${SESSION_ID}"
    else
        print_fail "Failed to create checkout session"
        echo "Response: $RESPONSE"
    fi
}

# Test 2: Duplicate Email Prevention
test_duplicate_email() {
    print_test "Testing Duplicate Email Prevention"
    
    # First signup
    curl -s -X POST "${BACKEND_URL}/create-trial-checkout" \
        -H "Content-Type: application/json" \
        -d "{
            \"email\": \"duplicate@example.com\",
            \"firstName\": \"Duplicate\",
            \"lastName\": \"User\",
            \"businessName\": \"Duplicate Business\",
            \"phone\": \"555-0000\"
        }" > /dev/null
    
    # Try duplicate
    RESPONSE=$(curl -s -X POST "${BACKEND_URL}/create-trial-checkout" \
        -H "Content-Type: application/json" \
        -d "{
            \"email\": \"duplicate@example.com\",
            \"firstName\": \"Duplicate\",
            \"lastName\": \"User\",
            \"businessName\": \"Duplicate Business\",
            \"phone\": \"555-0000\"
        }")
    
    if echo "$RESPONSE" | grep -qi "already exists\|already registered"; then
        print_pass "Duplicate email correctly rejected"
    else
        print_fail "Duplicate email was not rejected"
        echo "Response: $RESPONSE"
    fi
}

# Test 3: Invalid Session Activation
test_invalid_session() {
    print_test "Testing Invalid Session ID Handling"
    
    RESPONSE=$(curl -s -X POST "${BACKEND_URL}/activate-trial-account" \
        -H "Content-Type: application/json" \
        -d "{\"sessionId\": \"cs_test_invalid_session_id_123\"}")
    
    if echo "$RESPONSE" | grep -qi "error\|invalid\|failed"; then
        print_pass "Invalid session ID correctly rejected"
    else
        print_fail "Invalid session ID was not handled properly"
        echo "Response: $RESPONSE"
    fi
}

# Test 4: Missing Required Fields
test_missing_fields() {
    print_test "Testing Missing Required Fields"
    
    # Missing email
    RESPONSE=$(curl -s -X POST "${BACKEND_URL}/create-trial-checkout" \
        -H "Content-Type: application/json" \
        -d "{
            \"firstName\": \"Test\",
            \"lastName\": \"User\",
            \"businessName\": \"Test Business\"
        }")
    
    if echo "$RESPONSE" | grep -qi "error\|required\|email"; then
        print_pass "Missing email correctly rejected"
    else
        print_fail "Missing email was not caught"
        echo "Response: $RESPONSE"
    fi
}

# Test 5: Stripe Price ID Verification
test_price_id() {
    print_test "Verifying Correct Stripe Price ID"
    
    # This test requires Stripe CLI access
    if command -v stripe &> /dev/null; then
        PRICE_INFO=$(stripe prices retrieve price_1Sm1a261oqunaxa7Qdy6bb7c 2>&1)
        
        if echo "$PRICE_INFO" | grep -q "id.*price_1Sm1a261oqunaxa7Qdy6bb7c"; then
            print_pass "Price ID exists in Stripe"
            
            # Check if it's $89/month
            if echo "$PRICE_INFO" | grep -q "8900"; then
                print_pass "Price is correctly set to $89/month"
            else
                print_fail "Price might not be $89/month"
            fi
        else
            print_fail "Price ID not found in Stripe"
        fi
    else
        print_info "Skipping (Stripe CLI not authenticated)"
    fi
}

# Test 6: API Response Time
test_response_time() {
    print_test "Testing API Response Time"
    
    START_TIME=$(date +%s%N)
    
    curl -s -X POST "${BACKEND_URL}/create-trial-checkout" \
        -H "Content-Type: application/json" \
        -d "{
            \"email\": \"perf-test-$(date +%s)@example.com\",
            \"firstName\": \"Perf\",
            \"lastName\": \"Test\",
            \"businessName\": \"Performance Test\",
            \"phone\": \"555-9999\"
        }" > /dev/null
    
    END_TIME=$(date +%s%N)
    DURATION=$(( (END_TIME - START_TIME) / 1000000 ))  # Convert to milliseconds
    
    if [ $DURATION -lt 5000 ]; then
        print_pass "API responded in ${DURATION}ms (< 5s)"
    else
        print_fail "API took ${DURATION}ms (> 5s threshold)"
    fi
}

# Test 7: Webhook Endpoint Availability
test_webhook_endpoint() {
    print_test "Testing Webhook Endpoint Availability"
    
    # Check if webhook endpoint exists (should return method not allowed or similar)
    RESPONSE=$(curl -s -w "\n%{http_code}" "${BACKEND_URL}/stripe-webhook")
    HTTP_CODE=$(echo "$RESPONSE" | tail -1)
    
    # We expect 400-499 (client error) since we're not sending proper webhook data
    if [ "$HTTP_CODE" -ge 400 ] && [ "$HTTP_CODE" -lt 500 ]; then
        print_pass "Webhook endpoint exists and responds"
    else
        print_info "Webhook endpoint status: ${HTTP_CODE}"
    fi
}

# Main Execution
main() {
    print_header "🚀 Starting Creative Job Hub Signup Flow Tests"
    print_info "Test Email: ${TEST_EMAIL}"
    print_info "Backend URL: ${BACKEND_URL}"
    
    # Run all tests
    test_create_checkout
    sleep 1
    
    test_duplicate_email
    sleep 1
    
    test_invalid_session
    sleep 1
    
    test_missing_fields
    sleep 1
    
    test_price_id
    sleep 1
    
    test_response_time
    sleep 1
    
    test_webhook_endpoint
    
    # Summary
    print_header "📊 Test Summary"
    TOTAL=$((PASSED + FAILED))
    echo -e "${GREEN}✅ Passed: ${PASSED}/${TOTAL}${NC}"
    if [ $FAILED -gt 0 ]; then
        echo -e "${RED}❌ Failed: ${FAILED}/${TOTAL}${NC}"
    fi
    
    echo -e "\n${BLUE}Next Steps:${NC}"
    echo "1. Go to Stripe Dashboard: https://dashboard.stripe.com/test/customers"
    echo "2. Verify test customer was created with email: ${TEST_EMAIL}"
    echo "3. Complete manual payment flow with test card: 4242 4242 4242 4242"
    
    if [ -f /tmp/stripe_session_id.txt ]; then
        SESSION_ID=$(cat /tmp/stripe_session_id.txt)
        echo "4. Test activation: https://app.creativejobhub.com/activate/${SESSION_ID}"
        rm /tmp/stripe_session_id.txt
    fi
    
    # Exit code
    if [ $FAILED -gt 0 ]; then
        exit 1
    else
        exit 0
    fi
}

# Run main function
main
