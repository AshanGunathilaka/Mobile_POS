# Getting Started

Back to the documentation index: `docs/README.md`

## Purpose

This guide helps new developers run the application from scratch until they can log in and access dashboard modules.

## Requirement Minimum

- PHP 8.3+ matching Laravel requirements 13
- Composer
- Node.js 18+ + npm
- MySQL / MariaDB
- ekstensi PHP standar Laravel
- Chrome/Chromium (for WhatsApp Gateway — optional)

## Langkah Setup

```bash
cp .env.example .env
composer install
npm install
php artisan key:generate
php artisan migrate --seed
php artisan storage:link
npm run dev
php artisan serve
```

## Recommended Bootstrapping Order

1. fill in database configuration in `.env`
2. run `php artisan migrate --seed`
3. run `php artisan storage:link`
4. run frontend with `npm run dev`
5. run server aplikasi
6. log in using the default account

## Default Login

- Admin: `arya@gmail.com` / `password`
- Cashier: `cashier@gmail.com` / `password`

## Seed Data

The main seeder creates:

- permission
- role
- user default
- payment setting awal
- sample data operational

Catatan penting:

- features that depend on new permissions should always be tested after `db:seed`
- if permissions look out of sync, log out and log in again after seeding completes

## After the Application Is Running

Cek minimal:

1. `dashboard/settings/store`
2. `dashboard/settings/payments`
3. `dashboard/settings/bank-accounts`
4. `dashboard/settings/target`

## Tips Validasi Cepat

- buka dashboard main
- open cashier transactions
- check history transactions
- check stock opname / cashier shift / audit logs if the feature migration exists

## Error Umum

- images do not appear: run `php artisan storage:link`
- payment webhooks do not run: check `APP_URL`
- new module error 500: check apakah migration feature already dirun
