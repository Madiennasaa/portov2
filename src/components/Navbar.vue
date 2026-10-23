<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { profile } from "../data/portfolio.js";

const route = useRoute();
const { t, locale } = useI18n();
const open = ref(false);

const setLang = (c) => {
  locale.value = c;
  try { localStorage.setItem("lang", c); } catch {}
  document.documentElement.lang = c;
};

const links = [
  { key: "home", to: "/" },
  { key: "portfolio", to: "/portfolio" },
  { key: "products", to: "/products" },
  { key: "cv", to: "/resume" },
];

const isActive = (to) => {
  if (to === "/") return route.path === "/" && !route.hash;
  return route.path === to || route.path.startsWith(to + "/");
};

watch(() => route.fullPath, () => (open.value = false));
</script>

<template>
  <nav id="main-navbar" class="fixed left-0 right-0 top-0 z-50 bg-white py-6 transition-all duration-300 print:hidden">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
      <RouterLink to="/" class="select-none font-display text-lg font-bold uppercase tracking-tight text-neutral-900 transition-opacity hover:opacity-80 md:text-xl">
        {{ profile.name.split(" ").slice(0, -1).join(" ") }} <span class="font-light text-neutral-400">{{ profile.name.split(" ").slice(-1)[0] }}</span>
      </RouterLink>

      <div class="hidden items-center space-x-10 lg:flex">
        <ul id="desktop-nav-links" class="flex items-center space-x-8">
          <li v-for="l in links" :key="l.to">
            <RouterLink
              :to="l.to"
              :class="['font-display text-sm uppercase tracking-wide transition-colors duration-200',
                isActive(l.to) ? 'border-b-2 border-neutral-900 pb-1 font-semibold text-neutral-900' : 'text-neutral-600 hover:text-neutral-900']"
            >{{ t("nav." + l.key) }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#contact" class="font-display text-sm uppercase tracking-wide text-neutral-600 transition-colors duration-200 hover:text-neutral-900">{{ t("nav.contact") }}</RouterLink>
          </li>
        </ul>

        <div class="h-6 w-px bg-neutral-200"></div>

        <div id="nav-lang-switcher-desktop" class="flex items-center space-x-1 border border-neutral-200 p-1 font-mono text-xs">
          <button
            v-for="c in ['en', 'id', 'ja']" :key="c" @click="setLang(c)"
            :class="['cursor-pointer px-2.5 py-1 uppercase transition-all duration-200', locale === c ? 'bg-neutral-900 font-medium text-white' : 'text-neutral-500 hover:text-neutral-900']"
          >{{ c === "ja" ? "JP" : c }}</button>
        </div>
      </div>

      <div class="flex items-center space-x-4 lg:hidden">
        <div id="nav-lang-switcher-mobile" class="flex items-center space-x-1 border border-neutral-200 p-1 font-mono text-xs">
          <button
            v-for="c in ['en', 'id', 'ja']" :key="c" @click="setLang(c)"
            :class="['cursor-pointer px-2.5 py-1 uppercase transition-all duration-200', locale === c ? 'bg-neutral-900 font-medium text-white' : 'text-neutral-500 hover:text-neutral-900']"
          >{{ c === "ja" ? "JP" : c }}</button>
        </div>
        <button id="mobile-menu-toggle" @click="open = !open" class="cursor-pointer p-1 text-neutral-900 transition-colors hover:bg-neutral-100" aria-label="Toggle Menu">
          <component :is="open ? XMarkIcon : Bars3Icon" class="h-6 w-6" />
        </button>
      </div>
    </div>

    <div id="mobile-drawer" :class="['fixed inset-0 top-[60px] z-40 bg-white transition-transform duration-300 md:top-[72px] lg:hidden', open ? 'translate-x-0' : 'translate-x-full']">
      <div class="flex h-full flex-col justify-between border-t border-neutral-100 bg-white px-8 py-12">
        <ul id="mobile-nav-links" class="space-y-6">
          <li v-for="l in links" :key="l.to">
            <RouterLink
              :to="l.to"
              :class="['block font-display text-2xl font-medium uppercase tracking-wide',
                isActive(l.to) ? 'border-l-4 border-neutral-900 pl-4 text-neutral-900' : 'text-neutral-600 hover:text-neutral-900']"
            >{{ t("nav." + l.key) }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/#contact" class="block font-display text-2xl font-medium uppercase tracking-wide text-neutral-800 hover:text-neutral-900" @click="open = false">{{ t("nav.contact") }}</RouterLink>
          </li>
        </ul>
        <div class="space-y-4 border-t border-neutral-100 pt-8">
          <span class="font-display text-xs uppercase tracking-widest text-neutral-400">{{ t("nav.connect") }}</span>
          <div class="flex flex-col space-y-2 font-mono text-sm">
            <a :href="'mailto:' + profile.email" class="text-neutral-600 hover:text-neutral-900">{{ profile.email }}</a>
            <a :href="profile.links.find((l) => l.name === 'LinkedIn').url" target="_blank" rel="noopener noreferrer" class="text-neutral-600 hover:text-neutral-900">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
