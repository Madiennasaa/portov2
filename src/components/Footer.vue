<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { profile } from "../data/portfolio.js";
import { useHome } from "../composables/useHome.js";

const h = useHome();
const { t } = useI18n();
const f = computed(() => h.value.footer);
const year = new Date().getFullYear();
const linkedin = profile.links.find((l) => l.name === "LinkedIn");
</script>

<template>
  <footer id="main-footer" class="border-t border-neutral-950 bg-neutral-950 px-6 py-16 text-white md:px-12 print:hidden">
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-12 border-b border-neutral-800 pb-12 md:grid-cols-12">
        <div class="space-y-4 md:col-span-6">
          <h3 class="font-display text-lg font-medium uppercase tracking-wider">{{ profile.name }}</h3>
          <p class="max-w-sm font-sans text-sm font-light text-neutral-400">{{ profile.role }}</p>
        </div>
        <div class="space-y-4 md:col-span-3">
          <h4 class="font-display text-xs font-semibold uppercase tracking-widest text-neutral-400">{{ f.direct }}</h4>
          <div class="space-y-2 font-mono text-sm text-neutral-400">
            <p><a :href="'mailto:' + profile.email" class="transition-colors hover:text-white">{{ profile.email }}</a></p>
            <p><a href="tel:+6285756373129" class="transition-colors hover:text-white">{{ profile.phone }}</a></p>
          </div>
        </div>
        <div class="space-y-4 md:col-span-3">
          <h4 class="font-display text-xs font-semibold uppercase tracking-widest text-neutral-400">{{ f.networks }}</h4>
          <div class="space-y-2 font-mono text-sm text-neutral-400">
            <p><a :href="linkedin.url" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-white">LinkedIn</a></p>
            <p><a :href="'https://' + profile.website" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-white">{{ profile.website }}</a></p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-between gap-4 pt-8 font-mono text-xs text-neutral-500 md:flex-row">
        <p>© {{ year }} {{ profile.name }}. {{ f.rights }}</p>
        <div class="flex space-x-6">
          <RouterLink to="/" class="uppercase transition-colors hover:text-white">{{ t("nav.home") }}</RouterLink>
          <RouterLink to="/portfolio" class="uppercase transition-colors hover:text-white">{{ t("nav.portfolio") }}</RouterLink>
          <RouterLink to="/resume" class="uppercase transition-colors hover:text-white">{{ t("nav.cv") }}</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
