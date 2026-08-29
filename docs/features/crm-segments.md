# CRM & Customer Segments

Back to the documentation index: `docs/README.md`

## Purpose

Customer segmentation, campaign automation, and reminders to increase engagement and collections.

## Features Saat Ini

### Customer Segments
- Manual: admin adds customers to segments
- Auto: segment berdasarkan aturan (High Spender, Frequent Buyer, Inactive, Credit Customer, Overdue)
- Rule config: spending threshold, frequency, last purchase, receivables status
- Segment membership track: source (manual/auto), matched_at

### Campaigns
- Create campaign with filter audiens (segmen)
- Process campaign: generate log per customer
- Campaign types: reminder, promo, follow-up
- Share invoice via WhatsApp link
- Cancel campaign if dineedkan

### Reminders
- Due-soon receivable reminder (3 hari senot yet due date)
- Overdue receivable reminder
- Repeat order reminder for customer that already lama not belanja

## Database

- `customer_segments` — master segment
- `customer_segment_memberships` — pivot customer ↔ segment
- `customer_campaigns` — campaign definition
- `customer_campaign_logs` — per-customer campaign tracking
- `crm_reminders` — reminder definitions

## Pages and Route

| Route | Fungsi |
|-------|--------|
| `customer-segments.*` | CRUD segments |
| `crm-campaigns.*` | CRUD campaigns + process/cancel |
| `crm-reminders.index` | Daftar reminders |

## Permission

| Permission | Untuk apa |
|-----------|-----------|
| `customer-segments-access` | View segments |
| `customer-segments-create` | Create segment |
| `customer-segments-update` | Edit segment |
| `customer-segments-delete` | Delete segment |
| `crm-campaigns-access` | View campaigns |
| `crm-campaigns-create` | Create campaign |
| `crm-campaigns-update` | Edit, process, cancel campaign |
| `crm-campaigns-delete` | Delete campaign |
| `crm-reminders-access` | View reminders |

## Alur Campaign

1. Create segment (manual/auto)
2. Create campaign → select audiens filter
3. Process campaign → system generate log per customer
4. Manual: mark sent/skip per log
5. Customer menerima notifikasi (via WhatsApp link or manual follow-up)
