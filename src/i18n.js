import { createI18n } from "vue-i18n";
import en from "./locales/en.js";
import id from "./locales/id.js";
import ja from "./locales/ja.js";

let saved = "id";
try { saved = localStorage.getItem("lang") || "id"; } catch {}
if (!["en", "id", "ja"].includes(saved)) saved = "id";
if (typeof document !== "undefined") document.documentElement.lang = saved;

export default createI18n({ legacy: false, locale: saved, fallbackLocale: "en", messages: { en, id, ja } });
