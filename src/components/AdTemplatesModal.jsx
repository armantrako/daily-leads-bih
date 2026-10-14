import React, { useState } from 'react';
import { X, Copy, Check, FileText, Sparkles } from 'lucide-react';
import { AD_TEMPLATES } from '../data/leads';

export default function AdTemplatesModal({ isOpen, onClose }) {
  const [copiedId, setCopiedId] = useState(null);

  if (!isOpen) return null;

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-xl">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-base sm:text-lg">Gotovi tekstovi oglasa</h2>
              <p className="text-xs text-blue-100">Kopiraj jednim klikom i zalijepi na Facebook ili OLX</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-900 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Savjet za početnike:</span> Otvori lead iz aplikacije, kopiraj odgovarajući tekst ispod, priloži 1-2 lijepe slike prezentacije sa telefona i objavi!
            </div>
          </div>

          {AD_TEMPLATES.map((tpl) => {
            const isCopied = copiedId === tpl.id;
            return (
              <div
                key={tpl.id}
                className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{tpl.title}</h3>
                    <span className="text-[11px] text-slate-500">{tpl.target}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full">
                    {tpl.badge}
                  </span>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-3 text-xs text-slate-700 font-mono whitespace-pre-line leading-relaxed mb-3 select-all max-h-36 overflow-y-auto">
                  {tpl.text}
                </div>

                <button
                  onClick={() => handleCopy(tpl.id, tpl.text)}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all border ${
                    isCopied
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'bg-white border-slate-300 text-slate-800 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Kopirano u međuspremnik! ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Kopiraj ovaj tekst oglasa</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
}
