<template>
    <section class="relative py-20 overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" id="certificates">
        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-5xl lg:max-w-7xl mx-auto relative z-10">
            <div class="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">
                
                <!-- Certificates Grid -->
                <div class="lg:h-full flex justify-center lg:justify-start order-2 lg:order-1">
                    <div class="relative w-full max-w-md">
                        <div class="relative bg-gradient-to-br from-slate-800/60 to-slate-900/40 rounded-3xl p-6 backdrop-blur-sm border border-slate-700/50 shadow-2xl">
                            <div class="grid grid-cols-2 gap-4">
                                <div v-for="cert in certificates" :key="cert.id" class="relative group">
                                    <div class="rounded-2xl p-3 border shadow-lg bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/30 aspect-[4/3] flex items-center justify-center hover:border-emerald-400/50 transition-all duration-300">
                                        <img :src="cert.src" 
                                        :alt="cert.title" 
                                        class="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300">
                                    </div>
                                    <div class="absolute -top-2 -right-2 text-white text-[10px] px-2 py-1 rounded-full font-semibold bg-emerald-500 shadow-lg">
                                        Verified
                                    </div>
                                </div>
                            </div>
                            
                            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl px-6 py-3 border border-emerald-400/40 shadow-xl">
                                <div class="text-center text-white text-xl font-bold">
                                    4+ Certifications
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
import cvFile from '../assets/CV_Ahmad_Ubaidillah_Tsani.pdf'

const certificates = [
    {
        id: 1,
        src: cert1,
        title: 'Back-End Pemula dengan Javascript',
    },
    {
        id: 2,
        src: cert2,
        title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    },
    {
        id: 3,
        src: cert3,
        title: 'Belajar Dasar Pemrograman Javascript',
    },
    {
        id: 4,
        src: cert4,
        title: 'Belajar Penerapan Data Science dengan Microsoft Fabric',
    },
]
</script>