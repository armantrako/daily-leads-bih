/**
 * Daily Leads BiH - Provjerena baza stvarnih oglasnih platformi, Facebook grupa i servisa u Bosni i Hercegovini.
 * Svaki unos sadrži tačan URL, objašnjenje zašto je koristan za početnika (izrada prezentacija i digitalnih usluga),
 * status provjere i pravila oglašavanja.
 */

export const LEADS_DATABASE = [
  // --- FACEBOOK GRUPE (OGLASI I USLUGE BIH) ---
  {
    id: "fb-oglasi-bih",
    name: "OGLASI BIH (Najveća grupa za besplatno oglašavanje)",
    url: "https://www.facebook.com/groups/oglasi.bih/",
    category: "facebook",
    region: "Cijela BiH",
    reason: "Jedna od najvećih generalnih oglasnih grupa u BiH. Idealna za brzu objavu ponude izrade PowerPoint prezentacija, kucanja tekstova i digitalnih usluga.",
    status: "provjerena",
    commercialRules: "Dozvoljeno (besplatno oglašavanje)",
    tags: ["oglasi", "prezentacije", "usluge", "bih"],
    priorityScore: 98
  },
  {
    id: "fb-kupujem-prodajem-bih",
    name: "OGLASI: KUPUJEM PRODAJEM (BIH)",
    url: "https://www.facebook.com/groups/1454355431246099/",
    category: "facebook",
    region: "Cijela BiH",
    reason: "Aktivna grupa sa preko 100.000 članova za besplatno oglašavanje robe, usluga i radova širom Bosne i Hercegovine.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["kupujem prodajem", "usluge", "bih"],
    priorityScore: 95
  },
  {
    id: "fb-sarajevo-oglasi",
    name: "Sarajevo Oglasi (Kupovina, prodaja, posao, usluge)",
    url: "https://www.facebook.com/groups/sarajevooglasi/",
    category: "facebook",
    region: "Sarajevo i okolina",
    reason: "Centralna oglasna grupa za Sarajevo sa ogromnim brojem učenika, studenata i zaposlenih ljudi koji trebaju izradu prezentacija za školu ili posao.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["sarajevo", "usluge", "prezentacije"],
    priorityScore: 94
  },
  {
    id: "fb-posao-bih-hitno",
    name: "POSAO BOSNA I HERCEGOVINA HITNO",
    url: "https://www.facebook.com/groups/1527167314851580/",
    category: "facebook",
    region: "Cijela BiH",
    reason: "Grupa za brze honorarne poslove, angažmane i ponudu radnih usluga. Odlično za ponuditi hitnu izradu prezentacija i pripremu materijala.",
    status: "provjerena",
    commercialRules: "Dozvoljeno uz poštovanje pravila",
    tags: ["posao", "honorarno", "bih"],
    priorityScore: 92
  },
  {
    id: "fb-posao-na-dan-bih",
    name: "Posao na Dan – Ponuda i Potražnja BiH",
    url: "https://www.facebook.com/groups/1910389386420245/",
    category: "facebook",
    region: "Cijela BiH",
    reason: "Specijalizovana za brze i jednokratne zadatke. Usluga izrade prezentacije je idealan primjer jednokratnog posla koji se brzo naplaćuje.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["dnevnice", "brza zarada", "usluge"],
    priorityScore: 90
  },
  {
    id: "fb-tuzla-oglasi",
    name: "BESPLATNI OGLASI TUZLANSKOG KANTONA I ŠIRE",
    url: "https://www.facebook.com/groups/3000139610340158/",
    category: "facebook",
    region: "Tuzla i TK",
    reason: "Najveća oglasna grupa za Tuzlanski kanton. Velika koncentracija srednjoškolaca i studenata Univerziteta u Tuzli.",
    status: "provjerena",
    commercialRules: "Dozvoljeno besplatno",
    tags: ["tuzla", "tk", "oglasi"],
    priorityScore: 89
  },
  {
    id: "fb-halo-tuzla",
    name: "HALO TUZLA - BESPLATNI FB OGLASI",
    url: "https://www.facebook.com/groups/halotuzla/",
    category: "facebook",
    region: "Tuzla",
    reason: "Popularna tuzlanska grupa za ponudu lokalnih usluga i pomoći pri izradi radova.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["tuzla", "usluge"],
    priorityScore: 85
  },
  {
    id: "fb-zenica-oglasi",
    name: "Oglasi Zenica (kupi, prodaj, zamijeni, usluge)",
    url: "https://www.facebook.com/groups/oglasizenica/",
    category: "facebook",
    region: "Zenica i ZDK",
    reason: "Centralno mjesto za oglašavanje u Zenici i Zeničko-dobojskom kantonu, sa studentima UNZE i lokalnim školama.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["zenica", "zdk", "oglasi"],
    priorityScore: 88
  },
  {
    id: "fb-banjaluka-kp",
    name: "KUPUJEM PRODAJEM BANJA LUKA",
    url: "https://www.facebook.com/groups/banjaluka.kupujemprodajem/",
    category: "facebook",
    region: "Banja Luka",
    reason: "Aktivna grupa u Banjoj Luci gdje se često nude edukativne, digitalne i administrativne usluge.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["banja luka", "oglasi", "usluge"],
    priorityScore: 87
  },
  {
    id: "fb-mostar-prodaja",
    name: "PRODAJA MOSTAR i Hercegovina",
    url: "https://www.facebook.com/groups/1473778497899650/",
    category: "facebook",
    region: "Mostar i Hercegovina",
    reason: "Aktivna hercegovačka grupa sa hiljadama članova za besplatno oglašavanje ponuda i usluga.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["mostar", "hercegovina", "oglasi"],
    priorityScore: 86
  },
  {
    id: "fb-bihac-kp",
    name: "Kupoprodaja Bihać i okolina Bihaća",
    url: "https://www.facebook.com/groups/kupoprodajabihaciokolinabihaca/",
    category: "facebook",
    region: "Bihać i USK",
    reason: "Fokus na Unsko-sanski kanton i studente Univerziteta u Bihaću. Manja konkurencija oglasa, veća vidljivost.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["bihac", "usk", "oglasi"],
    priorityScore: 84
  },
  {
    id: "fb-bijeljina-prodaja",
    name: "Prodaja Bijeljina i Semberija",
    url: "https://www.facebook.com/groups/prodajabijeljina/",
    category: "facebook",
    region: "Bijeljina i Semberija",
    reason: "Glavna regionalna grupa za oglašavanje usluga i ponuda na području Semberije.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["bijeljina", "oglasi"],
    priorityScore: 82
  },
  {
    id: "fb-brcko-mali",
    name: "OGLASI MALI -- Brčko Distrikt",
    url: "https://www.facebook.com/groups/oglasimalibrckodistrikta/",
    category: "facebook",
    region: "Brčko Distrikt",
    reason: "Glavna oglasna zajednica za Brčko Distrikt za ponudu usluga i kurseva.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["brcko", "oglasi"],
    priorityScore: 81
  },
  {
    id: "fb-trebinje-oglasi",
    name: "Oglasi Trebinje",
    url: "https://www.facebook.com/groups/oglasitrebinje/",
    category: "facebook",
    region: "Trebinje",
    reason: "Lokalna oglasna grupa za područje istočne Hercegovine.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["trebinje", "oglasi"],
    priorityScore: 78
  },
  {
    id: "fb-freelance-bih",
    name: "Freelanceri iz Bosne i Hercegovine",
    url: "https://www.facebook.com/groups/204180190242836/",
    category: "facebook",
    region: "Cijela BiH",
    reason: "Zajednica domaćih freelancera i kreativaca. Odlično za povezivanje, pronalazak klijenata i ponudu digitalnih usluga.",
    status: "provjerena",
    commercialRules: "Dozvoljeno uz poštovanje profesionalnih standarda",
    tags: ["freelance", "digitalno", "bih"],
    priorityScore: 91
  },
  {
    id: "fb-trazim-posao-bih",
    name: "Tražim posao - Dajem posao Bosna i Hercegovina",
    url: "https://www.facebook.com/groups/617003175017831/",
    category: "facebook",
    region: "Cijela BiH",
    reason: "Mjesto gdje možete direktno objaviti šta nudite (npr. 'Nudim brzu i kvalitetnu izradu prezentacija za đake i firme').",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["posao", "usluge", "bih"],
    priorityScore: 89
  },

  // --- UČENICI I STUDENTI (PRIMARNA CILJNA GRUPA) ---
  {
    id: "studenti-pomoc-radovi",
    name: "Pomoć studentima i učenicima BiH",
    url: "https://www.facebook.com/groups/556894414847009/",
    category: "studenti",
    region: "Cijela BiH",
    reason: "Direktna ciljna grupa! Učenici i studenti ovdje traže pomoć za seminare, PowerPoint prezentacije, lektire i zadatke.",
    status: "provjerena",
    commercialRules: "Dozvoljene ponude pomoći uz dogovor",
    tags: ["studenti", "ucenici", "prezentacije", "zadaci"],
    priorityScore: 99
  },
  {
    id: "studenti-pisanje-seminara",
    name: "Pisanje seminara, završnih i diplomskih radova",
    url: "https://www.facebook.com/groups/1231767290346272/",
    category: "studenti",
    region: "BiH i regija",
    reason: "Korisnici ovdje često traže prateće PowerPoint prezentacije uz seminarske radove za odbranu pred profesorom.",
    status: "provjerena",
    commercialRules: "Dozvoljeno oglašavanje akademskih usluga",
    tags: ["seminarski", "prezentacije", "studenti"],
    priorityScore: 97
  },
  {
    id: "studenti-mostar-oglasi",
    name: "Studentski oglasi Mostar",
    url: "https://www.facebook.com/groups/596507617102978/",
    category: "studenti",
    region: "Mostar",
    reason: "Oglasna zajednica studenata u Mostaru. Redovna potražnja za asistencijom pred kolokvije i odbrane prezentacija.",
    status: "provjerena",
    commercialRules: "Provjeriti pravila / dozvoljene studentske usluge",
    tags: ["mostar", "studenti", "oglasi"],
    priorityScore: 93
  },
  {
    id: "studenti-tuzla-biro",
    name: "Studentski Biro Tuzla (Poslovi i usluge)",
    url: "https://www.facebook.com/groups/studentskibirotuzla/",
    category: "studenti",
    region: "Tuzla",
    reason: "Kanal za studentske poslove i angažmane na području Tuzlanskog kantona.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["tuzla", "studenti", "posao"],
    priorityScore: 88
  },
  {
    id: "studenti-sc-nikolatesla",
    name: "Studentski centar 'Nikola Tesla' Banja Luka",
    url: "https://www.facebook.com/groups/scnikolateslabl/",
    category: "studenti",
    region: "Banja Luka",
    reason: "Zajednica studenata iz studentskih domova u Banjoj Luci. Mnogi nemaju vremena sami praviti slajdove pred rokove.",
    status: "djelimično provjerena",
    commercialRules: "Provjeriti pravila grupe (potrebna prijava na FB)",
    tags: ["banja luka", "studenti", "domovi"],
    priorityScore: 86
  },
  {
    id: "studenti-studomat-portal",
    name: "STUDOMAT.ba - Najveći studentski portal u BiH",
    url: "https://studomat.ba",
    category: "studenti",
    region: "Cijela BiH",
    reason: "Najveći i najposjećeniji portal za studente u BiH. Pruža uvid u aktuelne ispitne rokove i studentske teme.",
    status: "provjerena",
    commercialRules: "Dozvoljeno putem foruma i komentara",
    tags: ["portal", "studenti", "bih"],
    priorityScore: 85
  },
  {
    id: "studenti-cimeri-sarajevo",
    name: "Izdajem stan za studente/ice Sarajevo",
    url: "https://www.facebook.com/groups/1376805822557451/",
    category: "studenti",
    region: "Sarajevo",
    reason: "Ogromna grupa od preko 50.000 studenata u Sarajevu. Odlično mjesto za diskretnu ponudu pomoći pri izradi prezentacija.",
    status: "djelimično provjerena",
    commercialRules: "Provjeriti pravila grupe (potrebna prijava)",
    tags: ["sarajevo", "studenti"],
    priorityScore: 80
  },

  // --- OLX.BA I DOMAĆI OGLASNICI ---
  {
    id: "olx-intelektualne",
    name: "OLX.ba - Intelektualne usluge (Kategorija 2204)",
    url: "https://olx.ba/pretraga?category_id=2204",
    category: "olx",
    region: "Cijela BiH",
    reason: "Zvanična i najrelevantnija kategorija na OLX.ba za izradu PowerPoint prezentacija, seminarskih radova i kucanje tekstova.",
    status: "provjerena",
    commercialRules: "Dozvoljeno (besplatna objava osnovnog oglasa na OLX)",
    tags: ["olx", "intelektualne usluge", "prezentacije"],
    priorityScore: 99
  },
  {
    id: "olx-edukacija",
    name: "OLX.ba - Edukacija i obrazovanje (Kategorija 2197)",
    url: "https://olx.ba/pretraga?category_id=2197",
    category: "olx",
    region: "Cijela BiH",
    reason: "Kategorija posvećena učenju, obukama, instrukcijama i pomoći oko školskih i fakultetskih zadataka.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["olx", "edukacija", "obrazovanje"],
    priorityScore: 94
  },
  {
    id: "olx-servisi-usluge",
    name: "OLX.ba - Servisi i Poslovi (Glavna sekcija)",
    url: "https://olx.ba/pretraga?trazilica=usluge",
    category: "olx",
    region: "Cijela BiH",
    reason: "Centralna sekcija za usluge i poslove na OLX.ba. Tu možete pregledati aktuelne ponude i kliknuti na 'Objavi oglas' (gornji desni ugao).",
    status: "provjerena",
    commercialRules: "Dozvoljeno (1 besplatan oglas za usluge)",
    tags: ["olx", "usluge", "poslovi"],
    priorityScore: 96
  },
  {
    id: "olx-pregled-prezentacija",
    name: "OLX.ba - Pregled potražnje za izradu prezentacija",
    url: "https://olx.ba/pretraga?q=izrada+prezentacija",
    category: "olx",
    region: "Cijela BiH",
    reason: "Provjeri šta konkurenti nude i koje cijene formiraju (obično od 15 do 35 KM po prezentaciji) kako bi postavio bolju ponudu.",
    status: "provjerena",
    commercialRules: "Pregled i analiza tržišta",
    tags: ["olx", "cijene", "istraživanje"],
    priorityScore: 91
  },
  {
    id: "superoglasi-bih",
    name: "SuperOGLASI BiH - Besplatni mali oglasi",
    url: "https://www.superoglasi.ba",
    category: "olx",
    region: "Cijela BiH",
    reason: "Poznati domaći oglasnik sa dugom tradicijom. Može se besplatno objaviti oglas za intelektualne i digitalne usluge.",
    status: "provjerena",
    commercialRules: "Dozvoljeno besplatno",
    tags: ["superoglasi", "mali oglasi", "bih"],
    priorityScore: 83
  },

  // --- OSTALE PRILIKE I DUBOKE PRETRAGE UŽIVO ---
  {
    id: "fb-live-prezentacije",
    name: "Facebook Live Pretraga: 'Izrada prezentacija BiH'",
    url: "https://www.facebook.com/groups/search/groups/?q=izrada%20prezentacija%20bih",
    category: "ostalo",
    region: "Cijela BiH",
    reason: "Jednim klikom na telefonu otvara Facebook app sa najnovijim grupama gdje se traže i nude prezentacije.",
    status: "provjerena",
    commercialRules: "Direktan deep link na pretragu grupa",
    tags: ["live search", "prezentacije", "facebook"],
    priorityScore: 95
  },
  {
    id: "fb-live-studenti-sarajevo",
    name: "Facebook Live Pretraga: 'Studenti Sarajevo'",
    url: "https://www.facebook.com/groups/search/groups/?q=studenti%20sarajevo",
    category: "ostalo",
    region: "Sarajevo",
    reason: "Pronalazi fakultetske grupe u Sarajevu gdje studenti pitaju za pomoć sa prezentacijama za predavanja i ispite.",
    status: "provjerena",
    commercialRules: "Pregledaj pravila svake otvorene grupe",
    tags: ["live search", "sarajevo", "studenti"],
    priorityScore: 90
  },
  {
    id: "fb-live-honorarni-posao",
    name: "Facebook Live Pretraga: 'Honorarni posao BiH'",
    url: "https://www.facebook.com/groups/search/groups/?q=honorarni%20posao%20bih",
    category: "ostalo",
    region: "Cijela BiH",
    reason: "Automatski filtrira svježe Facebook grupe namijenjene dodatnoj zaradi i poslovima od kuće.",
    status: "provjerena",
    commercialRules: "Dozvoljeno",
    tags: ["live search", "honorarno", "zarada"],
    priorityScore: 89
  },
  {
    id: "canva-balkan-dizajn",
    name: "Canva & Prezentacije Dizajn Zajednica",
    url: "https://www.facebook.com/groups/search/groups/?q=canva%20dizajn%20balkan",
    category: "ostalo",
    region: "BiH i regija",
    reason: "Zajednice koje traže pomoć u kreiranju modernih Canva i PowerPoint šablona za biznise i edukatore.",
    status: "treba provjeriti",
    commercialRules: "Provjeriti pravila grupe (potrebna prijava)",
    tags: ["canva", "dizajn", "prezentacije"],
    priorityScore: 82
  }
];

