# Unit Conversion (Multi-Unit)

Back to the documentation index: `docs/README.md`

## Purpose

One product dalam multiple unit — pcs, box, carton, kg — with automatic stock conversion and different prices per unit.

## Definisi

| Istilah | Arti |
|---------|------|
| Base Unit | Base unit for stock. All stock insave dalam base unit |
| Conversion Factor | Conversion factor to base unit (1 box = 12 pcs) |

## Features Saat Ini

- 8 default unit: PCS, BOX, KARTON, KG, LITER, METER, PAK, DUS
- Product can memiliki multiple unit with konversi berbeda
- Buy and sell prices berbeda per unit
- Base unit (base unit) for stock
- Barcode spesifik per unit
- POS checkout menguse base unit qty for check stock
- Stock managed in base unit, otomatis converted saat checkout

## Database

- `units` table — master unit (code, name, symbol)
- `product_units` pivot — (product_id, unit_id, is_base, conversion_factor, buy_price, sell_price, barcode)
- `carts` — unit_id + conversion_factor
- `transaction_details` — unit_id + conversion_factor

## Service

`UnitConversionService` methods:

| Method | Fungsi |
|--------|--------|
| `toBaseUnit(product, unitId, qty)` | Conversion qty from specific unit to base unit |
| `fromBaseUnit(product, unitId, baseQty)` | Conversion base stock to qty in specific unit |
| `getPrice(product, unitId, type)` | Price for specific unit (buy/sell) |
| `getUnitLabel(product, unitId)` | Label unit for display |

## Alur

1. Admin: setup base unit + additional units per products (via DB seeder or directly insert)
2. POS: products with multiple units use a unit dropdown and prices update automatically
3. Checkout: quantity is converted to the base unit for stock checks and decrementing
4. Stock mutation selalu dalam base unit

## Catatan

- Product existing dianggap punya base unit PCS with conversion factor 1
- Unit not can deleted if masih used products
- Price per unit saved in pivot, not calculated from base price * factor
