# Member Management

Back to the documentation index: `docs/README.md`

## Purpose

Provides a complete member module on top of the `customers` and `loyalty` foundation without creating a separate entity from the core customer model.

## Features Saat Ini

- list member baru from dashboard
- list member cepat from POS
- upgrade regular customers into members
- member search by name and member number
- status active/inactive member without deleting history
- transaction history, points, vouchers, and member segments
- integrasi benefit member with pricing rules, loyalty points, and voucher customer

## Pages and Route

- `dashboard/members`
- `members.index`
- `members.create`
- `members.store`
- `members.show`
- `members.edit`
- `members.update`
- `customers.upgrade-member`
- `customers.storeAjax`

## Permission

Modul this reuse permission customer that already exists:

- `customers-access`
- `customers-create`
- `customers-edit`
- `customers-delete`

## Alur User

1. admin menlistkan member from dashboard or POS
2. sistem otomatis issue `member_code` bila customer not yet punya
3. member can receive benefit pricing, voucher, and earn/redeem points
4. if benefit need stopped, member only deactivated without deleting customer and history

## Integrasi Data

- `customers`
- `transactions`
- `loyalty_pointst_historyes`
- `customer_vouchers`
- `pricing_rules`

## Catatan Operasional

- inactive member status keeps the member number and history so audit and CRM history are not lost
- POS customer picker supports searching by `name`, `phone`, and `member_code`
- upgrading a member from POS only updates loyalty status and does not create a new customer

## File Sentral

- `app/Http/Controllers/Apps/MemberController.php`
- `app/Http/Controllers/Apps/CustomerController.php`
- `resources/js/Pages/Dashboard/Members`
- `resources/js/Components/POS/CustomerSelect.jsx`
- `resources/js/Components/POS/AddCustomerModal.jsx`
