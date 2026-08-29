# Security Policy

## Reporting a Vulnerability

If you find a security vulnerability in Point of Sales, **do not create a public issue**. Send the report directly to:

**Email:** aryadptr.developer@gmail.com

Reports will be answered dalam **within 48 jam**. We will release a patch as soon as possible after confirmation.

## What to Report

We accept reports for:
- XSS (Cross-Site Scripting)
- CSRF
- SQL Injection
- Authentication/Authorization bypass
- Sensitive data exposure
- Remote code execution
- Privilege escalation

## Required Information

Include in the report:
- Versi aplikasi (commit hash or tag)
- Steps to reproduce
- Dampak potensial
- (Optiononal) Saran mitigasi

## Security Practices in Repo Ini

| Area | Praktik |
|------|---------|
| Password | Bcrypt hashing |
| Session | Regenerate after login, absolute lifetime timeout |
| CSRF | Laravel CSRF protection on all routess |
| Auth | Rate limiting, honeypot + timer (bot.guard middleware) |
| RBAC | Spatie Permission + step_up middleware for sensitive actions |
| Payment secrets | Encrypted at rest (Xendit/Midtrans keys) |
| Webhook | Signature verification for Midtrans & Xendit |
| Headers | SecureHeaders middleware (CSP, HSTS, X-Frame-Options) |
| User data | Input validation on all requests |

## Supported Versions

| Version | Supported |
|---------|-----------|
| v2.x | ✅ |
| v1.x | ❌ (legacy) |
