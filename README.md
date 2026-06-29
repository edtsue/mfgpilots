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

## Stack

Vanilla HTML / CSS / JS. Fonts: Anton / Oswald / Archivo. No dependencies, no framework, no build.
Deploys as a static site on Vercel.

## Files

- `index.html` — the hub shell (hero, library section, about)
- `app.js` — the `PILOTS` data + card renderer
- `styles.css` — the design system
- `assets/favicon.svg` — paper-plane mark
