import React from 'react';
import { Check } from 'lucide-react';
import { Header } from './Header';
import { AppSettings, CurrencyCode } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';

interface CurrencyViewProps {
  settings: AppSettings;
  onSelectCurrency: (code: CurrencyCode) => void;
  onBack: () => void;
}

export const CurrencyView: React.FC<CurrencyViewProps> = ({
  settings,
  onSelectCurrency,
  onBack,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;

  return (
    <div className={`min-h-screen transition-colors ${
      isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      {/* Top Header */}
      <Header
        title={t.currencySelectTitle}
        showBack={true}
        onBack={onBack}
        darkMode={isDark}
      />

      <div className="px-6 py-6 max-w-md mx-auto">
        <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.currencySelectSubtitle}
        </p>

        <div className="space-y-4">
          {currencies.map((curr) => {
            const isSelected = settings.currency === curr.code;
            const displayName = settings.language === 'TR' ? curr.name : curr.nameEn;

            return (
              <button
                key={curr.code}
                onClick={() => onSelectCurrency(curr.code)}
                className={`w-full rounded-2xl p-4 flex items-center justify-between text-left transition-all duration-200 active:scale-98 ${
                  isSelected
                    ? isDark
                      ? 'bg-[#1c2930] shadow-[6px_6px_16px_#0b1013,-6px_-6px_16px_#273741] border border-emerald-500/30'
                      : 'bg-[#ffffff] shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] border-2 border-[#3a6757]'
                    : isDark
                      ? 'bg-[#1a2328] shadow-[6px_6px_14px_#0e1316,-6px_-6px_14px_#26333c] hover:bg-[#202b31]'
                      : 'bg-[#ffffff] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Currency Symbol Icon Tile */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                      isSelected
                        ? isDark
                          ? 'bg-[#2b6552] text-emerald-200'
                          : 'bg-[#bff0db] text-[#194b39]'
                        : isDark
                          ? 'bg-[#141b20] text-slate-300'
                          : 'bg-[#f0f3f8] text-slate-700'
                    }`}
                  >
                    {curr.symbol}
                  </div>

                  <div>
                    <h3 className={`text-base font-semibold ${
                      isDark ? 'text-white' : 'text-[#191c1e]'
                    }`}>
                      {displayName}
                    </h3>
                    <span className={`text-xs font-medium ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {curr.code}
                    </span>
                  </div>
                </div>

                {/* Radio Selection State Icon */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? isDark
                        ? 'bg-[#2b6552] text-white'
                        : 'bg-[#bff0db] text-[#194b39] border border-[#3a6757]'
                      : isDark
                        ? 'bg-[#131a1e] border border-slate-700'
                        : 'bg-[#f0f3f8] border border-slate-300'
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
