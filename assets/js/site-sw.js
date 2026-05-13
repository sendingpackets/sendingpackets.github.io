const TIMEOUT_MS = 1250;
const CHECK_INTERVAL_MS = 500;
const OBLITERATE_URL = "/AD.html";

const lastPing = new Map();
const known = new Set();
const adClients = new Set();
const hidden = new Set();

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  if (!event.source) return;
  const id = event.source.id;
  const data = event.data;

  if (data === "i-am-ad") {
    adClients.add(id);
    known.delete(id);
    lastPing.delete(id);
  } else if (data === "ping") {
    known.add(id);
    lastPing.set(id, Date.now());
  } else if (data === "page-hidden") {
    hidden.add(id);
  } else if (data === "page-visible") {
    hidden.delete(id);
    if (known.has(id)) lastPing.set(id, Date.now());
  }
});

setInterval(async () => {
  let clients;
  try {
    clients = await self.clients.matchAll({ type: "window" });
  } catch (_) {
    return;
  }

  const now = Date.now();
  const liveIds = new Set(clients.map((c) => c.id));

  for (const id of known)     if (!liveIds.has(id)) { known.delete(id); lastPing.delete(id); }
  for (const id of adClients) if (!liveIds.has(id)) adClients.delete(id);
  for (const id of hidden)    if (!liveIds.has(id)) hidden.delete(id);

  for (const client of clients) {
    if (adClients.has(client.id)) continue;
    if (hidden.has(client.id)) continue;
    if (!known.has(client.id)) continue;

    const last = lastPing.get(client.id) || 0;
    if (now - last > TIMEOUT_MS) {
      known.delete(client.id);
      lastPing.delete(client.id);
      try { await client.navigate(OBLITERATE_URL); } catch (_) {}
    }
  }
}, CHECK_INTERVAL_MS);
