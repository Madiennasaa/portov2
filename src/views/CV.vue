<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { PrinterIcon, EnvelopeIcon, PhoneIcon, LinkIcon, MapPinIcon, ClockIcon, GlobeAltIcon, CodeBracketIcon } from "@heroicons/vue/24/outline";
import { profile } from "../data/portfolio.js";
import { projects } from "../data/projects.js";
import { cvText } from "../data/cvI18n.js";

const { t, te, locale } = useI18n();
const tx = computed(() => cvText[locale.value] ?? cvText.id);
const cvProjects = computed(() => [1, 10, 6, 9].map((n) => projects.find((p) => p.n === n)).filter(Boolean));

const printCv = async () => {
  await document.fonts.ready;
  window.print();
};

const h3 = "font-display text-sm font-bold uppercase tracking-wider text-neutral-900";
</script>

<template>
  <div id="cv-page" class="mx-auto max-w-7xl px-6 py-10 md:px-12 md:py-16">
    <div class="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100 pb-6 print:hidden">
      <div>
        <span class="mb-1 block font-mono text-xs font-semibold uppercase tracking-wider text-neutral-400">{{ tx.eyebrow }}</span>
        <h1 class="font-display text-2xl font-bold uppercase leading-none text-neutral-900">{{ tx.title }}</h1>
      </div>
      <div class="flex items-center gap-3">
        <button @click="printCv" class="btn-outline"><PrinterIcon class="h-4 w-4" /><span>{{ tx.print }}</span></button>
        <RouterLink to="/#contact" class="btn-primary"><EnvelopeIcon class="h-4 w-4" /><span>{{ t("cv.touch") }}</span></RouterLink>
      </div>
    </div>

    <div id="cv-canvas" class="mx-auto max-w-4xl border border-neutral-200 bg-white p-8 shadow-xs md:p-16 print:border-none print:p-0 print:shadow-none">
      <div id="cv-header" class="flex flex-col items-start justify-between gap-6 border-b-2 border-neutral-900 pb-8 md:flex-row">
        <div class="space-y-2">
          <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-950 md:text-4xl">{{ profile.name }}</h2>
          <p class="block font-display text-base font-light tracking-wide text-neutral-600 md:text-lg">{{ profile.role }}</p>
          <div class="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 font-mono text-xs text-neutral-500">
            <span class="flex items-center gap-1"><MapPinIcon class="h-3.5 w-3.5" />{{ tx.loc }}</span>
            <span>•</span>
            <span class="flex items-center gap-1"><ClockIcon class="h-3.5 w-3.5" />{{ tx.exp }}</span>
          </div>
        </div>
        <div id="cv-contacts" class="space-y-1 border border-neutral-100 bg-neutral-50 p-4 font-mono text-xs text-neutral-500 md:border-none md:bg-transparent md:p-0 md:text-right">
          <p class="flex items-center gap-2 md:justify-end"><EnvelopeIcon class="h-3.5 w-3.5" /><a :href="'mailto:' + profile.email" class="text-neutral-800 hover:underline">{{ profile.email }}</a></p>
          <p class="flex items-center gap-2 md:justify-end"><PhoneIcon class="h-3.5 w-3.5" /><a href="tel:+6285756373129" class="text-neutral-800 hover:underline">{{ profile.phone }}</a></p>
          <p class="flex items-center gap-2 md:justify-end"><LinkIcon class="h-3.5 w-3.5" /><a href="https://www.linkedin.com/in/ahmadubai02" target="_blank" rel="noopener noreferrer" class="text-neutral-800 hover:underline">linkedin.com/in/ahmadubai02</a></p>
          <p class="flex items-center gap-2 md:justify-end"><GlobeAltIcon class="h-3.5 w-3.5" /><a :href="'https://' + profile.website" target="_blank" rel="noopener noreferrer" class="text-neutral-800 hover:underline">{{ profile.website }}</a></p>
          <p class="flex items-center gap-2 md:justify-end"><CodeBracketIcon class="h-3.5 w-3.5" /><a href="https://github.com/Madiennasaa" target="_blank" rel="noopener noreferrer" class="text-neutral-800 hover:underline">github.com/Madiennasaa</a></p>
        </div>
      </div>

      <section class="space-y-4 border-b border-neutral-100 py-8">
        <h3 :class="h3">{{ t("cv.summary") }}</h3>
        <p class="font-sans text-sm font-light leading-relaxed text-neutral-600 md:text-base">{{ tx.summary }}</p>
      </section>

      <section class="space-y-4 border-b border-neutral-100 py-8">
        <h3 :class="h3">{{ t("cv.skills") }}</h3>
        <div id="cv-skills-grid" class="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          <div v-for="m in tx.matrix" :key="m.label" class="cv-keep-together space-y-1.5">
            <span class="block font-mono text-[10px] font-bold uppercase text-neutral-400">{{ m.label }}</span>
            <p class="font-sans text-sm font-medium text-neutral-800">{{ m.value }}</p>
          </div>
        </div>
      </section>

      <section class="space-y-6 border-b border-neutral-100 py-8">
        <h3 :class="h3">{{ t("cv.work") }}</h3>
        <div class="space-y-8">
          <div v-for="j in tx.jobs" :key="j.company" class="cv-keep-together space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h4 class="font-display text-base font-bold text-neutral-900">{{ j.company }}</h4>
                <p class="font-mono text-xs text-neutral-500">{{ j.location }}</p>
              </div>
              <span class="select-none bg-neutral-100 px-2 py-1 font-mono text-xs font-medium uppercase text-neutral-800">{{ j.period }}</span>
            </div>
            <div class="space-y-4 border-l border-neutral-200 pl-4">
              <div class="cv-keep-together space-y-1">
                <div class="flex items-center justify-between font-mono text-xs font-bold text-neutral-700">
                  <span>{{ j.title }}</span>
                  <span class="font-normal text-neutral-400">({{ j.period }})</span>
                </div>
                <p class="font-sans text-sm font-light leading-relaxed text-neutral-500">{{ j.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-6 border-b border-neutral-100 py-8">
        <h3 :class="h3">{{ t("cv.education") }}</h3>
        <div class="space-y-8">
          <div v-for="e in tx.education" :key="e.company" class="cv-keep-together space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h4 class="font-display text-base font-bold text-neutral-900">{{ e.company }}</h4>
                <p class="font-mono text-xs text-neutral-500">{{ e.location }}</p>
              </div>
              <span class="select-none bg-neutral-100 px-2 py-1 font-mono text-xs font-medium uppercase text-neutral-800">{{ e.period }}</span>
            </div>
            <div class="border-l border-neutral-200 pl-4">
              <div class="flex items-center justify-between font-mono text-xs font-bold text-neutral-700">
                <span>{{ e.title }}</span>
                <span class="font-normal text-neutral-400">({{ e.period }})</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4 border-b border-neutral-100 py-8">
        <h3 :class="h3">{{ t("cv.projects") }}</h3>
        <div class="space-y-4">
          <div v-for="pr in cvProjects" :key="pr.slug" class="cv-project-row cv-keep-together grid grid-cols-1 gap-2 text-sm sm:grid-cols-12">
            <div class="cv-project-title font-mono font-bold text-neutral-800 sm:col-span-4">{{ pr.title }}</div>
            <div class="cv-project-detail space-y-1 sm:col-span-8">
              <p class="font-sans font-light leading-relaxed text-neutral-600">{{ pr.desc }}</p>
              <div v-if="te('impact.' + pr.n)" class="flex items-center gap-1.5 font-mono text-xs text-neutral-500">
                <span>[Impact]:</span>
                <p class="font-bold text-neutral-800">{{ t("impact." + pr.n) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4 border-b border-neutral-100 py-8">
        <h3 :class="h3">{{ t("cv.certifications") }}</h3>
        <div class="grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
          <div v-for="c in tx.certifications" :key="c.title" class="cv-keep-together flex items-start justify-between gap-4">
            <div>
              <p class="font-sans text-sm font-medium text-neutral-800">{{ c.title }}</p>
              <p class="font-mono text-xs text-neutral-500">{{ c.issuer }}</p>
            </div>
            <span class="font-mono text-xs text-neutral-400">{{ c.year }}</span>
          </div>
        </div>
      </section>

      <section class="space-y-4 py-8">
        <h3 :class="h3">{{ t("cv.values") }}</h3>
        <ul class="space-y-2 font-mono text-xs uppercase text-neutral-500">
          <li v-for="s in tx.strengths" :key="s.title" class="cv-keep-together flex items-start gap-4">
            <span class="font-bold text-neutral-950">—</span>
            <span>{{ s.title }}: {{ s.desc }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
