import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import { Header } from './Header';
import { UserProfile, AppSettings } from '../types';
import { translations } from '../data/translations';

interface PersonalInfoViewProps {
  user: UserProfile;
  settings: AppSettings;
  onSaveProfile: (updated: Partial<UserProfile>) => void;
  onBack: () => void;
}

export const PersonalInfoView: React.FC<PersonalInfoViewProps> = ({
  user,
  settings,
  onSaveProfile,
  onBack,
}) => {
  const t = translations[settings.language];
  const isDark = settings.darkMode;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl);
  const [showToast, setShowToast] = useState(false);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile({ name, email, avatarUrl });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const handleAvatarChange = () => {
    const avatars = [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    ];
    const nextIndex = (avatars.indexOf(avatarUrl) + 1) % avatars.length;
    setAvatarUrl(avatars[nextIndex]);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors ${
      isDark ? 'bg-[#151c20] text-white' : 'bg-[#f7f9fc] text-[#191c1e]'
    }`}>
      <div>
        {/* Top Header */}
        <Header
          title={t.personalInfoTitle}
          showBack={true}
          onBack={onBack}
          darkMode={isDark}
        />

        {/* Form Container */}
        <form onSubmit={handleUpdate} className="px-6 py-6 max-w-md mx-auto">
          {/* Avatar Section */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="relative group cursor-pointer" onClick={handleAvatarChange}>
              {/* Outer Neumorphic Frame */}
              <div
                className={`w-28 h-28 rounded-full p-1.5 transition-all ${
                  isDark
                    ? 'bg-[#1a2328] shadow-[8px_8px_20px_#0e1316,-8px_-8px_20px_#26333c]'
                    : 'bg-[#ffffff] shadow-[8px_8px_20px_#d1d9e6,-8px_-8px_20px_#ffffff]'
                }`}
              >
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Edit Badge Icon */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAvatarChange();
                }}
                className={`absolute bottom-0 right-0 w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform active:scale-90 ${
                  isDark
                    ? 'bg-[#2a6854] shadow-[2px_2px_6px_rgba(0,0,0,0.4)]'
                    : 'bg-[#3a6757] shadow-[2px_2px_6px_rgba(0,0,0,0.2)]'
                }`}
              >
                <Pencil className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAvatarChange}
              className={`text-xs font-medium mt-3 ${
                isDark ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-[#3a6757]'
              }`}
            >
              {t.changeProfilePhoto}
            </button>
          </div>

          {/* Form Input 1: Ad Soyad */}
          <div className="mb-6">
            <label className={`block text-xs font-semibold mb-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {t.fullNameLabel}
            </label>
            <div
              className={`rounded-2xl p-4 transition-all ${
                isDark
                  ? 'bg-[#131a1e] shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d] border border-[#232f38]/50'
                  : 'bg-[#f2f4f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
              }`}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent text-sm font-medium focus:outline-none"
              />
            </div>
          </div>

          {/* Form Input 2: E-posta */}
          <div className="mb-8">
            <label className={`block text-xs font-semibold mb-2 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {t.emailLabel}
            </label>
            <div
              className={`rounded-2xl p-4 transition-all ${
                isDark
                  ? 'bg-[#131a1e] shadow-[inset_3px_3px_6px_#0b0e11,inset_-3px_-3px_6px_#1c262d] border border-[#232f38]/50'
                  : 'bg-[#f2f4f7] shadow-[inset_3px_3px_6px_#d1d9e6,inset_-3px_-3px_6px_#ffffff]'
              }`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent text-sm font-medium focus:outline-none"
              />
            </div>
          </div>

          {/* Toast Notification */}
          {showToast && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs text-center font-medium animate-fade-in">
              {t.infoUpdatedToast}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-4 rounded-2xl text-base font-semibold text-white transition-all duration-200 active:scale-95 ${
              isDark
                ? 'bg-[#2b6552] hover:bg-[#327660] shadow-[6px_6px_14px_#0c1114,-6px_-6px_14px_#273743]'
                : 'bg-[#3a6757] hover:bg-[#31574a] shadow-[6px_6px_14px_#c3cbd8,-6px_-6px_14px_#ffffff]'
            }`}
          >
            {t.updateInfoButton}
          </button>
        </form>
      </div>
      <div className="h-6" />
    </div>
  );
};
