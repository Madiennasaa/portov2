<script setup>
import { computed, reactive } from "vue";
import { EnvelopeIcon, PhoneIcon, LinkIcon, GlobeAltIcon, PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import { profile } from "../data/portfolio.js";
import { useHome } from "../composables/useHome.js";

const h = useHome();
const c = computed(() => h.value.contact);
const f = reactive({ name: "", email: "", subject: "", message: "" });

const submit = () => {
  const s = encodeURIComponent(f.subject || "Contact from portfolio");
  const b = encodeURIComponent(f.message + "\n\n" + f.name + " <" + f.email + ">");
  window.location.href = "mailto:" + profile.email + "?subject=" + s + "&body=" + b;
};

const field = "w-full rounded-none border border-neutral-200 bg-white p-3.5 text-sm transition-all focus:border-neutral-900 focus:outline-none";
const lbl = "mb-2 block font-mono text-[10px] uppercase tracking-wider text-neutral-400";
const box = "flex items-center gap-4 border border-neutral-100 p-4";
</script>

<template>
  <section id="contact" class="mx-auto max-w-7xl scroll-mt-24 border-t border-neutral-100 px-6 pt-24 md:px-12">
    <div class="grid grid-cols-1 gap-16 lg:grid-cols-12">
      <div class="space-y-8 lg:col-span-5">
        <div>
          <span class="eyebrow">{{ c.eyebrow }}</span>
          <div class="text-left">
            <h2 class="font-display text-3xl font-bold uppercase tracking-tight text-neutral-900 md:text-4xl">{{ c.title }}</h2>
            <p class="mt-4 max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">{{ c.sub }}</p>
            <div class="sec-rule"></div>
          </div>
        </div>

        <div class="space-y-6 pt-4">
          <p class="font-sans text-base font-light leading-relaxed text-neutral-500">{{ c.note }}</p>
          <div class="space-y-4 font-mono text-xs">
            <div :class="box">
              <EnvelopeIcon class="h-5 w-5 shrink-0 text-neutral-900" />
              <div>
                <span class="block text-[9px] uppercase text-neutral-400">{{ c.direct }}</span>
                <a :href="'mailto:' + profile.email" class="font-semibold leading-none text-neutral-900 hover:underline">{{ profile.email }}</a>
              </div>
            </div>
            <div :class="box">
              <PhoneIcon class="h-5 w-5 shrink-0 text-neutral-900" />
              <div>
                <span class="block text-[9px] uppercase text-neutral-400">{{ c.phone }}</span>
                <a href="tel:+6285756373129" class="font-semibold leading-none text-neutral-900 hover:underline">{{ profile.phone }}</a>
              </div>
            </div>
            <div :class="box">
              <LinkIcon class="h-5 w-5 shrink-0 text-neutral-900" />
              <div>
                <span class="block text-[9px] uppercase text-neutral-400">{{ c.linkedin }}</span>
                <a :href="profile.links.find((l) => l.name === 'LinkedIn').url" target="_blank" rel="noopener noreferrer" class="font-semibold leading-none text-neutral-900 hover:underline">linkedin.com/in/ahmadubai02</a>
              </div>
            </div>
            <div :class="box">
              <GlobeAltIcon class="h-5 w-5 shrink-0 text-neutral-900" />
              <div>
                <span class="block text-[9px] uppercase text-neutral-400">{{ c.web }}</span>
                <a :href="'https://' + profile.website" target="_blank" rel="noopener noreferrer" class="font-semibold leading-none text-neutral-900 hover:underline">{{ profile.website }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="border border-neutral-100 bg-neutral-50 p-8 md:p-12 lg:col-span-7">
        <h3 class="mb-8 font-display text-lg font-bold uppercase tracking-tight text-neutral-950">{{ c.form.title }}</h3>
        <form @submit.prevent="submit" class="space-y-6">
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="space-y-2">
              <label for="input-contact-name" :class="lbl">{{ c.form.name }}</label>
              <input id="input-contact-name" v-model="f.name" autocomplete="name" required :class="field" />
            </div>
            <div class="space-y-2">
              <label for="input-contact-email" :class="lbl">{{ c.form.email }}</label>
              <input id="input-contact-email" v-model="f.email" type="email" autocomplete="email" required :class="field" />
            </div>
          </div>
          <div class="space-y-2">
            <label for="input-contact-subject" :class="lbl">{{ c.form.subject }}</label>
            <input id="input-contact-subject" v-model="f.subject" required :class="field" />
          </div>
          <div class="space-y-2">
            <label for="textarea-contact-message" :class="lbl">{{ c.form.message }}</label>
            <textarea id="textarea-contact-message" v-model="f.message" rows="5" required :class="[field, 'resize-none p-4']"></textarea>
          </div>
          <button type="submit" class="btn-primary w-full justify-center font-bold uppercase"><PaperAirplaneIcon class="h-4 w-4" />{{ c.form.send }}</button>
        </form>
      </div>
    </div>
  </section>
</template>
