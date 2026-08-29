# Customer Portal (Self-Service)

Back to the documentation index: `docs/README.md`

## Purpose

Customers can view invoices, payment status, and pay receivables online without logging in, using only the shared link.

## Features Saat Ini

- **Invoice detail** — view item, prices, discount, PPN, total
- **Status payments** — Paid, Pending, Unpaid
- **Riwayat transactions** — for customer that same (via token akses)
- **Pay receivables online** — if the status is `pay_later` and not yet paid, a "Pay Now" button opens the payment gateway
- **Token-based access** — URL unik per transactions, not can ditebak (UUID v4)
- **Guest layout** — pages publik, not need login
- **Share button** — in pages print transactions, copy link portal to clipboard

## Kesafean

- Token akses: UUID v4 — not can ditebak
- Token hanya for 1 invoice (not can akses invoice other)
- No sensitive data is displayed
- Rate limit per IP

## Database

- `transactions.access_token` — UUID, unique
- `receivables.access_token` — UUID, unique
- Token is auto-generated when the transaction is created

## Pages and Route

| Route | Fungsi | Auth |
|-------|--------|------|
| `portal.transaction` | View detail transactions | Token-based |
| `portal.receivable.pay` | Pay receivables through the payment gateway | Token-based |

## Sharing Flow

1. Cashier completed checkout
2. Di pages print, klik tombol "Share"
3. Link portal otomatis tercopy to clipboard
4. Cashier kirim link to customer via WhatsApp
5. Customer buka link → view invoice → pay if need
