# Purchasing Chain

Back to the documentation index: `docs/README.md`

## Purpose

Formal supplier purchasing modules: Purchase Order, Goods Receiving, and Supplier Return. Completes the inventory cycle from purchasing to incoming stock.

## Features Saat Ini

### Purchase Order (PO)
- Create PO with select supplier + item products
- Quantity and buy price per item
- Auto-generate document numbers (`PO-YYYYmmdd-XXXX`)
- Status lifecycle: `draft` → `ordered` → `partial_received` / `completed` → `cancelled`
- Filter by status, supplier, and document number

### Goods Receiving (GR)
- Receive goods from PO (full or partial)
- Qty received per item, variance notes
- Auto-update status PO (partial/completed)
- Input **batch number** + **expired date** per item (for batch tracking)
- Increment stock in destination warehouse (from PO)
- Auto-create payable (30 days due date)

### Supplier Return
- Goods returns to suppliers from GR
- Status lifecycle: `draft` → `completed` / `cancelled`
- Stock correction (decrement in source warehouse)
- Correct payables if present
- Return reason per item

## Pages and Route

| Pages | Route | Method |
|---------|-------|--------|
| Daftar PO | `purchase-orders.index` | GET |
| Create PO | `purchase-orders.create` | GET |
| Save PO | `purchase-orders.store` | POST |
| Detail PO | `purchase-orders.show` | GET |
| Place PO | `purchase-orders.place` | POST |
| Cancel PO | `purchase-orders.cancel` | POST |
| Daftar GR | `goods-receivings.index` | GET |
| Create GR | `goods-receivings.create` | GET |
| Save GR | `goods-receivings.store` | POST |
| Detail GR | `goods-receivings.show` | GET |
| SR List | `supplier-returns.index` | GET |
| Create SR | `supplier-returns.create` | GET |
| Save SR | `supplier-returns.store` | POST |
| Detail SR | `supplier-returns.show` | GET |
| Complete SR | `supplier-returns.complete` | POST |
| Cancel SR | `supplier-returns.cancel` | POST |

## Permission

| Permission | Untuk apa |
|-----------|-----------|
| `purchase-orders-access` | View list & detail PO |
| `purchase-orders-create` | Create PO |
| `purchase-orders-update` | Place/cancel PO |
| `goods-receivings-access` | View list & detail GR |
| `goods-receivings-create` | Create GR |
| `supplier-returns-access` | View list & detail SR |
| `supplier-returns-create` | Create SR |
| `supplier-returns-update` | Complete/cancel SR |

## Alur User

1. **Create PO** → select supplier, add item, save draft
2. **Place PO** → update status draft jadi ordered
3. **Goods Receiving** → select PO that ordered, input qty received + batch, save
4. **Supplier Return** (if needed) → select GR, select return items, complete
5. **Payable** is automatically created during GR, then settled in the Payables module

## Integrasi Data

- `purchase_orders` → `purchase_order_items` → received through GR, qty_received increment
- `goods_receivings` → `goods_receiving_items` → increment stock + stock mutation
- `supplier_returns` → `supplier_return_items` → decrement stock + stock mutation
- `payables` are auto-created from GR with due_date = 30 days
- `product_batches` auto-created from GR if batch_number filled
- `warehouse_id` in PO → passed down to GR
- Audit log for each transition status
