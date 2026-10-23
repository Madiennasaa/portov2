import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { home } from "../data/home.js";
import { ui } from "../data/ui.js";

export function useHome() {
  const { locale } = useI18n();
  return computed(() => ({ ...(home[locale.value] ?? home.en), ...(ui[locale.value] ?? ui.en) }));
}
