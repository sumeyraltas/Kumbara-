import React from 'react';
import { ArrowLeft, Bell, User } from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  onTitleClick?: () => void;
  showUserAndBell?: boolean;
  onUserClick?: () => void;
  onBellClick?: () => void;
  user?: UserProfile;
  darkMode?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  onBack,
  onTitleClick,
  showUserAndBell = false,
  onUserClick,
  onBellClick,
  user,
  darkMode = false,
}) => {
  return (
    <header className={`w-full px-5 py-4 flex items-center justify-between sticky top-0 z-30 transition-colors ${
      darkMode ? 'bg-[#151c20]/90 text-white' : 'bg-[#f7f9fc]/90 text-[#191c1e]'
    } backdrop-blur-md`}>
      <div className="w-10 flex items-center justify-start">
        {showBack ? (
          <button
            onClick={onBack}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
              darkMode
                ? 'bg-[#1e272e] shadow-[4px_4px_10px_#10161a,-4px_-4px_10px_#26333c] text-emerald-400'
                : 'bg-[#ffffff] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#3a6757]'
            }`}
            aria-label="Back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>
        ) : showUserAndBell ? (
          <button
            onClick={onUserClick}
            className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-transform active:scale-95 ${
              darkMode
                ? 'bg-[#1e272e] shadow-[4px_4px_10px_#10161a,-4px_-4px_10px_#26333c] text-emerald-400'
                : 'bg-[#ffffff] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#3a6757]'
            }`}
          >
            {user?.avatarUrl ? (
              <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <User className="w-5 h-5" />
            )}
          </button>
        ) : <div className="w-10" />}
      </div>

      <div className="flex-1 text-center">
        {title && (
          <h1
            onClick={onTitleClick}
            className={`text-xl font-bold tracking-tight ${onTitleClick ? 'cursor-pointer hover:opacity-80' : ''} ${
              darkMode ? 'text-white' : 'text-[#3a6757]'
            }`}
          >
            {title}
          </h1>
        )}
      </div>

      <div className="w-10 flex items-center justify-end">
        {showUserAndBell ? (
          <button
            onClick={onBellClick}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
              darkMode
                ? 'bg-[#1e272e] shadow-[4px_4px_10px_#10161a,-4px_-4px_10px_#26333c] text-slate-300'
                : 'bg-[#ffffff] shadow-[4px_4px_10px_#d1d9e6,-4px_-4px_10px_#ffffff] text-[#3a6757]'
            }`}
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
        ) : (
          <div className="w-10" />
        )}
      </div>
    </header>
  );
};