/**
 * Gotovi tekstovi oglasa spremni za kopiranje jednim klikom
 */
export const AD_TEMPLATES = [
  {
    id: "template-ppt-studenti",
    title: "PowerPoint prezentacije za đake i studente",
    badge: "Preporučeno",
    target: "Za studentske i srednjoškolske grupe",
    text: `Pozdrav svima! Treba vam moderna i profesionalna PowerPoint prezentacija za školu, faks ili odbranu seminarskog rada?

Radim brzu i kvalitetnu izradu prezentacija:
- Moderan dizajn prilagođen vašoj temi (nije generički šablon)
- Uključene animacije, grafikoni i slike visoke rezolucije
- Formatiranje prema uputama vašeg profesora / mentora
- Rok izrade: 24h - 48h (moguć i hitan dogovor)
- Cijena: vrlo povoljna i prilagođena učenicima i studentima!

Javite se u inbox za dogovor i primjere prethodnih radova!`
  },
  {
    id: "template-digitalne-usluge",
    title: "Digitalne usluge (kucanje tekstova, CV, priprema materijala)",
    badge: "Dodatna zarada",
    target: "Za oglasne grupe i OLX",
    text: `Nudim brze i pouzdane digitalne usluge bez komplikacija:

1. Izrada PowerPoint prezentacija (poslovne, školske, seminarske)
2. Kucanje, prepisivanje i formatiranje tekstova (Word / PDF)
3. Izrada modernih CV / biografija i molbi za posao u Canvi
4. Prevođenje i lektura jednostavnijih tekstova

Garantujem tačnost, brz rok isporuke i maksimalnu diskreciju.
Plaćanje jednostavno po završetku (tekući račun, dopuna ili po dogovoru).
Javite se u privatnu poruku za sve detalje!`
  },
  {
    id: "template-poslovne-prezentacije",
    title: "Prezentacije za preduzetnike i predavanja",
    badge: "Veća zarada",
    target: "Za poslovne i freelance grupe",
    text: `Trebate uvjerljivu i vizuelno privlačnu prezentaciju za predstavljanje vaše ideje, proizvoda ili predavanje?

Nudim:
- Redizajn i osvježavanje vaših postojećih slajdova
- Izradu novih prezentacija od nule (PowerPoint & Canva)
- Pregledne grafikone, infografike i sažet tekst koji drži pažnju

Pišite mi u privatnu poruku sa kratkim opisom vašeg projekta.`
  }
];
