<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { useHome } from "../composables/useHome.js";

const props = defineProps({ project: { type: Object, required: true } });
const { t, te } = useI18n();
const h = useHome();
const c = computed(() => h.value.card);
const imp = computed(() => (te("impact." + props.project.n) ? t("impact." + props.project.n) : props.project.details.impact));
const shown = computed(() => props.project.tags.slice(0, 4));
const extra = computed(() => Math.max(0, props.project.tags.length - 4));
const to = computed(() => "/portfolio/" + props.project.slug);
</script>

<template>
  <div class="group relative flex h-full flex-col overflow-hidden border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-300 hover:border-neutral-900 hover:shadow-md md:p-8">
    <div class="mb-4 flex flex-col items-start gap-2">
      <span class="font-mono text-[10px] font-semibold uppercase tracking-widest text-neutral-400">{{ project.category }}</span>
      <span v-if="imp" class="bg-neutral-950 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white">{{ imp }}</span>
    </div>

    <div class="flex-grow space-y-3">
      <h3 class="font-display text-xl font-bold tracking-tight text-neutral-900 transition-colors group-hover:text-black md:text-2xl">
        <RouterLink :to="to" class="focus:outline-none">{{ project.title }}</RouterLink>
      </h3>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="tg in shown" :key="tg" class="bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-500">{{ tg }}</span>
        <span v-if="extra" class="px-1 py-0.5 font-mono text-[10px] text-neutral-400">+{{ extra }}</span>
      </div>
      <div class="font-mono text-xs text-neutral-500">
        <span class="mr-1 uppercase text-neutral-400">{{ c.role }}:</span>
        <span class="font-medium text-neutral-700">{{ project.details.role }}</span>
      </div>
      <p class="font-sans text-sm font-light leading-relaxed text-neutral-600">{{ project.desc }}</p>
    </div>

    <div class="mt-8 flex items-center justify-between border-t border-neutral-100 pt-6">
      <RouterLink :to="to" class="inline-flex w-full cursor-pointer items-center justify-center gap-2 border border-neutral-900 px-6 py-3 font-display text-sm font-medium tracking-wide text-neutral-900 transition-all duration-300 group-hover:border-neutral-950 group-hover:bg-neutral-900 group-hover:text-white focus:outline-none">{{ c.details }}<ArrowRightIcon class="h-4 w-4" /></RouterLink>
    </div>
  </div>
</template>
