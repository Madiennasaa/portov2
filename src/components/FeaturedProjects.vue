<script setup>
import { computed } from "vue";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.vue";
import { useHome } from "../composables/useHome.js";

const h = useHome();
const f = computed(() => h.value.featured);
const featured = projects.slice(0, 4);
</script>

<template>
  <section id="featured-case-studies" class="mx-auto max-w-7xl px-6 md:px-12">
    <div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span class="eyebrow">{{ f.eyebrow }}</span>
        <div class="text-left">
          <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">{{ f.title }}</h2>
          <p class="mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">{{ f.sub }}</p>
          <div class="sec-rule"></div>
        </div>
      </div>
      <RouterLink to="/portfolio" class="btn-outline shrink-0 self-start uppercase md:self-auto">{{ f.viewFull }}<ArrowRightIcon class="h-4 w-4" /></RouterLink>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
      <ProjectCard v-for="p in featured" :key="p.slug" :project="p" />
    </div>
  </section>
</template>
