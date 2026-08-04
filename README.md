# MFG Pilots

The Media Futures Group lab — a growing **library of interactive concept prototypes** for the
future of media & advertising. Each pilot is a working pitch artifact (not a deck) living on its
own subdomain. This repo is the hub that catalogs them.

🔗 **mfgpilots.com**

## The library

| # | Pilot | Client | Status | URL |
|---|-------|--------|--------|-----|
| P-01 | Sunday's Most Wanted | YouTube Sunday Ticket | Live | https://ytst.mfgpilots.com/ |
| P-02 | Beckett | NBC Sports | Live (gated) | https://nbcu.mfgkessel.com/gate |
| P-03 | World Cup HQ | FIFA World Cup 2026 | Live | https://mfgworldcup.com/ |
| P-04 | Kessel | Media Futures Group | Live (gated) | https://mfgkessel.com/ |

## Add a new pilot

This is a static site (HTML/CSS/JS — no build step). To list a new pilot, add **one object** to the
`PILOTS` array in [`app.js`](app.js):

```js
{
  code: 'P-03',
  name: 'Pilot name',
  client: 'Client / platform',
  blurb: 'One-paragraph description of the concept.',
  tags: ['Tag', 'Tag'],
  url: 'https://your-subdomain.mfgpilots.com/',
  status: 'live',      // 'live' = clickable + counted; 'soon' = dimmed placeholder
  gated: false,        // true shows a 🔒 gated chip
  accent: '#4d8dff',   // card hover accent
  accent2: '#36e0d0',
}
```

The card, the hover styling, and the "pilots in the air" counter all update automatically.

## Access gate

The hub is password-protected. Edge middleware rewrites any unauthenticated request to
`/gate.html`; `POST /api/gate` checks the submitted code against the **`GATE_PW`** environment
variable and, on a match, sets an `mfgp_gate` cookie holding `sha256('mfgpilots:' + GATE_PW)` —
never the password itself. The middleware re-derives that hash per request, so there is exactly
one secret to manage.

- **Remember me** → persistent cookie, `Max-Age` 3 days. Unchecked → session cookie.
- **Rotating `GATE_PW`** invalidates every cookie already issued.
- **`GATE_PW` unset** → fail-open, so local dev and previews aren't bricked.
- Only `/gate.html`, `/api/gate` and `/assets/*` bypass the gate.

Set the password in the Vercel project (Settings → Environment Variables → `GATE_PW`) and
redeploy. Locally: `GATE_PW=… vercel dev`.

## Stack

Vanilla HTML / CSS / JS. Blueprint theme (Space Mono, graph-paper grid, hard hairlines, ALL CAPS,
per-card accent invert on hover). No framework, no build — the one dependency is `@vercel/edge`
for the gate. Deploys as a static site on Vercel.

## Files

- `index.html` — the hub shell (hero, library section, about)
- `app.js` — the `PILOTS` data + card renderer
- `styles.css` — the design system
- `gate.html` — the password gate (self-contained; `styles.css` sits behind the gate)
- `middleware.js` — edge gate: rewrites unauthenticated requests to `gate.html`
- `api/gate.js` — password check + cookie issue
- `assets/favicon.svg` — paper-plane mark
