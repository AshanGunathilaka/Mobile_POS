# Multi-Warehouse

Back to the documentation index: `docs/README.md`

## Purpose

Separates stock products per lokasi fisik (warehouses pusat, cabang toko, warehouses penthatga). Enables bisnis with >1 lokasi operational.

## Definisi

| Istilah | Arti |
|---------|------|
| Main Warehouse | Primary warehouse, created automatically during seeding |
| Branch Warehouse | Store branch that juga sell directly |
| Stock Warehouse | Warehouses penthatga (not sell directly) |

## Features Saat Ini

### Warehouse CRUD
- Add, edit, and delete warehouses
- Type: main, branch, warehouse
- Active/inactive status
- Urutan tampilan
- Guard: cannot delete a warehouse that still has stock
- Guard: cannot delete the main warehouse

### Product-Warehouse Pivot
- Stock saved per products per warehouse in `product_warehouse`
- When a new warehouse is created, all products are automatically synced with 0 stock
- During seeding, all stock products existing moved to warehouse PUSAT

### Warehouse in Shift
- Cashier selects warehouse saat buka shift
- Warehouse not can updated setelah shift dibuka
- Admin can view source warehouse in detail shift

### Warehouse in Transactions
- Only products with stock > 0 in the active shift warehouse appear in POS
- Cart stores `warehouse_id`
- Checkout decrement stock in pivot warehouse
- Transaction recorded with `warehouse_id`
- Product barcode search only returns products in the active shift warehouse

### Warehouse in Purchasing
- PO punya `warehouse_id` (tujuan warehouses)
- GR auto-inherit warehouse from PO
- Supplier Return: stock decrement from source warehouse
- Stock Opname: select warehouse, baca stock from pivot warehouse

### Stock Transfer Antar Warehouse
- Transfer antar warehouse (source → destination)
- Status: draft → in_transit → completed / cancelled
- Send: kurangi stock source + catat stock mutation
- Receive: add stock destination + catat stock mutation
- Cancel: if in transit, stock is returned to the source
- Validasi stock only senot yet send

## Pages and Route

| Route | Fungsi |
|-------|--------|
| `settings.warehouses.index` | Daftar warehouse (CRUD inline) |
| `stock-transfers.index` | Daftar transfer stock |
| `stock-transfers.create` | Create transfer baru |
| `stock-transfers.show` | Detail transfer + action (send/receive/cancel) |

## Permission

| Permission | Untuk apa |
|-----------|-----------|
| `warehouses-access` | View list warehouse |
| `warehouses-create` | Add warehouse baru |
| `warehouses-update` | Edit warehouse |
| `warehouses-delete` | Delete warehouse |
| `stock-transfers-access` | View list transfer |
| `stock-transfers-create` | Create transfer |
| `stock-transfers-send` | Kirim transfer (decrement source) |
| `stock-transfers-receive` | Receive transfer (increment dest) |
| `stock-transfers-cancel` | Cancel transfer |

## Alur User

1. Admin: setup warehouse in Settings → Warehouses
2. Cashier: buka shift → select warehouse
3. POS: only products with stock in the shift warehouse appear
4. Checkout: stock decrement from warehouse shift
5. PO: tentukan destination warehouse
6. GR: goods are received into the PO warehouse
7. Stock Opname: select warehouse, count physical stock
8. Stock Transfer: kirim goods antar warehouse

## Catatan Teknis

- All tabel stock & transactions punya `warehouse_id` nullable (backward compat)
- If `warehouse_id` null, fallback to `products.stock` (legacy single-warehouse)
- Seed data: the PUSAT warehouse (main) is created automatically, and existing stock is moved to the pivot table
