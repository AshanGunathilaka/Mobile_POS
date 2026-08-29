# WhatsApp Gateway

Send WhatsApp messages automatically through CRM campaigns, receivable reminders, and invoice sharing.

## Cara Kerja

```
Laravel App  ──HTTP──>  whatsapp-service (Node.js)  ──>  WhatsApp Web
                              │
                        Puppeteer (headless Chrome)
```

- `whatsapp-service/` is an Express server port 3001 that run `whatsapp-web.js`
- Session is stored in folder `session/` (persistent — server restarts do not require rescanning)
- Laravel calls the Node service via HTTP (cURL) from `WhatsAppService.php`

## Setup

```bash
cd whatsapp-service
npm install
npm start
# → Running on port 3001
```

## Pages Settings

`Dashboard > Settings > WhatsApp`

| Features | Fungsi |
|-------|--------|
| URL Service | Address Node service (default: `http://localhost:3001`) |
| Hubungkan | Init Client WA, generate QR code |
| QR Scan | Scan with WhatsApp > Linked Devices > New Device |
| Disconnect | Delete session and disconnect |
| Automatic Sending | Automatically send receivable reminders / invoices via campaign |
| Test Send | Send a test message to a specific number |

## Endpointst Node Service

| Endpointst | Method | Description |
|----------|--------|-------------|
| `/start` | POST | Init Client WA, mulai QR generation |
| `/status` | GET | `{connected, phone, qr, starting}` |
| `/send` | POST | Kirim pesan `{target, message}` |
| `/disconnect` | POST | Delete session and disconnect |

## Integrasi Campaign

In `CrmAutomationService@processCampaign()`:
- If the gateway is active (`wa_enabled=true`) and connected, send actual WhatsApp messages to every customer
- Update log status becomes `sent` after success
- Fallback to `wa.me` link if gateway is down

## Permission

- `whatsapp-settings-access` — view the settings page
- `whatsapp-settings-update` — update configuration + connect/disconnect

## Catatan Teknis

- Membutuhkan Chrome/Chromium in server (Puppeteer internal)
- Session persistent via `LocalAuth` — no need to rescan on every restart
- Rate limit: WhatsApp Web has sending limits, avoid >100 consecutive messages
- ToS: whatsapp-web.js uses WhatsApp Web unofficially
- Production deployment: run with PM2: `pm2 start whatsapp-service/server.js --name wa-service`
