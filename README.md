# 🇧🇦 Daily Leads BiH

> **Mobilna web aplikacija za svakodnevni pronalazak prilika za oglašavanje i zaradu u Bosni i Hercegovini.**  
> Fokusirana na početnike koji žele nuditi **izradu PowerPoint prezentacija**, pripremu seminarskih radova i jednostavne digitalne usluge.

---

## 🎯 Glavne funkcionalnosti

1. **5–10 dnevnih provjerenih prilika**:
   - Stvarne, verifikovane Facebook grupe (Sarajevo, Tuzla, Zenica, Banja Luka, Mostar, Bihać, Bijeljina, Brčko itd.).
   - OLX.ba zvanične kategorije (*Intelektualne usluge 2204*, *Edukacija 2197*, *Servisi i poslovi*).
   - Studentske zajednice i oglasne table (UNSA, UNTZ, UNMO, UNZE, UNBL, Domovi Nikola Tesla, Studomat).
   - Live pretrage Facebook grupa koje jednim klikom otvaraju najnovije grupe.

2. **Dugme „Otvori“**:
   - Vodi te direktno na stranicu/grupu kako bi lično objavio svoj oglas ili sliku.
   - Nema sumnjivog botovskog skrejpovanja ili rizika od zabrane tvog Facebook naloga.

3. **Status „Pregledano“ i „Sačuvano“**:
   - Čuva se lokalno u tvom pregledniku (`localStorage`), bez potrebe za pravljenjem naloga ili lozinke.
   - Označeni leadovi se automatski miču sa današnje liste i otvaraju prostor za nove nepregledane prilike.

4. **Dugme „Pronađi nove leadove“**:
   - Jednim klikom rotira bazu i učitava novu turu od 7 svježih prilika.

5. **Kopiraj gotov tekst oglasa (1 klik)**:
   - Gotovi, profesionalno sročeni tekstovi za izradu prezentacija za učenike i studente, digitalne usluge i poslovne prezentacije.

---

## 🚀 Pokretanje na računaru (Lokalno)

```bash
# 1. Pozicioniraj se u folder projekta
cd daily-leads-bih

# 2. Instaliraj pakete (već instalirano)
npm install

# 3. Pokreni razvojni server
npm run dev
```

Aplikacija će biti dostupna na: `http://localhost:3000`

---

## 🌐 Besplatno objavljivanje na Vercel (Javni HTTPS link za mobitel)

Aplikacija je 100% pripremljena za Vercel (`vercel.json` je već konfigurisan):

### Opcija A: Preko Vercel CLI (Najbrže - 1 minut)
```bash
npx vercel
```
Prati kratka uputstva na ekranu (odaberi `Y`, podrazumijevane postavke) i dobićeš javni HTTPS link (npr. `https://daily-leads-bih.vercel.app`).

### Opcija B: Preko GitHub-a
1. Kreiraj novi repozitorij na svom GitHub profilu: npr. `daily-leads-bih`.
2. Poveži i pushaj kod:
   ```bash
   git add .
   git commit -m "Initial commit Daily Leads BiH"
   git remote add origin https://github.com/TVOJ-PROFIL/daily-leads-bih.git
   git push -u origin master
   ```
3. Otvori [vercel.com](https://vercel.com), klikni **Add New Project**, izaberi `daily-leads-bih` i klikni **Deploy**.
4. Otvori dobijeni link na mobitelu i dodaj ga na početni ekran (Add to Home Screen).

---

## 🔄 Kako funkcioniše ažuriranje leadova?

- **Dnevna rotacija**: Aplikacija koristi datum sa telefona (`YYYY-MM-DD`) za odabir i balansiranje prilika po kategorijama.
- **Automatska zamjena pregledanih**: Čim klikneš „Pregledano“, ta grupa se sklanja u arhivu, a sistem iz baze izvlači sljedeću nepregledanu priliku.
- **GitHub Actions Health Check**: U `.github/workflows/daily-leads-sync.yml` nalazi se workflow koji svako jutro u 06:00h automatski testira stabilnost i dostupnost svih linkova u bazi pomoću skripte `scripts/check-links.mjs`.

---

## 🛠️ Tehnologije
- **React 18** + **Vite 5**
- **Tailwind CSS** (moderni mobilni interfejs prilagođen velikim dodirnim zonama)
- **Lucide Icons**
- **LocalStorage API** (trajno čuvanje bez baze podataka)
