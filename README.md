# 🏺 Kumbara — Akıllı Para Biriktirme & Hedef Takip Uygulaması

<div align="center">

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](CONTRIBUTING.md)

<br />

**[ 🇬🇧 For English Documentation Click Here (README.EN.md) ](README.EN.md)**

<br />

<p align="center">
  <strong>Günlük mikro tasarruflarınızı eğlenceli, dokunsal ve görsel bir deneyimle birikime dönüştürün.</strong>
</p>

[Özellikler](#-öne-çıkan-özellikler) • [Teknoloji Yığını](#-teknoloji-yığını) • [Proje Mimarisi](#-proje-mimarisi-ve-dizin-yapısı) • [Kurulum Rehberi](#-kurulum-ve-çalıştırma) • [Kullanım](#-kullanım-rehberi) • [Katkıda Bulunma](#-katkıda-bulunma) 
</div>

---

## 📖 Proje Hakkında

**Kumbara**, kullanıcıların günlük hayatlarında yaptıkları küçük tasarrufları (*"dışarıda kahve içmeyip evde demledim"*, *"taksi yerine yürüdüm"*, *"market indiriminden tasarruf ettim"*) anında kaydederek büyük finansal hedeflere ulaşmalarını sağlayan modern bir kişisel finans ve tasarruf takip uygulamasıdır.

Geleneksel, sıkıcı bütçe tabloları yerine **Neumorfik (Soft UI)** tasarım dili ve **dinamik sıvı doluluk seviyesine sahip SVG kavanoz illüstrasyonu** ile tasarruf yapmayı psikolojik olarak ödüllendirici ve eğlenceli bir alışkanlığa dönüştürür.

---

## ✨ Öne Çıkan Özellikler

### 🏺 Canlı & Etkileşimli Kavanoz İllüstrasyonu
- **Dinamik Sıvı Seviyesi**: Kumbaradaki toplam birikim miktarı hedefle oranlanarak kavanozun içindeki nane yeşili sıvı seviyesini anlık olarak doldurur.
- **Merkezi Yüzde Göstergesi**: Kavanozun tam merkezinde konumlandırılmış, yüksek kontrastlı ve gölgeli canlı `%` doluluk oranı gösterilir.
- **Yüzen Madeni Paralar & Parıltılar**: Sıvının üzerinde biriken 3D altın madeni paralar ve başarıyı simgeleyen ışıltı efektleri.

### ⚡ Hızlı Birikim (Quick Save) Kısayolları
- Önceden tanımlanmış popüler mikro tasarruf kartları (*Evde Kahve Demledim*, *Dışarıda Yemedim*, *İndirimi Değerlendirdim*).
- **Özel Kısayol Oluşturucu**: Kendi tasarruf alışkanlıklarınıza uygun başlık, sabit miktar ve simge (Kahve, Yemek, Ulaşım, Alışveriş vb.) belirleyerek sınırsız kısayol ekleme ve silme desteği.

### 💰 Tek Seferlik Özel Miktar Girişi (One-Time Savings)
- Neumorfik sayısal tuş takımı veya hızlı artırma butonları (+10, +50, +100) ile hedefe anında özel miktarda para yatırma.
- Para eklendiğinde patlayan **Canvas Confetti** kutlama animasyonu ve motivasyonel geri bildirim.

### 🎯 Hedef Yönetimi & İlerleme Takibi
- Yeni birikim hedefi oluşturma (örn: *Tatil Fonu*, *Yeni Bilgisayar*, *Acil Durum Fonu*), hedef tutarı belirleme ve para birimi atama.
- Çift katmanlı ilerleme takibi: Hem görsel kavanoz sıvısı hem de Neumorfik oyuklu yatay ilerleme çubuğu.

### 📜 Detaylı İşlem Geçmişi (Transaction History)
- Yapılan tüm tasarrufların tarih, başlık, kategori simgesi ve miktar bazında kronolojik listelenmesi.
- Yanlış girilen kayıtları anında tek dokunuşla geri alabilme/silme imkânı.

### 🌍 Çok Dilli & Çok Para Birimli Mimari
- **Para Birimleri**: ₺ (TRY), $ (USD), € (EUR), £ (GBP). Para birimi değiştiğinde tüm değerler ilgili para formatında yerelleştirilir.
- **Dil Desteği**: Türkçe (TR) ve İngilizce (EN) tam arayüz çevirisi.

### 🎨 Neumorfik (Soft UI) Tasarım Sistemi
- Yumuşak gölgeler, oyuklu iç butonlar ve gerçekçi plastik/cam hissiyatı.
- Tek dokunuşla geçiş yapılabilen tam uyumlu **Açık Tema (Light Mode)** ve **Koyu Tema (Dark Mode)**.

### 💾 Güvenli ve Kesintisiz Veri Kalıcılığı
- Tüm hedefler, işlem geçmişi, kullanıcı profili ve ayarlar tarayıcının `localStorage` alanında anında senkronize edilir. Sayfa yenilense de hiçbir veri kaybolmaz.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji | Açıklama |
|---|---|---|
| **Kütüphane / Çatı** | [React 19](https://react.dev/) | Modern, bileşen tabanlı reaktif kullanıcı arayüzü |
| **Programlama Dili** | [TypeScript 5.8](https://www.typescriptlang.org/) | Statik tip güvenliği ve ölçeklenebilir kod mimarisi |
| **Geliştirme Aracı** | [Vite 6](https://vitejs.dev/) | Ultra hızlı HMR ve optimize üretim derleyicisi |
| **Stil & Tasarım** | [Tailwind CSS v4](https://tailwindcss.com/) | Neumorfik gölge ve renk sınıfları için modern CSS motoru |
| **Animasyonlar** | [Motion (Framer Motion)](https://motion.dev/) | Sayfa geçişleri, modal animasyonları ve yumuşak geçişler |
| **Kutlama Efekti** | [Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti) | Hedefe para eklendiğinde tetiklenen parçacık animasyonu |
| **İkon Seti** | [Lucide React](https://lucide.dev/) | Minimalist, tutarlı ve hafif SVG ikonlar |

---

## 🏗️ Proje Mimarisi ve Dizin Yapısı

Proje, modüler ve temiz bir mimariye sahiptir:

```text
kumbara/
├── assets/                     # Tanıtım ve arayüz vektör görselleri
│   └── preview-hero.svg        # Yüksek çözünürlüklü arayüz banner görseli
├── src/
│   ├── components/             # Yeniden kullanılabilir UI bileşenleri
│   │   ├── AddGoalView.tsx         # Yeni hedef oluşturma ekranı
│   │   ├── BottomNav.tsx           # Alt menü gezinti çubuğu
│   │   ├── CreateQuickSaveModal.tsx# Özel kısayol oluşturma penceresi
│   │   ├── CurrencyView.tsx        # Para birimi seçim paneli
│   │   ├── CustomAmountModal.tsx   # Tek seferlik miktar giriş penceresi
│   │   ├── DashboardView.tsx       # Ana panel (Kavanoz, hedef kartı, kısayollar)
│   │   ├── Header.tsx              # Üst karşılama çubuğu
│   │   ├── HistoryView.tsx         # İşlem geçmişi ve toplam tasarruf
│   │   ├── JarIllustration.tsx     # Dinamik sıvılı ve madeni paralı SVG kavanoz
│   │   ├── LanguageView.tsx        # Dil tercihleri (TR / EN)
│   │   ├── PersonalInfoView.tsx    # Profil ve kullanıcı bilgileri ekranı
│   │   ├── SettingsView.tsx        # Ayarlar ve karanlık mod anahtarı
│   │   └── SuccessView.tsx         # İşlem başarılı kutlama ekranı
│   ├── data/
│   │   └── translations.ts     # Türkçe ve İngilizce dil sözlükleri
│   ├── App.tsx                 # Ana uygulama mantığı ve durum yönetimi (State)
│   ├── index.css               # Tailwind CSS v4 giriş noktası
│   ├── main.tsx                # React DOM kök bileşeni
│   └── types.ts                # TypeScript veri modelleri ve tipleri
├── index.html                  # HTML şablonu
├── metadata.json               # Uygulama meta verileri
├── package.json                # Bağımlılıklar ve npm scriptleri
├── README.md                   # Türkçe dokümantasyon
├── README.EN.md                # İngilizce dokümantasyon
├── tsconfig.json               # TypeScript yapılandırması
└── vite.config.ts              # Vite derleyici ayarları
```

---

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları sırasıyla uygulayın.

### Gereksinimler
- [Node.js](https://nodejs.org/) (Sürüm 18.x veya üzeri önerilir)
- [npm](https://www.npmjs.com/) / [bun](https://bun.sh/) / [yarn](https://yarnpkg.com/)

### 1. Depoyu Klonlayın
```bash
git clone <repo link>
cd kumbara
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Uygulama varsayılan olarak **`http://localhost:3000`** adresinde çalışmaya başlayacaktır.

### 4. Üretim İçin Derleme (Production Build)
```bash
npm run build
```
Optimize edilmiş statik dosyalar `dist/` klasörüne aktarılır.

### 5. Kod Denetimi (Linting)
```bash
npm run lint
```

---

## 💡 Kullanım Rehberi

1. **Hedef Belirleyin:**
   - Alt menüdeki **"+"** simgesine tıklayarak hedef adını (örn. *Yeni Telefon*, *Tatil Fonu*) ve hedef tutarını belirleyin.
2. **Hızlı Tasarruf Yapın:**
   - Ana paneldeki hızlı butonlara (örneğin *Kahve*, *Yemek*) tıklayarak tek dokunuşla kumbaranızı doldurun.
3. **Kendi Kısayollarınızı Ekleyin:**
   - *"Hızlı Kayıt Ekle"* butonuna tıklayarak günlük sık tekrarladığınız tasarruflar için özel buton oluşturun.
4. **Kavanozun Doluşunu İzleyin:**
   - Para ekledikçe kavanozun içindeki sıvı seviyesi yükselecek ve merkezdeki yüzde dinamik olarak artacaktır.
5. **Geçmişi İnceleyin:**
   - *"Geçmiş"* sekmesine geçerek toplam tasarrufunuzu ve tüm işlem dökümünüzü görüntüleyin.
6. **Kişiselleştirin:**
   - Profil simgesine tıklayarak Karanlık Mod'u açın, para biriminizi ($ / € / ₺ / £) veya dilinizi (TR / EN) değiştirin.

---

## 🤝 Katkıda Bulunma (Contributing)

Katkılarınız projeyi daha iyi hale getirmek için her zaman memnuniyetle karşılanır!

1. Bu depoyu çatallayın (Fork edin).
2. Yeni bir özellik dalı oluşturun:
   ```bash
   git checkout -b feature/YeniOzellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m 'feat: Yeni birikim rozetleri eklendi'
   ```
4. Dalınızı uzak depoya gönderin:
   ```bash
   git push origin feature/YeniOzellik
   ```
5. Bir **Pull Request (PR)** açın.

---
