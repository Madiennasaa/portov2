<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { ArrowLeftIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon, SparklesIcon, LockClosedIcon } from "@heroicons/vue/24/outline";
import { projects } from "../data/projects.js";

const { t, te } = useI18n();
const route = useRoute();
const p = computed(() => projects.find((x) => x.slug === route.params.slug));
const d = computed(() => p.value?.details ?? {});
const imp = computed(() => (p.value && te("impact." + p.value.n) ? t("impact." + p.value.n) : d.value.impact));
const back = computed(() => t("case.back").replace(/^←\s*/, ""));

const sections = computed(() => {
  const x = d.value, out = [];
  if (x.background) out.push({ title: t("case.background"), text: x.background });
  if (x.problem) out.push({ title: t("case.problem"), text: x.problem });
  if (x.role) out.push({ title: t("case.contrib"), text: x.role });
  if (x.solution) out.push({ title: t("case.solution"), text: x.solution });
  if (x.features?.length) out.push({ title: t("case.features"), list: x.features });
  if (x.technicalImplementation) out.push({ title: t("case.tech2"), text: x.technicalImplementation });
  if (x.result) out.push({ title: t("case.result"), result: x.result });
  if (x.lessonLearned) out.push({ title: t("case.lessons"), text: x.lessonLearned, italic: true });
  out.push({ title: t("case.reference"), ref: true });
  return out.map((s, i) => ({ ...s, num: String(i + 1).padStart(2, "0") }));
});
</script>

<template>
  <article class="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-16">
    <div v-if="!p" class="animate-fade-in-up">
      <p class="mb-6 text-neutral-600">{{ t("case.notFound") }}</p>
      <RouterLink to="/portfolio" class="btn-outline"><ArrowLeftIcon class="h-4 w-4" />{{ back }}</RouterLink>
    </div>

    <template v-else>
      <div class="mb-12 animate-fade-in-up">
        <RouterLink to="/portfolio" class="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-900">
          <ArrowLeftIcon class="h-4 w-4" />{{ back }}
        </RouterLink>
      </div>

      <header class="animate-fade-in-up space-y-8 border-b border-neutral-100 pb-12" style="animation-delay: 50ms">
        <div class="flex flex-wrap items-center gap-2">
          <span class="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">{{ p.category }}</span>
          <template v-if="imp">
            <span class="h-4 w-px bg-neutral-200"></span>
            <span class="border border-neutral-200 bg-neutral-50 px-3 py-1 font-mono text-xs uppercase text-neutral-500">{{ imp }}</span>
          </template>
        </div>
        <h1 class="font-display text-4xl font-bold uppercase tracking-tight text-neutral-900 sm:text-5xl md:text-7xl">{{ p.title }}</h1>
        <p class="max-w-4xl font-sans text-lg font-light leading-relaxed text-neutral-500 md:text-xl">{{ p.desc }}</p>

        <div class="grid grid-cols-1 gap-8 border-t border-neutral-100 pt-8 md:grid-cols-3">
          <div v-if="d.role" class="space-y-2">
            <span class="block font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{{ t("case.role") }}</span>
            <p class="font-display text-sm font-semibold uppercase text-neutral-800">{{ d.role }}</p>
          </div>
          <div class="space-y-2">
            <span class="block font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{{ t("case.tech") }}</span>
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span v-for="tg in p.tags" :key="tg" class="bg-neutral-100 px-2.5 py-0.5 font-mono text-[10px] text-neutral-700">{{ tg }}</span>
            </div>
          </div>
          <div v-if="imp" class="space-y-2">
            <span class="block font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{{ t("case.result") }}</span>
            <div class="flex items-center gap-2 font-sans text-sm font-medium text-neutral-800">
              <SparklesIcon class="h-4 w-4 shrink-0" />
              <span>{{ imp }}</span>
            </div>
          </div>
        </div>
      </header>

      <div class="mt-12 animate-fade-in-up space-y-4" style="animation-delay: 150ms">
        <section v-for="s in sections" :key="s.num" class="grid scroll-mt-24 grid-cols-1 gap-8 border-t border-neutral-200 py-10 md:grid-cols-12 md:py-14">
          <div class="flex flex-row justify-between gap-4 md:col-span-4 md:flex-col md:justify-start">
            <div class="space-y-2">
              <span class="block font-mono text-xs font-semibold tracking-wider text-neutral-400">{{ s.num }} //</span>
              <h2 class="font-display text-lg font-bold uppercase tracking-tight text-neutral-900 md:text-xl">{{ s.title }}</h2>
            </div>
          </div>
          <div class="space-y-6 font-sans text-base font-light leading-relaxed text-neutral-700 md:col-span-8 md:text-lg">
            <p v-if="s.text" :class="['font-light', s.italic && 'italic']">{{ s.text }}</p>

            <div v-else-if="s.list" class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div v-for="(f, i) in s.list" :key="i" class="flex items-start gap-3 border border-neutral-200 bg-neutral-50/50 p-4">
                <span class="mt-0.5 font-mono text-xs font-bold text-neutral-400">[{{ i + 1 }}]</span>
                <p class="font-sans text-sm leading-normal text-neutral-800">{{ f }}</p>
              </div>
            </div>

            <div v-else-if="s.result" class="flex items-center justify-between gap-6 border border-neutral-900 bg-neutral-950 p-6 text-white md:p-8">
              <div class="space-y-1">
                <span class="font-mono text-[9px] uppercase tracking-widest text-neutral-400">{{ t("case.result") }}</span>
                <p class="font-display text-xl font-bold tracking-tight md:text-2xl">{{ s.result }}</p>
              </div>
              <SparklesIcon class="h-6 w-6 shrink-0" />
            </div>

            <div v-else-if="s.ref" class="flex flex-wrap items-center gap-4">
              <a v-if="p.link" :href="p.link" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ t("case.github").replace(/\s*↗$/, "") }}<ArrowTopRightOnSquareIcon class="h-4 w-4" /></a>
              <span v-else class="inline-flex items-center gap-2 border border-neutral-200 px-6 py-3 font-display text-sm text-neutral-500"><LockClosedIcon class="h-4 w-4" />{{ t("case.private") }}</span>
            </div>
          </div>
        </section>
      </div>

      <div class="mt-16 flex items-center justify-between border-t border-neutral-100 pt-8">
        <RouterLink to="/portfolio" class="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-900">
          <ArrowLeftIcon class="h-4 w-4" />{{ back }}
        </RouterLink>
        <RouterLink to="/#contact" class="btn-outline">{{ t("cv.touch") }}<ArrowRightIcon class="h-4 w-4" /></RouterLink>
      </div>
    </template>
  </article>
</template>
