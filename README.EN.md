# 🏺 Kumbara — Smart Savings & Micro-Saving Tracker

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

<br />

**[ 🇹🇷 Bu dokümantasyonun Türkçe versiyonu için tıklayın (README.md) ](../../Downloads/README.md)**

<br />

<p align="center">
  <strong>Turn everyday micro-savings into real-world financial milestones with a tactile, gamified experience.</strong>
</p>

[Features](#-key-features) • [Tech Stack](#-tech-stack) • [Architecture](#-project-architecture) • [Getting Started](#-getting-started) • [Usage Guide](#-how-to-use) • [Contributing](#-contributing) 

</div>

---

## 📖 About The Project

**Kumbara** *(Turkish for "Piggy Bank")* is a modern, responsive personal finance and micro-savings web application designed to transform everyday frugal habits into tangible financial progress. Whether it is *"brewing coffee at home"*, *"walking instead of hailing a cab"*, or *"saving with supermarket discounts"*, Kumbara lets you deposit those small wins immediately into your digital jar.

Moving far away from sterile, intimidating spreadsheets, Kumbara combines the soft, tactile aesthetics of **Neumorphism (Soft UI)** with an **interactive SVG glass jar featuring a dynamic liquid fill and coin animations**, turning saving money into a rewarding daily ritual.

---

## ✨ Key Features

### 🏺 Interactive 3D SVG Jar Illustration
- **Live Liquid Dynamics**: As you save money, the mint-green liquid inside the jar rises smoothly in real time according to your progress.
- **Centered Percentage Counter**: High-contrast, drop-shadowed `%` progress indicator positioned precisely at the center of the jar.
- **Floating Gold Coins & Sparkles**: Landed coins on the liquid surface and celebratory sparkle animations that reinforce financial milestones.

### ⚡ One-Tap Quick Save Presets
- Instant micro-saving triggers (*Home Coffee*, *Packed Lunch*, *Special Discount*, etc.).
- **Custom Shortcut Creator**: Create unlimited custom savings shortcuts with personalized labels, custom amounts, and category icons (Coffee, Dining, Transport, Shopping, etc.).

### 💰 One-Time Custom Amount Input
- Dedicated numpad modal and quick increment buttons (+10, +50, +100) to stash any custom amount into the piggy bank.
- Celebratory **Canvas-Confetti** particle bursts on every successful deposit.

### 🎯 Goal Management & Progress Tracking
- Set custom goal titles (*Vacation Fund*, *Emergency Fund*, *New Laptop*, *General Savings*), specify target amounts, and choose your preferred currency.
- Dual visual feedback: Both the dynamic jar liquid and a sunken neumorphic horizontal progress bar.

### 📜 Detailed Transaction History
- Chronological timeline displaying dates, category icons, custom notes, and transaction values.
- Quick single-tap delete/undo capability for managing or correcting deposit entries.

### 🌍 Multi-Currency & Internationalization (i18n)
- **Supported Currencies**: **₺ (TRY)**, **$ (USD)**, **€ (EUR)**, **£ (GBP)** with automatic locale formatting.
- **Language Support**: Seamless instant switching between **English (EN)** and **Turkish (TR)**.

### 🌙 Neumorphic Light & Dark Modes
- Carefully crafted soft highlights, inner shadows, and tactile depth.
- Instant switch between bright daytime aesthetics and an eye-safe dark theme.

### 💾 Zero-Setup Local Persistence
- All goals, transactions, custom shortcuts, and user preferences are automatically synced with `localStorage`. No data loss on page refresh.

---

## 🛠️ Tech Stack

| Domain | Technology | Description |
|---|---|---|
| **Frontend Library** | [React 19](https://react.dev/) | Component-driven reactive UI architecture |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) | Strict static typing for bug-free maintainability |
| **Build Tool / Bundler** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundle |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern CSS engine with neumorphic shadow utility classes |
| **Motion** | [Motion](https://motion.dev/) | Smooth layout animations and modal entry transitions |
| **Particle FX** | [Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti) | Milestone achievement celebrations |
| **Icon Set** | [Lucide React](https://lucide.dev/) | Clean, minimalist SVG icons |

---

## 🏗️ Project Architecture

```text
kumbara/
├── assets/                     # Media assets & offline SVG mockups
│   └── preview-hero.svg        # Native vector banner graphic
├── src/
│   ├── components/             # Modular React components
│   │   ├── AddGoalView.tsx         # Goal creation modal
│   │   ├── BottomNav.tsx           # Floating bottom navigation bar
│   │   ├── CreateQuickSaveModal.tsx# Custom preset shortcut creator
│   │   ├── CurrencyView.tsx        # Currency selection view
│   │   ├── CustomAmountModal.tsx   # Custom amount numpad modal
│   │   ├── DashboardView.tsx       # Main dashboard (Jar, goal card, quick saves)
│   │   ├── Header.tsx              # App header and user greeting
│   │   ├── HistoryView.tsx         # Savings history log & metrics
│   │   ├── JarIllustration.tsx     # Dynamic SVG jar with liquid & coins
│   │   ├── LanguageView.tsx        # Language selector (TR / EN)
│   │   ├── PersonalInfoView.tsx    # User profile management view
│   │   ├── SettingsView.tsx        # Preferences & Dark Mode toggle
│   │   └── SuccessView.tsx         # Goal celebration view
│   ├── data/
│   │   └── translations.ts     # Localization dictionaries (TR & EN)
│   ├── App.tsx                 # Core state management & LocalStorage sync
│   ├── index.css               # Tailwind CSS v4 entry point
│   ├── main.tsx                # React DOM root mounting
│   └── types.ts                # TypeScript interfaces & data models
├── index.html                  # HTML5 entry template
├── metadata.json               # App metadata
├── package.json                # Dependencies and npm scripts
└── vite.config.ts              # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the application locally on your machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x or newer recommended)
- [npm](https://www.npmjs.com/), [bun](https://bun.sh/), or [yarn](https://yarnpkg.com/)

### 1. Clone the Repository
```bash
git clone <repo link>
cd kumbara
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch by default at **`http://localhost:3000`**.

### 4. Build for Production
```bash
npm run build
```
Optimized static files will be generated in the `dist/` directory.

### 5. Run Type Checking / Linter
```bash
npm run lint
```

---

## 💡 How to Use

1. **Set a Goal:** Tap the **`+`** icon on the bottom navigation bar, enter your target name (e.g., *Vacation Fund*, *New Laptop*) and set your target amount.
2. **Make Quick Deposits:** Tap any of the quick save cards on the dashboard (*e.g., Coffee +$3, Lunch +$10*) to deposit savings in one click.
3. **Create Custom Shortcuts:** Click *"Add Quick Save"* to create customized shortcuts tailored to your specific daily frugal habits.
4. **Watch Your Progress:** Watch the mint-green liquid rise inside the jar and track the dynamic centered percentage counter.
5. **View History:** Open the *"History"* tab to inspect all past savings transactions and overall statistics.
6. **Customize:** Open your Profile to switch to **Dark Mode**, choose your preferred currency ($ / € / ₺ / £), or change the app language.

---

## 🤝 Contributing

Contributions are what make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

1. Fork the Project
2. Create your Feature Branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your Changes:
   ```bash
   git commit -m 'feat: Add animated progress badges'
   ```
4. Push to the Branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

---
