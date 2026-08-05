import React from 'react';
import {
  Bell,
  Moon,
  Banknote,
  Globe,
  HelpCircle,
  Info,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { Header } from './Header';
import { AppSettings, UserProfile, ScreenType } from '../types';
import { translations } from '../data/translations';
import { currencies } from '../data/initialData';

interface SettingsViewProps {
  settings: AppSettings;
  user: UserProfile;
  onUpdateSettings: (updated: Partial<AppSettings>) => void;
  onNavigate: (screen: ScreenType) => void;
  onOpenHelp: () => void;
  onOpenAbout: () => void;
  onLogout: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  user,
  onUpdateSettings,
  onNavigate,
  onOpenHelp,
  onOpenAbout,
  onLogout,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;

  const activeCurrency = currencies.find((c) => c.code === settings.currency)?.code || 'TL';
  const activeLanguageName = settings.language === 'TR' ? t.turkish : t.english;

  return (
    <div className={`min-h-screen pb-12 transition-colors ${
      isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      {/* Top Header */}
      <Header
        title={t.appTitle}
        showBack={true}
        onBack={() => onNavigate('dashboard')}
        onTitleClick={() => onNavigate('dashboard')}
        showUserAndBell={true}
        onUserClick={() => onNavigate('personal_info')}
        onBellClick={() => onUpdateSettings({ notifications: !settings.notifications })}
        user={user}
        darkMode={isDark}
      />

      <div className="px-6 py-4 max-w-md mx-auto">
        <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#3a6757]'}`}>
          {t.settingsTitle}
        </h2>

        {/* User Profile Card */}
        <button
          onClick={() => onNavigate('personal_info')}
          className={`w-full rounded-3xl p-4 mb-5 flex items-center justify-between text-left transition-all duration-200 active:scale-98 ${
            isDark
              ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c] hover:bg-[#202b31]'
              : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff] hover:bg-slate-50'
          }`}
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border-2 border-emerald-500/30">
              <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <div>
              <h3 className={`text-base font-bold leading-tight ${isDark ? 'text-white' : 'text-[#191c1e]'}`}>
                {user.name}
              </h3>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {user.email}
              </p>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
            isDark ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[#e6f4ef] text-[#3a6757]'
          }`}>
            {t.personalInfoTitle}
          </div>
        </button>

        {/* Group 1: Notifications & Dark Mode */}
        <div
          className={`rounded-3xl p-2 mb-5 transition-all ${
            isDark
              ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c]'
              : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
          }`}
        >
          {/* Notifications Toggle */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200/10">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                }`}
              >
                <Bell className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.notifications}
              </span>
            </div>

            {/* Custom Neumorphic Switch */}
            <button
              onClick={() => onUpdateSettings({ notifications: !settings.notifications })}
              className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors ${
                settings.notifications
                  ? isDark
                    ? 'bg-[#2b6552]'
                    : 'bg-[#3a6757]'
                  : isDark
                    ? 'bg-slate-700'
                    : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                }`}
              >
                <Moon className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.darkMode}
              </span>
            </div>

            <button
              onClick={() => onUpdateSettings({ darkMode: !settings.darkMode })}
              className={`w-12 h-6 rounded-full p-1 flex items-center transition-colors ${
                settings.darkMode
                  ? isDark
                    ? 'bg-[#2b6552]'
                    : 'bg-[#3a6757]'
                  : isDark
                    ? 'bg-slate-700'
                    : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Group 2: Currency & Language */}
        <div
          className={`rounded-3xl p-2 mb-5 transition-all ${
            isDark
              ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c]'
              : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
          }`}
        >
          {/* Currency Item */}
          <button
            onClick={() => onNavigate('currency_select')}
            className="w-full flex items-center justify-between p-4 border-b border-slate-200/10 text-left hover:opacity-90"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                }`}
              >
                <Banknote className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.currency}
              </span>
            </div>

            <div className="flex items-center space-x-1 text-slate-400 text-xs font-semibold">
              <span>{activeCurrency}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          {/* Language Item */}
          <button
            onClick={() => onNavigate('language_select')}
            className="w-full flex items-center justify-between p-4 text-left hover:opacity-90"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                }`}
              >
                <Globe className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.language}
              </span>
            </div>

            <div className="flex items-center space-x-1 text-slate-400 text-xs font-semibold">
              <span>{activeLanguageName}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Group 3: Help & About */}
        <div
          className={`rounded-3xl p-2 mb-8 transition-all ${
            isDark
              ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c]'
              : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
          }`}
        >
          {/* Help */}
          <button
            onClick={onOpenHelp}
            className="w-full flex items-center justify-between p-4 border-b border-slate-200/10 text-left hover:opacity-90"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                }`}
              >
                <HelpCircle className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.helpSupport}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* About */}
          <button
            onClick={onOpenAbout}
            className="w-full flex items-center justify-between p-4 text-left hover:opacity-90"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#f0f3f8] text-[#3a6757]'
                }`}
              >
                <Info className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                {t.aboutUs}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Logout Button */}
        <div className="flex justify-center">
          <button
            onClick={onLogout}
            className={`w-48 py-3 px-6 rounded-full flex items-center justify-center space-x-2 text-red-600 dark:text-red-400 font-semibold text-xs tracking-wide transition-all duration-200 active:scale-95 ${
              isDark
                ? 'bg-[#1a2328] shadow-[6px_6px_14px_#0e1316,-6px_-6px_14px_#26333c]'
                : 'bg-[#ffffff] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff]'
            }`}
          >
            <LogOut className="w-4 h-4" />
            <span>{t.logout}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
