import React from 'react';
import { Layers, Facebook, ShoppingBag, GraduationCap, Compass } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Sve prilike', icon: Layers },
  { id: 'facebook', label: 'Facebook grupe', icon: Facebook },
  { id: 'olx', label: 'OLX i oglasnici', icon: ShoppingBag },
  { id: 'studenti', label: 'Učenici i studenti', icon: GraduationCap },
  { id: 'ostalo', label: 'Ostale prilike', icon: Compass }
];

export default function CategoryFilter({
  activeCategory,
  onSelectCategory,
  counts
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;
        const count = counts[cat.id] ?? 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border shrink-0 ${
              isActive
                ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
            <span>{cat.label}</span>
            <span
              className={`text-[11px] font-bold px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-blue-700/80 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
