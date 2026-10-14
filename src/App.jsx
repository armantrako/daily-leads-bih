import React, { useState, useEffect, useMemo } from 'react';
import {
  Sparkles,
  RefreshCw,
  Copy,
  Info,
  Calendar,
  Layers,
  CheckCircle2,
  Bookmark,
  Share2,
  Search,
  ArrowRight,
  TrendingUp,
  RotateCcw
} from 'lucide-react';

import { LEADS_DATABASE } from './data/leads';
import { getFormattedToday, getDateKey, getDailySeed } from './utils/date';
import LeadCard from './components/LeadCard';
import CategoryFilter from './components/CategoryFilter';
import Tabs from './components/Tabs';
import AdTemplatesModal from './components/AdTemplatesModal';
import InfoModal from './components/InfoModal';

const BATCH_SIZE = 7;

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('today'); // 'today' | 'viewed' | 'saved'
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'facebook' | 'olx' | 'studenti' | 'ostalo'
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modali
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Lokalno skladište (localStorage)
  const [viewedIds, setViewedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('daily_leads_viewed');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [savedIds, setSavedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('daily_leads_saved');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [batchOffset, setBatchOffset] = useState(() => {
    try {
      const saved = localStorage.getItem('daily_leads_batch_offset');
      return saved ? parseInt(saved, 10) : 0;
    } catch (e) {
      return 0;
    }
  });

  const [lastUpdateDate, setLastUpdateDate] = useState(() => {
    return localStorage.getItem('daily_leads_last_date') || getDateKey(new Date());
  });

  const [isRefreshing, setIsRefreshing] = useState(false);

  // Sinhronizacija u localStorage
  useEffect(() => {
    localStorage.setItem('daily_leads_viewed', JSON.stringify(viewedIds));
  }, [viewedIds]);

  useEffect(() => {
    localStorage.setItem('daily_leads_saved', JSON.stringify(savedIds));
  }, [savedIds]);

  useEffect(() => {
    localStorage.setItem('daily_leads_batch_offset', batchOffset.toString());
  }, [batchOffset]);

  // Provjera novog dana
  useEffect(() => {
    const todayKey = getDateKey(new Date());
    if (todayKey !== lastUpdateDate) {
      // Novi dan: ažuriraj datum
      setLastUpdateDate(todayKey);
      localStorage.setItem('daily_leads_last_date', todayKey);
      // Neka se offset blago pomjeri za novi dan
      setBatchOffset((prev) => (prev + 3) % LEADS_DATABASE.length);
    }
  }, [lastUpdateDate]);

  // Toggling viewed
  const toggleViewed = (id) => {
    setViewedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Toggling saved
  const toggleSaved = (id) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Dugme "Pronađi nove leadove"
  const handleFindNewLeads = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setBatchOffset((prev) => (prev + BATCH_SIZE) % LEADS_DATABASE.length);
      setIsRefreshing(false);
      setActiveTab('today');
    }, 400);
  };

  // Reset pregledanih (ako korisnik želi ponovo proći sve)
  const handleResetViewed = () => {
    if (window.confirm("Želiš li vratiti sve pregledane prilike nazad u aktivnu listu?")) {
      setViewedIds([]);
      setBatchOffset(0);
    }
  };

  // Algoritam selekcije dnevnih leadova
  // 1. Filtrira one koji nisu pregledani
  // 2. Rotira prema determinističkom sjemenu dana i batchOffsetu
  // 3. Obezbjeđuje 5-10 prilika
  const todayLeads = useMemo(() => {
    const unviewed = LEADS_DATABASE.filter((lead) => !viewedIds.includes(lead.id));

    if (unviewed.length === 0) {
      return [];
    }

    // Sortiraj na osnovu prioriteta i rotacije dana
    const dateSeed = getDailySeed(lastUpdateDate);
    const sorted = [...unviewed].sort((a, b) => {
      const scoreA = (a.priorityScore + dateSeed) % 100;
      const scoreB = (b.priorityScore + dateSeed) % 100;
      return scoreB - scoreA;
    });

    // Uzmi batch sa offsetom
    const start = batchOffset % sorted.length;
    let selected = [];

    for (let i = 0; i < sorted.length && selected.length < BATCH_SIZE; i++) {
      const index = (start + i) % sorted.length;
      selected.push(sorted[index]);
    }

    return selected;
  }, [viewedIds, batchOffset, lastUpdateDate]);

  // Lista za tab "Pregledano"
  const viewedLeads = useMemo(() => {
    return LEADS_DATABASE.filter((lead) => viewedIds.includes(lead.id));
  }, [viewedIds]);

  // Lista za tab "Sačuvano"
  const savedLeads = useMemo(() => {
    return LEADS_DATABASE.filter((lead) => savedIds.includes(lead.id));
  }, [savedIds]);

  // Trenutna aktivna lista prije kategorijskog filtera
  const currentList = useMemo(() => {
    if (activeTab === 'today') return todayLeads;
    if (activeTab === 'viewed') return viewedLeads;
    if (activeTab === 'saved') return savedLeads;
    return todayLeads;
  }, [activeTab, todayLeads, viewedLeads, savedLeads]);

  // Filtrirano po kategoriji i pretrazi
  const filteredLeads = useMemo(() => {
    return currentList.filter((lead) => {
      const matchCategory =
        activeCategory === 'all' ? true : lead.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === ''
          ? true
          : lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [currentList, activeCategory, searchQuery]);

  // Brojači za kategorije
  const categoryCounts = useMemo(() => {
    const counts = {
      all: currentList.length,
      facebook: 0,
      olx: 0,
      studenti: 0,
      ostalo: 0
    };

    currentList.forEach((lead) => {
      if (counts[lead.category] !== undefined) {
        counts[lead.category]++;
      } else {
        counts.ostalo++;
      }
    });

    return counts;
  }, [currentList]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* GLAVNI KONTEJNER */}
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-4 pb-20">
        {/* TOP NAVBAR / HEADER */}
        <header className="mb-4">
          <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-500/20">
                DL
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    Daily Leads BiH
                  </h1>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-md">
                    BiH
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  {getFormattedToday(currentDate)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsTemplateModalOpen(true)}
                className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold border border-amber-200 transition-colors shadow-sm"
              >
                <Copy className="w-3.5 h-3.5 text-amber-600" />
                <span className="hidden sm:inline">Kopiraj oglas</span>
                <span className="sm:hidden">Oglas</span>
              </button>

              <button
                onClick={() => setIsInfoModalOpen(true)}
                className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors shadow-sm"
                title="Informacije o ažuriranju"
                aria-label="Informacije"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* DNEVNA TRAKA ZA AKCIJU I BRZI FOKUS */}
          <div className="mt-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white rounded-2xl p-4 shadow-sm relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Dnevni fokus za zaradu</span>
                </div>
                <h2 className="text-sm sm:text-base font-bold leading-snug">
                  Izrada PowerPoint prezentacija i digitalnih usluga
                </h2>
                <p className="text-xs text-blue-100 mt-0.5">
                  Klikni na grupu, zalijepi pripremljeni tekst i objavi svoju ponudu.
                </p>
              </div>

              <button
                onClick={handleFindNewLeads}
                disabled={isRefreshing}
                className="shrink-0 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-blue-700 font-bold text-xs sm:text-sm hover:bg-blue-50 active:scale-95 transition-all shadow-md"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Pronađi nove leadove</span>
              </button>
            </div>
          </div>
        </header>

        {/* TABOVI: Današnji | Pregledano | Sačuvano */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-4">
          <Tabs
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            todayCount={todayLeads.length}
            viewedCount={viewedLeads.length}
            savedCount={savedLeads.length}
          />

          {/* TRAKA ZA KATEGORIJE I PRETRAGU */}
          <div className="p-3 bg-slate-50/70 border-b border-slate-100 space-y-2.5">
            <CategoryFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              counts={categoryCounts}
            />

            {/* Brza pretraga ako korisnik želi npr. samo 'Sarajevo' ili 'Tuzla' */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pretraži po gradu, platformi ili riječi..."
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Očisti
                </button>
              )}
            </div>
          </div>

          {/* LISTA LEADOVA */}
          <div className="p-3 sm:p-4 space-y-3.5">
            {filteredLeads.length > 0 ? (
              filteredLeads.map((lead) => (
                <LeadCard
                  key={lead.id}
                  lead={lead}
                  isViewed={viewedIds.includes(lead.id)}
                  isSaved={savedIds.includes(lead.id)}
                  onToggleViewed={toggleViewed}
                  onToggleSaved={toggleSaved}
                />
              ))
            ) : (
              /* PRAZNO STANJE */
              <div className="text-center py-10 px-4">
                {activeTab === 'today' ? (
                  <div className="space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-base text-slate-900">
                      Svaka čast! Pregledao/la si sve današnje prilike!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Sve današnje prilike si označio kao pregledane. Klikni ispod da izvučeš sljedeću turu svježih prilika ili pregledaj sačuvane.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
                      <button
                        onClick={handleFindNewLeads}
                        className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Učitaj novu turu leadova</span>
                      </button>
                      <button
                        onClick={handleResetViewed}
                        className="inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Vrati pregledane</span>
                      </button>
                    </div>
                  </div>
                ) : activeTab === 'saved' ? (
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto">
                      <Bookmark className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">Nema sačuvanih prilika</h3>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Klikni na ikonu zastavice/bookmarka na bilo kojoj kartici kako bi najbolje grupe zadržao ovdje na jednom mjestu.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900">Nema pregledanih leadova</h3>
                    <p className="text-xs text-slate-500">
                      Kada pregledaš ili objaviš oglas na nekoj grupi, označi je kao „Pregledano“.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* DNO LISTE - STATUS I STATISTIKA */}
          <div className="p-3 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-500 gap-2">
            <div>
              <span>Ukupno u provjerenoj bazi: <strong>{LEADS_DATABASE.length}</strong> platformi u BiH</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Pregledano danas: <strong>{viewedIds.length}</strong></span>
              <span>Sačuvano: <strong>{savedIds.length}</strong></span>
              {viewedIds.length > 0 && (
                <button
                  onClick={handleResetViewed}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Resetuj listu
                </button>
              )}
            </div>
          </div>
        </div>

        {/* BRZI KORISNIČKI VODIČ ZA POČETNIKE */}
        <section className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-3">
          <h3 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            3 Brza koraka kako danas doći do prvog klijenta:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-blue-50/60 border border-blue-100 rounded-xl p-3 space-y-1">
              <span className="font-black text-blue-700 block">1. Otvori 3 grupe</span>
              <p className="text-slate-600">
                Klikni „Otvori“ na barem 3 grupe s liste (preporučujemo studentske i opće oglasnike).
              </p>
            </div>
            <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-3 space-y-1">
              <span className="font-black text-amber-700 block">2. Kopiraj oglas</span>
              <p className="text-slate-600">
                Iskoristi dugme „Kopiraj oglas“ na vrhu ekrana i zalijepi gotov tekst bez razmišljanja.
              </p>
            </div>
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-3 space-y-1">
              <span className="font-black text-emerald-700 block">3. Označi obavljeno</span>
              <p className="text-slate-600">
                Vrati se i klikni „Pregledano“. Aplikacija će ti automatski ponuditi novu grupu za sutra!
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-slate-200 py-3 text-center text-xs text-slate-500">
        <p className="font-medium">
          Daily Leads BiH &bull; Dnevni pronalazak klijenata za PowerPoint i digitalne usluge u BiH
        </p>
      </footer>

      {/* MODALI */}
      <AdTemplatesModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
      />

      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </div>
  );
}
