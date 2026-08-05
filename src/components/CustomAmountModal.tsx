import React, { useState } from 'react';
import { X, Delete, PlusCircle } from 'lucide-react';
import { AppSettings } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';
import confetti from 'canvas-confetti';

interface CustomAmountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddAmount: (title: string, amount: number, category?: string) => void;
  settings: AppSettings;
}

export const CustomAmountModal: React.FC<CustomAmountModalProps> = ({
  isOpen,
  onClose,
  onAddAmount,
  settings,
}) => {
  if (!isOpen) return null;

  const t = translations[settings.language];
  const isDark = settings.darkMode;
  const activeCurrencySymbol =
    currencies.find((c) => c.code === settings.currency)?.symbol || 'TL';

  const [amountStr, setAmountStr] = useState('0');

  const handleNumpadClick = (val: string) => {
    if (amountStr === '0') {
      setAmountStr(val);
    } else if (amountStr.length < 6) {
      setAmountStr((prev) => prev + val);
    }
  };

  const handleBackspace = () => {
    if (amountStr.length > 1) {
      setAmountStr((prev) => prev.slice(0, -1));
    } else {
      setAmountStr('0');
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const parsedAmount = parseFloat(amountStr);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return;

    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#38d399', '#ffe47e', '#ffffff', '#4ade80'],
    });

    onAddAmount(t.customAmountTitle || 'Tek Seferlik Birikim', parsedAmount, 'custom');
    setAmountStr('0');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 transition-all animate-slide-up ${
          isDark
            ? 'bg-[#182126] text-white border-t border-[#293640] shadow-[0_-8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#f7f9fc] text-[#191c1e] shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff]'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between mb-2">
          <div className="w-8" />
          <h3 className={`text-center font-bold text-lg ${isDark ? 'text-white' : 'text-[#3a6757]'}`}>
            {t.customAmountTitle}
          </h3>
          <button
            onClick={onClose}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
              isDark
                ? 'bg-[#202b31] text-slate-300 shadow-[3px_3px_8px_#0e1417,-3px_-3px_8px_#27343c]'
                : 'bg-[#ffffff] text-slate-600 shadow-[3px_3px_8px_#d1d9e6,-3px_-3px_8px_#ffffff]'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className={`text-xs text-center mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {t.oneTimeSavingsSubtitle}
        </p>

        {/* Amount Display (Neumorphic Inset) */}
        <div
          className={`w-full h-24 rounded-2xl flex items-center justify-center mb-6 transition-all ${
            isDark
              ? 'bg-[#12181c] shadow-[inset_4px_4px_8px_#0b0e11,inset_-4px_-4px_8px_#1c262d]'
              : 'bg-[#f7f9fc] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]'
          }`}
        >
          <span className="flex items-baseline font-bold tracking-tight text-4xl sm:text-5xl text-emerald-500">
            <span>{amountStr}</span>
            <span className="text-lg font-semibold ml-2 text-slate-400">
              {activeCurrencySymbol}
            </span>
          </span>
        </div>

        {/* Numpad Grid */}
        <div className="grid grid-cols-3 gap-4 max-w-xs mx-auto mb-8">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              type="button"
              onClick={() => handleNumpadClick(digit)}
              className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center font-bold text-xl transition-all duration-150 active:scale-95 ${
                isDark
                  ? 'bg-[#1a2328] text-white shadow-[4px_4px_10px_#0e1316,-4px_-4px_10px_#26333c] active:shadow-[inset_3px_3px_6px_#0e1316,inset_-3px_-3px_6px_#26333c]'
                  : 'bg-[#f7f9fc] text-[#191c1e] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
              }`}
            >
              {digit}
            </button>
          ))}
          {/* Row 4 */}
          <div className="w-16 h-16 mx-auto" />
          <button
            type="button"
            onClick={() => handleNumpadClick('0')}
            className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center font-bold text-xl transition-all duration-150 active:scale-95 ${
              isDark
                ? 'bg-[#1a2328] text-white shadow-[4px_4px_10px_#0e1316,-4px_-4px_10px_#26333c] active:shadow-[inset_3px_3px_6px_#0e1316,inset_-3px_-3px_6px_#26333c]'
                : 'bg-[#f7f9fc] text-[#191c1e] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
            }`}
          >
            0
          </button>
          <button
            type="button"
            onClick={handleBackspace}
            className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center transition-all duration-150 active:scale-95 ${
              isDark
                ? 'bg-[#1a2328] text-rose-400 shadow-[4px_4px_10px_#0e1316,-4px_-4px_10px_#26333c] active:shadow-[inset_3px_3px_6px_#0e1316,inset_-3px_-3px_6px_#26333c]'
                : 'bg-[#f7f9fc] text-slate-600 shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] active:shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
            }`}
          >
            <Delete className="w-6 h-6" />
          </button>
        </div>

        {/* Primary Action Button */}
        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={parseFloat(amountStr) <= 0}
          className={`w-full py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 text-white transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${
            isDark
              ? 'bg-[#2b6552] hover:bg-[#337862] shadow-[6px_6px_14px_#0e1316,-6px_-6px_14px_#26333c]'
              : 'bg-[#3a6757] hover:bg-[#31574a] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff]'
          }`}
        >
          <PlusCircle className="w-5 h-5 fill-white/20" />
          <span>{t.addMoneyButton}</span>
        </button>
      </div>
    </div>
  );
};

