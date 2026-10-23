<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowLeftIcon, ArrowRightIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { product } from "../data/product.js";
import { useHome } from "../composables/useHome.js";

const { locale } = useI18n();
const h = useHome();
const pp = computed(() => h.value.productsPage);
const pd = computed(() => ({ ...product, ...(product[locale.value] ?? product.id) }));
</script>

<template>
  <article class="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-16">
    <div class="mb-10">
      <RouterLink to="/" class="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 transition-colors hover:text-neutral-900">
        <ArrowLeftIcon class="h-4 w-4" />{{ pp.back }}
      </RouterLink>
    </div>

    <header class="animate-fade-in-up space-y-6 border-b border-neutral-100 pb-12">
      <div class="flex flex-wrap gap-2">
        <span v-for="(b, i) in pd.badges" :key="b" :class="['px-2 py-1 font-mono text-[10px] uppercase tracking-wider', i === 0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700']">{{ b }}</span>
      </div>
      <h1 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-950 md:text-5xl">{{ pd.name }}</h1>
      <p class="max-w-3xl font-display text-lg font-light text-neutral-600 md:text-xl">{{ pd.desc }}</p>
      <p class="font-mono text-xs uppercase text-neutral-500">{{ pd.role }}</p>
      <div class="flex flex-wrap gap-4 pt-4">
        <a v-if="product.demoUrl" :href="product.demoUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ pp.open }}<ArrowTopRightOnSquareIcon class="h-4 w-4" /></a>
        <RouterLink :to="'/portfolio/' + product.slug" class="btn-outline">{{ pp.caseStudy }}<ArrowRightIcon class="h-4 w-4" /></RouterLink>
      </div>
    </header>

    <div class="mt-16 space-y-16 md:space-y-24">
      <section>
        <h2 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-neutral-900">{{ pp.overview }}</h2>
        <p class="max-w-4xl font-sans text-base font-light leading-relaxed text-neutral-600">{{ pd.overview }}</p>
      </section>

      <section>
        <h2 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-neutral-900">{{ pp.modules }}</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="f in pd.features" :key="f" class="border border-neutral-200 bg-white px-2.5 py-1 font-mono text-[11px] text-neutral-700">{{ f }}</span>
        </div>
      </section>

      <section>
        <h2 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-neutral-900">{{ pp.tech }}</h2>
        <div class="flex flex-wrap gap-2">
          <span v-for="t in product.tags" :key="t" class="border border-neutral-200 px-3 py-1.5 font-mono text-xs text-neutral-700">{{ t }}</span>
        </div>
      </section>

      <section v-if="product.demoAccount" class="border border-neutral-200 bg-neutral-50 p-6 md:p-8">
        <p class="mb-2 font-sans text-sm font-light text-neutral-500">{{ pp.demoNote }}</p>
        <p class="font-mono text-sm text-neutral-900">{{ product.demoAccount }}</p>
      </section>
    </div>
  </article>
</template>
