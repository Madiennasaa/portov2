<script setup>
import { work, education } from "../data/portfolio.js";
const items = [
  ...work.map((w) => ({ ...w, kind: "Work" })),
  ...education.map((e) => ({ ...e, kind: "Education" })),
];
</script>

<template>
  <section id="timeline" class="border-t border-neutral-200">
    <div class="mx-auto max-w-7xl px-6 py-24">
      <p class="label mb-3">Career Timeline</p>
      <h2 class="mb-14 text-3xl font-bold tracking-tight md:text-5xl">Pengalaman & Pendidikan</h2>
      <ol class="border-l border-neutral-300">
        <li v-for="(it, i) in items" :key="i" class="relative pb-12 pl-8 last:pb-0">
          <span class="absolute -left-[5px] top-2 h-2.5 w-2.5 bg-neutral-900"></span>
          <p class="label">{{ it.kind }} · {{ it.date }}</p>
          <h3 class="mt-2 text-xl font-semibold">{{ it.title }}</h3>
          <p class="text-neutral-500">{{ it.org }}</p>
          <ul v-if="it.points.length" class="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-neutral-600">
            <li v-for="(p, j) in it.points" :key="j">{{ p }}</li>
          </ul>
        </li>
      </ol>
    </div>
  </section>
</template>
