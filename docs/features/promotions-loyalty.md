# Promotions & Loyalty

Back to the documentation index: `docs/README.md`

## Purpose

Promotion and loyalty engine for increasing sales and customer retention.

## Features Saat Ini

### Pricing Rules (Promo Engine)
- **Standard Discount** — discount persentase/nominal per products or categories
- **Qty Break** — prices khusus for purchases dalam quantity specific (tiered pricing)
- **Bundle Price** — prices spesial for paket products
- **Buy X Get Y** — buy products specific, can products other with prices khusus
- **Customer Scope** — promo can dibon top ofi for: all, walk-in, registered, member, or tier specific
- **Schedule** — promo can dijadwalkan with start/end date
- **Preview** — view impact promo senot yet checkout

### Customer Vouchers
- Voucher per customer with kode unik
- Minimum order, periode berlaku
- Voucher can redeemed in checkout

### Loyalty Program
- **Tiers**: Regular → Silver → Gold → Platinum
- **Points**: earn pointst per transactions, redeem for discount
- **Auto tier sync**: tier otomatis naik berdasarkan total belanja
- **Settings**: enable/disable earn & redeem, rate amount, pointst value

### Multi-Price List
- Price khusus per kelompok customers (all, walk-in, registered, member)
- Priority: the matching price list with the highest priority is used
- Price per products dalam price list

## Database

- `pricing_rules` + `pricing_rule_qty_breaks` + `pricing_rule_bundle_items` + `pricing_rule_buy_get_items`
- `customer_vouchers` (per customer)
- `loyalty_pointst_historyes` (earn/redeem trail)
- `price_lists` + `price_list_items`

## Pages and Route

| Route | Modul |
|-------|-------|
| `pricing-rules.index` | Pricing Rules (CRUD) |
| `pricing-rules.preview` | Preview promo |
| `customer-vouchers.*` | Voucher customer |
| `price-lists.index` | Price List (settings) |
| `price-lists.show` | Detail price list + edit prices |
| `settings.loyalty` | Loyalty settings |

## Pricing Flow in Checkout

1. Cart items → PricingService mengevaluasi all active rules
2. Rules diurutkan by priority → dimatcheskan with customer scope
3. Diskon dialokasikan per item → subtotal after promo
4. Voucher dicheck → loyalitas points redeem calculated
5. PPN added → grand total final

## Catatan

- Pricing rules can tumpang tindih — rule with priority lebih tinggi preferred
- Qty break: tier price berdasarkan quantity purchases products specific
- Bundle: prices spesial for set products that already ditentukan
- Buy X Get Y: buy item A → can discount for item B
