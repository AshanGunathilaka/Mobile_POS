# Audit Logs

Back to the documentation index: `docs/README.md`

## Purpose

Provides an activity trail for important changes in sensitive modules so developers and admins can trace changes.

## Features Saat Ini

- list audit log
- filter by user, module, event, date, and keyword
- detail audit log
- before / after payload
- meta addan
- IP address and user agent

## Pages and Route

- `dashboard/audit-logs`
- `audit-logs.show`

## Permission

- `audit-logs-access`

## Modul that Sudah Terintegrasi

Audit logs are currently used for several important actions such as:

- payment settings update
- cashier shift open / close / force close
- sales return create / update / complete
- confirmation payments transactions
- and other admin modules that call `AuditLogService`

## Integrasi Data

- `audit_logs`
- relationship to `users`
- relationship polymorphic to audited model when available

## Efek Bisnis Penting

- audit log not pengganti authorization
- audit log helps analyze changes, especially on configuration, transactions, and inventory-adjacent flow

## Bon top ofan Saat Ini

- coverage event depends on controller/service that explicitly calls `AuditLogService`
- not all CRUD otomatis recorded

## File Sentral

- `app/Http/Controllers/Apps/AuditLogController.php`
- `app/Services/AuditLogService.php`
