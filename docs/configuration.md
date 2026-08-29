# Configuration

Back to the documentation index: `docs/README.md`

## Environment Penting

| Variable | Untuk apa |
|----------|-----------|
| `APP_URL` | Webhook URL, public invoice, customer portal link, payment callback |
| `APP_VERSION` | Versi aplikasi (tampil in sidebar + POS navbar) |
| `DB_DATABASE` | Name database (default: `pointst_of_sales`) |
| `MIDTRANS_SERVER_KEY` | Server key Midtrans |
| `MIDTRANS_CLIENT_KEY` | Client key Midtrans (frontend) |
| `XENDIT_SECRET_KEY` | Secret key Xendit |
| `XENDIT_PUBLIC_KEY` | Public key Xendit |
| `XENDIT_CALLBACK_TOKEN` | Callback token verifikasi webhook Xendit |
| `AUTH_PUBLIC_REGISTRATION` | Aktifkan registrasi publik (`true`/`false`, default: `false`) |
| `WA_SERVICE_URL` | Address Node.js WhatsApp service (default: `http://localhost:3001`) |

## APP_URL

`APP_URL` must public (not `localhost`) if menguse:

- Webhook Midtrans/Xendit
- Public invoice sharing
- Customer portal link
- Payment gateway callback

## Payment Gateway

Configuration in `dashboard/settings/payments`:

- **Cash** — no configuration required
- **Bank Transfer** — requires an active bank account
- **Midtrans** — require server key + client key + mode production
- **Xendit** — require secret key + public key + callback token + mode production

Detail setup: `docs/features/settings-payments.md`

## Bank Accounts

Configuration in `dashboard/settings/bank-accounts`:

- Diuse for payments transfer manual
- Bisa configured urutan tampilan
- Bisa deactivated without deleted

## Tax Settings

Configuration in `dashboard/settings/store` — the "Tax & Legal Information" section:

- **NPWP Toko** — Nomor Pokok Wajib Tax (format: `XX.XXX.XXX.X-XXX.XXX`)
- **NIB** — Nomor Induk Berusaha
- **Default Tax Rate** — tax percentage for new products (default: 11.00%)
- Tax rate can updated per products in pages edit products

## Printer Settings

Configuration in `dashboard/settings/printer`:

- **Paper Size** — 80mm or 58mm
- **Auto-print** — automatically print receipts after transactions (via WebUSB)
- Thermal printer connected via WebUSB (browser Chrome/Edge)

## Store Profile

Configuration in `dashboard/settings/store`:

- Name, address, phone, email, website, kota
- Logo toko
- Tax ID and business registration number (for tax needs)

## Sales Target

Configuration in `dashboard/settings/target`:

- Target sales bulanan
- Appears on the dashboard as a progress bar

## WhatsApp Gateway

Configuration in `dashboard/settings/whatsapp`:

- **URL Service** — address Node.js service (default `http://localhost:3001`)
- **Enable Gateway** — enable/disable WhatsApp integration
- **Automatic Sending** — receivable reminders and invoice automation via campaigns
- **Connection** — scan QR to connect (session is saved automatically)

Detail setup: `docs/features/whatsapp-gateway.md`

## Multi-Warehouse

Configuration in `dashboard/settings/warehouses`:

- **Main Warehouse** — central warehouse, created automatically during seeding
- **Branch Warehouse** — cabang toko that juga sell directly
- **Stock Warehouse** — warehouses penthatga (not sell directly)
- Stock products separated per warehouse in tabel `product_warehouse`

## Catatan Dependency Eksternal

- `laravolt/indonesia` — data provinsi/kota/kecamatan/desa Indonesia
- `barryvdh/laravel-dompdf` — generate PDF invoice/receipt/shipping label
- `picqer/php-barcode-generator` — barcodes in PDF documents
- `maatwebsite/excel` — import/export CSV + Excel
- Midtrans & Xendit — payment gateway
- `whatsapp-web.js` — WhatsApp gateway (Node.js, separate from Laravel)
