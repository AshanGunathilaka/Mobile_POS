# Import / Export CSV & Excel

Back to the documentation index: `docs/README.md`

## Purpose

Import master data (products, customer) from spreadsheet. Export data to Excel for backup or advanced analysis.

## Features Saat Ini

### Export
- **Products** — barcode, SKU, name, categories, prices buy, prices jual, stock, min stock, max stock, tipe pajak, rate pajak
- **Customer** — name, phone, address, provinsi, kota, kecamatan, desa, status member, tier, points
- **Transactions** — invoice, date, cashier, customers, metode, status, subtotal, discount, ongkir, PPN, grand total (can difilter by date & warehouse)

### Import
- **Products** — upload file Excel/CSV, auto-create categories if it does not exist, update if barcode exists (updateOrCreate)
- **Customer** — upload file Excel/CSV, validasi kolom wajib

### Template
- Download template Excel empty with header that matching for preparation data

## Route

| Route | Method | Fungsi |
|-------|--------|--------|
| `export.products` | GET | Download Excel products |
| `export.customers` | GET | Download Excel customer |
| `export.transactions` | GET | Download Excel transactions (with filter) |
| `import.products` | POST | Upload file import products |
| `import.customers` | POST | Upload file import customer |
| `import.template/{type}` | GET | Download template (products/customers) |

## Permission

| Permission | Untuk apa |
|-----------|-----------|
| `products-export` | Download Excel products |
| `products-import` | Upload import products |
| `customers-export` | Download Excel customer |
| `customers-import` | Upload import customer |

## Format Template

### Template Products
| barcode | sku | name | description | categories | prices_buy | prices_jual | stock | min_stock | max_stock | tipe_pajak | rate_pajak |
|---------|-----|------|-----------|----------|-----------|-----------|------|----------|----------|-----------|------------|

### Template Customer
| name | phone | address |
|------|---------|--------|

## Catatan

- Import products menguse `updateOrCreate` berdasarkan barcode — safe for re-import
- Categories are created automatically if they do not exist yet
- Format file: `.xlsx`, `.xls`, `.csv` (max 5MB)
- Import processed dalam batch (100 per batch) for performance
- Export/import buttons exist in pages Product and Customer
