<template>
    <section class="relative py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="projects">
        <!-- Background Elements -->
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        Projects
                    </span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto">
                    Kumpulan proyek yang saya kerjakan selama belajar, mulai dari web statis hingga aplikasi full-stack.
                </p>
            </div>

            <!-- Swiper Carousel -->
            <div class="relative" data-aos="fade-up" data-aos-delay="200">
                <Swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="24"
                    :centered-slides="true"
                    :loop="true"
                    :autoplay="{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }"
                    :pagination="{ clickable: true, dynamicBullets: true }"
                    :navigation="{
                        nextEl: '.swiper-btn-next',
                        prevEl: '.swiper-btn-prev',
                    }"
                    :breakpoints="{
                        640:  { slidesPerView: 1.4, spaceBetween: 20 },
                        768:  { slidesPerView: 2,   spaceBetween: 24 },
                        1024: { slidesPerView: 2.5, spaceBetween: 28 },
                        1280: { slidesPerView: 3,   spaceBetween: 32 },
                    }"
                    class="projects-swiper !pb-14"
                >
                    <SwiperSlide v-for="project in projects" :key="project.id">
                        <!-- Card -->
                        <div class="group relative rounded-2xl overflow-hidden border border-slate-700/50 aspect-video cursor-pointer">
                            <!-- Gambar -->
                            <img
                                :src="project.src"
                                :alt="project.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <!-- Overlay -->
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-950 from-50% via-slate-950/80 to-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                                <!-- Tags -->
                                <div class="flex flex-wrap gap-2 mb-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[50ms]">
                                    <span
                                        v-for="tag in project.tags"
                                        :key="tag"
                                        class="inline-block text-[10px] px-2 py-1 rounded-full bg-slate-700/80 text-slate-200 border border-slate-500/50 font-medium whitespace-nowrap"
                                    >
                                        {{ tag }}
                                    </span>
                                </div>

                                <!-- Title -->
                                <h3 class="text-white font-bold text-lg mb-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[100ms]">
                                    {{ project.title }}
                                </h3>

                                <!-- Description -->
                                <p class="text-slate-300 text-sm leading-relaxed mb-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[150ms]">
                                    {{ project.description }}
                                </p>

                                <!-- Link -->
                                <a
                                    :href="project.link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-flex items-center text-emerald-400 font-semibold text-sm translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-[200ms]"
                                    @click.stop
                                >
                                    View on GitHub
                                    <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <!-- Custom Nav Buttons -->
                <button class="swiper-btn-prev absolute left-0 top-1/2 -translate-y-6 -translate-x-4 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-600/60 text-white flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-lg">
                    <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <button class="swiper-btn-next absolute right-0 top-1/2 -translate-y-6 translate-x-4 z-20 w-10 h-10 rounded-full bg-slate-800 border border-slate-600/60 text-white flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-lg">
                    <ChevronRightIcon class="w-5 h-5" />
                </button>
            </div>

            <!-- CTA -->
            <div class="text-center mt-10" data-aos="fade-up" data-aos-delay="400">
                <a
                    href="https://github.com/Madiennasaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex px-8 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-300 items-center mx-auto group shadow-lg shadow-emerald-500/20"
                >
                    View More on GitHub
                    <ChevronDoubleRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowRightIcon, ChevronDoubleRightIcon } from '@heroicons/vue/16/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

const modules = [Autoplay, Pagination, Navigation];

const projects = ref([
    {
        id: 1,
        src: project1,
        title: 'E-Commerce Platform Toko Hijau',
        description: 'Platform marketplace jual beli online dengan fitur keranjang, manajemen produk, dan sistem checkout dinamis.',
        tags: ['PHP Native', 'MySQL', 'Javascript', 'CSS'],
        link: 'https://github.com/Madiennasaa/tokohijau'
    },
    {
        id: 2,
        src: project2,
        title: 'Sistem Pembayaran SPP TK DHARMA',
        description: 'Aplikasi manajemen keuangan sekolah untuk mencatat transaksi SPP siswa, rekap pembayaran, dan laporan keuangan.',
        tags: ['Laravel', 'Javascript', 'MySQL', 'Tailwind'],
        link: 'https://github.com/Madiennasaa/pembayaran-spp'
    },
    {
        id: 3,
        src: project3,
        title: 'Sistem Perpustakaan Online',
        description: 'Aplikasi pengelolaan peminjaman dan pengembalian buku dengan pencarian katalog dan manajemen koleksi.',
        tags: ['MySQL', 'Python', 'PyQt5'],
        link: 'https://github.com/Madiennasaa/perpustakaan'
    },
    {
        id: 4,
        src: project4,
        title: 'Website Organisasi WPI',
        description: 'Website profil organisasi yang menampilkan informasi, kegiatan, dan struktur kepengurusan secara dinamis.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
        link: 'https://github.com/Madiennasaa/wpi'
    },
    {
        id: 5,
        src: project5,
        title: 'SKMUI — Platform Les Online',
        description: 'Kontribusi UI dan pengembangan beberapa halaman pada platform les online berbasis web.',
        tags: ['Laravel', 'Tailwind CSS'],
        link: 'https://github.com/Madiennasaa/skmui'
    },
]);
</script>

<style scoped>
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