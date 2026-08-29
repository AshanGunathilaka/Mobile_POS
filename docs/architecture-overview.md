# Architecture Overview

Back to the documentation index: `docs/README.md`

## Stack

- **Backend:** Laravel 13 (PHP 8.3+)
- **Frontend:** Inertia.js 3 + React 19, Vite 5
- **Styling:** Tailwind CSS 3 (custom theme in `tailwind.config.js`)
- **Auth/RBAC:** Spatie Laravel Permission + Laravel Breeze
- **DB:** MySQL (default); SQLite in-memory for testing
- **Payment Gateways:** Midtrans, Xendit

## Struktur Area Penting

- `routess/web.php` — ~60+ routes dashboard, public share, portal
- `routess/api.php` — webhook Midtrans & Xendit (without auth)
- `app/Http/Controllers/Apps/` — controller per modul dashboard
- `app/Http/Controllers/Reports/` — controller reports
- `app/Http/Controllers/DocumentController.php` — PDF documents
- `app/Http/Controllers/PublicPortalController.php` — customer self-service
- `app/Http/Middleware/` — 7 custom middleware
- `app/Http/Middleware/HandleInertiaRequests.php` — shared props global (auth, permissions, notifications, shift, store profile, security)
- `app/Models/` — ~45+ model
- `app/Services/` — business logic layer
- `resources/js/Pages/Dashboard/` — Inertia page components
- `resources/js/Pages/Public/` — public Inertia pages (customer portal)
- `resources/js/Layouts/` — 4 layout: POSLayout, DashboardLayout, AuthenticatedLayout, GuestLayout
- `database/migrations/` — ~55+ migration
- `database/seeders/` — 8 seeder (executed in chain order)

## Alur Request Umum

1. Route dashboard diproteksi `auth` + `verified` + `permission`
2. Controller menyiapkan data from Model/Service
3. Inertia renders React pages in `resources/js/Pages/Dashboard/**/*.jsx`
4. User permissions are shared to frontend via `HandleInertiaRequests.php`
5. Frontend menguse permission for visibility tombol/menu

## Middleware

| Alias | Class | Fungsi |
|-------|-------|--------|
| `permission` | Spatie PermissionMiddleware | Proteksi routes berbasis permission string |
| `active_shift` | EnsureActiveCashierShift | Requires an active shift for POS operations (cart, hold, checkout) |
| `step_up` | EnsureRecentPasswordConfirmation | Requires password confirmation for sensitive actions (role/user CRUD, payment settings, bank accounts, payment confirmation) |
| `bot.guard` | EnsureBotGuard | Honeypot + timer anti-bot in form login/register/forgot-password |
| `registration.enabled` | EnsurePublicRegistrationEnabled | Matikan registrasi publik (default: off) |
| `SecureHeaders` | — | Security response headers |
| `EnforceAbsoluteSessionLifetime` | — | Paksa logout setelah session lifetime habis |

## Service Layer

| Service | Fungsi |
|---------|--------|
| `AuditLogService` | Records important changes with before/after snapshots |
| `CashierShiftService` | Lifecycle shift: open, close, force-close, summary |
| `StockMutationService` | Records all stock changes with an audit trail |
| `PricingService` | Engine promo: qty break, bundle, buy-x-get-y |
| `LoyaltyService` | Points, tier, voucher — earn/redeem |
| `TaxService` | Hitung PPN exclusive/inclusive per item |
| `UnitConversionService` | Conversion antar unit (pcs ↔ box ↔ kg) |
| `BatchService` | Alokasi FEFO batch, expiring alerts |
| `ReorderService` | Product need restock, buat draft PO |
| `PriceListService` | Price khusus per kelompok customers |
| `StockTransferService` | Lifecycle transfer stock antar warehouses |
| `ThermalPrintService` | Generate teks receipt ESC/POS |
| `CrmAutomationService` | Campaign, reminder, automation |
| `CustomerSegmentationService` | Auto/manual segmentasi customers |
| `PurchaseOrderService` | Lifecycle PO: draft, place, cancel |
| `GoodsReceivingService` | Receive goods, update stock, buat payable |
| `SupplierReturnService` | Supplier returns, koreksi stock + payable |
| `ReceivableService` | Aging, statement, collection stats |
| `PayableAgingService` | Aging supplier payables |
| `PaymentGatewayManager` | Dispatches to Midtrans/Xendit |
| `WhatsAppService` | HTTP wrapper for Node.js whatsapp-web.js service |

## Pola Integrasi Modul

- **Transaction** is the center: details, profits, receivables, sales returns, campaign logs, discount approvals
- **Product** is the inventory center: stock counts, stock mutations, batches, composites, pricing rules, price list items, units
- **Warehouse** is the location dimension: almost all stock and transaction tables have `warehouse_id`
- **Audit Log** across modules: each important change is recorded through `AuditLogService`

## Alur Data Multi-Warehouse

```
Cashier buka shift → select warehouse
    ↓
POS check stock in product_warehouse (product_id + warehouse_id)
    ↓
Checkout → decrement stock in product_warehouse
         → transaction.warehouse_id = shift.warehouse_id
    ↓
PO → warehouse_id
GR → inherit warehouse from PO, increment stock in pivot
Stock Transfer → source → send → receive → destination
Stock Opname → select warehouse, baca stock from pivot
```

## WhatsApp Gateway Architecture

```
┌─────────────────────────┐     HTTP      ┌──────────────────────┐
│  Laravel App            │  ──────────→  │  whatsapp-service    │
│                         │  ←──────────  │  (Node.js :3001)     │
│  WhatsAppService.php    │               │                      │
│  CrmAutomationService   │               │  whatsapp-web.js     │
│  SettingController      │               │  Puppeteer/Chrome    │
└─────────────────────────┘               └──────────┬───────────┘
                                                     │
                                              WhatsApp Web
```

- `whatsapp-service/` existslah Node.js Express server that run `whatsapp-web.js`
- Laravel komunikasi via HTTP to service tersebut
- Session WhatsApp saved in `whatsapp-service/session/` (persistent)
- Requires Node.js + Chrome in server (Puppeteer internal)

## Feature Documentation Pattern

Each feature document in `docs/features/` covers:

- tujuan modul
- available features
- pages and routes
- required permissions
- alur user
- integrasi data
- catatan teknis/bon top ofan
