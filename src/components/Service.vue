<template>
    <section class="relative py-20 overflow-hidden bg-slate-950" id="services">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header - konsisten dengan Skills & Projects -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    My <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Services</span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Saya menawarkan solusi pengembangan digital end-to-end, memastikan ide Anda berubah menjadi produk web yang fungsional, cepat, dan siap untuk pertumbuhan bisnis di masa depan.
                </p>
            </div>

            <!-- Card Grid - style konsisten dengan Education & Tech Stack -->
            <div class="grid md:grid-cols-3 gap-6">
                <div v-for="service in services" :key="service.id"
                    class="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-500 shadow-xl hover:-translate-y-1 flex flex-col">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:border-emerald-400/40 transition-colors">
                        <component :is="service.icon" class="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{{ service.name }}</h3>
                    <p class="text-slate-300/70 text-sm leading-relaxed font-light flex-1">{{ service.desc }}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        <span v-for="tag in service.stack" :key="tag"
                            class="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 uppercase tracking-wider">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="text-center mt-12">
                <a href="#contact"
                    class="inline-flex items-center px-8 py-4 rounded-lg border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/10 transition-all duration-300">
                    Get In Touch
                    <ChatBubbleLeftRightIcon class="w-5 h-5 ml-2" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { ChatBubbleLeftRightIcon, CodeBracketIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/vue/16/solid';

const services = ref([
    {
        id: 1,
        name: 'Pengembangan Web Full-Stack',
        desc: 'Aplikasi web dari database hingga frontend, kode bersih & terstruktur.',
        stack: ['Laravel', 'Vue', 'MySQL'],
        icon: CodeBracketIcon,
    },
    {
        id: 2,
        name: 'Responsiveness & Optimasi Mobile',
        desc: 'Tampilan responsif dan nyaman di semua ukuran layar.',
        stack: ['Tailwind', 'Mobile-first'],
        icon: DevicePhoneMobileIcon,
    },
    {
        id: 3,
        name: 'Website Landing Page Cepat',
        desc: 'Landing page ringan dan cepat untuk profil atau portofolio.',
        stack: ['Static', 'Fast', 'Deploy-ready'],
        icon: RocketLaunchIcon,
    },
]);
</script>
