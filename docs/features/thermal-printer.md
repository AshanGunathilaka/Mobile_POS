# Thermal Printer

Back to the documentation index: `docs/README.md`

## Purpose

Print receipts to printers thermal (ESC/POS protocol) directly from browser via WebUSB, or through server-side text generation.

## Features Saat Ini

### ThermalPrintService (Server-side)
- Generate teks receipt dalam format monospace
- Support 80mm (48 karakter) and 58mm (32 karakter)
- Format: header toko, invoice info, item list, subtotal, discount, PPN, total, payments, footer
- Output: plain text (`generateReceiptText`) and HTML (`generateReceiptHtml`)

### Thermal Print Route
- `GET /dashboard/documents/transactions/{invoice}/print/thermal` — HTML receipt
- Can be opened in tab baru for print via browser

### Printer Settings
- Paper size: 80mm / 58mm
- Auto-print toggle (automatically print after transactions)
- WebUSB: connect thermal printers by USB directly from the browser

### WebUSB Print Button
- Tombol "Thermal" in pages print transactions
- Fetch HTML receipt → buka tab baru siap print
- Can be connected to printer thermal USB via WebUSB API

## Route

| Route | Method | Fungsi |
|-------|--------|--------|
| `pdf.transactions.thermal` | GET | HTML receipt thermal |
| `settings.printer` | GET | Pages settings printer |
| `settings.printer.update` | POST | Save settings printer |

## Format Receipt (80mm)

```
            TOKO ANDA
        Jl. Contoh No. 123
        Telp: 021-123456
--------------------------------
No: TRX-XXXXXXXXXX
Tgl: 22/06/2026 14:30
Cashier: Arya
Customers: Umum
--------------------------------
Product A
2x @ 10.000          20.000
Product B
1x @ 15.000          15.000
--------------------------------
Subtotal             35.000
PPN                   3.850
--------------------------------
TOTAL                38.850
Tunai                50.000
Back              11.150
--------------------------------
        Receive kasih
```

## Catatan

- Untuk auto-print via USB: browser Chrome/Edge with WebUSB support
- Untuk print via network: use `NetworkPrintConnector` or `WindowsPrintConnector`
- Setting auto-print not yet integrated full with checkout flow
