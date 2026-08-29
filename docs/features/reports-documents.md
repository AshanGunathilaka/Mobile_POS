# Reports & Documents

Back to the documentation index: `docs/README.md`

## Purpose

Provides operational visibility through reports and print/share-ready documents.

## Features Saat Ini

- reports sales
- reports profit
- public transaction invoices and internal
- receipt thermal 58mm / 80mm
- shipping label
- PDF receivable
- PDF payable

## Pages and Route

- `dashboard/reports/sales`
- `dashboard/reports/profits`
- `pdf.transactions.invoice`
- `pdf.transactions.receipt`
- `pdf.transactions.shipping`
- `pdf.receivables.show`
- `pdf.payables.show`

## Permission

- `reports-access`
- `profits-access`
- document access follows the source module permissions such as `transactions-access`, `receivables-access`, and `payables-access`

## Alur User

1. user open reports sales or profit
2. users filter data
3. users open related transaction or financial documents
4. documents can be printed/shared

## Integrasi Data

- `transactions`
- `transaction_details`
- `profits`
- `receivables`
- `payables`
- `settings` for identitas toko

## Efek Bisnis Penting

- sales and profit reports depend on transaction data quality
- sales returns and inventory corrections can affect operational readings in related reports

## Bon top ofan Saat Ini

- reports focus more on basic operational needs
- not all advanced owner analytics available

## File Sentral

- `app/Http/Controllers/Reports/SalesReportController.php`
- `app/Http/Controllers/Reports/ProfitReportController.php`
- `app/Http/Controllers/DocumentController.php`
