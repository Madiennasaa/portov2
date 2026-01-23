<template>
    <footer class="relative bg-slate-950/95 border-t border-slate-800 pt-20 pb-10 overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        
        <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                <div data-aos="fade-up">
                    <div class="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-6 text-center md:text-left">
                        My <span class="font-black">Portofolio</span>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed mb-6 text-center md:text-left">
                        Membangun solusi digital yang menggabungkan estetika desain dan performa kode yang optimal. Mari berkolaborasi untuk proyek Anda selanjutnya.
                    </p>
                </div>

                <div class="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="100">
                    <h4 class="text-white font-bold mb-6 text-lg">Navigasi</h4>
                    <ul class="space-y-4">
                        <li v-for="link in quickLinks" :key="link.name">
                            <a :href="link.href" 
                               @click.prevent="scrollToSection(link.href)"
                               class="text-slate-400 hover:text-emerald-400 transition-all duration-300 flex items-center group">
                                <ChevronRightIcon class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                {{ link.name }}
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="200">
                    <h4 class="text-white font-bold mb-6 text-lg">Kontak</h4>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3 text-slate-400 group">
                            <EnvelopeIcon class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <span class="text-sm group-hover:text-slate-300 transition-colors">ahmadubai02@gmail.com</span>
                        </li>
                        <li class="flex items-center gap-3 text-slate-400 group">
                            <MapPinIcon class="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                            <span class="text-sm group-hover:text-slate-300 transition-colors">Kediri, Indonesia</span>
                        </li>
                    </ul>
                </div>

                <div class="flex flex-col items-center md:items-start" data-aos="fade-up" data-aos-delay="300">
                    <h4 class="text-white font-bold mb-6 text-lg">Ikuti Saya</h4>
                    <p class="text-slate-400 text-sm mb-6 text-center md:text-left">Dapatkan update terbaru melalui media sosial saya.</p>
                    <div class="flex gap-4">
                        <a v-for="social in socialLinks" 
                           :key="social.name"
                           :href="social.url"
                           target="_blank"
                           class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-br hover:from-emerald-500 hover:to-blue-500 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-slate-950/20">
                            <i :class="social.icon" class="text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-slate-500 text-sm text-center">
                    © {{ new Date().getFullYear() }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-medium">Ahmad Ubaidillah Tsani</span>. All rights reserved.
                </p>
                <div class="flex gap-6 text-slate-500 text-sm">
                    <a href="#" class="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-emerald-400 transition-colors">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { 
    ChevronRightIcon, 
    EnvelopeIcon, 
    MapPinIcon 
} from '@heroicons/vue/24/outline';

const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certicates' },
    { name: 'Projects', href: '#projects' },
];

const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Madiennasaa', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ahmadubai02', icon: 'fab fa-linkedin-in' },
    { name: 'Instagram', url: 'https://www.instagram.com/madnst_', icon: 'fab fa-instagram' },
    { name: 'Twitter', url: '#', icon: 'fab fa-x-twitter' },
];

const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
</style>