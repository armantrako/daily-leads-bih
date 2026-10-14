import React from 'react';
import { X, Info, ShieldCheck, RefreshCw, Cpu, GitBranch, CheckCircle2 } from 'lucide-react';

export default function InfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg">Kako funkcionišu Daily Leads BiH?</h2>
              <p className="text-xs text-slate-400">Transparentno o tehnologiji, ažuriranju i pravilima</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="border border-emerald-200 bg-emerald-50/70 rounded-xl p-3.5">
            <h4 className="font-bold text-emerald-900 text-sm mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              100% Stvarne i ručno verifikovane platforme
            </h4>
            <p className="text-emerald-800 text-xs">
              U bazi nema lažnih ili nasumično izmišljenih linkova. Svaka Facebook grupa, OLX kategorija i studentska zajednica je stvarna i aktivna u Bosni i Hercegovini.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-blue-600" />
              Kako se dnevni leadovi osvježavaju?
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 pl-1">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                <span>
                  <strong>Dnevni algoritam rotacije:</strong> Svaki novi dan (prema datumu na tvom telefonu) bira se novi set od 7 do 10 prilika, balansirajući Facebook grupe, studente i OLX.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                <span>
                  <strong>Dugme „Pronađi nove leadove“:</strong> Kada prođeš današnje prilike ili želiš još opcija, jednim klikom povlačiš sljedeću turu nepregledanih leadova iz baze.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                <span>
                  <strong>Live Facebook & OLX Deep Search:</strong> Aplikacija sadrži ugrađene pametne pretrage uživo koje otvaraju Facebook aplikaciju filtriranu samo na svježe grupe.
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-2">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-purple-600" />
              Iskreno o Facebook ograničenjima
            </h4>
            <p className="text-xs text-slate-600">
              Facebook ne dozvoljava besplatno automatsko „skrejpovanje“ grupa bez korisničke prijave ili plaćenog API-ja (svaki takav nalog bi bio blokiran). Zato je ovaj sistem dizajniran bezbjedno: <strong>ti lično otvaraš link na svom telefonu</strong> i objavljuješ svoj oglas bez ikakvog rizika po tvoj Facebook profil!
            </p>
          </div>

          <div className="border border-slate-200 bg-slate-50 rounded-xl p-3 text-xs text-slate-700">
            <span className="font-bold text-slate-900 block mb-1">GitHub Actions & Automatizacija:</span>
            U repozitoriju projekta pripremljena je automatska skripta (<code className="bg-white px-1 py-0.5 rounded border border-slate-200">daily-leads-sync.yml</code>) koja svakog jutra u 06:00h automatski provjerava dostupnost linkova.
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Razumijem
          </button>
        </div>
      </div>
    </div>
  );
}
