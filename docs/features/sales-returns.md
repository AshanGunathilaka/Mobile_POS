# Sales Returns

Back to the documentation index: `docs/README.md`

## Purpose

Corrects completed sales transactions through partial or full returns while keeping stock, profit, and receivables synchronized.

## Features Saat Ini

- create draft sales return from history transactions
- update return drafts
- complete returns
- cash refunds
- store credit
- restock to inventory
- receivable correction for `pay_later` transactions
- history sales returns

## Pages and Route

- `dashboard/transactions/history`
- `dashboard/sales-returns`
- `sales-returns.create`
- `sales-returns.store`
- `sales-returns.show`
- `sales-returns.update`
- `sales-returns.complete`

## Permission

- `sales-returns-access`
- `sales-returns-create`
- `sales-returns-complete`

## Alur User

1. user open history transactions
2. if the transaction still has returnable quantity, the return button appears
3. the user creates a return draft from the source transaction
4. the user selects return quantity, reason, and restock option
5. the user saves the draft
6. the user completes the return
7. the system updates stock, profit, and receivables when relevant

## Integrasi Data

- `sales_returns`
- `sales_return_items`
- `customer_credits`
- `transactions`
- `transaction_details`
- `profits`
- `receivables`
- `stock_mutations`

## Efek Bisnis Penting

- completed returns can add stock back
- returns on receivable transactions can reduce the total receivable
- overpayment from receivables can become a refund or customer credit

## Bon top ofan Saat Ini

- this feature depends on return table migrations
- exchange flow is not included
- shipping cost is not part of the return amount

## File Sentral

- `app/Http/Controllers/Apps/SalesReturnController.php`
- `resources/js/Pages/Dashboard/SalesReturns`
