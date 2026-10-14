/**
 * Formatira datum na bosanskom jeziku i računa dnevno sjeme (seed) za rotaciju
 */

const DANI = [
  "Nedjelja",
  "Ponedjeljak",
  "Utorak",
  "Srijeda",
  "Četvrtak",
  "Petak",
  "Subota"
];

const MJESECI = [
  "januar",
  "februar",
  "mart",
  "april",
  "maj",
  "juni",
  "juli",
  "august",
  "septembar",
  "oktobar",
  "novembar",
  "decembar"
];

export function getFormattedToday(date = new Date()) {
  const danIme = DANI[date.getDay()];
  const danBroj = date.getDate();
  const mjesecIme = MJESECI[date.getMonth()];
  const godina = date.getFullYear();

  return `${danIme}, ${danBroj}. ${mjesecIme} ${godina}.`;
}

export function getDateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Jednostavan deterministički pseudo-random generator baziran na datumu
 * kako bi svaki dan prikazao novi balansirani set leadova
 */
export function getDailySeed(dateStr) {
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = (hash << 5) - hash + dateStr.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}
