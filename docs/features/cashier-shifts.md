# Cashier Shifts

Back to the documentation index: `docs/README.md`

## Purpose

Controls cashier work sessions so cashier transactions have a clear shift context, including opening cash, closing cash, and operational summaries.

## Features Saat Ini

- open shift
- list shift
- detail shift
- close shift
- force close for authorized users
- summary of expected cash, actual cash, variance, transactions, and sales returns

## Pages and Route

- `dashboard/cashier-shifts`
- `cashier-shifts.store`
- `cashier-shifts.show`
- `cashier-shifts.close`

## Permission

- `cashier-shifts-access`
- `cashier-shifts-open`
- `cashier-shifts-close`
- `cashier-shifts-force-close`

## Alur User

1. cashier open shift with opening cash
2. specific transaction routess require an active shift
3. while the shift is active, transactions and sales returns are recorded in the shift context
4. when closing, the cashier enters actual cash
5. the system calculates variance and shift summary

## Integrasi Data

- `cashier_shifts`
- transactions cash / non-cash
- sales returns
- middleware `active_shift`

## Efek Bisnis Penting

- core transaction operations are blocked without an active shift
- shift closing is used for operational cash reconciliation

## Bon top ofan Saat Ini

- shifts are not intended as an approval workflow
- force close is limited to specific users

## File Sentral

- `app/Http/Controllers/Apps/CashierShiftController.php`
- `app/Services/CashierShiftService.php`
- `app/Http/Middleware/EnsureActiveCashierShift.php`
