import React from 'react';
import { Coffee, Utensils, Tag, Plus, Trash2 } from 'lucide-react';
import { Transaction, AppSettings } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';
import { Header } from './Header';

interface HistoryViewProps {
  transactions: Transaction[];
  settings: AppSettings;
  onDeleteTransaction: (id: string) => void;
  onBack: () => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({
  transactions,
  settings,
  onDeleteTransaction,
  onBack,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;
  const activeCurrencySymbol =
    currencies.find((c) => c.code === settings.currency)?.symbol || 'TL';

  const locale = settings.language === 'EN' ? 'en-US' : 'tr-TR';
  const totalAmount = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  const getLocalizedTitle = (title: string) => {
    if (title === 'Evde Kahve Demledim') return t.coffeeSavings;
    if (title === 'Dışarıda Yemedim') return t.diningSavings;
    if (title === 'İndirimi Değerlendirdim') return t.discountSavings;
    if (title === 'Tek Seferlik Birikim') return t.customAmountTitle || title;
    return title;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'coffee':
        return <Coffee className="w-5 h-5" />;
      case 'dining':
        return <Utensils className="w-5 h-5" />;
      case 'discount':
        return <Tag className="w-5 h-5" />;
      default:
        return <Plus className="w-5 h-5" />;
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString(settings.language === 'TR' ? 'tr-TR' : 'en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return isoString;
    }
  };

  return (
    <div className={`min-h-screen pb-28 transition-colors ${
      isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      {/* Top Header */}
      <Header
        title={t.historyTitle}
        showBack={true}
        onBack={onBack}
        darkMode={isDark}
      />

      <div className="px-6 py-4 max-w-md mx-auto">
        {/* Total Summary Card */}
        <div
          className={`rounded-3xl p-6 mb-6 flex items-center justify-between transition-all ${
            isDark
              ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c]'
              : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
          }`}
        >
          <div>
            <span className={`text-xs font-medium block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.totalSaved}
            </span>
            <span className={`text-2xl font-bold ${isDark ? 'text-emerald-400' : 'text-[#3a6757]'}`}>
              {totalAmount.toLocaleString(locale)} {activeCurrencySymbol}
            </span>
          </div>
          <div
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
              isDark ? 'bg-emerald-500/20 text-emerald-300' : 'bg-[#bff0db] text-[#194b39]'
            }`}
          >
            {transactions.length} {settings.language === 'EN' ? 'Records' : 'Kayıt'}
          </div>
        </div>

        {/* Transactions List */}
        {transactions.length === 0 ? (
          <div className="text-center py-12">
            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              {t.noTransactions}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className={`rounded-2xl p-4 flex items-center justify-between transition-all ${
                  isDark
                    ? 'bg-[#1a2328] shadow-[4px_4px_12px_#0e1316,-4px_-4px_12px_#26333c]'
                    : 'bg-[#ffffff] shadow-[4px_4px_12px_#d1d9e6,-4px_-4px_12px_#ffffff]'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                    }`}
                  >
                    {getCategoryIcon(tx.category)}
                  </div>

                  <div>
                    <h4 className={`text-sm font-semibold leading-tight ${
                      isDark ? 'text-white' : 'text-[#191c1e]'
                    }`}>
                      {getLocalizedTitle(tx.title)}
                    </h4>
                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {formatDate(tx.date)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-bold ${
                    isDark ? 'text-emerald-400' : 'text-[#3a6757]'
                  }`}>
                    +{tx.amount.toLocaleString(locale)} {activeCurrencySymbol}
                  </span>

                  <button
                    onClick={() => onDeleteTransaction(tx.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                    title={t.deleteTransaction}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
