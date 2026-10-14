import React from 'react';
import { Flame, CheckCircle, Bookmark } from 'lucide-react';

export default function Tabs({
  activeTab,
  onSelectTab,
  todayCount,
  viewedCount,
  savedCount
}) {
  const tabs = [
    {
      id: 'today',
      label: 'Današnji leadovi',
      count: todayCount,
      icon: Flame,
      activeColor: 'text-blue-600 border-blue-600'
    },
    {
      id: 'viewed',
      label: 'Pregledano',
      count: viewedCount,
      icon: CheckCircle,
      activeColor: 'text-emerald-600 border-emerald-600'
    },
    {
      id: 'saved',
      label: 'Sačuvano',
      count: savedCount,
      icon: Bookmark,
      activeColor: 'text-amber-600 border-amber-600'
    }
  ];

  return (
    <div className="flex border-b border-slate-200">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onSelectTab(tab.id)}
            className={`flex-1 py-3 px-2 sm:px-4 text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              isActive
                ? `${tab.activeColor} bg-blue-50/20`
                : 'border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'scale-110' : ''}`} />
            <span>{tab.label}</span>
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                isActive
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
