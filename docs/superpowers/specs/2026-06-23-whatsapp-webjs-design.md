# WhatsApp Gateway via whatsapp-web.js

Integrasi WhatsApp native with whatsapp-web.js. Users scan the QR code from the Settings page, send automatic messages from campaigns.

## Arsitektur

```
Laravel App ←→ Node.js Service (whatsapp-service/) ←→ WhatsApp Web (via Puppeteer)
```

- **Node service**: Express on localhost:3001, manages sessions WA
- **Laravel**: `WhatsAppService.php` wrapper cURL wrapper to Node, called from Campaign/Setting
- **React**: Pages Settings with QR scanner + status koneksi

## Node Service (`whatsapp-service/`)

4 endpointst:

| Endpointst | Method | Function |
|----------|--------|----------|
| `/start` | POST | Initialize/start Client WA (re-use session if present) |
| `/status` | GET | `{connected, phone, qr}` |
| `/send` | POST | `{target, message}` |
| `/disconnect` | POST | Delete session and disconnect |

Session persistence via `LocalAuth` to the folder `session/`.

## Backend Laravel

### `WhatsAppService.php`
- `start(): array` — panggil POST /start
- `status(): array` — panggil GET /status
- `send(string $target, string $message): bool` — panggil POST /send
- `disconnect(): bool` — panggil POST /disconnect
- `isAvailable(): bool` — check `WA_SERVICE_URL` terisi

### `SettingController` — add methods
- `whatsapp()` — render pages setting + status device + QR
- `updateWhatsapp()` — save preferensi (auto-send toggle)
- `testWhatsapp()` — test sending to the owner number

### CrmAutomationService
- Di `processCampaign()`: kalau WA available, kirim beneran via Node service
- Update `CustomerCampaignLog` status becomes `sent` after success
- Fallback to `wa.me` if it fails

## Routes
```
GET  /settings/whatsapp                   → whatsapp
POST /settings/whatsapp                   → updateWhatsapp
POST /settings/whatsapp/test              → testWhatsapp
POST /settings/whatsapp/disconnect        → disconnect (panggil Node)
```

## Permission
- `whatsapp-settings-access`
- `whatsapp-settings-update`

## Files
- `whatsapp-service/package.json`
- `whatsapp-service/server.js`
- `whatsapp-service/.gitignore`
- `app/Services/WhatsAppService.php`
- `resources/js/Pages/Dashboard/Settings/Whatsapp.jsx`
- `routess/web.php` (update)
- `database/seeders/PermissionSeeder.php` (update)
- `app/Services/CrmAutomationService.php` (update)
