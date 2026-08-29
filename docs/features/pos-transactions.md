# POS & Transactions

Back to the documentation index: `docs/README.md`

## Daftar Isi

- Purpose
- Features Saat Ini
- Pages and Route
- Permission
- Alur User
- Integrasi Data
- Bon top ofan Saat Ini
- File Sentral

## Purpose

Provides a fast cashier flow for product search, cart management, checkout, hold/resume, and transaction document distribution.

## Features Saat Ini

- search products by barcode / keyword
- cart multi-item
- update qty cart
- hold transaction
- resume held cart
- clear held cart
- checkout with cash, bank transfer, Midtrans, Xendit, and pay later
- print invoice / receipt / shipping label
- share public invoices
- add customer directly from POS

## Pages and Route

- `dashboard/transactions`
- `dashboard/transactions/history`
- `transactions.searchProduct`
- `transactions.addToCart`
- `transactions.updateCart`
- `transactions.destroyCart`
- `transactions.hold`
- `transactions.resume`
- `transactions.clearHold`
- `transactions.held`
- `transactions.store`
- `transactions.print`
- `transactions.public`

## Permission

- `transactions-access`

Operasi transactional specific juga requires middleware `active_shift`.

## Alur User

1. cashier open pages transactions
2. if a shift is active, the cashier can search products and build a cart
3. carts can be held and resumed
4. checkout creates transactions, detail, profit, and reduction stock
5. if `pay_later`, the system creates receivable
6. the user is redirected to printable documents / invoices

## Integrasi Data

- `transactions`
- `transaction_details`
- `profits`
- `receivables`
- `bank_accounts`
- `payment_settings`

## Bon top ofan Saat Ini

- cart and checkout operations depend on an active shift
- payment gateway depends on configuration valid
- checkout remains the main source of sales stock changes

## File Sentral

- `routess/web.php`
- `app/Http/Controllers/Apps/TransactionController.php`
- `resources/js/Pages/Dashboard/Transactions`
