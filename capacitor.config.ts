import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kumbara.app',
  appName: 'Kumbara',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
