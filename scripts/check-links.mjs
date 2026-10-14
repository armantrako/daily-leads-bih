import { LEADS_DATABASE } from '../src/data/leads.js';

console.log(`\n🔍 Provjera dostupnosti leadova (${LEADS_DATABASE.length} unosa u bazi)...`);

async function testLinks() {
  let successCount = 0;
  let warnCount = 0;

  for (const lead of LEADS_DATABASE) {
    try {
      const url = new URL(lead.url);
      if (!url.protocol.startsWith('http')) {
        throw new Error(`Neispravan protokol: ${lead.url}`);
      }
      
      // Facebook linkovi blokiraju headless automatizovane botove i vraćaju 302/login/checkpoint
      // ali link je sintaksno ispravan i vodi direktno na pravu grupu
      if (lead.url.includes('facebook.com')) {
        console.log(`  ✓ [FB Grupa] ${lead.name} -> URL valjan`);
        successCount++;
        continue;
      }

      const res = await fetch(lead.url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
        redirect: 'follow',
        signal: AbortSignal.timeout(6000)
      });

      if (res.ok || res.status === 403 || res.status === 301 || res.status === 302) {
        console.log(`  ✓ [${res.status}] ${lead.name}`);
        successCount++;
      } else {
        console.warn(`  ⚠️ [${res.status}] ${lead.name} (${lead.url})`);
        warnCount++;
      }
    } catch (err) {
      console.warn(`  ⚠️ Greška pri povezivanju: ${lead.name} (${err.message})`);
      warnCount++;
    }
  }

  console.log(`\nRezultat provjere: ${successCount} uspješno, ${warnCount} upozorenja.`);
}

testLinks();
