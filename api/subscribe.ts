
// api/subscribe.ts
// Quita las quejas de TS si usas checks estrictos:
// /// <reference types="node" />

type Req = {
    method?: string;
    body?: any;
    headers?: Record<string, string | undefined>;
  };
  type Res = {
    setHeader: (k: string, v: string) => void;
    status: (n: number) => Res;
    json: (b: any) => void;
    end: () => void;
  };
  
  const BREVO_API = 'https://api.brevo.com/v3/contacts';
  
  export default async function handler(req: Req, res: Res) {
    // CORS básico
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  
    try {
      const { email, attributes, updateEnabled = true, listId } = req.body || {};
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email is required' });
      }
  
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailOk) return res.status(400).json({ error: 'Invalid email' });
  
      const listIds = [Number(listId ?? process.env.BREVO_LIST_ID)].filter(Boolean);
      if (!listIds.length) return res.status(500).json({ error: 'Missing BREVO_LIST_ID' });
  
      const payload = {
        email,
        listIds,
        updateEnabled,
        attributes: attributes || {},
        emailBlacklisted: false,
        smsBlacklisted: false,
      };
  
      const r = await fetch(BREVO_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || '',
        },
        body: JSON.stringify(payload),
      });
  
      if (!r.ok) {
        const errBody = await r.json().catch(() => ({}));
        const code = String(errBody?.code ?? '').toLowerCase();
        if (code.includes('duplicate') || code.includes('contact_already_exist')) {
          const up = await fetch(`${BREVO_API}/${encodeURIComponent(email)}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'api-key': process.env.BREVO_API_KEY || '',
            },
            body: JSON.stringify({ listIds, attributes: payload.attributes }),
          });
          if (!up.ok) {
            const upBody = await up.json().catch(() => ({}));
            return res.status(502).json({ error: 'Brevo update failed', details: upBody });
          }
          return res.status(200).json({ ok: true, updated: true });
        }
        return res.status(r.status).json({ error: 'Brevo create failed', details: errBody });
      }
  
      return res.status(200).json({ ok: true, created: true });
    } catch (e: any) {
      return res.status(500).json({ error: 'Internal error', details: e?.message });
    }
  }
  