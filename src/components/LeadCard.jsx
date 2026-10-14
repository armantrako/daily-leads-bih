import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Bookmark, MapPin, AlertCircle, ShieldCheck, Check, Sparkles } from 'lucide-react';

export default function LeadCard({
  lead,
  isViewed,
  isSaved,
  onToggleViewed,
  onToggleSaved
}) {
  const [justOpened, setJustOpened] = useState(false);

  const handleOpen = () => {
    window.open(lead.url, '_blank', 'noopener,noreferrer');
    setJustOpened(true);
    // Ako još nije označeno kao pregledano, nakon otvaranja ponuditi lagani auto-mark ili naglasiti
    if (!isViewed) {
      setTimeout(() => {
        onToggleViewed(lead.id);
      }, 800);
    }
  };

  const getCategoryBadge = (cat) => {
    switch (cat) {
      case 'facebook':
        return { label: 'Facebook grupa', bg: 'bg-blue-100 text-blue-800 border-blue-200' };
      case 'olx':
        return { label: 'OLX / Oglasnik', bg: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
      case 'studenti':
        return { label: 'Učenici i studenti', bg: 'bg-amber-100 text-amber-800 border-amber-200' };
      default:
        return { label: 'Ostale prilike', bg: 'bg-purple-100 text-purple-800 border-purple-200' };
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'provjerena':
        return {
          label: 'Provjerena platforma',
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: ShieldCheck
        };
      case 'djelimično provjerena':
        return {
          label: 'Djelimično provjerena',
          bg: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: AlertCircle
        };
      default:
        return {
          label: 'Treba provjeriti',
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          icon: AlertCircle
        };
    }
  };

  const categoryBadge = getCategoryBadge(lead.category);
  const statusBadge = getStatusBadge(lead.status);
  const StatusIcon = statusBadge.icon;

  return (
    <div
      className={`relative bg-white rounded-2xl border transition-all duration-200 p-4 sm:p-5 shadow-sm hover:shadow-md ${
        isViewed ? 'border-slate-200 bg-slate-50/60 opacity-90' : 'border-slate-200/90 hover:border-blue-300'
      }`}
    >
      {/* Gornji red sa bedževima */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryBadge.bg}`}>
            {categoryBadge.label}
          </span>
          <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-md border ${statusBadge.bg}`}>
            <StatusIcon className="w-3 h-3" />
            {statusBadge.label}
          </span>
        </div>

        <button
          onClick={() => onToggleSaved(lead.id)}
          aria-label={isSaved ? "Ukloni iz sačuvanih" : "Sačuvaj priliku"}
          className={`p-2 rounded-xl transition-colors border ${
            isSaved
              ? 'bg-amber-50 border-amber-300 text-amber-600'
              : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-100'
          }`}
          title={isSaved ? "Sačuvano u favorite" : "Sačuvaj u favorite"}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500' : ''}`} />
        </button>
      </div>

      {/* Naziv i regija */}
      <div className="mb-2.5">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          {lead.name}
        </h3>
        {lead.region && (
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 font-medium">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{lead.region}</span>
          </div>
        )}
      </div>

      {/* Kratko objašnjenje zašto je relevantna */}
      <p className="text-sm text-slate-600 mb-3.5 leading-relaxed">
        {lead.reason}
      </p>

      {/* Informacija o komercijalnim objavama */}
      <div className="bg-slate-50 rounded-xl p-2.5 text-xs text-slate-600 border border-slate-100 mb-4 flex items-start gap-2">
        <span className="font-semibold text-slate-800 shrink-0">Pravila oglašavanja:</span>
        <span className="text-slate-700">{lead.commercialRules}</span>
      </div>

      {/* Glavna dugmad - Prilagođena za veliki touch na mobilnom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 border-t border-slate-100">
        <button
          onClick={handleOpen}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-sm hover:shadow transition-all duration-150"
        >
          <span>Otvori</span>
          <ExternalLink className="w-4 h-4 shrink-0" />
        </button>

        <button
          onClick={() => onToggleViewed(lead.id)}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all border ${
            isViewed
              ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 active:bg-slate-100'
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isViewed ? 'text-emerald-600' : 'text-slate-400'}`} />
          <span>{isViewed ? 'Pregledano ✓' : 'Označi pregledano'}</span>
        </button>
      </div>

      {justOpened && !isViewed && (
        <div className="mt-2 text-center text-xs text-blue-600 font-medium animate-pulse">
          Link otvoren u novom prozoru.
        </div>
      )}
    </div>
  );
}
