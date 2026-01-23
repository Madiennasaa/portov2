<template>
    <section class="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900" id="services">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        Services
                    </span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Saya menawarkan solusi pengembangan digital end-to-end, memastikan ide Anda berubah menjadi produk web yang fungsional, cepat, dan siap untuk pertumbuhan bisnis di masa depan.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(service, index) in services"
                :key="service.id"
                class="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
                    
                    <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div class="relative z-10 mb-6">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-400/30 group-hover:scale-110 transition-transform duration-300">
                            <component :is="service.icon" class="w-8 h-8 text-emerald-400"></component>
                        </div>
                    </div>

                    <div class="relative z-10">
                        <h3 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                            {{ service.name }}
                        </h3>
                        <p class="text-slate-300 leading-relaxed font-light">
                            {{ service.desc }}
                        </p>
                    </div>

                    <div class="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRightIcon class="w-6 h-6 text-blue-400"/>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <a href="#contact" 
                class="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/10 transition-all duration-300">
                    Get In Touch
                    <ChatBubbleLeftRightIcon class="w-5 h-5 ml-2"/>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { 
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    CodeBracketIcon, 
    ComputerDesktopIcon, 
    DevicePhoneMobileIcon
} from '@heroicons/vue/16/solid';
import { ref } from 'vue';

const services = ref([
    {
        id: 1,
        icon: CodeBracketIcon,
        name: 'Pengembangan Web Full-Stack',
        desc: 'Saya membangun aplikasi web lengkap, dari perencanaan database (arsitektur dasar) dan logika bisnis (backend), hingga coding tampilan depan (frontend) yang responsif. Produk aman, terukur, dan siap diluncurkan.',
    },
    {
        id: 2,
        icon: DevicePhoneMobileIcon,
        name: 'Responsiveness & Optimasi Mobile',
        desc: 'Memastikan website atau aplikasi web Anda tampil sempurna dan bekerja dengan cepat di semua ukuran layar, terutama perangkat mobile, memberikan pengalaman pengguna yang mulus.',
    },
    {
        id: 3,
        icon: ComputerDesktopIcon,
        name: 'Website Landing Page Cepat',
        desc: 'Membuat landing page atau website statis dengan fokus pada kecepatan dan konversi tinggi. Ideal untuk kampanye marketing, profil perusahaan, atau produk baru yang butuh diluncurkan cepat.',
    },
])
</script>