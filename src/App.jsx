import React, { useState } from 'react';
import { ExternalLink, CheckCircle, AlertCircle, RefreshCw, Calendar, ShieldCheck, Facebook } from 'lucide-react';
import { FACEBOOK_GROUPS_POOL, LAST_CHECKED_DATE } from './data/facebookGroups';

export default function App() {
  const [batchIndex, setBatchIndex] = useState(0);

  // Prikazujemo po 10 grupa u turi
  const BATCH_SIZE = 10;
  const totalGroups = FACEBOOK_GROUPS_POOL.length;

  const currentGroups = FACEBOOK_GROUPS_POOL.slice(
    batchIndex * BATCH_SIZE,
    (batchIndex + 1) * BATCH_SIZE
  ).concat(
    // Ako u bazi nema punih 10 za drugi batch, dopunjavamo s početka
    FACEBOOK_GROUPS_POOL.slice(
      0,
      Math.max(0, BATCH_SIZE - (FACEBOOK_GROUPS_POOL.length - batchIndex * BATCH_SIZE))
    )
  ).slice(0, BATCH_SIZE);

  const handleNextBatch = () => {
    const maxBatches = Math.ceil(totalGroups / BATCH_SIZE);
    setBatchIndex((prev) => (prev + 1) % maxBatches);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 antialiased py-6 px-4 sm:px-6">
      <main className="max-w-xl mx-auto space-y-5">
        {/* ZAGLAVLJE STRANICE */}
        <header className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Facebook className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900">
                Današnje Facebook grupe
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Prilike za objavu reklame za izradu PowerPoint prezentacija u BiH
              </p>
            </div>
          </div>

          {/* DATUM POSLJEDNJE PROVJERE */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-2">
            <div className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Datum posljednje provjere: <strong>{LAST_CHECKED_DATE}</strong></span>
            </div>
            <div className="flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 w-fit">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Stvarni, ručno provjereni linkovi</span>
            </div>
          </div>

          {/* DUGME PRONAĐI NOVE GRUPE */}
          <div className="mt-4">
            <button
              onClick={handleNextBatch}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-sm transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Pronađi nove grupe (Prikaži sljedeću turu)</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-1.5">
              Klikom rotiraš spisak i učitavaš drugih 10 provjerenih grupa iz baze.
            </p>
          </div>
        </header>

        {/* LISTA OD 10 FACEBOOK GRUPA */}
        <section className="space-y-3.5" aria-label="Lista Facebook grupa">
          {currentGroups.map((group, index) => {
            const isActive = group.activityStatus === 'aktivna';

            return (
              <article
                key={group.id}
                className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 hover:border-blue-300 transition-all space-y-3"
              >
                {/* 1. NAZIV GRUPE + BROJ */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {group.name}
                    </h2>
                  </div>

                  {/* 3. KRATKA OZNAKA AKTIVNOSTI */}
                  <span
                    className={`shrink-0 inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>aktivna</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-3 h-3 text-amber-600" />
                        <span>aktivnost nije potvrđena</span>
                      </>
                    )}
                  </span>
                </div>

                {/* 2. DIREKTAN LINK DO GRUPE */}
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-100 text-xs">
                  <span className="text-slate-500 font-medium block mb-0.5">Direktan link:</span>
                  <a
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-blue-600 hover:text-blue-800 break-all hover:underline"
                  >
                    {group.url}
                  </a>
                </div>

                {/* 4. DA LI SU REKLAME ZA USLUGE DOZVOLJENE */}
                <div className="text-xs text-slate-700 flex items-start gap-1.5">
                  <span className="font-bold text-slate-900 shrink-0">Reklame za usluge:</span>
                  <span
                    className={
                      group.adsPolicy.toLowerCase().includes('dozvoljeno')
                        ? 'text-emerald-800 font-medium'
                        : 'text-amber-800 font-medium'
                    }
                  >
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
          })}
        </section>

        {/* JEDNOSTAVAN FOOTER */}
        <footer className="text-center text-xs text-slate-500 py-4">
          <p>
            Daily Leads BiH &bull; Prikazano 10 stvarnih Facebook grupa u BiH
          </p>
        </footer>
      </main>
    </div>
  );
}
