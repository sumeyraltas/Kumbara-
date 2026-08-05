import React, { useState } from 'react';
import { Target, Check, Plus } from 'lucide-react';
import { Goal, AppSettings } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';
import { Header } from './Header';

interface AddGoalViewProps {
  goals: Goal[];
  activeGoalId: string;
  settings: AppSettings;
  onSelectActiveGoal: (goalId: string) => void;
  onCreateGoal: (newGoal: Omit<Goal, 'id' | 'createdAt'>) => void;
  onBack: () => void;
}

export const AddGoalView: React.FC<AddGoalViewProps> = ({
  goals,
  activeGoalId,
  settings,
  onSelectActiveGoal,
  onCreateGoal,
  onBack,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;
  const activeCurrencySymbol =
    currencies.find((c) => c.code === settings.currency)?.symbol || 'TL';

  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(targetAmount);
    if (!title.trim() || isNaN(amountNum) || amountNum <= 0) return;

    onCreateGoal({
      title: title.trim(),
      targetAmount: amountNum,
      currentAmount: 0,
      currency: settings.currency,
      category: 'genel',
    });

    setTitle('');
    setTargetAmount('');
    setShowForm(false);
  };

  return (
    <div className={`min-h-screen pb-28 transition-colors ${
      isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      <Header
        title={t.addGoalTitle}
        showBack={true}
        onBack={onBack}
        darkMode={isDark}
      />

      <div className="px-6 py-4 max-w-md mx-auto">
        {/* Existing Goals Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-base font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
              Birikim Hedefleriniz
            </h3>
            <button
              onClick={() => setShowForm(!showForm)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center space-x-1 ${
                isDark ? 'bg-[#2b6552] text-white' : 'bg-[#3a6757] text-white'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Yeni Ekle</span>
            </button>
          </div>

          <div className="space-y-4">
            {goals.map((g) => {
              const isActive = g.id === activeGoalId;
              const pct = Math.min(Math.round((g.currentAmount / g.targetAmount) * 100), 100);

              return (
                <div
                  key={g.id}
                  onClick={() => onSelectActiveGoal(g.id)}
                  className={`rounded-2xl p-5 cursor-pointer transition-all ${
                    isActive
                      ? isDark
                        ? 'bg-[#1c2930] shadow-[6px_6px_16px_#0b1013,-6px_-6px_16px_#273741] border-2 border-emerald-500'
                        : 'bg-[#ffffff] shadow-[6px_6px_16px_#d1d9e6,-6px_-6px_16px_#ffffff] border-2 border-[#3a6757]'
                      : isDark
                        ? 'bg-[#1a2328] shadow-[4px_4px_12px_#0e1316,-4px_-4px_12px_#26333c]'
                        : 'bg-[#ffffff] shadow-[4px_4px_12px_#d1d9e6,-4px_-4px_12px_#ffffff]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive
                            ? isDark
                              ? 'bg-[#2b6552] text-white'
                              : 'bg-[#bff0db] text-[#194b39]'
                            : isDark
                              ? 'bg-[#141b20] text-slate-400'
                              : 'bg-[#f0f3f8] text-slate-600'
                        }`}
                      >
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`text-base font-semibold ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
                          {g.title}
                        </h4>
                        <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                          {g.currentAmount.toLocaleString('tr-TR')} / {g.targetAmount.toLocaleString('tr-TR')} {activeCurrencySymbol}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  {/* Goal Progress bar */}
                  <div
                    className={`w-full h-2 rounded-full p-0.5 overflow-hidden ${
                      isDark ? 'bg-[#131a1e]' : 'bg-[#e2e8f0]'
                    }`}
                  >
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Create Goal Form */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl p-6 transition-all ${
              isDark
                ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c]'
                : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
            }`}
          >
            <h4 className={`text-sm font-bold mb-4 ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
              {t.addGoalTitle}
            </h4>

            <div className="mb-4">
              <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {t.goalNameLabel}
              </label>
              <div
                className={`rounded-2xl p-3.5 ${
                  isDark
                    ? 'bg-[#131a1e] shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d]'
                    : 'bg-[#f2f4f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
                }`}
              >
                <input
                  type="text"
                  placeholder="örn: Yeni Laptop, Tatil..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className={`block text-xs font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                {t.goalTargetLabel} ({activeCurrencySymbol})
              </label>
              <div
                className={`rounded-2xl p-3.5 ${
                  isDark
                    ? 'bg-[#131a1e] shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d]'
                    : 'bg-[#f2f4f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
                }`}
              >
                <input
                  type="number"
                  placeholder="5000"
                  value={targetAmount}
                  onChange={(e) => setTargetAmount(e.target.value)}
                  required
                  className="w-full bg-transparent text-sm focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-3.5 rounded-2xl text-sm font-semibold text-white transition-transform active:scale-95 ${
                isDark ? 'bg-[#2b6552]' : 'bg-[#3a6757]'
              }`}
            >
              {t.createGoalButton}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
