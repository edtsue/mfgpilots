/* ════════════════════════════════════════════════════════════════════
   POST /api/gate  { password, remember }  → sets the access cookie when it
   matches the GATE_PW env var. The cookie stores a one-way salted hash of
   the password, never the password itself; middleware.js verifies it by
   recomputing the same hash, so no separate signing secret is needed.

   remember:true → persistent 3-day cookie; otherwise a session cookie that
   dies with the browser.
   ════════════════════════════════════════════════════════════════════ */
import { createHash, timingSafeEqual } from 'node:crypto';

export const COOKIE = 'mfgp_gate';
export const REMEMBER_SECONDS = 60 * 60 * 24 * 3; // 3 days

const tokenFor = (secret) => createHash('sha256').update('mfgpilots:' + secret).digest('hex');

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'method' });
  }

  const secret = (process.env.GATE_PW || process.env.gate_pw || '').trim();
  // No password configured → site is open; nothing to gate.
  if (!secret) return res.status(200).json({ ok: true, open: true });

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const pw = (body && body.password) || '';

  // constant-time compare so the endpoint can't be timing-probed
  const a = Buffer.from(String(pw));
  const b = Buffer.from(secret);
  const ok = a.length === b.length && timingSafeEqual(a, b);
  if (!ok) return res.status(401).json({ ok: false, error: 'bad' });

  const base = `${COOKIE}=${tokenFor(secret)}; Path=/; HttpOnly; Secure; SameSite=Lax`;
  const remember = !!(body && body.remember);
  res.setHeader('Set-Cookie', remember ? `${base}; Max-Age=${REMEMBER_SECONDS}` : base);
  return res.status(200).json({ ok: true });
}
