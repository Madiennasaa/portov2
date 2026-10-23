import i18n from "./i18n.js";
import router from "./router.js";
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(i18n).mount('#app')
