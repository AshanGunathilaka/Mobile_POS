# Receivables

Back to the documentation index: `docs/README.md`

## Purpose

Records customer receivables from `pay_later` transactions and provides a gradual settlement flow.

## Features Saat Ini

- receivables list
- filter status, customer, invoice, due date
- receivable details
- payments partial
- status `unpaid`, `partial`, `paid`, `overdue`
- PDF receivable

## Pages and Route

- `dashboard/receivables`
- `receivables.show`
- `receivables.pay`
- `pdf.receivables.show`

## Permission

- `receivables-access`
- `receivables-pay`

## Alur User

1. `pay_later` checkout creates receivable
2. users monitor the receivables list
3. users record payments
4. the system updates `paid`, `remaining`, and `status`

## Integrasi Data

- `receivables`
- `receivable_payments`
- `transactions`
- `customers`
- `bank_accounts`

## Efek Bisnis Penting

- receivable payments also affect `payment_status` on related transactions
- sales returns can correct the total receivable if the return comes from a receivable transaction

## Bon top ofan Saat Ini

- no reminder otomatis eksternal
- no approval flow payments

## File Sentral

- `app/Http/Controllers/Apps/ReceivableController.php`
- `resources/js/Pages/Dashboard/Receivables`
