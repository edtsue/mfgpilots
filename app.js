/* ════════════════ MFG PILOTS — the library ════════════════
   Add a new pilot = add one object to PILOTS below.
   All cards are clickable and full-color; status only changes the badge + button label.
   status: 'live'     → badge LIVE, counts toward "in the air"
           'migrated' → badge MIGRATED (moved/rolled up), not counted as live
           'soon'     → badge IN DEV, not counted as live
   gated:  true       → shows a small "password" hint on the card
*/
const PILOTS = [
  {
    code: 'P-01',
    name: "Sunday M.I.A.",
    client: 'YouTube Sunday Ticket',
    blurb:
      "A contextual CTV engine for YouTube Sunday Ticket. Three live signals — geography, " +
      "day-emotion, and the most-wanted players in your market — render a different ad for every " +
      "city, every day. Only Sunday Ticket can resolve the blackout.",
    tags: ['Contextual CTV', 'YouTube', 'Gemini', 'Fantasy data'],
    url: 'https://ytst.mfgpilots.com/',
    status: 'soon',
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
    status: 'soon',
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
  {
    code: 'P-04',
    name: 'Kessel',
    client: 'Media Futures Group',
    blurb:
      "An AI-powered competitive-intelligence dashboard tracking the AI-assistant category — media " +
      "spend, creative strategy, brand positioning and audience across Gemini, ChatGPT and Claude. " +
      "Harmonizes CHARM, BAV, Sensor Tower and deep-research intel across India, UK and US markets.",
    tags: ['Competitive intel', 'Media spend', 'Multi-market', 'Gemini'],
    url: 'https://mfgkessel.com/',
    status: 'migrated',
    gated: true,
    accent: '#e0529c',
    accent2: '#8b5cf6',
  },
  {
    code: 'P-05',
    name: 'Multiview Smart Trigger',
    client: 'YouTube TV × FIFA World Cup 2026',
    blurb:
      "A real-time CTV ad engine for YouTube TV during the 2026 World Cup. A proximity engine reads the " +
      "Genius Sports feed and detects when major events — goals, red cards, injuries — strike across " +
      "concurrent group-stage matches at once, then fires creative urging fans to switch to multiview " +
      "and catch every game.",
    tags: ['Contextual CTV', 'YouTube TV', 'Live data', 'Multiview'],
    url: 'https://yttv-fwc.mfgpilots.com/',
    status: 'live',
    gated: true,
    accent: '#ff0033',
    accent2: '#ffffff',
  },
];

/* ── render ── */
const grid = document.getElementById('pilotGrid');

function cardHTML(p) {
  const isMigrated = p.status === 'migrated';
  const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');
  const status = p.status === 'live'
    ? `<span class="card__status">LIVE</span>`
    : isMigrated
    ? `<span class="card__status card__status--migrated">MIGRATED</span>`
    : `<span class="card__status card__status--soon">IN DEV</span>`;
  const gate = p.gated ? `<span class="card__gate">CLEARANCE REQ</span>` : '';
  const run = p.status === 'live'
    ? `<span class="card__run">RUN <span class="arr">&rarr;</span></span>`
    : `<span class="card__run">OPEN <span class="arr">&rarr;</span></span>`;

  const inner = `
    <div class="card__bar">
      <span class="card__code">[${p.code}]</span>
      ${status}
    </div>
    <div class="card__client">${p.client}${gate ? ' ' + gate : ''}</div>
    <h2 class="card__name">${p.name}</h2>
    <p class="card__blurb">${p.blurb}</p>
    <div class="card__tags">${tags}</div>
    ${run}
  `;

  return `<a class="card card--live" href="${p.url}" target="_blank" rel="noopener" style="--ac:${p.accent}">${inner}</a>`;
}

function render() {
  grid.innerHTML = PILOTS.map(cardHTML).join('');
  const live = PILOTS.filter((p) => p.status === 'live').length;
  const meta = document.getElementById('meta');
  if (meta) {
    meta.textContent =
      `${String(PILOTS.length).padStart(2, '0')} · ${String(live).padStart(2, '0')} LIVE`;
  }
}

render();
