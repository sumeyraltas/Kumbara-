import React from 'react';
import { Check } from 'lucide-react';
import { Header } from './Header';
import { AppSettings, LanguageCode } from '../types';
import { translations } from '../data/translations';

interface LanguageViewProps {
  settings: AppSettings;
  onSelectLanguage: (lang: LanguageCode) => void;
  onBack: () => void;
}

export const LanguageView: React.FC<LanguageViewProps> = ({
  settings,
  onSelectLanguage,
  onBack,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;

  const languages: { code: LanguageCode; name: string }[] = [
    { code: 'TR', name: t.turkish },
    { code: 'EN', name: t.english },
  ];

  return (
    <div className={`min-h-screen transition-colors ${
      isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      {/* Top Header */}
      <Header
        title={t.languageSelectTitle}
        showBack={true}
        onBack={onBack}
        darkMode={isDark}
      />

      <div className="px-6 py-6 max-w-md mx-auto">
        <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.languageSelectSubtitle}
        </p>

        <div className="space-y-4">
          {languages.map((langItem) => {
            const isSelected = settings.language === langItem.code;

            return (
              <button
                key={langItem.code}
                onClick={() => onSelectLanguage(langItem.code)}
                className={`w-full rounded-2xl p-5 flex items-center justify-between text-left transition-all duration-200 active:scale-98 ${
                  isSelected
                    ? isDark
                      ? 'bg-[#1c2930] shadow-[6px_6px_16px_#0b1013,-6px_-6px_16px_#273741] border-2 border-emerald-500'
                      : 'bg-[#ffffff] shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] border-2 border-[#3a6757]'
                    : isDark
                      ? 'bg-[#1a2328] shadow-[6px_6px_14px_#0e1316,-6px_-6px_14px_#26333c] hover:bg-[#202b31]'
                      : 'bg-[#ffffff] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Language Code Badge Tile */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold tracking-wider ${
                      isSelected
                        ? isDark
                          ? 'bg-[#2b6552] text-white'
                          : 'bg-[#3a6757] text-white'
                        : isDark
                          ? 'bg-[#141b20] text-slate-400'
                          : 'bg-[#e2e8f0] text-slate-700'
                    }`}
                  >
                    {langItem.code}
                  </div>

                  <h3 className={`text-base font-semibold ${
                    isDark ? 'text-white' : 'text-[#191c1e]'
                  }`}>
                    {langItem.name}
                  </h3>
                </div>

                {/* Selection Checkmark */}
                {isSelected && (
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      isDark ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500' : 'text-[#3a6757] border border-[#3a6757]'
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
