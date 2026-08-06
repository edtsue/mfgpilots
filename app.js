/* ════════════════ MFG PILOTS — the library ════════════════
   Add a new pilot = add one object to PILOTS below.
   All cards are clickable and full-color; status only changes the badge + button label.
   status: 'live'     → badge LIVE, counts toward "in the air"
           'complete' → badge COMPLETE (built & delivered), not counted as live
           'migrated' → badge MIGRATED (moved/rolled up), not counted as live
           'soon'     → badge IN DEV, not counted as live
   gated:  true       → shows a small "password" hint on the card
   outdated: true     → shows an "OUTDATED" stamp on the card
*/
const PILOTS = [
  {
    code: 'P-01',
    name: 'As Seen In Scenes',
    client: 'Googlebook × Rembrand',
    blurb:
      "AI-native product placement for Google's first AI laptop. Rembrand's in-content AI drops the " +
      "Googlebook into the speed-of-thought scenes of premium shows — fixed, photoreal, identified by the " +
      "Glowbar — without ever touching production. Own a show, then wrap it with the ad inventory around it.",
    tags: ['In-content AI', 'Product placement', 'Rembrand', 'Googlebook'],
    url: 'https://gbseen.mfgpilots.com/',
    status: 'live',
    gated: true,
    accent: '#8b5cf6',
    accent2: '#22d3ee',
  },
  {
    code: 'P-02',
    name: "Set Your Sunday",
    client: 'YouTube Sunday Ticket × Fantasy',
    blurb:
      "A contextual CTV engine for YouTube Sunday Ticket. Genius Sports data surfaces the Elite Eight — " +
      "the week's top-projected must-starts — and one ad reskins daily to meet each fantasy manager at that " +
      "day's decision, from waivers to lineup lock. Sunday Ticket is how they watch all eight play: every " +
      "game, out-of-market, in Fantasy View.",
    tags: ['Contextual CTV', 'YouTube Sunday Ticket', 'Fantasy', 'Genius Sports'],
    url: 'https://ytst.mfgpilots.com/',
    status: 'soon',
    gated: false,
    outdated: true,
    accent: '#ff3b3b',
    accent2: '#e7b53c',
  },
  {
    code: 'P-03',
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
    code: 'P-04',
    name: 'World Cup HQ',
    client: 'FIFA World Cup 2026',
    blurb:
      "A live brand command center for the 2026 World Cup. One hub for all 104 matches, a real-time " +
      "social-sentiment heatmap, breaking news, market-by-market reactive briefings, and a creative " +
      "asset repository — wired to Genius Sports data and an on-call Gemini assistant.",
    tags: ['Brand command', 'Live data', 'Social pulse', 'Gemini'],
    url: 'https://mfgworldcup.com/',
    status: 'complete',
    gated: false,
    accent: '#2fbf6b',
    accent2: '#f0b429',
  },
  {
    code: 'P-05',
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
    code: 'P-06',
    name: 'Multiview Smart Trigger',
    client: 'YouTube TV × FIFA World Cup 2026',
    blurb:
      "A real-time CTV ad engine for YouTube TV during the 2026 World Cup. A proximity engine reads the " +
      "Genius Sports feed and detects when major events — goals, red cards, injuries — strike across " +
      "concurrent group-stage matches at once, then fires creative urging fans to switch to multiview " +
      "and catch every game.",
    tags: ['Contextual CTV', 'YouTube TV', 'Live data', 'Multiview'],
    url: 'https://yttv-fwc.mfgpilots.com/',
    status: 'complete',
    gated: true,
    accent: '#ff0033',
    accent2: '#ffffff',
  },
  {
    code: 'P-07',
    name: 'LTP Brief',
    client: 'Long-Term Planning',
    blurb:
      "A collaborative brief-building instrument that walks a team through a structured five-step flow " +
      "from raw answers to a finished document. An interview mode gathers input, an on-call Gemini " +
      "assistant refines it, and 'rebuild from answers' regenerates the draft on demand — then exports " +
      "clean to Google Docs for handoff.",
    tags: ['Brief builder', 'Guided flow', 'Gemini', 'Google Docs'],
    url: 'https://ltpbrief.mfgpilots.com/',
    status: 'live',
    gated: false,
    accent: '#38bdf8',
    accent2: '#a78bfa',
  },
  {
    code: 'P-08',
    name: 'Agatha',
    client: 'Gemini × Media Planning',
    blurb:
      "Drag creative onto a live media plan and see what it actually covers. Agatha reads each asset — " +
      "keyframes and audio for a film, the text of a script — then scores it against every line item for " +
      "thematic and audience fit. The plan lights green where the work belongs and red where it does not, " +
      "and every gap comes back with a written brief for what would fill it.",
    tags: ['Creative × media fit', 'Gemini', 'Coverage matrix', 'Gap briefs'],
    url: 'https://agatha.mfgpilots.com/',
    status: 'live',
    gated: true,
    accent: '#34a853',
    accent2: '#f9ab00',
  },
  {
    code: 'P-09',
    name: 'Gwen',
    client: 'Gemini × Audience Insight',
    blurb:
      "Text a synthetic respondent for her point of view. Gwen answers as women 18–34 and 18–49 on how " +
      "they watch, buy and scroll — and every number she says traces to a row in the GWI panel, checked " +
      "before you see it, so she tells you when she doesn't know. Tap her reply for the evidence, or " +
      "switch age to re-ask the same question of the other cohort.",
    tags: ['Synthetic audience', 'Gemini', 'GWI panel', 'Grounded answers'],
    url: 'https://gwen.mfgpilots.com/',
    status: 'live',
    gated: true,
    accent: '#c0567a',
    accent2: '#6d7cc4',
  },
  {
    code: 'P-10',
    name: 'Miranda B2B',
    client: 'Google B2B Partnerships',
    blurb:
      "A paid-media strategy sandbox for the Google B2B partner portfolio. A spotlight carousel, a " +
      "filterable opportunity inventory, a flight calendar, media-partner profiles and audience research " +
      "sit in one place — and an admin panel edits every one of them in place, so the plan stays current " +
      "without a rebuild.",
    tags: ['Paid media', 'Google B2B', 'Partner inventory', 'Audience research'],
    url: 'https://mirandab2b.mfgpilots.com/',
    status: 'live',
    gated: true,
    accent: '#4285f4',
    accent2: '#fbbc04',
  },
  {
    code: 'P-11',
    name: 'MFG Long Term Planning',
    client: 'Long-Term Planning',
    blurb:
      "The map the other planning pilots plug into. Four steps and eighteen subtasks, each declaring what " +
      "it hands to the next, so the process can be read forwards from a brief or backwards from a " +
      "deliverable. Give it a kickoff and a present date and it fits the work between them and says where " +
      "the schedule is already short. Gemini reads the best-practice note behind each subtask and asks the " +
      "questions that expose a decision nobody has made — then hands back a starting file for the " +
      "deliverable. LTP Brief, Gwen and Agatha are three of its modules.",
    tags: ['Process map', 'Dependency graph', 'Scheduling', 'Gemini'],
    url: 'https://ltpos.mfgpilots.com/',
    status: 'live',
    gated: true,
    accent: '#4285f4',
    accent2: '#34a853',
  },
  {
    code: 'P-12',
    name: 'LTP Strategy Discovery',
    client: 'Long-Term Planning',
    blurb:
      "Step two of the planning process, where a brief becomes an argument. Four cuts at the market — " +
      "category, culture, consumer, competition — wired into the single conclusion they exist to produce, " +
      "then the ideal and current consumer journeys with the gap lit between them, then two or three " +
      "from/to shifts that every later media bet has to answer to. Each shift has to name what it traces " +
      "back to, so a principle with nothing behind it cannot hide. Gemini interrogates the board but never " +
      "writes on it: it asks whether a sentence is an insight or just an observation, and which two cuts " +
      "contradict each other.",
    tags: ['4C', 'Consumer journey', 'Shifts', 'Gemini'],
    url: 'https://ltpstrategy.mfgpilots.com/',
    status: 'live',
    gated: false,
    accent: '#3be0c8',
    accent2: '#8b7bff',
  },
];

/* ── render ── */
const grid = document.getElementById('pilotGrid');

function cardHTML(p) {
  const isMigrated = p.status === 'migrated';
  const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join('');
  const status = p.status === 'live'
    ? `<span class="card__status">LIVE</span>`
    : p.status === 'complete'
    ? `<span class="card__status card__status--complete">COMPLETE</span>`
    : isMigrated
    ? `<span class="card__status card__status--migrated">MIGRATED</span>`
    : `<span class="card__status card__status--soon">IN DEV</span>`;
  const gate = p.gated ? `<span class="card__gate">CLEARANCE REQ</span>` : '';
  const outdated = p.outdated ? `<span class="card__outdated">OUTDATED</span>` : '';
  const run = p.status === 'live'
    ? `<span class="card__run">RUN <span class="arr">&rarr;</span></span>`
    : `<span class="card__run">OPEN <span class="arr">&rarr;</span></span>`;

  const inner = `
    <div class="card__bar">
      <span class="card__code">[${p.code}]</span>
      <span class="card__badges">${outdated}${status}</span>
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
