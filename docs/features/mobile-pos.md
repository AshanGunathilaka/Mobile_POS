# Mobile POS / PWA

Back to the documentation index: `docs/README.md`

## Purpose

POS access from tablet/phone with barcode scanner via camera, install to the home screen, and fullscreen mode.

## Features Saat Ini

### Camera Barcode Scanner
- Library: `html5-qrcode`
- Scan barcode via camera rear (environment-facing)
- Auto-search products setelah scan
- Modal fullscreen scanner — buka camera, scan, tutup otomatis
- Camera button in search bar POS

### Progressive Web App (PWA)
- `manifest.json` — name, icons, display standalone, theme color
- `sw.js` — service worker for cache asset + API master data
- Theme-color meta tag
- Install prompt to the home screen (Android Chrome)
- Support offline (cache-first for master data)

### Fullscreen Mode
- Fullscreen button in header POS
- Sembunyikan browser chrome
- Toggle incoming/outgoing fullscreen

### Touch Optimization
- All interactive element: `min-h-touch` (44px) and `min-w-touch`
- Gap safe antar tombol
- Layout responsive for tablet landscape

## File Terkait

| File | Fungsi |
|------|--------|
| `resources/js/Components/POS/BarcodeScanner.jsx` | Camera scanner component |
| `public/manifest.json` | PWA manifest |
| `public/sw.js` | Service worker |
| `resources/js/app.jsx` | SW registration |
| `resources/js/Layouts/POSLayout.jsx` | Fullscreen toggle |
| `resources/js/Context/OnlineStatusContext.jsx` | Online/offline detection |

## Cara Pakai

### Barcode Scanner
1. Klik ikon camera in search bar POS
2. Izinkan akses camera
3. Point the camera to barcode products
4. Scanner automatically searches products and close

### PWA Install
1. Open the app in Chrome Android
2. The "Add to Home Screen" prompt appears
3. Install it; the app opens without browser chrome

### Fullscreen
1. Klik ikon fullscreen in header POS
2. Browser incoming mode fullscreen
3. Click again for outgoing
