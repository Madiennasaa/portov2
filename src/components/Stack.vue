<script setup>
import { stack } from "../data/portfolio.js";
</script>

<template>
  <section id="stack" class="border-t border-neutral-200">
    <div class="mx-auto max-w-7xl px-6 py-24">
      <p class="label mb-3">Core Stack</p>
      <h2 class="mb-14 text-3xl font-bold tracking-tight md:text-5xl">Teknologi</h2>
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="g in stack" :key="g.group">
          <h3 class="label mb-4 !text-neutral-900">{{ g.group }}</h3>
          <ul class="space-y-2 border-t border-neutral-200 pt-4">
            <li v-for="i in g.items" :key="i" class="text-neutral-700">{{ i }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
