import { ref, computed } from 'vue'
import id from './id.js'
import en from './en.js'

export const locale = ref(localStorage.getItem('locale') || 'id')
const messages = { id, en }

export function setLocale(v){ locale.value=v; localStorage.setItem('locale',v) }
export function toggleLocale(){ setLocale(locale.value==='id'?'en':'id') }
export function t(path){
  const keys=path.split('.'); let cur=messages[locale.value]
  for(const k of keys) cur=cur?.[k]
  return cur||path
}
export const useI18n=()=>({locale,setLocale,toggleLocale,t,messages:computed(()=>messages[locale.value])})
