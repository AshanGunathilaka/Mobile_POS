# RBAC, Users, Roles

Back to the documentation index: `docs/README.md`

## Purpose

Manages role- and permission-based access control for all dashboard modules.

## Features Saat Ini

- user management
- role management
- permission list
- routes protection with middleware permission
- permission map is shared with the frontend through Inertia

## Pages and Route

- `dashboard/users`
- `dashboard/roles`
- `dashboard/permissions`

## Permission Umum

Setiap modul uses permission sendiri, contohnya:

- `transactions-access`
- `sales-returns-*`
- `stock-opnames-*`
- `cashier-shifts-*`
- `audit-logs-access`

## Alur Otorisasi

1. permissions are seeded in `PermissionSeeder`
2. roles are created in `RoleSeeder`
3. default users are created in `UserSeeder`
4. routes uses middleware `permission:*`
5. frontend membaca map permission from `HandleInertiaRequests`

## Catatan Super Admin

- user `super-admin` receives the `super-admin` role
- backend treats the `super-admin` role as a consistent permission bypass for `can`, `canAny`, and Spatie middleware
- the seeder also syncs permissions to the default admin user
- cache permission Spatie must be reset during seeding agar permission baru read consistently
- role lama `permission-access` normalized to `permissions-access` during seeding so RBAC naming is unambiguous

## Integrasi Frontend

Frontend membaca:

- `auth.permissions`
- `auth.super`

This is used for display or hide specific menus and actions.

Helper frontend main:

- `resources/js/Utils/authorization.js`
- `resources/js/Utils/Permission.jsx`

## Bon top ofan Saat Ini

- backend remains the primary source of truth
- frontend is only for UI gating, not final security

## File Sentral

- `database/seeders/PermissionSeeder.php`
- `database/seeders/RoleSeeder.php`
- `database/seeders/UserSeeder.php`
- `app/Http/Middleware/HandleInertiaRequests.php`
- `resources/js/Utils/Menu.jsx`
