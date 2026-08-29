# Customers & Regions

Back to the documentation index: `docs/README.md`

## Purpose

Provides richer customer master data than basic POS, including Indonesian regional addresses and transaction history.

## Features Saat Ini

- CRUD customer
- create customer from dashboard
- create customer via AJAX from POS
- data address lengkap with wilayah Indonesia
- history transactions customer

## Pages and Route

- `dashboard/customers`
- `customers.storeAjax`
- `customers.history`
- `regions.regencies`
- `regions.districts`
- `regions.villages`

## Permission

- `customers-access`
- `customers-create`
- `customers-edit`
- `customers-delete`
- history customer uses `transactions-access`

## Alur User

1. users create or edit customer
2. region options loaded hierarchically from province to village
3. customer can used saat checkout
4. history transactions customer can dibuka from dashboard

## Integrasi Data

- `customers`
- customer-related transactions
- data wilayah from `laravolt/indonesia`

## Bon top ofan Saat Ini

- customer without data lengkap remain can used transactions
- history customer focuses on history transactions, not loyalty

## File Sentral

- `app/Http/Controllers/Apps/CustomerController.php`
- `app/Http/Controllers/RegionController.php`
- `resources/js/Pages/Dashboard/Customers`
