import { ref, computed } from 'vue'
import id from './id.js'
import en from './en.js'

export const locale = ref(localStorage.getItem('locale') || 'id')

export function setLocale(val) {
  locale.value = val
  localStorage.setItem('locale', val)
}
export function toggleLocale() {
  setLocale(locale.value === 'id' ? 'en' : 'id')
}

const messages = { id, en }

export function t(path) {
  const keys = path.split('.')
  let cur = messages[locale.value]
  for (const k of keys) cur = cur?.[k]
  return cur || path
}
export const useI18n = () => ({ locale, setLocale, toggleLocale, t, messages: computed(() => messages[locale.value]) })
