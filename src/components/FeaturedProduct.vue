<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import { product } from "../data/product.js";
import { useHome } from "../composables/useHome.js";

defineProps({ showHeader: { type: Boolean, default: true } });
const { locale } = useI18n();
const h = useHome();
const p = computed(() => h.value.product);
const pd = computed(() => ({ ...product, ...(product[locale.value] ?? product.id) }));
</script>

<template>
  <section id="featured-product" class="mx-auto max-w-7xl px-6 md:px-12">
    <div v-if="showHeader" class="mb-12">
      <span class="eyebrow">{{ p.eyebrow }}</span>
      <h2 class="font-display text-2xl font-bold text-neutral-950 md:text-3xl">{{ p.title }}</h2>
      <p class="mt-2 max-w-3xl font-sans text-neutral-500">{{ p.sub }}</p>
    </div>

    <div class="space-y-6 border border-neutral-200 p-6 md:p-10">
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(b, i) in pd.badges" :key="b"
          :class="['px-2 py-1 font-mono text-[10px] uppercase tracking-wider', i === 0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-700']"
        >{{ b }}</span>
      </div>

      <div>
        <h3 class="font-display text-xl font-bold text-neutral-950 md:text-2xl">{{ pd.name }}</h3>
        <p class="mt-1 font-mono text-xs uppercase text-neutral-500">{{ pd.role }}</p>
      </div>

      <p class="max-w-3xl font-sans font-light leading-relaxed text-neutral-600">{{ pd.desc }}</p>

      <div class="flex flex-wrap gap-2">
        <span v-for="t in product.tags" :key="t" class="border border-neutral-200 px-2 py-0.5 font-mono text-[10px] text-neutral-600">{{ t }}</span>
      </div>

      <div class="flex flex-wrap gap-2">
        <span v-for="f in pd.features" :key="f" class="border border-neutral-100 bg-neutral-50 px-2 py-1 font-mono text-[11px] text-neutral-700">{{ f }}</span>
      </div>

      <div v-if="product.demoAccount" class="space-y-3 border border-neutral-200 bg-neutral-50 p-5">
        <div class="flex items-start gap-2">
          <ExclamationTriangleIcon class="mt-px h-4 w-4 shrink-0 text-neutral-400" />
          <p class="font-mono text-[10px] uppercase text-neutral-400">{{ p.demoNote }}</p>
        </div>
        <p class="font-mono text-xs text-neutral-700">{{ product.demoAccount }}</p>
      </div>

      <div class="flex flex-wrap gap-4 pt-2">
        <a v-if="product.demoUrl" :href="product.demoUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">{{ p.open }}<ArrowTopRightOnSquareIcon class="h-4 w-4" /></a>
        <RouterLink :to="'/portfolio/' + product.slug" class="btn-outline">{{ p.caseStudy }}<ArrowRightIcon class="h-4 w-4" /></RouterLink>
      </div>
    </div>
  </section>
</template>
