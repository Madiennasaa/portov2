<template>
    <section class="relative w-full overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <!-- Subtle Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div class="w-full px-6 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <!-- Text Content -->
                <div class="flex flex-col justify-center space-y-8">
                    <div>
                        <p class="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-4">
                            Welcome
                        </p>
                        <h1 class="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
                            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Ubai</span>
                        </h1>
                        <p class="text-slate-400 text-xl md:text-2xl font-light">
                            Full-Stack Developer
                        </p>
                    </div>

                    <p class="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl font-light">
                        Mahasiswa D3 Manajemen Informatika Polinema yang fokus di web development berbasis Laravel dan Vue. Senang membangun aplikasi yang fungsional, rapi, dan mudah digunakan.
                    </p>

                    <div class="flex items-center gap-4 pt-4">
                        <a 
                            href="#contact" 
                            class="group px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition-all duration-300 flex items-center gap-2 font-medium"
                        >
                            Contact Me
                            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                        <a 
                            :href="cvUrl" 
                            download="CV_Ahmad_Ubaidillah_Tsani.pdf"
                            target="_blank"
                            class="group px-8 py-4 border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400 rounded-lg transition-all duration-300 flex items-center gap-2 font-medium"
                        >
                            <svg class="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                            Download CV
                        </a>
                    </div>
                </div>

                <!-- Image -->
                <div class="lg:h-full flex justify-center lg:justify-end items-center pr-8 lg:pr-12">
                    <div class="relative w-52 h-72 md:w-64 md:h-80 flex items-center justify-center">

                        <!-- Dot pattern background -->
                        <div class="absolute -top-4 -right-4 w-44 h-56 rounded-xl z-0"
                            style="background-image: radial-gradient(circle, rgba(52,211,153,0.35) 1px, transparent 1px); background-size: 14px 14px; mask-image: radial-gradient(ellipse at top right, black 30%, transparent 80%); -webkit-mask-image: radial-gradient(ellipse at top right, black 30%, transparent 80%);">
                        </div>

                        <!-- Card foto -->
                        <div class="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-emerald-400/30 shadow-[0_0_30px_rgba(52,211,153,0.15)] bg-slate-800/50 floating">
                            <img 
                                src="../assets/hero.png" 
                                alt="Ubai - Full-Stack Developer" 
                                loading="lazy" 
                                class="w-full h-full object-cover object-center"
                            />
                        </div>

                        <!-- Glow bawah -->
                        <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-40 h-6 bg-emerald-500/20 rounded-full blur-xl z-0"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import cvUrl from '../assets/CV_Ahmad_Ubaidillah_Tsani.pdf';
</script>
<style scoped>
.floating {
    animation: floating 4s ease-in-out infinite;
}
@keyframes floating {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-12px); }
}
</style>