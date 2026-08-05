import { Currency, Goal, Transaction, UserProfile, AppSettings, QuickSavePreset } from '../types';

export const initialQuickSavePresets: QuickSavePreset[] = [
  { id: 'preset-1', title: 'Evde Kahve Demledim', amount: 80, category: 'coffee', isDefault: true },
  { id: 'preset-2', title: 'Dışarıda Yemedim', amount: 250, category: 'dining', isDefault: true },
  { id: 'preset-3', title: 'İndirimi Değerlendirdim', amount: 500, category: 'discount', isDefault: true },
];

export const currencies: Currency[] = [
  { code: 'TL', name: 'Türk Lirası', nameEn: 'Turkish Lira', symbol: 'TL' },
  { code: 'USD', name: 'Amerikan Doları', nameEn: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', nameEn: 'Euro', symbol: '€' },
  { code: 'GBP', name: 'İngiliz Sterlini', nameEn: 'British Pound', symbol: '£' },
];

export const initialProfile: UserProfile = {
  name: 'Ahmet Yılmaz',
  email: 'ahmet.yilmaz@email.com',
  avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
};

export const initialSettings: AppSettings = {
  notifications: true,
  darkMode: true, // Screen 5 shows dark mode as default or toggleable
  currency: 'TL',
  language: 'TR',
};

export const initialGoals: Goal[] = [
  {
    id: 'goal-1',
    title: 'Genel Birikim',
    targetAmount: 4000,
    currentAmount: 1200,
    currency: 'TL',
    category: 'genel',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'goal-2',
    title: 'Tatil Fonu',
    targetAmount: 15000,
    currentAmount: 4500,
    currency: 'TL',
    category: 'tatil',
    createdAt: new Date().toISOString(),
  },
];

export const initialTransactions: Transaction[] = [
  {
    id: 'tx-1',
    goalId: 'goal-1',
    title: 'Evde Kahve Demledim',
    amount: 80,
    currency: 'TL',
    date: new Date(Date.now() - 3600000 * 2).toISOString(),
    category: 'coffee',
  },
  {
    id: 'tx-2',
    goalId: 'goal-1',
    title: 'Dışarıda Yemedim',
    amount: 250,
    currency: 'TL',
    date: new Date(Date.now() - 3600000 * 24).toISOString(),
    category: 'dining',
  },
  {
    id: 'tx-3',
    goalId: 'goal-1',
    title: 'İndirimi Değerlendirdim',
    amount: 500,
    currency: 'TL',
    date: new Date(Date.now() - 3600000 * 48).toISOString(),
    category: 'discount',
  },
  {
    id: 'tx-4',
    goalId: 'goal-1',
    title: 'İlk Kumbara Açılışı',
    amount: 370,
    currency: 'TL',
    date: new Date(Date.now() - 3600000 * 72).toISOString(),
    category: 'custom',
  },
];
