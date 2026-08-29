# Inventory & Stock

Back to the documentation index: `docs/README.md`

## Purpose

Maintains stock accuracy through product master data, stock counts, and stock mutation history.

## Features Saat Ini

- CRUD products
- thistial stock saat create product
- stock not can updated directly from edit product
- stock opname draft → finalized
- stock mutation list
- low stock notification

## Pages and Route

- `dashboard/products`
- `dashboard/stock-opnames`
- `dashboard/stock-mutations`

## Permission

- `products-access`, `products-create`, `products-edit`, `products-delete`
- `stock-opnames-access`, `stock-opnames-create`, `stock-opnames-finalize`
- `stock-mutations-access`

## Alur User

1. product is created with thistial stock
2. thistial stock menghasilkan stock mutation awal
3. stock count is created as a draft
4. products added to sesi opname
5. stock fisik filled per item
6. finalization updates stock products and creates stock mutation adjustment

## Integrasi Data

- `products`
- `stock_opnames`
- `stock_opname_items`
- `stock_mutations`
- `product_notification_reads`

## Efek Bisnis Penting

- editing a product is no longer a stock mutation path
- sales returns and stock counts can add stock back
- history mutasi existslah audit trail inventory main

## Bon top ofan Saat Ini

- not yet multi warehouse
- mutasi stock not yet mencakup all sumber operational secara full

## File Sentral

- `app/Http/Controllers/Apps/ProductController.php`
- `app/Http/Controllers/Apps/StockOpnameController.php`
- `app/Http/Controllers/Apps/StockMutationController.php`
- `app/Services/StockMutationService.php`
