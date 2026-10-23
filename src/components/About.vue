<script setup>
import { computed } from "vue";
import { useHome } from "../composables/useHome.js";

const h = useHome();
const a = computed(() => h.value.about);
</script>

<template>
  <section id="about" class="border-y border-neutral-100 bg-neutral-50 py-24">
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 md:px-12 lg:grid-cols-12">
      <div class="space-y-4 lg:col-span-5">
        <span class="eyebrow">{{ a.eyebrow }}</span>
        <div class="text-left">
          <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">{{ a.title }}</h2>
          <p class="mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">{{ a.sub }}</p>
          <div class="sec-rule"></div>
        </div>
      </div>

      <div class="space-y-8 font-sans text-base font-light leading-relaxed text-neutral-600 sm:text-lg lg:col-span-7">
        <p>{{ a.p1 }}</p>
        <p>{{ a.p2 }}</p>
        <div class="border-t border-neutral-200 pt-6">
          <h4 class="mb-4 font-display text-sm font-bold uppercase tracking-widest text-neutral-900">{{ a.listTitle }}</h4>
          <ul class="space-y-3 font-mono text-xs uppercase tracking-wide text-neutral-500">
            <li v-for="(it, i) in a.list" :key="i" class="flex items-start gap-4">
              <span class="font-bold text-neutral-900">{{ String(i + 1).padStart(2, "0") }} //</span>
              <span>{{ it }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
