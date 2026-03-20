<template>
    <section class="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900" id="services">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header -->
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

            <!-- Terminal Window -->
            <div class="max-w-3xl mx-auto rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/40">

                <!-- Title Bar -->
                <div class="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
                    <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span class="ml-3 text-xs text-slate-500 font-mono">services.ts</span>
                </div>

                <!-- Terminal Body -->
                <div class="bg-[#0d1117] px-6 py-6 font-mono text-sm leading-loose overflow-x-auto">

                    <div>
                        <span class="text-purple-400">const</span>
                        <span class="text-blue-400"> services</span>
                        <span class="text-slate-500"> = [</span>
                    </div>

                    <div v-for="(service, index) in services" :key="service.id" class="ml-4">
                        <div class="text-slate-600">{'{'}</div>
                        <div class="ml-6">
                            <span class="text-emerald-400">name</span>
                            <span class="text-slate-500">: </span>
                            <span class="text-yellow-300">"{{ service.name }}"</span>
                            <span class="text-slate-500">,</span>
                        </div>
                        <div class="ml-6">
                            <span class="text-emerald-400">description</span>
                            <span class="text-slate-500">: </span>
                            <span class="text-yellow-300">"{{ service.desc }}"</span>
                            <span class="text-slate-500">,</span>
                        </div>
                        <div class="ml-6 flex flex-wrap items-center gap-1">
                            <span class="text-emerald-400">stack</span>
                            <span class="text-slate-500">: [</span>
                            <template v-for="(tag, i) in service.stack" :key="tag">
                                <span class="text-yellow-300">"{{ tag }}"</span>
                                <span v-if="i < service.stack.length - 1" class="text-slate-500">, </span>
                            </template>
                            <span class="text-slate-500">]</span>
                        </div>
                        <div class="text-slate-600">{{ index < services.length - 1 ? '},' : '}' }}</div>
                    </div>

                    <div class="text-slate-500">]</div>

                    <!-- Comment line -->
                    <div class="mt-2 flex items-center gap-2">
                        <span class="text-slate-600">// </span>
                        <span class="text-emerald-500">✓ ready to build</span>
                        <span class="text-slate-500 animate-pulse">▊</span>
                    </div>

                </div>
            </div>

            <!-- CTA -->
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
import { ref } from 'vue';
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/16/solid';

const services = ref([
    {
        id: 1,
        name: 'Pengembangan Web Full-Stack',
        desc: 'Aplikasi web dari database hingga frontend, kode bersih & terstruktur.',
        stack: ['Laravel', 'Vue', 'MySQL'],
    },
    {
        id: 2,
        name: 'Responsiveness & Optimasi Mobile',
        desc: 'Tampilan responsif dan nyaman di semua ukuran layar.',
        stack: ['Tailwind', 'Mobile-first'],
    },
    {
        id: 3,
        name: 'Website Landing Page Cepat',
        desc: 'Landing page ringan dan cepat untuk profil atau portofolio.',
        stack: ['Static', 'Fast', 'Deploy-ready'],
    },
]);
</script>