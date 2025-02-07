import { en, ja, zh } from "./locales";

export default defineI18nConfig(() => ({
  legacy: false,
  langDir: "./locales/",
  messages: {
    en,
    ja,
    zh
  },
  fallbackLocale: "en"
}));
