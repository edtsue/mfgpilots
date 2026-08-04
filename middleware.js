/* ════════════════════════════════════════════════════════════════════
   Edge middleware — password gate for the whole hub.

   Unauthenticated requests are rewritten to /gate.html. Auth is a cookie
   holding sha256('mfgpilots:' + GATE_PW); the middleware recomputes that
   hash from the env var and compares, so the only secret is the single
   GATE_PW password — rotating it invalidates every issued cookie at once.
   If GATE_PW is unset the site is left open (fail-open) so local dev and
   previews aren't bricked.

   The matcher lets the gate page (/gate.html), the endpoint (/api/gate)
   and /assets/* (favicon, art the gate page may need) through
   unauthenticated; everything else requires the cookie.
   ════════════════════════════════════════════════════════════════════ */
import { rewrite, next } from '@vercel/edge';

export const config = {
  // Anchored ($) and dot-escaped on purpose: a loose `api/gate` would also
  // let a future /api/gateway through unauthenticated.
  matcher: ['/((?!api/gate$|gate\\.html$|assets/).*)'],
};

const COOKIE = 'mfgp_gate';

function readCookie(req, name) {
  const header = req.headers.get('cookie') || '';
  const m = header.match(new RegExp('(?:^|; )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[1]) : null;
}

async function tokenFor(secret) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('mfgpilots:' + secret));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

export default async function middleware(request) {
  const secret = (process.env.GATE_PW || process.env.gate_pw || '').trim();
  if (!secret) return next(); // no password configured → don't lock anyone out

  const cookie = readCookie(request, COOKIE);
  if (cookie && cookie === (await tokenFor(secret))) return next();

  return rewrite(new URL('/gate.html', request.url));
}
