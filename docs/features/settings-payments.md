# Settings & Payments

Back to the documentation index: `docs/README.md`

## Purpose

Manages configuration bisnis and payments that used aplikasi secara operational.

## Features Saat Ini

- payment gateway settings
- bank account management
- store profile settings
- target sales

## Pages and Route

- `dashboard/settings/payments`
- `dashboard/settings/bank-accounts`
- `dashboard/settings/store`
- `dashboard/settings/target`

## Permission

- `payment-settings-access`
- `dashboard-access` for store profile and target

## Alur User

1. admin configures gateway payments
2. admin adds active bank accounts
3. admin configures store profile
4. admin mengisi target sales

## Integrasi Data

- `payment_settings`
- `bank_accounts`
- `settings`
- transactions and receivable/payable payment that uses bank account

## Efek Bisnis Penting

- payment gateway settings affects checkout
- bank account aktif affects transfer manual and payments other financial
- `APP_URL` that is wrong can make webhooks not usable

## Bon top ofan Saat Ini

- payment gateway still requires configuration provider outside the application
- warning webhook ditampilkan, remaini deployment publik remain tanggung jawab environment

## File Sentral

- `app/Http/Controllers/Apps/PaymentSettingController.php`
- `app/Http/Controllers/Apps/BankAccountController.php`
- `app/Http/Controllers/Apps/SettingController.php`
