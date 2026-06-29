/* ════════════════ MFG PILOTS — the library ════════════════
   Add a new pilot = add one object to PILOTS below.
   status: 'live'   → clickable card, counts toward "in the air"
           'soon'   → dimmed placeholder, not clickable
   gated:  true     → shows a small "password" hint on the card
*/
const PILOTS = [
  {
    code: 'P-01',
    name: "Sunday's Most Wanted",
    client: 'YouTube Sunday Ticket',
    blurb:
      "A contextual CTV engine for YouTube Sunday Ticket. Three live signals — geography, " +
      "day-emotion, and the most-wanted players in your market — render a different ad for every " +
      "city, every day. Only Sunday Ticket can resolve the blackout.",
    tags: ['Contextual CTV', 'YouTube', 'Gemini', 'Fantasy data'],
    url: 'https://ytst.mfgpilots.com/',
    status: 'live',
    gated: false,
    accent: '#ff3b3b',
    accent2: '#e7b53c',
  },
  {
    code: 'P-02',
    name: 'Beckett',
    client: 'NBC Sports',
    blurb:
      "A Gemini × NBC Sports live-contextual concept. The spot reads the live broadcast moment and " +
      "composites creative that belongs to what's happening on screen, right now — context-aware " +
      "advertising for live sports.",
    tags: ['Live Contextual', 'NBC Sports', 'Gemini', 'CTV'],
    url: 'https://nbcu.mfgkessel.com/gate',
    status: 'live',
    gated: true,
    accent: '#4d8dff',
    accent2: '#36e0d0',
  },
  {
    code: 'P-03',
    name: 'World Cup HQ',
    client: 'FIFA World Cup 2026',
    blurb:
      "A live brand command center for the 2026 World Cup. One hub for all 104 matches, a real-time " +
      "social-sentiment heatmap, breaking news, market-by-market reactive briefings, and a creative " +
      "asset repository — wired to Genius Sports data and an on-call Gemini assistant.",
    tags: ['Brand command', 'Live data', 'Social pulse', 'Gemini'],
    url: 'https://mfgworldcup.com/',
    status: 'live',
    gated: false,
    accent: '#2fbf6b',
    accent2: '#f0b429',
  },
];

/* ── render ── */
const grid = document.getElementById('pilotGrid');

function cardHTML(p) {
  const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');
  const isLive = p.status === 'live';
  const statusLabel = isLive ? 'Live' : 'In dev';
  const gateChip = p.gated
    ? `<span class="card__gate" title="Password-protected preview">🔒 gated</span>`
    : '';
  const cta = isLive
    ? `<span class="card__cta">Fly this pilot <i>→</i></span>`
    : `<span class="card__cta card__cta--soon">Cleared soon</span>`;

  const inner = `
    <div class="card__glow" aria-hidden="true"></div>
    <div class="card__top">
      <span class="card__code">${p.code}</span>
      <span class="card__status card__status--${p.status}">
        <span class="card__status-dot"></span>${statusLabel}
      </span>
    </div>
    <div class="card__client">${p.client}${gateChip}</div>
    <h3 class="card__name">${p.name}</h3>
    <p class="card__blurb">${p.blurb}</p>
    <div class="card__tags">${tags}</div>
    ${cta}
  `;

  if (isLive) {
    return `<a class="card card--live" href="${p.url}" target="_blank" rel="noopener"
              style="--ac:${p.accent};--ac2:${p.accent2}">${inner}</a>`;
  }
  return `<div class="card card--soon" style="--ac:${p.accent || '#5c6678'};--ac2:${p.accent2 || '#5c6678'}">${inner}</div>`;
}

function render() {
  grid.innerHTML = PILOTS.map(cardHTML).join('');

  // a couple of "runway" placeholders so the library reads as a growing collection
  for (let i = 0; i < 2; i++) {
    const slot = document.createElement('div');
    slot.className = 'slot';
    slot.innerHTML = `<span class="slot__plus">+</span><span class="slot__txt">Next pilot on the runway</span>`;
    grid.appendChild(slot);
  }
}

/* ── live count, animated ── */
function animateCount() {
  const liveN = PILOTS.filter((p) => p.status === 'live').length;
  const el = document.getElementById('liveCount');
  let n = 0;
  const tick = () => {
    n++;
    el.textContent = n;
    if (n < liveN) setTimeout(tick, 220);
  };
  tick();
}

render();
animateCount();
