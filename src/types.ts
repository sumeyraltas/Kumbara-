export type CurrencyCode = 'TL' | 'USD' | 'EUR' | 'GBP';

export interface Currency {
  code: CurrencyCode;
  name: string;
  nameEn: string;
  symbol: string;
}

export type LanguageCode = 'TR' | 'EN';

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface Goal {
  id: string;
  title: string;
  targetAmount: number;
  currentAmount: number;
  currency: CurrencyCode;
  category: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  goalId: string;
  title: string;
  amount: number;
  currency: CurrencyCode;
  date: string;
  category: 'coffee' | 'dining' | 'discount' | 'custom' | 'goal';
}

export interface QuickSavePreset {
  id: string;
  title: string;
  amount: number;
  category: string;
  isDefault?: boolean;
}

export interface AppSettings {
  notifications: boolean;
  darkMode: boolean;
  currency: CurrencyCode;
  language: LanguageCode;
}

export type ScreenType = 
  | 'dashboard'
  | 'success'
  | 'personal_info'
  | 'settings'
  | 'currency_select'
  | 'language_select'
  | 'history'
  | 'add_goal';
