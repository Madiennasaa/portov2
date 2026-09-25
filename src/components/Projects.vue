<template>
    <section class="relative py-20 overflow-hidden bg-slate-950" id="projects">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header - konsisten dengan Skills & Services -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold mb-4">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">{{ tr("projects.title") }}</span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    {{ tr("projects.subtitle") }}
                </p>
            </div>

            <!-- Swiper Carousel -->
            <div class="relative" data-aos="fade-up" data-aos-delay="200">
                <Swiper
                    :key="locale"
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="24"
                    :centered-slides="false"
                    :loop="true"
                    :loop-additional-slides="3"
                    :rewind="false"
                    :autoplay="{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }"
                    :pagination="{ clickable: true, dynamicBullets: true }"
                    :navigation="{
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                    }"
                    :breakpoints="{
                        640: { slidesPerView: 1.4, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 2.5, spaceBetween: 28 },
                        1280: { slidesPerView: 3, spaceBetween: 32 },
                    }"
                    class="projects-swiper !pb-14"
                >
                    <SwiperSlide
                        v-for="project in localizedProjects"
                        :key="project.id"
                        class="!h-auto flex"
                    >
                        <!-- Card - konsisten dengan Services & Education -->
                        <div
                            class="group flex h-full min-h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-1"
                        >
                            <div class="overflow-hidden shrink-0">
                                <img
                                    :src="project.src"
                                    :alt="project.title"
                                    class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div class="flex flex-1 flex-col p-5">
                                <div class="flex flex-wrap content-start gap-1.5 mb-3 min-h-[56px]">
                                    <span
                                        v-for="tag in project.tags"
                                        :key="tag"
                                        class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 uppercase tracking-wider h-fit"
                                    >
                                        {{ tag }}
                                    </span>
                                </div>
                                <h3
                                    class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2 min-h-[48px]"
                                >
                                    {{ project.title }}
                                </h3>
                                <p
                                    class="mt-2 text-sm leading-relaxed text-slate-300/70 font-light line-clamp-3 min-h-[63px] flex-1"
                                >
                                    {{ project.desc }}
                                </p>
                                <a
                                    v-if="project.link"
                                    :href="project.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="mt-4 inline-flex items-center self-start text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                                    @click.stop
                                >
                                    {{ tr("projects.viewGithub") }}
                                    <ArrowRightIcon
                                        class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </a>
                                <span
                                    v-else
                                    class="mt-4 inline-flex items-center self-start text-sm font-semibold text-slate-500"
                                >
                                    {{ tr("projects.private") }}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <!-- Custom Nav Buttons -->
                <button
                    class="swiper-btn-prev absolute left-0 top-1/2 -translate-y-6 -translate-x-4 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-600/60 text-white flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-lg"
                >
                    <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <button
                    class="swiper-btn-next absolute right-0 top-1/2 -translate-y-6 translate-x-4 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-600/60 text-white flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-lg"
                >
                    <ChevronRightIcon class="w-5 h-5" />
                </button>
            </div>

            <!-- CTA - konsisten dengan Services -->
            <div class="text-center mt-12">
                <a
                    href="https://github.com/Madiennasaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/10 transition-all duration-300 group"
                >
                    {{ tr("projects.viewMore") }}
                    <ChevronDoubleRightIcon
                        class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from "vue";
import { locale, t as tr } from "../i18n/locale.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
    ArrowRightIcon,
    ChevronDoubleRightIcon,
} from "@heroicons/vue/16/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";
import project9 from "../assets/project9.png";

const modules = [Autoplay, Pagination, Navigation];

const baseProjects = [
    { id: 1, src: project1, tags: ["PHP Native", "MySQL", "Javascript", "CSS"], link: "https://github.com/Madiennasaa/tokohijau" },
    { id: 2, src: project2, tags: ["Laravel", "Javascript", "MySQL", "Tailwind"], link: "https://github.com/Madiennasaa/pembayaran-spp" },
    { id: 3, src: project3, tags: ["MySQL", "Python", "PyQt5"], link: "https://github.com/Madiennasaa/perpustakaan" },
    { id: 4, src: project4, tags: ["Laravel", "PHP", "MySQL", "Tailwind"], link: "https://github.com/Madiennasaa/wpi" },
    { id: 5, src: project5, tags: ["Laravel", "Tailwind CSS"], link: "https://github.com/Madiennasaa/skmui" },
    { id: 6, src: project6, tags: ["Laravel", "MySQL", "Vite", "JavaScript", "Tailwind CSS"], link: "https://github.com/Madiennasaa" },
    { id: 7, src: project7, tags: ["Kotlin", "Firebase"], link: "https://github.com/Madiennasaa" },
    { id: 8, src: project8, tags: ["Vue.js", "Nuxt.js", "Express", "PostgreSQL"], link: "" },
    { id: 9, src: project9, tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"], link: "https://github.com/Madiennasaa/noora-quran" },
];
const localizedProjects = computed(() => baseProjects.map((p, i) => ({
    ...p,
    title: tr(`projects.items.${i}.title`),
    desc: tr(`projects.items.${i}.desc`),
})));
</script>

<style scoped>
.projects-swiper :deep(.swiper-wrapper) {
    align-items: stretch;
}
.projects-swiper :deep(.swiper-slide) {
    height: auto;
    display: flex;
}
.projects-swiper :deep(.swiper-pagination-bullet) {
    background: #475569;
    opacity: 1;
}
.projects-swiper :deep(.swiper-pagination-bullet-active) {
    background: #10b981;
    width: 20px;
    border-radius: 4px;
    transition: width 0.3s ease;
}
</style>
