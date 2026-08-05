import React, { useState } from 'react';
import { X, Coffee, ShoppingBag, Utensils, Car, Star, Tag, BookmarkPlus, PlusCircle } from 'lucide-react';
import { AppSettings, QuickSavePreset } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';
import confetti from 'canvas-confetti';

interface CreateQuickSaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePreset: (preset: Omit<QuickSavePreset, 'id'>) => void;
  settings: AppSettings;
}

const CATEGORY_ICONS = [
  { id: 'coffee', icon: Coffee, key: 'catCoffee' },
  { id: 'dining', icon: Utensils, key: 'catDining' },
  { id: 'discount', icon: Tag, key: 'catDiscount' },
  { id: 'car', icon: Car, key: 'catCar' },
  { id: 'shopping', icon: ShoppingBag, key: 'catShopping' },
  { id: 'star', icon: Star, key: 'catStar' },
];

export const CreateQuickSaveModal: React.FC<CreateQuickSaveModalProps> = ({
  isOpen,
  onClose,
  onCreatePreset,
  settings,
}) => {
  if (!isOpen) return null;

  const isDark = settings.darkMode;
  const t = translations[settings.language];
  const activeCurrencySymbol =
    currencies.find((c) => c.code === settings.currency)?.symbol || 'TL';

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('coffee');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!title.trim() || isNaN(parsedAmount) || parsedAmount <= 0) return;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38d399', '#ffe47e', '#4ade80'],
    });

    onCreatePreset({
      title: title.trim(),
      amount: parsedAmount,
      category: selectedCategory,
    });

    setTitle('');
    setAmount('');
    setSelectedCategory('coffee');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 transition-all animate-slide-up ${
          isDark
            ? 'bg-[#182126] text-white border-t border-[#293640] shadow-[0_-8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#f7f9fc] text-[#191c1e] shadow-[8px_8px_24px_#d1d9e6,-8px_-8px_24px_#ffffff]'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2.5">
            <div
              className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                isDark
                  ? 'bg-[#12181c] text-emerald-400 shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d]'
                  : 'bg-[#f0f3f8] text-[#3a6757] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
              }`}
            >
              <BookmarkPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-[#3a6757]'}`}>
                {t.createQuickSaveTitle}
              </h3>
              <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {t.createQuickSaveSubtitle}
              </p>
            </div>
          </div>
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

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Title Field */}
          <div>
            <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.shortcutTitleLabel}
            </label>
            <div
              className={`rounded-2xl px-4 py-3 transition-all ${
                isDark
                  ? 'bg-[#12181c] shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d]'
                  : 'bg-[#f7f9fc] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
              }`}
            >
              <input
                type="text"
                placeholder={t.shortcutTitlePlaceholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full bg-transparent text-sm focus:outline-none font-medium placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Amount Field */}
          <div>
            <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.fixedAmountLabel} ({activeCurrencySymbol})
            </label>
            <div
              className={`rounded-2xl px-4 py-3 flex items-center transition-all ${
                isDark
                  ? 'bg-[#12181c] shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d]'
                  : 'bg-[#f7f9fc] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
              }`}
            >
              <input
                type="number"
                step="any"
                placeholder="50"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full bg-transparent text-base font-bold focus:outline-none text-emerald-500"
              />
              <span className="text-xs font-bold text-slate-400 ml-2">{activeCurrencySymbol}</span>
            </div>
          </div>

          {/* Icon Selector */}
          <div>
            <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.selectIconLabel}
            </label>
            <div className="grid grid-cols-6 gap-2">
              {CATEGORY_ICONS.map((cat) => {
                const IconComp = cat.icon;
                const isSelected = selectedCategory === cat.id;
                const labelText = (t as any)[cat.key] || cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`h-11 rounded-2xl flex items-center justify-center transition-all duration-200 active:scale-95 ${
                      isSelected
                        ? isDark
                          ? 'bg-[#12181c] text-emerald-400 shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d] border border-emerald-500/30'
                          : 'bg-[#f7f9fc] text-[#3a6757] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]'
                        : isDark
                        ? 'bg-[#1a2328] text-slate-400 shadow-[4px_4px_10px_#0e1316,-4px_-4px_10px_#26333c] hover:text-slate-200'
                        : 'bg-[#ffffff] text-slate-500 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] hover:text-slate-800'
                    }`}
                    title={labelText}
                  >
                    <IconComp className="w-5 h-5" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              className={`w-full py-4 rounded-full font-bold text-base flex items-center justify-center gap-2 text-white transition-all duration-200 active:scale-95 ${
                isDark
                  ? 'bg-[#2b6552] hover:bg-[#337862] shadow-[6px_6px_14px_#0e1316,-6px_-6px_14px_#26333c]'
                  : 'bg-[#3a6757] hover:bg-[#31574a] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff]'
              }`}
            >
              <PlusCircle className="w-5 h-5 fill-white/20" />
              <span>{t.saveShortcutButton}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
