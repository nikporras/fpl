// Cloudflare Worker: CORS proxy for the FPL API. Paste into a new Worker and deploy.
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = "https://fantasy.premierleague.com/api" + url.pathname + url.search;
    const upstream = await fetch(target, {
      headers: { "User-Agent": "Mozilla/5.0" },
      cf: { cacheTtl: 60, cacheEverything: true }
    });
    const headers = new Headers(upstream.headers);
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Cache-Control", "public, max-age=60");
    return new Response(upstream.body, { status: upstream.status, headers });
  }
};
