<template>
    <section class="relative py-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" id="certificates">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                
                <!-- Certificates Grid -->
                <div class="grid grid-cols-2 gap-4">
    <div v-for="cert in certificates" :key="cert.id" class="relative" style="perspective: 1000px;">
        <!-- Badge -->
        <div class="absolute -top-2 -right-2 text-white text-[10px] px-2 py-1 rounded-full font-semibold bg-emerald-500 shadow-lg z-10">
            Verified
        </div>
        <!-- Flip Card -->
        <div class="flip-card aspect-[4/3]">
            <div class="flip-inner">
                <!-- Depan: gambar -->
                <div class="flip-front rounded-2xl p-3 border bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/30 flex items-center justify-center">
                    <img :src="cert.src" :alt="cert.title" class="w-full h-full object-contain rounded-xl">
                </div>
                <!-- Belakang: detail -->
                <div class="flip-back rounded-2xl flex flex-col items-center justify-center p-4 text-center gap-2">
                    <p class="text-white text-xs font-semibold leading-snug">{{ cert.title }}</p>
                    <p class="text-emerald-400 text-[11px]">{{ cert.issuer }}</p>
                    <p class="text-slate-400 text-[10px]">{{ cert.year }}</p>
                </div>
            </div>
        </div>
    </div>
                </div>

                <!-- Content -->
                <div class="flex flex-col justify-center order-1 lg:order-2">
                    <div class="text-center lg:text-left">
                        <h2 class="text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                            My <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                                Certificates
                            </span>
                        </h2>
                        <p class="text-emerald-200 font-medium text-lg md:text-xl mt-4">
                            Validasi Keahlian
                        </p>
                    </div>
                    
                    <p class="text-slate-300 pt-6 text-center lg:text-left text-base md:text-lg leading-relaxed font-light">
                        Beberapa sertifikasi yang sudah saya selesaikan sebagai bagian dari proses belajar mandiri di luar perkuliahan.
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                        <div v-for="item in certHighlights" :key="item.id" class="flex flex-col">
                            <div class="flex items-center gap-3 mb-3">
                                <component :is="item.icon" class="w-6 h-6" :class="item.iconColor" />
                                <h3 class="text-lg font-bold text-white">
                                    {{ item.title }}
                                </h3>
                            </div>
                            <p class="text-slate-400 text-sm font-light">
                                {{ item.issuer }} • {{ item.year }}
                            </p>
                        </div>
                    </div>

                    <div class="flex gap-4 pt-8 flex-col sm:flex-row">
    <a 
    href="#certificates"
    class="px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 group cursor-pointer">
        <DocumentCheckIcon class="w-5 h-5 mr-2" />
        Lihat Sertifikat
    </a>
    <a 
    href="https://www.linkedin.com/in/ahmadubai02" 
    target="_blank" 
    rel="noopener noreferrer"
    class="px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center border border-slate-600 hover:border-emerald-400 text-slate-300 hover:text-emerald-400">
        Lihat di LinkedIn
    </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { 
    AcademicCapIcon,
    DocumentCheckIcon,
    CodeBracketIcon,
    ShieldCheckIcon
} from '@heroicons/vue/24/solid'

const certHighlights = [
    {
        id: 1,
        icon: CodeBracketIcon,
        iconColor: 'text-emerald-400',
        title: 'Backend Basic',
        issuer: 'Dicoding Indonesia',
        year: '2025'
    },
    {
        id: 2,
        icon: ShieldCheckIcon,
        iconColor: 'text-blue-400',
        title: 'Cyber Security Basic',
        issuer: 'Cisco Networking Academy',
        year: '2024'
    },
    {
        id: 3,
        icon: CodeBracketIcon,
        iconColor: 'text-emerald-400',
        title: 'Javascript Basic',
        issuer: 'Dicoding Indonesia',
        year: '2023'
    },
    {
        id: 4,
        icon: AcademicCapIcon,
        iconColor: 'text-blue-400',
        title: 'Python Basic',
        issuer: 'Cisco Networking Academy',
        year: '2025'
    },
]

// Ganti path ini dengan gambar sertifikat Anda
import cert1 from '../assets/Cer1.png'
import cert2 from '../assets/Cer2.png'
import cert3 from '../assets/Cer3.png'
import cert4 from '../assets/Cer4.png'

const certificates = [
    { id: 1, src: cert1, title: 'Back-End Pemula dengan Javascript', issuer: 'Dicoding Indonesia', year: '2025' },
    { id: 2, src: cert2, title: 'Belajar Dasar Cloud dan Gen AI di AWS', issuer: 'Dicoding Indonesia', year: '2025' },
    { id: 3, src: cert3, title: 'Belajar Dasar Pemrograman Javascript', issuer: 'Dicoding Indonesia', year: '2023' },
    { id: 4, src: cert4, title: 'Belajar Penerapan Data Science dengan Microsoft Fabric', issuer: 'Dicoding Indonesia', year: '2024' },
]
</script>
<style scoped>
.flip-card { width: 100%; height: 100%; }
.flip-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s ease; transform-style: preserve-3d; }
.flip-card:hover .flip-inner { transform: rotateY(180deg); }
.flip-front, .flip-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; -webkit-backface-visibility: hidden; }
.flip-back { background: linear-gradient(135deg, #0f4c35, #0c2a4a); border: 1px solid rgba(52,211,153,0.4); transform: rotateY(180deg); }
</style>