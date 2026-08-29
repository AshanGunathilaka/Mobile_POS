# Features Dine-In (QR Menu)

## Ringkasan

The dine-in module lets customers scan a QR code at the table, view the menu, and order directly from their phone. Orders arrive on the staff dashboard for confirmation and are then processed by the cashier.

## Alur Kerja

```
Customers scan QR
  → View menu & select item
  → Pilih metode payments (cashier / online)
  → Pesanan terkirim → status: submitted

Staff view orders in the dashboard
  → Receive (accept) → stock deducted, continue to cashier
  → Atau Tolak (reject) with alasan

If pay online:
  → Customers pay via Midtrans/Xendit
  → Webhook confirmation → status: completed

If pay at cashier:
  → Staff process it on the cashier page as usual
```

## Database

### Tabel: `dine_areas`
Area/grouping tables (contoh: Indoor, Outdoor, VIP).

| Field | Type | Description |
|-------|------|-----------|
| `name` | string | Name area |
| `sort_order` | integer | Display order |
| `is_active` | boolean | Area active/inactive |

### Tabel: `dine_tables`
Meja individual with QR token.

| Field | Type | Description |
|-------|------|-----------|
| `dine_area_id` | foreignId | Relationship to area (nullable) |
| `name` | string | Name tables (contoh: M1, Outdoor-1) |
| `token` | uuid | UUID auto-generate (unik per tables) |
| `capacity` | integer | Kapasitas orang |
| `pos_x` | integer | Posisi grid X (0-24) |
| `pos_y` | integer | Posisi grid Y (0-14) |
| `shape` | enum | `circle` or `square` |
| `is_active` | boolean | Table active/inactive |

### Tabel: `dine_orders`
Header orders customers.

| Field | Type | Description |
|-------|------|-----------|
| `dine_table_id` | foreignId | Meja tujuan |
| `customer_id` | foreignId | (nullable) |
| `access_token` | uuid | Unique token for pages status |
| `status` | enum | submitted/accepted/completed/rejected/cancelled |
| `notes` | text | Catatan orders |
| `payment_option` | enum | pay_at_counter / pay_online |
| `payment_method` | string | midtrans/xendit (nullable) |
| `payment_status` | string | pending/paid/failed (nullable) |
| `payment_reference` | string | Reference from gateway (nullable) |
| `payment_url` | string | URL payments (nullable) |
| `cashier_id` | foreignId | Cashier that confirmation (nullable) |
| `transaction_id` | foreignId | Related transaction (nullable) |
| `subtotal` | integer | Total orders |
| `item_count` | integer | Quantity item |

### Tabel: `dine_order_items`
Item-item dalam orders.

| Field | Type | Description |
|-------|------|-----------|
| `dine_order_id` | foreignId | Header orders |
| `product_id` | foreignId | Product dipesan |
| `unit_id` | foreignId | Unit (nullable) |
| `qty` | integer | Quantity |
| `price` | integer | Price saat pemesanan |
| `note` | string | Catatan item (nullable) |

## Settings

Dikontrol via `Setting` table:

| Key | Default | Description |
|-----|---------|-----------|
| `dine_in_enabled` | true | Dine-in feature is active |
| `dine_in_self_order_enabled` | true | Customers can order by themselves |
| `dine_in_pay_online_enabled` | true | Option pay online available |

## Routes

### Admin (dashboard)

| Method | Route | Middleware |
|--------|-------|-----------|
| GET | `/dashboard/dine-areas` | permission:dine-tables-access |
| POST | `/dashboard/dine-areas` | permission:dine-tables-create |
| PATCH | `/dashboard/dine-areas/{area}` | permission:dine-tables-access |
| DELETE | `/dashboard/dine-areas/{area}` | permission:dine-tables-access |
| GET | `/dashboard/dine-tables` | permission:dine-tables-access |
| POST | `/dashboard/dine-tables` | permission:dine-tables-create |
| PATCH | `/dashboard/dine-tables/{table}` | permission:dine-tables-update |
| DELETE | `/dashboard/dine-tables/{table}` | permission:dine-tables-delete |
| GET | `/dashboard/dine-tables/{table}/qr` | permission:dine-tables-access |
| GET | `/dashboard/dine-orders` | permission:dine-orders-access |
| POST | `/dashboard/dine-orders/{order}/accept` | permission:dine-orders-process |
| POST | `/dashboard/dine-orders/{order}/reject` | permission:dine-orders-process |

### Publik

| Method | Route | Description |
|--------|-------|-----------|
| GET | `/dine/{token}` | Pages menu publik |
| POST | `/dine/{token}/order` | Submit orders |
| GET | `/dine-order/{accessToken}` | Pages status orders |
| GET | `/dine-order/{accessToken}/check` | Endpointst polling status (JSON) |

## Permissions

| Permission | Description |
|------------|-----------|
| `dine-tables-access` | View area & tables |
| `dine-tables-create` | Add area/tables |
| `dine-tables-update` | Edit posisi tables |
| `dine-tables-delete` | Delete tables |
| `dine-orders-access` | View list orders |
| `dine-orders-process` | Receive/reject orders |

**Role cashier** gets: `dine-orders-access` + `dine-orders-process`

## Features Main

### Floor Plan Editor (SVG Grid)
- Tampilan grid SVG 25x15 cell (40px/cell)
- Drag-and-drop tables for reposisi
- Mode list as an alternative
- Filter per area

### QR Code Generation
- QR berisi URL: `{APP_URL}/dine/{token}`
- Di-generate via `simplesoftwareio/simple-qrcode`
- Download PNG from dashboard

### Self-Order Customers
- Pilih categories & products
- Keranjang real-time
- Catatan optional per item
- Dua opsi: Pay at Cashier / Pay Online

### Polling Status
- Pages status auto-refresh each 5 detik saat status = submitted
- Notifications visual per status (waiting/received/completed/direject)

### Conversion Staff
- Accept: stock deducted directly, orders siap processed
- Reject: with alasan optional
- Confirmation from cashier via pages POS seperti transactions biasa

## Payments Online

If `payment_option = pay_online`:
1. Frontend posts to `/dine/{token}/order` with `payment_option: pay_online`
2. Backend can create a payment via PaymentGatewayManager (extended if needed)
3. Webhook from Midtrans/Xendit update `payment_status` and `status`

## Catatan Teknis

- QR generator: `simplesoftwareio/simple-qrcode`
- Status polling: fetch JSON each 5 detik (without broadcast/realtime dependency)
- Stock deducted saat `accept` — not saat submit
- Core POS (`TransactionController`) TIDAK dimodifikasi
- Cart remain berbasis `cashier_id` — not affected by dine-in
