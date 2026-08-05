import React from 'react';
import { LayoutGrid, History as HistoryIcon, PlusCircle } from 'lucide-react';
import { ScreenType, LanguageCode } from '../types';
import { translations } from '../data/translations';

interface BottomNavProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  lang: LanguageCode;
  darkMode?: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentScreen,
  onNavigate,
  lang,
  darkMode = true,
}) => {
  const t = translations[lang];

  const items = [
    { id: 'dashboard' as ScreenType, label: t.navDashboard, icon: LayoutGrid },
    { id: 'history' as ScreenType, label: t.navHistory, icon: HistoryIcon },
    { id: 'add_goal' as ScreenType, label: t.navAddGoal, icon: PlusCircle },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 max-w-md mx-auto px-6 pb-6 pt-2 pointer-events-none`}>
      <nav
        className={`pointer-events-auto rounded-full px-4 py-3 flex items-center justify-around transition-all ${
          darkMode
            ? 'bg-[#182126]/95 border border-[#2b3740] shadow-[0_10px_25px_rgba(0,0,0,0.6)] text-slate-300'
            : 'bg-[#ffffff]/95 border border-[#e2e8f0] shadow-[0_10px_25px_rgba(209,217,230,0.7)] text-slate-600'
        } backdrop-blur-lg`}
      >
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-4 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? darkMode
                    ? 'bg-[#243438] text-emerald-400 font-medium'
                    : 'bg-[#e6f4ef] text-[#3a6757] font-medium'
                  : 'hover:opacity-80'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
              <span className="text-[11px] tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
