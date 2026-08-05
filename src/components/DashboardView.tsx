import React from 'react';
import { Coffee, Utensils, Tag, Plus, User, Car, ShoppingBag, Star, BookmarkPlus, PlusCircle, Trash2 } from 'lucide-react';
import { Goal, UserProfile, AppSettings, Currency, QuickSavePreset } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';
import { JarIllustration } from './JarIllustration';
import confetti from 'canvas-confetti';

interface DashboardViewProps {
  user: UserProfile;
  goal: Goal;
  settings: AppSettings;
  presets: QuickSavePreset[];
  onQuickSave: (title: string, amount: number, category: string) => void;
  onOpenCustomAmount: () => void;
  onOpenCreateQuickSave: () => void;
  onDeletePreset?: (id: string) => void;
  onOpenSettings: () => void;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'coffee':
      return Coffee;
    case 'dining':
      return Utensils;
    case 'discount':
      return Tag;
    case 'car':
      return Car;
    case 'shopping':
      return ShoppingBag;
    case 'star':
      return Star;
    default:
      return Tag;
  }
};

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  goal,
  settings,
  presets,
  onQuickSave,
  onOpenCustomAmount,
  onOpenCreateQuickSave,
  onDeletePreset,
  onOpenSettings,
}) => {
  const t = translations[settings.language];
  const activeCurrency: Currency =
    currencies.find((c) => c.code === settings.currency) || currencies[0];

  const locale = settings.language === 'EN' ? 'en-US' : 'tr-TR';
  const formattedCurrent = goal.currentAmount.toLocaleString(locale);
  const formattedTarget = goal.targetAmount.toLocaleString(locale);
  const rawPercentage = Math.round((goal.currentAmount / goal.targetAmount) * 100);
  const percentage = Math.min(Math.max(rawPercentage, 0), 100);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38d399', '#ffe47e', '#4ade80', '#ffffff'],
    });
  };

  const handleQuickClick = (title: string, amount: number, category: string) => {
    triggerConfetti();
    onQuickSave(title, amount, category);
  };

  const getLocalizedPresetTitle = (presetId: string, title: string) => {
    if (presetId === 'preset-1' || title === 'Evde Kahve Demledim') return t.coffeeSavings;
    if (presetId === 'preset-2' || title === 'Dışarıda Yemedim') return t.diningSavings;
    if (presetId === 'preset-3' || title === 'İndirimi Değerlendirdim') return t.discountSavings;
    return title;
  };

  const isDark = settings.darkMode;

  return (
    <div className={`min-h-screen px-4 sm:px-5 pt-5 pb-28 transition-colors ${
      isDark ? 'bg-[#12181b] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      {/* Top Welcome Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t.greeting.replace('{name}', user.name.split(' ')[0])}
          </h2>
          <h1 className={`text-xl sm:text-2xl font-bold tracking-tight mt-0.5 ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
            {t.greetingSubtitle}
          </h1>
        </div>

        <button
          onClick={onOpenSettings}
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
            isDark
              ? 'bg-[#1e272e] shadow-[4px_4px_10px_#0e1417,-4px_-4px_10px_#27343c] text-emerald-400'
              : 'bg-[#ffffff] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#3a6757]'
          }`}
          aria-label="Settings & Profile"
        >
          {user.avatarUrl ? (
            <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover rounded-full" />
          ) : (
            <User className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Main Goal Card ("Mevcut Hedef") */}
      <div
        className={`rounded-3xl p-4 sm:p-5 mb-6 transition-all ${
          isDark
            ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0d1215,-8px_-8px_20px_#26333b] border border-[#27343d]/40'
            : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
        }`}
      >
        <h3 className={`text-sm sm:text-base font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {t.currentGoal}
        </h3>

        {/* Glass Piggy Jar */}
        <div className="w-full py-1 flex items-center justify-center mb-3">
          <JarIllustration progressPercentage={percentage} />
        </div>

        {/* Goal Details */}
        <div className="mb-2">
          <span className={`text-xs font-medium block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {goal.title === 'Genel Birikim' ? t.generalSavings : (goal.title || t.generalSavings)}
          </span>
          <div className="flex items-baseline space-x-1 mt-0.5">
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
              {formattedCurrent} {activeCurrency.symbol}
            </span>
            <span className={`text-xs sm:text-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              / {formattedTarget}
            </span>
          </div>
        </div>

        {/* Sunken Neumorphic Progress Bar */}
        <div
          className={`w-full h-3 rounded-full p-0.5 overflow-hidden ${
            isDark
              ? 'bg-[#131a1e] shadow-[inset_2px_2px_4px_#0b0f12,inset_-2px_-2px_4px_#1f2a32]'
              : 'bg-[#e2e8f0] shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff]'
          }`}
        >
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${
              isDark
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_12px_rgba(56,211,153,0.4)]'
                : 'bg-gradient-to-r from-[#3a6757] to-[#4ade80]'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Quick Action Section ("Hızlı Kayıt") */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-sm sm:text-base font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            {t.quickSavings}
          </h3>
          <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {presets.length} {t.shortcuts}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          {/* Quick Save Presets Grid */}
          {presets.map((preset) => {
            const IconComponent = getCategoryIcon(preset.category);
            const localizedTitle = getLocalizedPresetTitle(preset.id, preset.title);
            return (
              <div key={preset.id} className="relative group">
                <button
                  onClick={() => handleQuickClick(localizedTitle, preset.amount, preset.category)}
                  className={`w-full rounded-2xl p-3.5 flex flex-col items-center justify-center text-center transition-all duration-200 active:scale-95 ${
                    isDark
                      ? 'bg-[#1a2328] shadow-[5px_5px_12px_#0e1316,-5px_-5px_12px_#26333c] hover:bg-[#202b31]'
                      : 'bg-[#ffffff] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center ${
                      isDark
                        ? 'bg-[#141b20] shadow-[inset_3px_3px_6px_#0e1316,inset_-3px_-3px_6px_#202c33] text-emerald-400'
                        : 'bg-[#f0f3f8] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff] text-[#3a6757]'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-medium leading-tight mb-1 line-clamp-1 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    {localizedTitle}
                  </span>
                  <span className={`text-xs font-bold ${isDark ? 'text-emerald-400' : 'text-[#3a6757]'}`}>
                    +{preset.amount.toLocaleString(locale)} {activeCurrency.symbol}
                  </span>
                </button>

                {!preset.isDefault && onDeletePreset && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeletePreset(preset.id);
                    }}
                    className="absolute top-2 right-2 p-1 rounded-full bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100"
                    title={t.deleteShortcut}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}

          {/* TWO (+) ACTION BUTTONS */}
          {/* Button 1: Custom One-Time Deposit Modal */}
          <button
            onClick={onOpenCustomAmount}
            className={`rounded-2xl p-3.5 flex flex-col items-center justify-center text-center transition-all duration-200 active:scale-95 border-2 border-dashed ${
              isDark
                ? 'bg-[#1a2328]/60 border-emerald-500/30 text-emerald-400 shadow-[5px_5px_12px_#0e1316,-5px_-5px_12px_#26333c] hover:bg-[#202b31]'
                : 'bg-[#ffffff] border-[#3a6757]/30 text-[#3a6757] shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] hover:bg-slate-50'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center ${
                isDark
                  ? 'bg-[#141b20] text-emerald-400 shadow-[inset_3px_3px_6px_#0e1316,inset_-3px_-3px_6px_#202c33]'
                  : 'bg-[#e6f4ef] text-[#3a6757]'
              }`}
            >
              <PlusCircle className="w-5 h-5" />
            </div>
            <span className={`text-xs font-bold leading-tight ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
              {t.oneTimeSavings}
            </span>
            <span className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.enterCustomAmount}
            </span>
          </button>

          {/* Button 2: Create Reusable Shortcut Modal */}
          <button
            onClick={onOpenCreateQuickSave}
            className={`rounded-2xl p-3.5 flex flex-col items-center justify-center text-center transition-all duration-200 active:scale-95 border-2 border-dashed ${
              isDark
                ? 'bg-[#1a2328]/60 border-amber-500/30 text-amber-400 shadow-[5px_5px_12px_#0e1316,-5px_-5px_12px_#26333c] hover:bg-[#202b31]'
                : 'bg-[#ffffff] border-amber-500/30 text-amber-600 shadow-[5px_5px_12px_#d1d9e6,-5px_-5px_12px_#ffffff] hover:bg-slate-50'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full mb-2 flex items-center justify-center ${
                isDark
                  ? 'bg-[#141b20] text-amber-400 shadow-[inset_3px_3px_6px_#0e1316,inset_-3px_-3px_6px_#202c33]'
                  : 'bg-amber-50 text-amber-600'
              }`}
            >
              <BookmarkPlus className="w-5 h-5" />
            </div>
            <span className={`text-xs font-bold leading-tight ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
              {t.addQuickSave}
            </span>
            <span className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.createShortcut}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

