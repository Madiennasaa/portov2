<template>
    <section class="relative py-20 overflow-hidden bg-slate-950" id="projects">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header - konsisten dengan Skills & Services -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
{{ tr('projects.title') }}
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    {{ tr('projects.subtitle') }}
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
                    <SwiperSlide v-for="project in projects" :key="project.id" class="h-auto">
                        <!-- Card - konsisten dengan Services & Education -->
                        <div class="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-emerald-500/50 hover:-translate-y-1">
                            <div class="overflow-hidden">
                                <img :src="project.src" :alt="project.title" class="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div class="flex flex-1 flex-col p-5">
                                <div class="flex flex-wrap gap-1.5 mb-3">
                                    <span v-for="tag in project.tags" :key="tag"
                                        class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 uppercase tracking-wider">
                                        {{ tag }}
                                    </span>
                                </div>
                                <h3 class="text-base font-bold text-white group-hover:text-emerald-400 transition-colors line-clamp-2">{{ project.title }}</h3>
                                <p class="mt-2 text-sm leading-relaxed text-slate-300/70 font-light line-clamp-3 flex-1">{{ locale.value==='id' ? project.description : (project.description_en || project.description) }}</p>
                                <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer"
                                    class="mt-4 inline-flex items-center self-start text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors" @click.stop>
                                    {{ tr('projects.viewGithub') }}
                                    <ArrowRightIcon class="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <span v-else class="mt-4 inline-flex items-center self-start text-sm font-semibold text-slate-500">
                                    {{ tr('projects.private') }}
                                </span>
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

            <!-- CTA - konsisten dengan Services -->
            <div class="text-center mt-12">
                <a href="https://github.com/Madiennasaa" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/10 transition-all duration-300 group">
                    {{ tr('projects.viewMore') }}
                    <ChevronDoubleRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { locale, t as tr } from '../i18n/locale.js';
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
import project6 from '../assets/project6.png';
import project7 from '../assets/project7.png';

const modules = [Autoplay, Pagination, Navigation];

const projects = ref([
    {
        id: 1,
        src: project1,
        title: 'E-Commerce Platform Toko Hijau',
        description: 'Platform marketplace jual beli online dengan fitur keranjang, manajemen produk, dan sistem checkout dinamis.',
        description_en: 'Online marketplace platform with cart, product management, and dynamic checkout.',
        tags: ['PHP Native', 'MySQL', 'Javascript', 'CSS'],
        link: 'https://github.com/Madiennasaa/tokohijau'
    },
    {
        id: 2,
        src: project2,
        title: 'Sistem Pembayaran SPP TK DHARMA',
        description: 'Aplikasi manajemen keuangan sekolah untuk mencatat transaksi SPP siswa, rekap pembayaran, dan laporan keuangan.',
        description_en: 'School finance management app for recording student tuition transactions, payment recaps, and financial reports.',
        tags: ['Laravel', 'Javascript', 'MySQL', 'Tailwind'],
        link: 'https://github.com/Madiennasaa/pembayaran-spp'
    },
    {
        id: 3,
        src: project3,
        title: 'Sistem Perpustakaan Online',
        description: 'Aplikasi pengelolaan peminjaman dan pengembalian buku dengan pencarian katalog dan manajemen koleksi.',
        description_en: 'Library management app for borrowing/returning books with catalog search and collection management.',
        tags: ['MySQL', 'Python', 'PyQt5'],
        link: 'https://github.com/Madiennasaa/perpustakaan'
    },
    {
        id: 4,
        src: project4,
        title: 'Website Organisasi WPI',
        description: 'Website profil organisasi yang menampilkan informasi, kegiatan, dan struktur kepengurusan secara dinamis.',
        description_en: 'Organization profile website displaying information, activities, and management structure dynamically.',
        tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
        link: 'https://github.com/Madiennasaa/wpi'
    },
    {
        id: 5,
        src: project5,
        title: 'SKMUI Platform Les Online',
        description: 'Kontribusi UI dan pengembangan beberapa halaman pada platform les online berbasis web.',
        description_en: 'UI contribution and development of several pages for a web-based online tutoring platform.',
        tags: ['Laravel', 'Tailwind CSS'],
        link: 'https://github.com/Madiennasaa/skmui'
    },
    {
        id: 6,
        src: project6,
        title: 'Web Sistem Manajemen SDN Sukorame 1',
        description: 'Web sistem manajemen sekolah terintegrasi yang dilengkapi dengan halaman profil sekolah, manajemen jadwal, materi pembelajaran, serta pengelolaan data guru dan siswa.',
        description_en: 'Integrated school management web system with school profile, schedule, learning materials, and teacher/student data management.',
        tags: ['Laravel', 'MySQL', 'Vite', 'JavaScript', 'Tailwind CSS'],
        link: 'https://github.com/Madiennasaa'
    },
    {
        id: 7,
        src: project7,
        title: 'Mobile Sistem Manajemen SDN Sukorame 1',
        description: 'Aplikasi mobile sistem manajemen sekolah SDN Sukorame 1 untuk mempermudah akses informasi, jadwal, dan aktivitas sekolah secara mobile.',
        description_en: 'Mobile school management app for SDN Sukorame 1 to simplify access to info, schedules, and school activities.',
        tags: ['Kotlin', 'Firebase'],
        link: 'https://github.com/Madiennasaa'
    },
    {
        id: 8,
        src: project7,
        title: 'Noora - Quran Web App',
        description: 'Platform Al-Quran digital dengan fitur baca, pencarian surah, audio murottal, dan bookmark. Dibangun modern dan responsif untuk kemudahan ibadah.',
        description_en: 'Digital Quran platform with reading, surah search, murottal audio, and bookmarks. Modern and responsive.',
        tags: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
        link: 'https://github.com/Madiennasaa/noora-quran'
    },
    {
        id: 9,
        src: project7,
        title: 'ALC Mazda - Stechoq Robotika Indonesia',
        description: 'Sistem internal ALC Mazda yang sedang dikembangkan di Stechoq Robotika Indonesia (Yogyakarta) untuk manajemen operasional dan alur kerja perusahaan.',
        description_en: 'Internal ALC Mazda system being developed at Stechoq Robotika Indonesia (Yogyakarta) for operational and workflow management.',
        tags: ['Vue.js', 'Nuxt.js', 'Express', 'PostgreSQL'],
        link: ''
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