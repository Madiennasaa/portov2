<script setup>
import { useI18n } from "vue-i18n";
import { profile } from "../data/portfolio.js";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
import { useHome } from "../composables/useHome.js";
const { t } = useI18n();
const hm = useHome();
const first = profile.name.split(" ").slice(0, -1).join(" ");
const last = profile.name.split(" ").slice(-1)[0];
</script>

<template>
  <section id="hero" class="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-12 md:px-12 md:py-20">
    <div class="max-w-4xl animate-fade-in-up space-y-8">
      <div class="space-y-4">
        <span class="block font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">{{ hm.heroBadge }}</span>
        <h1 class="font-display text-4xl font-bold uppercase leading-none tracking-tight text-neutral-950 sm:text-5xl md:text-7xl">
          {{ first }} <span class="font-light text-neutral-500">{{ last }}</span>
        </h1>
        <p class="mt-2 font-display text-lg font-light tracking-wide text-neutral-600 sm:text-xl md:text-2xl">{{ profile.role }}</p>
      </div>

      <p class="max-w-3xl font-sans text-base font-light leading-relaxed text-neutral-500 sm:text-lg md:text-xl">
        {{ t("hero.desc") }}
      </p>

      <div class="flex flex-wrap gap-4 pt-4">
        <RouterLink to="/portfolio" class="btn-primary">{{ t("hero.viewPortfolio") }}</RouterLink>
        <RouterLink to="/resume" class="btn-outline">{{ t("hero.resume") }}</RouterLink>
        <RouterLink to="/#contact" class="btn-soft">{{ t("hero.contactMe") }}</RouterLink>
      </div>
    </div>

    <div class="absolute bottom-4 left-6 hidden md:left-12 md:block">
      <RouterLink to="/#featured-case-studies" class="flex items-center space-x-3 font-mono text-xs uppercase tracking-widest text-neutral-400 transition-colors hover:text-neutral-900">
        <span>{{ hm.explore }}</span>
        <ArrowDownIcon class="h-4 w-4" />
      </RouterLink>
    </div>
  </section>
</template>
