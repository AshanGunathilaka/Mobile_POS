# PPN Tax Management

Back to the documentation index: `docs/README.md`

## Purpose

Supports VAT on transactions, with exclusive/inclusive modes per product, store tax/business registration numbers, and configurable default rates.

## Definisi

| Istilah | Arti |
|---------|------|
| Tax Exclusive | Price products **not yet** including VAT. PPN added to grand total |
| Tax Inclusive | Price products **already** including VAT. PPN separated for reporting |
| NPWP | Nomor Pokok Wajib Tax — identitas pajak toko |
| PPN | Tax Peraddan Nilai (default 11%) |

## Features Saat Ini

- PPN per products (exclusive/inclusive), rate can berbeda per products
- Default rate PPN can configured in Settings → Profil Toko (default 11.00%)
- Tax calculation in checkout automatically adds VAT to the grand total
- Baris PPN shown in: checkout preview, print invoice, PDF invoice, PDF receipt 80mm & 58mm, thermal receipt
- Grand total already including VAT
- Tax ID and business registration number toko in Settings → Profil Toko
- Reports — VAT is already included in the grand total

## Database

### Products
- `tax_type` — `exclusive` or `inclusive`
- `tax_rate` — persentase (decimal 5,2), default 11.00

### Transactions
- `tax_rate` — rate that used (nullable)
- `tax_total` — total PPN dalam rupiah
- `customer_npwp` — NPWP customer (optional)

### Settings
- `store_npwp` — NPWP toko
- `store_nib` — NIB toko
- `tax_default_rate` — rate default for products baru

## Pages and Route

| Route | Fungsi |
|-------|--------|
| `settings.store` | Configure tax ID, business registration number, and default VAT rate |

## Alur Perhitungan

### Exclusive (default)
```
Price products: LKR 10.000
PPN 11%:      LKR  1.100
Total:        LKR 11.100
```

### Inclusive
```
Price products: LKR 11.100 (already include PPN)
PPN 11%:      LKR  1.100 (calculated: 11100 - (11100 / 1.11))
Total:        LKR 10.000 + LKR 1.100
```

## Catatan

- Tax hanya mempengaruhi grand_total, not mempengaruhi discount/voucher/loyalty
- Shipping cost juga charged PPN with rate that same
- If `tax_rate = 0`, PPN not calculated
- Setting NPWP/NIB not wajib — can diemptykan
