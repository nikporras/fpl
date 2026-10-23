# FPL APP

FPL companion PWA: live gameweek points, squad pitch, fixtures ledger and a season strip, with prev/next navigation through past gameweeks.

Opens on a built-in sample team. Tap **Add team**, enter an FPL manager ID (the number in the points page URL, `fantasy.premierleague.com/entry/<ID>/event/8`) and the app switches to that team's live data. Several teams can be saved on one device and switched from the team name in the top bar.

## Deploy (GitHub Pages)
1. Push this folder to a repo, enable Pages from the main branch root.
2. Open the URL on your phone, Add to Home Screen.

## The API proxy
The FPL API has no CORS headers, so the app reads it through a Cloudflare Worker (`worker.js`). The default Worker URL is baked into `index.html` as `DEFAULT_PROXY`; anyone using the app shares it. To run your own: Cloudflare → Workers & Pages → Create Worker → paste `worker.js` → Deploy, then change `DEFAULT_PROXY` or enter the URL under Settings on a device.

Files: `index.html` (app), `manifest.json`, `sw.js` (offline shell, network first), `icon.svg`, `worker.js` (proxy, not served by Pages).
