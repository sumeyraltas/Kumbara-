import React, { useEffect } from 'react';
import { Check, Trophy, Sparkles, PlusCircle } from 'lucide-react';
import { Header } from './Header';
import { AppSettings } from '../types';
import { translations } from '../data/translations';
import confetti from 'canvas-confetti';

export interface CompletedGoalInfo {
  title: string;
  targetAmount: number;
  currencySymbol: string;
}

interface SuccessViewProps {
  settings: AppSettings;
  completedGoalInfo?: CompletedGoalInfo | null;
  onReturnToDashboard: () => void;
  onCreateNewGoal?: () => void;
}

export const SuccessView: React.FC<SuccessViewProps> = ({
  settings,
  completedGoalInfo,
  onReturnToDashboard,
  onCreateNewGoal,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;

  useEffect(() => {
    if (completedGoalInfo) {
      // Fire celebration confetti cannon
      const duration = 2.5 * 1000;
      const animationEnd = Date.now() + duration;

      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

      const interval: any = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
        const particleCount = 40 * (timeLeft / duration);
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: { x: randomInRange(0.2, 0.8), y: Math.random() - 0.2 },
          colors: ['#38d399', '#ffe47e', '#ffaa00', '#4ade80', '#ffffff'],
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [completedGoalInfo]);

  // Goal Completion Celebration UI
  if (completedGoalInfo) {
    return (
      <div
        className={`min-h-screen flex flex-col justify-between transition-colors ${
          isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
        }`}
      >
        <Header
          title={t.appTitle}
          showBack={true}
          onBack={onReturnToDashboard}
          darkMode={isDark}
        />

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-8">
          {/* Trophy Neumorphic Container */}
          <div className="relative mb-6">
            <div
              className={`w-36 h-36 rounded-full flex items-center justify-center transition-all ${
                isDark
                  ? 'bg-[#1a2328] shadow-[12px_12px_28px_#0b0f12,-12px_-12px_28px_#25333e]'
                  : 'bg-[#ffffff] shadow-[12px_12px_28px_#d1d9e6,-12px_-12px_28px_#ffffff]'
              }`}
            >
              <div className="w-20 h-20 rounded-full border-2 border-amber-500/30 flex items-center justify-center bg-amber-500/10 text-amber-500 animate-bounce">
                <Trophy className="w-12 h-12 stroke-[2.2]" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-500 font-bold text-xs uppercase tracking-wider mb-3">
            <span>🎉 {t.goalCompletedTitle || 'Hedef Tamamlandı!'}</span>
          </div>

          {/* Subtitle */}
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
              isDark ? 'text-white' : 'text-[#191c1e]'
            }`}
          >
            Tebrikler, Hedefinize Ulaştınız!
          </h2>

          <p
            className={`text-sm max-w-xs leading-relaxed mb-6 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {completedGoalInfo.title} hedefinizi başarıyla tamamladınız ve kumbaranız sıfırlandı.
          </p>

          {/* Completed Summary Card */}
          <div
            className={`w-full max-w-xs p-5 rounded-3xl mb-8 ${
              isDark
                ? 'bg-[#12181c] shadow-[inset_4px_4px_8px_#0b0e11,inset_-4px_-4px_8px_#1c262d] border border-[#27343d]/30'
                : 'bg-[#f0f3f8] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]'
            }`}
          >
            <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Biriktirilen Miktar
            </span>
            <div className="text-3xl font-bold text-emerald-500 mt-1">
              {completedGoalInfo.targetAmount.toLocaleString('tr-TR')}{' '}
              <span className="text-sm font-semibold">{completedGoalInfo.currencySymbol}</span>
            </div>
            <p className={`text-[11px] mt-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Tamamlanan bu hedef listenizden kaldırıldı.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-full max-w-xs space-y-3">
            {onCreateNewGoal && (
              <button
                onClick={onCreateNewGoal}
                className={`w-full py-4 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 text-white transition-all active:scale-95 ${
                  isDark
                    ? 'bg-[#2b6552] hover:bg-[#337862] shadow-[6px_6px_14px_#0e1316,-6px_-6px_14px_#26333c]'
                    : 'bg-[#3a6757] hover:bg-[#31574a] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff]'
                }`}
              >
                <PlusCircle className="w-5 h-5 fill-white/20" />
                <span>{t.createNewGoal || 'Yeni Hedef Oluştur'}</span>
              </button>
            )}

            <button
              onClick={onReturnToDashboard}
              className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all active:scale-95 ${
                isDark
                  ? 'bg-[#1c262d] text-slate-300 hover:text-white shadow-[4px_4px_10px_#0e1316,-4px_-4px_10px_#26333c]'
                  : 'bg-[#ffffff] text-slate-700 hover:text-slate-900 shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff]'
              }`}
            >
              {t.returnToDashboard}
            </button>
          </div>
        </div>

        <div className="h-6" />
      </div>
    );
  }

  // Standard Quick Save Success UI
  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-colors ${
        isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
      }`}
    >
      {/* Top Header */}
      <Header
        title={t.appTitle}
        showBack={true}
        onBack={onReturnToDashboard}
        darkMode={isDark}
      />

      {/* Main Content Center */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-10">
        {/* Soft Neumorphic Checkmark Container */}
        <div
          className={`w-32 h-32 rounded-full flex items-center justify-center mb-8 transition-all ${
            isDark
              ? 'bg-[#1a2328] shadow-[10px_10px_25px_#0b0f12,-10px_-10px_25px_#25333e]'
              : 'bg-[#ffffff] shadow-[10px_10px_25px_#d1d9e6,-10px_-10px_25px_#ffffff]'
          }`}
        >
          <div className="w-16 h-16 rounded-full border-2 border-emerald-600/30 flex items-center justify-center text-[#2e7d5b] bg-emerald-500/10">
            <Check className="w-10 h-10 stroke-[3] text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>

        {/* Title */}
        <h2 className={`text-2xl font-bold tracking-tight mb-2 ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
          {t.amountAddedSuccess}
        </h2>

        {/* Subtitle */}
        <p className={`text-sm max-w-xs leading-relaxed mb-10 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {t.balanceUpdated}
        </p>

        {/* Action Button ("Dashboard'a Dön") */}
        <button
          onClick={onReturnToDashboard}
          className={`w-full max-w-xs py-4 px-8 rounded-full text-base font-semibold text-white transition-all duration-200 active:scale-95 ${
            isDark
              ? 'bg-[#2d6350] hover:bg-[#34735e] shadow-[6px_6px_16px_#0c1114,-6px_-6px_16px_#2a3b46]'
              : 'bg-[#3a6757] hover:bg-[#32584a] shadow-[6px_6px_16px_#c3cbd8,-6px_-6px_16px_#ffffff]'
          }`}
        >
          {t.returnToDashboard}
        </button>
      </div>

      <div className="h-8" />
    </div>
  );
};
