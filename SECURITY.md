# Security Guidelines

## Webhook Secrets

**NEVER** commit real webhook secrets to the repository.

### Option 1: Environment Variables in n8n
Store your secrets in n8n's environment variables, not in the frontend code.

### Option 2: Server-Side Proxy
Create a simple serverless function (Cloudflare Workers, Vercel Edge) that:
1. Receives the form submission
2. Adds the secret key server-side
3. Forwards to n8n

This keeps your secret out of client-side code.

### Option 3: Rate Limiting
Add rate limiting in n8n to prevent abuse:
- Limit to 5 submissions per IP per hour
- Block suspicious patterns

## Form Security

The contact form includes:
- ✅ Consent checkbox (required)
- ✅ Input validation (required fields)
- ✅ Email format validation
- ✅ CSRF protection via secret header

## Recommended n8n Workflow Security

1. **Validate secret header** in your n8n webhook
2. **Rate limit** submissions (5 per IP per hour)
3. **Sanitize** all input data
4. **Log** suspicious activity
5. **Alert** on unusual patterns

## Reporting Security Issues

If you find a security vulnerability, please report it responsibly.
