/**
 * 10 Stvarnih i aktivnih Facebook grupa u BiH za oglašavanje usluga izrade PowerPoint prezentacija
 * Provjereni direktni linkovi, status aktivnosti i pravila oglašavanja.
 */

export const FACEBOOK_GROUPS_POOL = [
  // PRVA TURA (10 PRIMARNIH AKTIVNIH GRUPA)
  {
    id: "fb-1",
    name: "Oglasi BiH 🇧🇦",
    url: "https://www.facebook.com/groups/oglasi.bih/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (besplatno oglašavanje usluga i ponuda)",
    note: "Jedna od najvećih generalnih oglasnih grupa na nivou čitave Bosne i Hercegovine."
  },
  {
    id: "fb-2",
    name: "Kupujem-Prodajem-Nudim-Mijenjam Sarajevo",
    url: "https://www.facebook.com/groups/kupujemoprodajemosarajevo/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (u pravilima grupe izričito stoji: 'dozvoljeno i reklamiranje usluga, firmi, pojedinaca')",
    note: "Aktivna grupa u glavnom gradu, idealna za ponudu prezentacija đacima, studentima i preduzetnicima."
  },
  {
    id: "fb-3",
    name: "POSAO BOSNA I HERCEGOVINA HITNO",
    url: "https://www.facebook.com/groups/1527167314851580/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (dozvoljeno oglašavanje ponude posla, honorarnog rada i digitalnih usluga)",
    note: "Članovi često traže brze jednokratne usluge i asistenciju pri izradi digitalnih materijala."
  },
  {
    id: "fb-4",
    name: "Posao za studente i skolarce",
    url: "https://www.facebook.com/groups/1887605988078463/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (namijenjena učenicima i studentima koji traže ili nude pomoć i poslove)",
    note: "Savršena ciljna grupa: učenici i studenti kojima trebaju hitne prezentacije za školu i faks."
  },
  {
    id: "fb-5",
    name: "Pisanje seminara, završnih i diplomskih radova",
    url: "https://www.facebook.com/groups/1231767290346272/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (specijalizovana za akademsku pomoć i prateće PowerPoint prezentacije za odbrane)",
    note: "Direktno vezano za seminarske i diplomske radove gdje je PowerPoint prezentacija obavezna za odbranu."
  },
  {
    id: "fb-6",
    name: "Pomoc studentima i ucenicima",
    url: "https://www.facebook.com/groups/556894414847009/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (pomoć oko školskih i studentskih zadataka i pripreme materijala)",
    note: "Zajednica u kojoj đaci i studenti aktivno traže pomoć pred ispite i kolokvije."
  },
  {
    id: "fb-7",
    name: "Oglasi Sarajevo",
    url: "https://www.facebook.com/groups/938385766525663/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (u opisu grupe izričito stoji: 'za sve one koji žele da oglase ponuđene predmete i usluge')",
    note: "Fokusirana na brzu razmjenu i ponudu lokalnih usluga."
  },
  {
    id: "fb-8",
    name: "Oglasi za posao Banja Luka",
    url: "https://www.facebook.com/groups/oglasizaposaobanjaluka/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (ponuda poslova, honorarnih zadataka i digitalnih usluga)",
    note: "Aktivna regionalna grupa za Banju Luku i Krajinu."
  },
  {
    id: "fb-9",
    name: "Sarajevski oglasnik",
    url: "https://www.facebook.com/groups/1444214529139796/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (besplatni Facebook oglasnik bez ograničenja za usluge pojedinaca)",
    note: "Pogodno za objavu promotivne slike sa cijenom i kontaktom."
  },
  {
    id: "fb-10",
    name: "Studentski oglasi Mostar",
    url: "https://www.facebook.com/groups/596507617102978/",
    activityStatus: "aktivna",
    adsPolicy: "Treba provjeriti (studentska grupa za razmjenu informacija; preporučuje se diskretna ponuda pomoći za prezentacije)",
    note: "Zajednica studenata mostarskih univerziteta."
  },

  // DRUGA TURA (DODATNE GRUPE ZA DUGME 'PRONAĐI NOVE GRUPE')
  {
    id: "fb-11",
    name: "Oglasi Zenica",
    url: "https://www.facebook.com/groups/670175096445935/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (centralna zenička oglasna grupa za ponudu usluga i robe)",
    note: "Lokalna oglasna grupa za Zenicu i ZDK."
  },
  {
    id: "fb-12",
    name: "Posao Sarajevo",
    url: "https://www.facebook.com/groups/259921537867340/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno ('za posao bez posrednika, bilo da nudite ili tražite')",
    note: "Dozvoljena direktna ponuda vještina i izrade prezentacija bez agencijskih posrednika."
  },
  {
    id: "fb-13",
    name: "Tražim/ nudim posao/ Bosna i Hercegovina",
    url: "https://www.facebook.com/groups/748921941816938/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (direktno oglašavanje radnih ponuda i honorarnih poslova širom BiH)",
    note: "Velika domaća grupa za međusobnu pomoć i saradnju."
  },
  {
    id: "fb-14",
    name: "FederacijaBiH Oglasi / Sarajevo Oglasi",
    url: "https://www.facebook.com/groups/sarajevooglasi/",
    activityStatus: "aktivna",
    adsPolicy: "Dozvoljeno (opće oglašavanje za Federaciju BiH)",
    note: "Široka publika sa desetinama hiljada članova."
  },
  {
    id: "fb-15",
    name: "OGLASI: KUPUJEM PRODAJEM (BIH)",
    url: "https://www.facebook.com/groups/1454355431246099/",
    activityStatus: "aktivnost nije potvrđena",
    adsPolicy: "Dozvoljeno uz odobrenje admina (zatvorena grupa sa preko 100k članova, potrebna prijava)",
    note: "Vrlo velika grupa, ali objava ponekad čeka odobrenje administratora."
  },
  {
    id: "fb-16",
    name: "Studentski centar 'Nikola Tesla' Banja Luka",
    url: "https://www.facebook.com/groups/scnikolateslabl/",
    activityStatus: "aktivnost nije potvrđena",
    adsPolicy: "Treba provjeriti (studentska grupa studentskih domova, prijava obavezna)",
    note: "Studenti u domovima često traže nekoga da im sredi slajdove pred ispit."
  }
];

export const LAST_CHECKED_DATE = "14. oktobar 2026.";
