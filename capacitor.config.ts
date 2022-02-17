import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.svelte.capacitor", // TODO: add your app id
  appName: "Svelte Capacitor",
  webDir: "public",
  bundledWebRuntime: true,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
