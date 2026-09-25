import { ref, computed } from 'vue'
import id from './id.js'
import en from './en.js'

const getInitialLocale=()=>{
  try{ const s=localStorage.getItem('locale'); if(s==='id'||s==='en') return s }catch{}
  return 'id'
}
export const locale = ref(getInitialLocale())
const messages = { id, en }

export function setLocale(v){
  if(v!=='id'&&v!=='en') return
  locale.value=v
  try{ localStorage.setItem('locale',v) }catch{}
  document.documentElement.lang=v
}
export function toggleLocale(){ setLocale(locale.value==='id'?'en':'id') }
export function t(path){
  const keys=path.split('.'); let cur=messages[locale.value]
  for(const k of keys) cur=cur?.[k]
  if(cur!==undefined) return cur
  // fallback to other locale
  let fb=messages[locale.value==='id'?'en':'id']
  for(const k of keys) fb=fb?.[k]
  return fb ?? path
}
// sync html lang on load
try{ document.documentElement.lang=locale.value }catch{}
export const useI18n=()=>({locale,setLocale,toggleLocale,t,messages:computed(()=>messages[locale.value])})
