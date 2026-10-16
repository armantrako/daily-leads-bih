import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  CheckCircle,
  MapPin,
  Calendar,
  ShieldCheck,
  Facebook,
  Search,
  GraduationCap,
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import { FACEBOOK_GROUPS_POOL, CITIES_LIST, LAST_CHECKED_DATE } from './data/facebookGroups';

export default function App() {
  const [selectedCity, setSelectedCity] = useState("Svi gradovi");
  const [selectedType, setSelectedType] = useState("sve"); // "sve" | "studenti" | "oglasi"
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrirane grupe
  const filteredGroups = useMemo(() => {
    return FACEBOOK_GROUPS_POOL.filter((group) => {
      // Filter po gradu
      const matchCity = selectedCity === "Svi gradovi" || group.city === selectedCity;

      // Filter po tipu
      const matchType =
        selectedType === "sve"
          ? true
          : selectedType === "studenti"
          ? group.category === "Studenti"
          : group.category !== "Studenti";

      // Filter po pretrazi
      const query = searchQuery.trim().toLowerCase();
      const matchQuery =
        query === ""
          ? true
          : group.name.toLowerCase().includes(query) ||
            group.city.toLowerCase().includes(query) ||
            group.adsPolicy.toLowerCase().includes(query);

      return matchCity && matchType && matchQuery;
    });
  }, [selectedCity, selectedType, searchQuery]);

  // Brojač po gradovima
  const cityCounts = useMemo(() => {
    const counts = { "Svi gradovi": FACEBOOK_GROUPS_POOL.length };
    FACEBOOK_GROUPS_POOL.forEach((g) => {
      counts[g.city] = (counts[g.city] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 antialiased py-5 px-3 sm:px-6">
      <main className="max-w-xl mx-auto space-y-4">
        {/* ZAGLAVLJE */}
        <header className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Facebook className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                Današnje Facebook grupe
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Aktivne grupe po svim gradovima BiH za reklamu izrade prezentacija
              </p>
            </div>
          </div>

          {/* DATUM PROVJERE I POTVRDA AKTIVNOSTI */}
          <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Zadnja provjera aktivnosti: <strong>{LAST_CHECKED_DATE}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Samo 100% aktivne (svakodnevne objave)</span>
            </div>
          </div>

          {/* PRETRAGA PO GRADU ILI NAZIVU */}
          <div className="mt-4 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pretraži grad (Sarajevo, Travnik, Mostar...) ili grupu..."
              className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* BRZI FILTER: STUDENTI VS GRADSKI OGLASI */}
          <div className="mt-3 flex items-center gap-2 pt-1">
            <button
              onClick={() => setSelectedType("sve")}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all border ${
                selectedType === "sve"
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Sve grupe ({FACEBOOK_GROUPS_POOL.length})
            </button>
            <button
              onClick={() => setSelectedType("studenti")}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all border flex items-center justify-center gap-1 ${
                selectedType === "studenti"
                  ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                  : "bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Samo studenti</span>
            </button>
            <button
              onClick={() => setSelectedType("oglasi")}
              className={`flex-1 py-1.5 px-2 rounded-xl text-xs font-bold transition-all border ${
                selectedType === "oglasi"
                  ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              Gradski oglasi
            </button>
          </div>

          {/* ODABIR GRADA (SWIPEABLE NA MOBITELU) */}
          <div className="mt-3.5 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Odaberi grad:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2">
              {CITIES_LIST.map((city) => {
                const isSelected = selectedCity === city;
                const count = cityCounts[city] || 0;

                return (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`py-1.5 px-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all border shrink-0 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-blue-700 text-white border-blue-700 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <span>{city}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        {/* LISTA GRUPA */}
        <section className="space-y-3" aria-label="Lista aktivnih Facebook grupa">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-semibold">
            <span>Prikazano: {filteredGroups.length} aktivnih grupa</span>
            {selectedCity !== "Svi gradovi" && (
              <button
                onClick={() => setSelectedCity("Svi gradovi")}
                className="text-blue-600 hover:underline"
              >
                Prikaži sve gradove
              </button>
            )}
          </div>

          {filteredGroups.length > 0 ? (
            filteredGroups.map((group, index) => {
              const isStudent = group.category === "Studenti";

              return (
                <article
                  key={group.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 hover:border-blue-300 transition-all space-y-3"
                >
                  {/* GORNJI RED: GRAD I AKTIVNOST */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                        <MapPin className="w-3 h-3 text-blue-600" />
                        <span>{group.city}</span>
                      </span>

                      {isStudent && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                          <GraduationCap className="w-3 h-3 text-amber-600" />
                          <span>Učenici i studenti</span>
                        </span>
                      )}
                    </div>

                    {/* OZNAKA AKTIVNOSTI: POTVRĐENO AKTIVNA */}
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>aktivna (svaki dan)</span>
                    </span>
                  </div>

                  {/* NAZIV GRUPE */}
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {group.name}
                    </h2>
                    {group.note && (
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {group.note}
                      </p>
                    )}
                  </div>

                  {/* DIREKTAN LINK DO GRUPE */}
                  <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 text-xs">
                    <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider mb-0.5">
                      Direktan link do grupe:
                    </span>
                    <a
                      href={group.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-blue-600 hover:text-blue-800 break-all hover:underline"
                    >
                      {group.url}
                    </a>
                  </div>

                  {/* PRAVILA OGLAŠAVANJA USLUGA */}
                  <div className="text-xs text-slate-700 flex items-start gap-1.5 pt-0.5">
                    <span className="font-bold text-slate-900 shrink-0">Reklame za usluge:</span>
                    <span className="text-emerald-800 font-medium">
                      {group.adsPolicy}
                    </span>
                  </div>

                  {/* DUGME OTVORI GRUPU */}
                  <div className="pt-1">
                    <a
                      href={group.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-sm transition-colors text-center"
                    >
                      <span>Otvori grupu</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-xs">
              Nema pronađenih grupa za odabrane kriterije. Pokušaj odabrati drugi grad ili očisti pretragu.
            </div>
          )}
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-slate-500 py-3">
          <p>
            Daily Leads BiH &bull; Sve grupe su 100% stvarne i svakodnevno aktivne
          </p>
        </footer>
      </main>
    </div>
  );
}
