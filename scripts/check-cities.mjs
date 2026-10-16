const candidates = [
  // Sarajevo
  { city: "Sarajevo", category: "Oglasi", url: "https://www.facebook.com/groups/kupujemoprodajemosarajevo/" },
  { city: "Sarajevo", category: "Oglasi", url: "https://www.facebook.com/groups/938385766525663/" },
  { city: "Sarajevo", category: "Oglasi", url: "https://www.facebook.com/groups/1444214529139796/" },
  { city: "Sarajevo", category: "Posao i Usluge", url: "https://www.facebook.com/groups/259921537867340/" },
  { city: "Sarajevo", category: "Studenti", url: "https://www.facebook.com/groups/1756965065002410/" },

  // Travnik
  { city: "Travnik", category: "Oglasi", url: "https://www.facebook.com/groups/2039515972950759/" },
  { city: "Travnik", category: "Studenti", url: "https://www.facebook.com/groups/2085156831821619/" },

  // Mostar
  { city: "Mostar", category: "Studenti", url: "https://www.facebook.com/groups/596507617102978/" },

  // Zenica
  { city: "Zenica", category: "Oglasi", url: "https://www.facebook.com/groups/670175096445935/" },

  // Tuzla
  { city: "Tuzla", category: "Oglasi", url: "https://www.facebook.com/groups/1380048718924243/" },
  { city: "Tuzla", category: "Oglasi", url: "https://www.facebook.com/groups/179198052641349/" },

  // Banja Luka
  { city: "Banja Luka", category: "Posao i Usluge", url: "https://www.facebook.com/groups/oglasizaposaobanjaluka/" },
  { city: "Banja Luka", category: "Studenti", url: "https://www.facebook.com/groups/1188542848893087/" },

  // Bihać
  { city: "Bihać", category: "Oglasi", url: "https://www.facebook.com/groups/136909497076671/" },
  { city: "Bihać", category: "Oglasi", url: "https://www.facebook.com/groups/1625861764305687/" },

  // Bugojno
  { city: "Bugojno", category: "Oglasi", url: "https://www.facebook.com/groups/153934244970385/" },

  // Cazin
  { city: "Cazin", category: "Oglasi", url: "https://www.facebook.com/groups/2282928508676011/" },

  // Visoko
  { city: "Visoko", category: "Oglasi", url: "https://www.facebook.com/groups/1095701533842367/" },

  // Cijela BiH (Aktivne grupe za studente, prezentacije i poslove)
  { city: "Cijela BiH", category: "Oglasi", url: "https://www.facebook.com/groups/oglasi.bih/" },
  { city: "Cijela BiH", category: "Posao i Usluge", url: "https://www.facebook.com/groups/1527167314851580/" },
  { city: "Cijela BiH", category: "Studenti", url: "https://www.facebook.com/groups/1887605988078463/" },
  { city: "Cijela BiH", category: "Studenti", url: "https://www.facebook.com/groups/1231767290346272/" },
  { city: "Cijela BiH", category: "Studenti", url: "https://www.facebook.com/groups/556894414847009/" },
  { city: "Cijela BiH", category: "Posao i Usluge", url: "https://www.facebook.com/groups/748921941816938/" }
];

async function checkAll() {
  const verified = [];
  for (const c of candidates) {
    try {
      const res = await fetch(c.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15'
        }
      });
      const html = await res.text();
      const ogTitle = html.match(/<meta property="og:title" content="([^"]+)"/i);
      const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
      const title = ogTitle ? ogTitle[1].replace(' | Facebook', '').trim() : (titleMatch ? titleMatch[1].replace(' | Facebook', '').trim() : 'Unknown');
      
      verified.push({
        city: c.city,
        category: c.category,
        title,
        url: c.url,
        status: res.status
      });
      console.log(`[${res.status}] ${c.city} - ${title} (${c.url})`);
    } catch (e) {
      console.log(`[ERR] ${c.city}: ${e.message}`);
    }
  }
  console.log(`\nUkupno provjereno: ${verified.length} grupa.`);
}

checkAll();
