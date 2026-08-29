# Point of Sales Documentation

This documentation is for developers who want to set up the app, understand module flows, and maintain the application.

## Daftar Isi

### Onboarding
- `docs/getting-started.md` — setup from scratch
- `docs/configuration.md` — environment, payment, tax, printer

### Arsitektur
- `docs/architecture-overview.md` — stack, middleware, service layer
- `docs/feature-index.md` — index of all modules

### POS & Transactions
- `docs/features/pos-transactions.md` — cart, hold/resume, checkout multi-payment
- `docs/features/sales-returns.md` — sales returns, refund, store credit
- `docs/features/cashier-shifts.md` — open/close cashier shifts
- `docs/features/customer-portal.md` — public invoices, pay receivables online 🆕
- `docs/features/dine-in.md` — QR menu, self-order, floor plan 🆕

### Inventory & Warehouse
- `docs/features/inventory-stock.md` — products, stock counts, mutations
- `docs/features/multi-warehouse.md` — multi-warehouse, stock transfer 🆕
- `docs/features/unit-conversion.md` — multi-unit (pcs, box, kg) 🆕

### Purchasing & Finance
- `docs/features/purchasing-chain.md` — PO, goods receiving, supplier return 🆕
- `docs/features/payables-suppliers.md` — supplier payables
- `docs/features/receivables.md` — customer receivables
- `docs/features/tax-management.md` — PPN, NPWP, NIB 🆕

### Pricing & Loyalty
- `docs/features/promotions-loyalty.md` — pricing rules, vouchers, loyalty, price list 🆕

### CRM
- `docs/features/member-management.md` — member CRUD
- `docs/features/crm-segments.md` — segments, campaigns, reminders 🆕

### Settings & Admin
- `docs/features/settings-payments.md` — payment gateways, bank accounts, store profile, target
- `docs/features/rbac-users-roles.md` — users, roles, permissions
- `docs/features/audit-logs.md` — audit trail

### Reports & Documents
- `docs/features/reports-documents.md` — sales, profit, insights, PDF

### Tools & Integrations
- `docs/features/import-export.md` — CSV/Excel import & export 🆕
- `docs/features/mobile-pos.md` — PWA, barcode scanner camera 🆕
- `docs/features/thermal-printer.md` — ESC/POS, WebUSB 🆕

### Planning
- `planning/feature-roadmap.md` — roadmap v2.1–v3.0
- `planning/tier-1-implementation.md` — detail Tier 1
- `planning/tier-2-implementation.md` — detail Tier 2
- `planning/tier-3-implementation.md` — detail Tier 3

## How to Read the Documentation

1. If this is your first time: start from `docs/getting-started.md`
2. If ingin paham struktur: baca `docs/architecture-overview.md`
3. If you want to work on a specific module: buka `docs/feature-index.md` → open the related feature document
4. If there is an access issue: check `docs/features/rbac-users-roles.md`

## Catatan

- The documentation covers all features currently in the repository
- Planning files are stored in the folder `planning/`
- Each feature document covers purpose, routess, permissions, and user flow
