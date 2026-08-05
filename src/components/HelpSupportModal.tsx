import React from 'react';
import { X, HelpCircle, MessageCircle, Mail } from 'lucide-react';
import { AppSettings } from '../types';
import { translations } from '../data/translations';

interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AppSettings;
}

export const HelpSupportModal: React.FC<HelpSupportModalProps> = ({
  isOpen,
  onClose,
  settings,
}) => {
  if (!isOpen) return null;

  const t = translations[settings.language];
  const isDark = settings.darkMode;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`w-full max-w-md rounded-3xl p-6 transition-all max-h-[85vh] overflow-y-auto ${
          isDark
            ? 'bg-[#182126] text-white border border-[#293640]'
            : 'bg-[#ffffff] text-[#191c1e]'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-[#141b20] text-emerald-400' : 'bg-[#bff0db] text-[#194b39]'
              }`}
            >
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold">{t.helpSupport}</h3>
          </div>

          <button
            onClick={onClose}
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDark ? 'bg-[#202b31] text-slate-300' : 'bg-[#f0f3f8] text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div
            className={`rounded-2xl p-4 ${
              isDark ? 'bg-[#141b20]' : 'bg-[#f7f9fc]'
            }`}
          >
            <h4 className="text-sm font-semibold mb-1">{t.helpFaq1}</h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.helpFaq1Ans}
            </p>
          </div>

          <div
            className={`rounded-2xl p-4 ${
              isDark ? 'bg-[#141b20]' : 'bg-[#f7f9fc]'
            }`}
          >
            <h4 className="text-sm font-semibold mb-1">{t.helpFaq2}</h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {t.helpFaq2Ans}
            </p>
          </div>

          <div className="pt-2 border-t border-slate-200/10 space-y-3">
            <a
              href="mailto:destek@kumbara.app"
              className={`flex items-center space-x-3 p-3.5 rounded-2xl transition-all ${
                isDark
                  ? 'bg-[#141b20] text-emerald-400 hover:bg-[#1a232a]'
                  : 'bg-[#f0f3f8] text-[#3a6757] hover:bg-slate-100'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span className="text-xs font-semibold">destek@kumbara.app</span>
            </a>

            <button
              onClick={() => alert('Canlı destek yakında aktif olacaktır!')}
              className={`w-full flex items-center justify-center space-x-2 py-3 rounded-2xl text-xs font-semibold border ${
                isDark
                  ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                  : 'border-[#3a6757] text-[#3a6757] hover:bg-[#3a6757]/10'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Canlı Destek Başlat</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
