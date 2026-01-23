<template>
    <section class="relative py-20 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="projects">
        <!-- Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        Projects
                    </span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto" 
                data-aos="fade-up"
                data-aos-delay="100">
                    Beberapa karya terbaik yang menunjukkan keahlian saya dalam pengembangan full-stack dan desain UI/UX.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="(project, index) in projects"
                :key="project.id"
                :data-aos="'zoom-in'"
                :data-aos-delay="(index * 150) + 100"
                class="group relative rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-xl overflow-hidden transition-all duration-500 hover:border-emerald-400/50 hover:shadow-emerald-500/20 flex flex-col">
                    
                    <div class="h-56 overflow-hidden flex-shrink-0">
                        <img :src="project.src" 
                        :alt="project.title" 
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    </div>

                    <div class="p-6 relative z-10 flex flex-col flex-grow">
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span v-for="tag in project.tags"
                            :key="tag"
                            class="text-xs px-3 py-1 rounded-full font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-400/30">
                                {{ tag }}
                            </span>
                        </div>

                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                            {{ project.title }}
                        </h3>
                        <p class="text-slate-300 text-sm mb-6 leading-relaxed">
                            {{ project.description }}
                        </p>

                        <a :href="project.link" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-auto inline-flex items-center text-emerald-400 font-semibold group-hover:text-blue-400 transition-colors duration-300">
                            View Project
                            <ArrowRightIcon class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="500">
                <a 
                    href="https://github.com/Madiennasaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="inline-flex px-8 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white font-semibold transition-all duration-300 items-center mx-auto group shadow-lg shadow-emerald-500/20"
                >
                    See All Works
                    <ChevronDoubleRightIcon class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowRightIcon, ChevronDoubleRightIcon } from '@heroicons/vue/16/solid';

// Pastikan path asset ini benar sesuai struktur folder Anda
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = ref([
    {
        id: 1,
        src: project1,
        title: 'E-Commerce Platform Toko Hijau',
        description: 'Sebuah platform marketplace lengkap yang memungkinkan pengguna melakukan transaksi jual beli secara online. Dilengkapi dengan manajemen keranjang, integrasi database produk, dan sistem checkout yang dinamis.',
        tags: ['PHP Native', 'MySQL', 'Javascript', 'CSS'],
        link: 'https://github.com/Madiennasaa/tokohijau'
    },
    {
        id: 2,
        src: project2, 
        title: 'Sistem Pembayaran SPP TK DHARMA',
        description: 'Aplikasi manajemen keuangan sekolah untuk mencatat transaksi SPP siswa secara digital. Fitur utama mencakup rekapitulasi pembayaran, manajemen data siswa, dan pembuatan laporan keuangan yang akurat.',
        tags: ['Laravel', 'Javascript', 'MySQL', 'Tailwind'],
        link: 'https://github.com/Madiennasaa/pembayaran-spp'
    },
    {
        id: 3,
        src: project3, 
        title: 'Sistem Perpustakaan Online',
        description: 'Solusi digital untuk pengelolaan peminjaman dan pengembalian buku. Memudahkan pustakawan dalam mendata koleksi buku serta memberikan akses pencarian katalog yang cepat bagi pengguna.',
        tags: ['MySQL', 'OOP', 'Python', 'PyQt5'],
        link: 'https://github.com/Madiennasaa/perpustakaan'
    },
]);
</script>