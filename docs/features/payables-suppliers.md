# Payables & Suppliers

Back to the documentation index: `docs/README.md`

## Purpose

Handles supplier master data and supplier payable records with settlement.

## Features Saat Ini

- CRUD supplier
- list payables
- detail payable
- payments supplier payables
- payable status
- PDF payable

## Pages and Route

- `dashboard/suppliers`
- `dashboard/payables`
- `payables.show`
- `payables.pay`
- `pdf.payables.show`

## Permission

- `suppliers-access`
- `payables-access`
- `payables-pay`

## Alur User

1. admin/cashier manages supplier data
2. supplier payables are recorded in the payables module
3. payments are recorded gradually until fully paid
4. users can open payable details and documents

## Integrasi Data

- `suppliers`
- `payables`
- `payable_payments`
- `bank_accounts`

## Efek Bisnis Penting

- payables are not just master data; payable status determines operational liability visibility
- payable PDF documents are available for administration

## Bon top ofan Saat Ini

- not yet connected to formal purchase orders
- no supplier return flow yet

## File Sentral

- `app/Http/Controllers/Apps/SupplierController.php`
- `app/Http/Controllers/Apps/PayableController.php`
- `resources/js/Pages/Dashboard/Suppliers`
- `resources/js/Pages/Dashboard/Payables`
