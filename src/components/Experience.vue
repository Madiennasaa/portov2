<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { cvText } from "../data/cvI18n.js";
import { useHome } from "../composables/useHome.js";

const { locale } = useI18n();
const h = useHome();
const t = computed(() => h.value.timeline);

const groups = computed(() => {
  const map = {};
  for (const j of (cvText[locale.value] ?? cvText.id).jobs) {
    (map[j.company] ??= { company: j.company, location: j.location, period: j.period, roles: [] })
      .roles.push({ title: j.title, date: j.period, desc: j.desc });
  }
  return Object.values(map);
});
</script>

<template>
  <section id="experience" class="border-y border-neutral-100 bg-neutral-50 py-24">
    <div class="mx-auto max-w-7xl px-6 md:px-12">
      <div class="mb-16">
        <span class="eyebrow">{{ t.eyebrow }}</span>
        <div class="text-left">
          <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">{{ t.title }}</h2>
          <p class="mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">{{ t.sub }}</p>
          <div class="sec-rule"></div>
        </div>
      </div>

      <div class="max-w-4xl space-y-16">
        <div v-for="g in groups" :key="g.company" class="group relative border-l-2 border-neutral-200 py-2 pl-6 md:pl-8">
          <span class="absolute -left-[7px] top-4 h-3 w-3 rounded-full border-2 border-neutral-900 bg-white transition-colors duration-300 group-hover:bg-neutral-900"></span>
          <div class="mb-6">
            <h3 class="font-display text-xl font-bold tracking-tight text-neutral-950 md:text-2xl">{{ g.company }}</h3>
            <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-neutral-500">
              <span>{{ g.location }}</span>
              <span class="text-neutral-300">•</span>
              <span class="font-semibold uppercase text-neutral-800">{{ g.period }}</span>
            </div>
          </div>
          <div class="space-y-6">
            <div v-for="r in g.roles" :key="r.title + r.date" class="relative border border-neutral-100 bg-neutral-50 p-5 shadow-xs transition-all duration-300 hover:border-neutral-200">
              <div class="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <h4 class="font-display text-base font-semibold text-neutral-900">{{ r.title }}</h4>
                <span class="inline-block self-start border border-neutral-200 bg-white px-2.5 py-0.5 font-mono text-xs text-neutral-500 sm:self-center">{{ r.date }}</span>
              </div>
              <p class="font-sans text-sm font-light leading-relaxed text-neutral-600">{{ r.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
