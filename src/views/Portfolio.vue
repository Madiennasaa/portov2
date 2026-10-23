<script setup>
import { ref, computed, watch } from "vue";
import { useI18n } from "vue-i18n";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.vue";
const { t, locale } = useI18n();

const cats = computed(() => ["all", ...new Set(projects.map((p) => p.category))]);
const active = ref("all");
watch(locale, () => (active.value = "all"));
const shown = computed(() => (active.value === "all" ? projects : projects.filter((p) => p.category === active.value)));
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-16">
    <div class="mb-12 max-w-3xl animate-fade-in-up sm:mb-16">
      <span class="eyebrow">{{ t("portfolio.eyebrow") }}</span>
      <div class="text-left">
        <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">{{ t("portfolio.title") }}</h2>
        <p class="mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">{{ t("portfolio.sub") }}</p>
        <div class="sec-rule"></div>
      </div>
    </div>

    <div id="portfolio-category-filters" class="mb-12 flex animate-fade-in-up flex-wrap items-center gap-2 border-b border-neutral-100 pb-6" style="animation-delay: 100ms">
      <button
        v-for="c in cats" :key="c" @click="active = c"
        :class="['cursor-pointer border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200',
          active === c ? 'border-neutral-950 bg-neutral-900 text-white' : 'border-transparent text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900']"
      >{{ c === "all" ? t("portfolio.all") : c }}</button>
    </div>

    <div id="portfolio-case-study-grid" class="grid animate-fade-in-up grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12" style="animation-delay: 200ms">
      <ProjectCard v-for="p in shown" :key="p.slug" :project="p" />
    </div>
  </div>
</template>
