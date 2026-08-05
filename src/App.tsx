import { useState, useEffect } from 'react';
import {
  UserProfile,
  AppSettings,
  Goal,
  Transaction,
  ScreenType,
  CurrencyCode,
  LanguageCode,
  QuickSavePreset,
} from './types';
import {
  initialProfile,
  initialSettings,
  initialGoals,
  initialTransactions,
  initialQuickSavePresets,
  currencies,
} from './data/initialData';

import { DashboardView } from './components/DashboardView';
import { SuccessView, CompletedGoalInfo } from './components/SuccessView';
import { PersonalInfoView } from './components/PersonalInfoView';
import { SettingsView } from './components/SettingsView';
import { CurrencyView } from './components/CurrencyView';
import { LanguageView } from './components/LanguageView';
import { HistoryView } from './components/HistoryView';
import { AddGoalView } from './components/AddGoalView';
import { BottomNav } from './components/BottomNav';
import { CustomAmountModal } from './components/CustomAmountModal';
import { CreateQuickSaveModal } from './components/CreateQuickSaveModal';
import { HelpSupportModal } from './components/HelpSupportModal';
import { AboutModal } from './components/AboutModal';

export default function App() {
  // Load state from localStorage or initial fallback
  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('kumbara_user');
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('kumbara_settings');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem('kumbara_goals');
    return saved ? JSON.parse(saved) : initialGoals;
  });

  const [activeGoalId, setActiveGoalId] = useState<string>('goal-1');

  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('kumbara_transactions');
    return saved ? JSON.parse(saved) : initialTransactions;
  });

  const [quickSavePresets, setQuickSavePresets] = useState<QuickSavePreset[]>(() => {
    const saved = localStorage.getItem('kumbara_quick_save_presets');
    return saved ? JSON.parse(saved) : initialQuickSavePresets;
  });

  const [currentScreen, setCurrentScreen] = useState<ScreenType>('dashboard');
  const [completedGoalInfo, setCompletedGoalInfo] = useState<CompletedGoalInfo | null>(null);

  // Modals state
  const [isCustomAmountOpen, setIsCustomAmountOpen] = useState(false);
  const [isCreateQuickSaveOpen, setIsCreateQuickSaveOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('kumbara_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('kumbara_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('kumbara_goals', JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem('kumbara_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('kumbara_quick_save_presets', JSON.stringify(quickSavePresets));
  }, [quickSavePresets]);

  const activeGoal = goals.find((g) => g.id === activeGoalId) || goals[0];

  // Quick Save Handler
  const handleQuickSave = (
    title: string,
    amount: number,
    category: string
  ) => {
    const activeCurrencySymbol =
      currencies.find((c) => c.code === settings.currency)?.symbol || 'TL';

    if (activeGoal) {
      const updatedAmount = activeGoal.currentAmount + amount;
      const isCompleted = updatedAmount >= activeGoal.targetAmount;

      if (isCompleted) {
        // Goal completed! Set celebration details
        setCompletedGoalInfo({
          title: activeGoal.title || 'Genel Birikim',
          targetAmount: activeGoal.targetAmount,
          currencySymbol: activeCurrencySymbol,
        });

        // Delete/remove completed goal from goals list
        const remainingGoals = goals.filter((g) => g.id !== activeGoal.id);
        if (remainingGoals.length > 0) {
          setGoals(remainingGoals);
          setActiveGoalId(remainingGoals[0].id);
        } else {
          // If no goals left, create a fresh clean goal
          const newFreshGoal: Goal = {
            id: `goal-${Date.now()}`,
            title: 'Genel Birikim',
            targetAmount: 5000,
            currentAmount: 0,
            currency: settings.currency,
            category: 'genel',
            createdAt: new Date().toISOString(),
          };
          setGoals([newFreshGoal]);
          setActiveGoalId(newFreshGoal.id);
        }
      } else {
        setCompletedGoalInfo(null);
        setGoals((prev) =>
          prev.map((g) =>
            g.id === activeGoal.id
              ? { ...g, currentAmount: updatedAmount }
              : g
          )
        );
      }

      // Log Transaction
      const newTx: Transaction = {
        id: `tx-${Date.now()}`,
        goalId: activeGoal.id,
        title,
        amount,
        currency: settings.currency,
        date: new Date().toISOString(),
        category: (category as any) || 'custom',
      };
      setTransactions((prev) => [newTx, ...prev]);
    }

    // Navigate to Success Screen
    setCurrentScreen('success');
  };

  const handleCreateQuickSavePreset = (presetData: Omit<QuickSavePreset, 'id'>) => {
    const newPreset: QuickSavePreset = {
      ...presetData,
      id: `preset-${Date.now()}`,
    };
    setQuickSavePresets((prev) => [...prev, newPreset]);
  };

  const handleDeleteQuickSavePreset = (id: string) => {
    setQuickSavePresets((prev) => prev.filter((p) => p.id !== id));
  };

  const handleCreateGoal = (newGoalData: Omit<Goal, 'id' | 'createdAt'>) => {
    const newGoal: Goal = {
      ...newGoalData,
      id: `goal-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setGoals((prev) => [...prev, newGoal]);
    setActiveGoalId(newGoal.id);
    setCurrentScreen('dashboard');
  };

  const handleDeleteTransaction = (id: string) => {
    const targetTx = transactions.find((t) => t.id === id);
    if (targetTx) {
      setGoals((prev) =>
        prev.map((g) =>
          g.id === targetTx.goalId
            ? { ...g, currentAmount: Math.max(0, g.currentAmount - targetTx.amount) }
            : g
        )
      );
    }
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSaveProfile = (updated: Partial<UserProfile>) => {
    setUser((prev) => ({ ...prev, ...updated }));
  };

  const handleUpdateSettings = (updated: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...updated }));
  };

  const handleSelectCurrency = (currency: CurrencyCode) => {
    setSettings((prev) => ({ ...prev, currency }));
    setCurrentScreen('settings');
  };

  const handleSelectLanguage = (language: LanguageCode) => {
    setSettings((prev) => ({ ...prev, language }));
    setCurrentScreen('settings');
  };

  const handleLogout = () => {
    if (window.confirm('Kumbara oturumunuzu sıfırlamak istediğinize emin misiniz?')) {
      localStorage.clear();
      setUser(initialProfile);
      setSettings(initialSettings);
      setGoals(initialGoals);
      setTransactions(initialTransactions);
      setCurrentScreen('dashboard');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0f1417] flex items-center justify-center p-0 sm:p-4">
      {/* Mobile Frame Container */}
      <div className="w-full max-w-md min-h-screen sm:min-h-[844px] sm:max-h-[920px] bg-[#151c20] sm:rounded-[44px] shadow-2xl overflow-hidden relative border-0 sm:border-8 sm:border-[#1e272e] flex flex-col">
        {/* Render View Based on currentScreen */}
        <main className="flex-1 overflow-y-auto">
          {currentScreen === 'dashboard' && (
            <DashboardView
              user={user}
              goal={activeGoal}
              settings={settings}
              presets={quickSavePresets}
              onQuickSave={(title, amount, cat) => handleQuickSave(title, amount, cat)}
              onOpenCustomAmount={() => setIsCustomAmountOpen(true)}
              onOpenCreateQuickSave={() => setIsCreateQuickSaveOpen(true)}
              onDeletePreset={handleDeleteQuickSavePreset}
              onOpenSettings={() => setCurrentScreen('settings')}
            />
          )}

          {currentScreen === 'success' && (
            <SuccessView
              settings={settings}
              completedGoalInfo={completedGoalInfo}
              onReturnToDashboard={() => {
                setCompletedGoalInfo(null);
                setCurrentScreen('dashboard');
              }}
              onCreateNewGoal={() => {
                setCompletedGoalInfo(null);
                setCurrentScreen('add_goal');
              }}
            />
          )}

          {currentScreen === 'personal_info' && (
            <PersonalInfoView
              user={user}
              settings={settings}
              onSaveProfile={handleSaveProfile}
              onBack={() => setCurrentScreen('settings')}
            />
          )}

          {currentScreen === 'settings' && (
            <SettingsView
              settings={settings}
              user={user}
              onUpdateSettings={handleUpdateSettings}
              onNavigate={(screen) => setCurrentScreen(screen)}
              onOpenHelp={() => setIsHelpOpen(true)}
              onOpenAbout={() => setIsAboutOpen(true)}
              onLogout={handleLogout}
            />
          )}

          {currentScreen === 'currency_select' && (
            <CurrencyView
              settings={settings}
              onSelectCurrency={handleSelectCurrency}
              onBack={() => setCurrentScreen('settings')}
            />
          )}

          {currentScreen === 'language_select' && (
            <LanguageView
              settings={settings}
              onSelectLanguage={handleSelectLanguage}
              onBack={() => setCurrentScreen('settings')}
            />
          )}

          {currentScreen === 'history' && (
            <HistoryView
              transactions={transactions}
              settings={settings}
              onDeleteTransaction={handleDeleteTransaction}
              onBack={() => setCurrentScreen('dashboard')}
            />
          )}

          {currentScreen === 'add_goal' && (
            <AddGoalView
              goals={goals}
              activeGoalId={activeGoalId}
              settings={settings}
              onSelectActiveGoal={(id) => {
                setActiveGoalId(id);
                setCurrentScreen('dashboard');
              }}
              onCreateGoal={handleCreateGoal}
              onBack={() => setCurrentScreen('dashboard')}
            />
          )}
        </main>

        {/* Floating Bottom Nav (Shown on main views) */}
        {['dashboard', 'history', 'add_goal', 'settings'].includes(currentScreen) && (
          <BottomNav
            currentScreen={currentScreen}
            onNavigate={(screen) => setCurrentScreen(screen)}
            lang={settings.language}
            darkMode={settings.darkMode}
          />
        )}

        {/* Custom Modals */}
        <CustomAmountModal
          isOpen={isCustomAmountOpen}
          onClose={() => setIsCustomAmountOpen(false)}
          onAddAmount={(title, amount, category) =>
            handleQuickSave(title, amount, (category as any) || 'custom')
          }
          settings={settings}
        />

        <CreateQuickSaveModal
          isOpen={isCreateQuickSaveOpen}
          onClose={() => setIsCreateQuickSaveOpen(false)}
          onCreatePreset={handleCreateQuickSavePreset}
          settings={settings}
        />

        <HelpSupportModal
          isOpen={isHelpOpen}
          onClose={() => setIsHelpOpen(false)}
          settings={settings}
        />

        <AboutModal
          isOpen={isAboutOpen}
          onClose={() => setIsAboutOpen(false)}
          settings={settings}
        />
      </div>
    </div>
  );
}
