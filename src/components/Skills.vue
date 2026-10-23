<script setup>
import { computed } from "vue";
import { useHome } from "../composables/useHome.js";
import { expertiseItems } from "../data/home.js";

const h = useHome();
const e = computed(() => h.value.expertise);
</script>

<template>
  <section id="skills" class="mx-auto max-w-7xl px-6 md:px-12">
    <div class="mx-auto mb-16 max-w-3xl text-center">
      <span class="eyebrow">{{ e.eyebrow }}</span>
      <div class="text-center">
        <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">{{ e.title }}</h2>
        <p class="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">{{ e.sub }}</p>
        <div class="sec-rule mx-auto"></div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(g, i) in e.groups" :key="i" class="border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-900 sm:p-8">
        <h3 class="mb-6 border-b border-neutral-100 pb-3 font-display text-sm font-semibold uppercase tracking-widest text-neutral-900">{{ g }}</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="t in expertiseItems[i]" :key="t" class="inline-flex select-none items-center border border-neutral-200 bg-neutral-50 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-neutral-800 transition-all duration-200 hover:border-neutral-950 hover:bg-neutral-900 hover:text-white">{{ t }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
