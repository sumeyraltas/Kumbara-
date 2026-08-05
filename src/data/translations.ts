import { LanguageCode } from '../types';

export const translations = {
  TR: {
    appTitle: 'Kumbara',
    greeting: 'Merhaba, {name}!',
    greetingSubtitle: 'Bugünü kurtarmaya hazır mısın?',
    currentGoal: 'Mevcut Hedef',
    generalSavings: 'Genel Birikim',
    completed: 'Tamamlandı',
    quickSavings: 'Hızlı Kayıt',
    coffeeSavings: 'Evde Kahve Demledim',
    diningSavings: 'Dışarıda Yemedim',
    discountSavings: 'İndirimi Değerlendirdim',
    addCustomAmount: 'Özel Miktar Ekle',
    navDashboard: 'Dashboard',
    navHistory: 'Geçmiş',
    navAddGoal: 'Yeni Hedef',
    
    // Quick Save & Shortcuts
    shortcuts: 'Kısayol',
    oneTimeSavings: 'Tek Seferlik Birikim',
    enterCustomAmount: 'Özel Miktar Gir',
    addQuickSave: 'Hızlı Kayıt Ekle',
    createShortcut: 'Kısayol Oluştur',
    deleteShortcut: 'Kısayolu Sil',
    createQuickSaveTitle: 'Yeni Hızlı Kayıt Oluştur',
    createQuickSaveSubtitle: 'Sık kullandığın tasarrufları kısayol yap',
    shortcutTitleLabel: 'Kısayol Başlığı',
    shortcutTitlePlaceholder: 'Örn. Yürüyüş Yaptım, Taksiye Binmedim...',
    fixedAmountLabel: 'Sabit Miktar',
    selectIconLabel: 'Simge Seç',
    saveShortcutButton: 'Kısayolu Kaydet',
    oneTimeSavingsSubtitle: 'Eklemek istediğiniz miktarı girin',
    catCoffee: 'Kahve',
    catDining: 'Yemek',
    catDiscount: 'İndirim',
    catCar: 'Ulaşım',
    catShopping: 'Alışveriş',
    catStar: 'Özel',

    // Success Screen
    amountAddedSuccess: 'Miktar Başarıyla Eklendi!',
    balanceUpdated: 'Kumbara bakiyeniz güncellendi.',
    returnToDashboard: "Dashboard'a Dön",
    goalCompletedTitle: 'Hedef Tamamlandı! 🎉',
    goalCompletedSubtitle: 'Tebrikler, birikim hedefinize başarıyla ulaştınız!',
    goalReachedMessage: '‘{title}’ hedefinizi tamamladınız ve toplam {amount} biriktirdiniz! Bu hedef başarıyla tamamlandı ve kaldırıldı.',
    createNewGoal: 'Yeni Hedef Oluştur',

    // Personal Info Screen
    personalInfoTitle: 'Kişisel Bilgiler',
    changeProfilePhoto: 'Profil fotoğrafını değiştir',
    fullNameLabel: 'Ad Soyad',
    emailLabel: 'E-posta',
    updateInfoButton: 'Bilgileri Güncelle',
    infoUpdatedToast: 'Bilgileriniz başarıyla güncellendi!',

    // Settings Screen
    settingsTitle: 'Ayarlar',
    notifications: 'Bildirimler',
    darkMode: 'Karanlık Mod',
    currency: 'Para Birimi',
    language: 'Dil',
    helpSupport: 'Yardım & Destek',
    aboutUs: 'Hakkımızda',
    logout: 'Çıkış Yap',

    // Currency Selection Screen
    currencySelectTitle: 'Para Birimi Seç',
    currencySelectSubtitle: 'Hesaplamalarınızda kullanılacak varsayılan para birimini seçin.',
    turkishLira: 'Türk Lirası',
    americanDollar: 'Amerikan Doları',
    euro: 'Euro',
    britishPound: 'İngiliz Sterlini',

    // Language Selection Screen
    languageSelectTitle: 'Dil Seçimi',
    languageSelectSubtitle: 'Uygulamayı kullanmak istediğiniz dili seçin.',
    turkish: 'Türkçe',
    english: 'English',

    // History Screen
    historyTitle: 'Birikim Geçmişi',
    historySubtitle: 'Tüm birikim ve tasarruf hareketleriniz',
    noTransactions: 'Henüz bir kayıt bulunmuyor.',
    totalSaved: 'Toplam Biriken',
    deleteTransaction: 'Sil',

    // Add Goal Screen
    addGoalTitle: 'Yeni Birikim Hedefi',
    goalNameLabel: 'Hedef Adı',
    goalTargetLabel: 'Hedef Miktar',
    categoryLabel: 'Kategori',
    createGoalButton: 'Hedefi Oluştur',
    switchActiveGoal: 'Bu Hedefi Aktif Yap',

    // Custom Amount Modal
    customAmountTitle: 'Kumbara\'ya Para Ekle',
    enterAmount: 'Eklemek İstediğiniz Miktar',
    notePlaceholder: 'Açıklama / Not (İsteğe bağlı)',
    addMoneyButton: 'Parayı Kumbara\'ya At',

    // Modals
    close: 'Kapat',
    aboutDescription: 'Kumbara, günlük küçük tasarruflarınızı büyük hedeflere dönüştüren Neumorfik tasarımlı kişisel finans uygulamasıdır.',
    version: 'Versiyon 2.4.0',
    helpFaq1: 'Kumbara nedir ve nasıl çalışır?',
    helpFaq1Ans: 'Günlük hayatınızda yaptığınız tasarrufları (kahveyi evde yapma, indirim kullanma vb.) kaydederek kumbara hedefinizi takip etmenizi sağlar.',
    helpFaq2: 'Para birimini nasıl değiştirebilirim?',
    helpFaq2Ans: 'Ayarlar menüsünden "Para Birimi" seçeneğine tıklayarak dilediğiniz sembolü belirleyebilirsiniz.',
  },
  EN: {
    appTitle: 'Kumbara',
    greeting: 'Hello, {name}!',
    greetingSubtitle: 'Ready to save the day?',
    currentGoal: 'Current Goal',
    generalSavings: 'General Savings',
    completed: 'Completed',
    quickSavings: 'Quick Save',
    coffeeSavings: 'Brewed Coffee at Home',
    diningSavings: 'Ate at Home',
    discountSavings: 'Used a Discount',
    addCustomAmount: 'Add Custom Amount',
    navDashboard: 'Dashboard',
    navHistory: 'History',
    navAddGoal: 'Add Goal',

    // Quick Save & Shortcuts
    shortcuts: 'Shortcuts',
    oneTimeSavings: 'One-Time Deposit',
    enterCustomAmount: 'Enter Custom Amount',
    addQuickSave: 'Add Quick Save',
    createShortcut: 'Create Shortcut',
    deleteShortcut: 'Delete Shortcut',
    createQuickSaveTitle: 'Create New Quick Save',
    createQuickSaveSubtitle: 'Create shortcuts for your frequent savings',
    shortcutTitleLabel: 'Shortcut Title',
    shortcutTitlePlaceholder: 'e.g. Brewed Coffee, Walked to Work...',
    fixedAmountLabel: 'Fixed Amount',
    selectIconLabel: 'Select Icon',
    saveShortcutButton: 'Save Shortcut',
    oneTimeSavingsSubtitle: 'Enter the amount you wish to deposit',
    catCoffee: 'Coffee',
    catDining: 'Dining',
    catDiscount: 'Discount',
    catCar: 'Transport',
    catShopping: 'Shopping',
    catStar: 'Special',

    // Success Screen
    amountAddedSuccess: 'Amount Successfully Added!',
    balanceUpdated: 'Your Kumbara balance has been updated.',
    returnToDashboard: 'Return to Dashboard',
    goalCompletedTitle: 'Goal Completed! 🎉',
    goalCompletedSubtitle: 'Congratulations, you reached your savings goal!',
    goalReachedMessage: 'You completed your goal ‘{title}’ and saved a total of {amount}! This goal has been completed and removed.',
    createNewGoal: 'Create New Goal',

    // Personal Info Screen
    personalInfoTitle: 'Personal Info',
    changeProfilePhoto: 'Change profile picture',
    fullNameLabel: 'Full Name',
    emailLabel: 'Email',
    updateInfoButton: 'Update Information',
    infoUpdatedToast: 'Your information has been successfully updated!',

    // Settings Screen
    settingsTitle: 'Settings',
    notifications: 'Notifications',
    darkMode: 'Dark Mode',
    currency: 'Currency',
    language: 'Language',
    helpSupport: 'Help & Support',
    aboutUs: 'About Us',
    logout: 'Log Out',

    // Currency Selection Screen
    currencySelectTitle: 'Select Currency',
    currencySelectSubtitle: 'Select the default currency to be used in your calculations.',
    turkishLira: 'Turkish Lira',
    americanDollar: 'US Dollar',
    euro: 'Euro',
    britishPound: 'British Pound',

    // Language Selection Screen
    languageSelectTitle: 'Language Selection',
    languageSelectSubtitle: 'Select the language you want to use in the application.',
    turkish: 'Turkish',
    english: 'English',

    // History Screen
    historyTitle: 'Savings History',
    historySubtitle: 'All your savings and deposit activities',
    noTransactions: 'No records found yet.',
    totalSaved: 'Total Saved',
    deleteTransaction: 'Delete',

    // Add Goal Screen
    addGoalTitle: 'New Savings Goal',
    goalNameLabel: 'Goal Name',
    goalTargetLabel: 'Target Amount',
    categoryLabel: 'Category',
    createGoalButton: 'Create Goal',
    switchActiveGoal: 'Set as Active Goal',

    // Custom Amount Modal
    customAmountTitle: 'Add Money to Kumbara',
    enterAmount: 'Amount to Add',
    notePlaceholder: 'Description / Note (Optional)',
    addMoneyButton: 'Deposit to Piggy Bank',

    // Modals
    close: 'Close',
    aboutDescription: 'Kumbara is a Neumorphic personal finance app designed to turn your daily small savings into major financial milestones.',
    version: 'Version 2.4.0',
    helpFaq1: 'What is Kumbara and how does it work?',
    helpFaq1Ans: 'It allows you to log small daily savings (brewing coffee at home, utilizing discounts) and track your piggy bank progress.',
    helpFaq2: 'How can I change my currency?',
    helpFaq2Ans: 'You can select your preferred currency symbol from Settings > Currency.',
  }
};
