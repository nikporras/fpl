# El Dorado CO

FPL companion PWA. Opens on a built-in GW8 snapshot; goes live once a Worker URL and manager ID are set.

## Deploy (GitHub Pages)
1. Push this folder to a repo, enable Pages from the main branch root.
2. Open the URL on your phone, Add to Home Screen.

## Go live
1. Cloudflare → Workers & Pages → Create Worker → paste `worker.js` → Deploy.
2. In the app, tap the gear: enter the Worker URL and your FPL manager ID (the number in your points page URL).
3. Tap "Go live". Data refreshes every 60 s while open; last live state is kept for offline.

Files: `index.html` (app), `manifest.json`, `sw.js` (offline shell), `icon.svg`, `worker.js` (proxy, not served by Pages).
