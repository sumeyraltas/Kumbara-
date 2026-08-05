import React from 'react';
import { X, Info, Sparkles } from 'lucide-react';
import { AppSettings } from '../types';
import { translations } from '../data/translations';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, settings }) => {
  if (!isOpen) return null;

  const t = translations[settings.language];
  const isDark = settings.darkMode;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`w-full max-w-md rounded-3xl p-6 transition-all text-center ${
          isDark
            ? 'bg-[#182126] text-white border border-[#293640]'
            : 'bg-[#ffffff] text-[#191c1e]'
        }`}
      >
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDark ? 'bg-[#202b31] text-slate-300' : 'bg-[#f0f3f8] text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div
            className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-4 transition-all ${
              isDark
                ? 'bg-[#141b20] shadow-[6px_6px_14px_#0b0f12,-6px_-6px_14px_#222d36] text-emerald-400'
                : 'bg-[#f0f3f8] shadow-[6px_6px_14px_#d1d9e6,-6px_-6px_14px_#ffffff] text-[#3a6757]'
            }`}
          >
            <Sparkles className="w-10 h-10" />
          </div>

          <h3 className="text-xl font-bold">{t.appTitle}</h3>
          <span className="text-xs font-medium text-emerald-500 mt-1">{t.version}</span>
        </div>

        <p className={`text-xs leading-relaxed mb-6 px-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          {t.aboutDescription}
        </p>

        <div className={`p-4 rounded-2xl text-xs space-y-1 ${isDark ? 'bg-[#141b20] text-slate-400' : 'bg-[#f0f3f8] text-slate-600'}`}>
          <div className="font-semibold text-emerald-500">Kumbara Neumorphic System</div>
          <div>Dual-Shadow Tactile Interface</div>
          <div className="text-[10px] opacity-70">© 2026 Kumbara Financial Systems</div>
        </div>
      </div>
    </div>
  );
};
