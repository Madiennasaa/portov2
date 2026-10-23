<script setup>
import { computed } from "vue";
import { BriefcaseIcon, ClockIcon, MapPinIcon, CpuChipIcon, CheckBadgeIcon, BuildingOffice2Icon, StarIcon, DocumentTextIcon, FolderOpenIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { profile } from "../data/portfolio.js";
import { useHome } from "../composables/useHome.js";

const h = useHome();
const r = computed(() => h.value.recruiter);
const cards = computed(() => [
  { k: "role", icon: BriefcaseIcon, v: profile.currentRole },
  { k: "exp", icon: ClockIcon, v: r.value.values.exp },
  { k: "loc", icon: MapPinIcon, v: profile.location },
  { k: "stack", icon: CpuChipIcon, v: r.value.values.stack, span: "sm:col-span-2 lg:col-span-2" },
  { k: "avail", icon: CheckBadgeIcon, v: r.value.values.avail },
  { k: "domain", icon: BuildingOffice2Icon, v: r.value.values.domain, span: "sm:col-span-2 lg:col-span-3" },
  { k: "strength", icon: StarIcon, v: r.value.values.strength, span: "sm:col-span-2 lg:col-span-3" },
]);
</script>

<template>
  <section id="recruiter" class="mx-auto max-w-7xl px-6 md:px-12">
    <div class="mb-12 text-center">
      <span class="eyebrow">{{ r.eyebrow }}</span>
      <h2 class="font-display text-2xl font-bold text-neutral-950 md:text-3xl">{{ r.title }}</h2>
      <p class="mt-2 font-sans text-neutral-500">{{ r.sub }}</p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="c in cards" :key="c.k" :class="['space-y-1 border border-neutral-200 p-5', c.span]">
        <div class="mb-1 flex items-center gap-2 text-neutral-400">
          <component :is="c.icon" class="h-4 w-4" />
          <span class="font-mono text-[10px] font-bold uppercase">{{ r.labels[c.k] }}</span>
        </div>
        <p class="font-sans text-sm font-medium text-neutral-900">{{ c.v }}</p>
      </div>
    </div>

    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <RouterLink to="/resume" class="btn-primary"><DocumentTextIcon class="h-4 w-4" />{{ r.btn.resume }}</RouterLink>
      <RouterLink to="/portfolio" class="btn-outline"><FolderOpenIcon class="h-4 w-4" />{{ r.btn.portfolio }}</RouterLink>
      <a :href="'mailto:' + profile.email" class="btn-outline"><EnvelopeIcon class="h-4 w-4" />{{ r.btn.email }}</a>
      <a :href="profile.links.find((l) => l.name === 'LinkedIn').url" target="_blank" rel="noopener noreferrer" class="btn-outline"><ArrowTopRightOnSquareIcon class="h-4 w-4" />{{ r.btn.linkedin }}</a>
    </div>
  </section>
</template>
