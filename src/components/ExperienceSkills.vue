<template>
    <section class="relative py-20 overflow-hidden bg-slate-950" id="skills">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        Skills
                    </span>
                    & Education
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    Eksplorasi keahlian teknis, perjalanan akademik, dan pengalaman profesional saya dalam membangun solusi digital yang inovatif dan efisien.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <!-- Technical Skills -->
                <div>
                    <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <CodeBracketIcon class="w-6 h-6 text-emerald-400" />
                        Technical Skills
                    </h3>
                    
                    <div class="space-y-6">
                        <div v-for="skill in skills" :key="skill.id" class="group">
                            <div class="flex items-center justify-between mb-3">
                                <span class="text-slate-300 font-medium flex items-center gap-2">
                                    <component :is="skill.icon" class="w-5 h-5" :class="skill.iconColor"></component>
                                    {{ skill.title }}
                                </span>
                                <span :class="skill.percentageColor">
                                    {{ skill.percentage }}%
                                </span>
                            </div>
                            <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div class="h-full rounded-full transition-all duration-1000 group-hover:scale-105" 
                                :class="skill.gradient" 
                                :style="{width: skill.percentage + '%'}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12">
                        <h4 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Squares2X2Icon class="w-6 h-6 text-blue-400" />
                            Tech Stack
                        </h4>
                        <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:gap-4">
                            <div
                                v-for="tech in techStack"
                                :key="tech.name"
                                class="flex min-h-[56px] min-w-[56px] flex-1 items-center justify-center rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-3 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 sm:min-h-[64px] sm:min-w-[64px] sm:flex-[0_0_calc(16.66%-0.75rem)]"
                                :title="tech.name"
                            >
                                <span class="flex h-8 w-8 items-center justify-center text-emerald-300 sm:h-10 sm:w-10" v-html="tech.icon"></span>
                                <span class="sr-only">{{ tech.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education -->
                <div>
                    <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <AcademicCapIcon class="w-6 h-6 text-blue-400" />
                        Education & Experience
                    </h3>
                    
                    <div class="relative ml-4">
                        <div class="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-30"></div>

                        <div class="space-y-12">
                            <div v-for="exp in experience" :key="exp.id" class="relative pl-10 group">
                                <span class="absolute w-3 h-3 rounded-full -start-1.5 top-7 ring-4 ring-slate-950 bg-emerald-400 group-hover:bg-emerald-300 transition-all duration-300 z-10">
                                </span>
                                
                                <div class="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-700/50 group-hover:border-emerald-500/50 transition-all duration-500 shadow-xl group-hover:-translate-y-1">
                                    <div class="flex items-center justify-between mb-4 flex-wrap gap-2">
                                        <span class="px-3 py-1 text-[10px] font-bold rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                                            {{ exp.date }}
                                        </span>
                                        <span class="px-3 py-1 text-[10px] font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 uppercase">
                                            {{ exp.type }}
                                        </span>
                                    </div>
                                    
                                    <h4 class="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">
                                        {{ exp.title }}
                                    </h4>
                                    <p class="text-blue-200/90 font-medium mb-3 italic text-sm">
                                        {{ exp.company }}
                                    </p>
                                    <p class="text-slate-300/70 text-sm leading-relaxed font-light">
                                        {{ exp.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { 
    CodeBracketIcon, 
    DevicePhoneMobileIcon, 
    PaintBrushIcon, 
    ServerIcon, 
    CircleStackIcon,
    Squares2X2Icon, 
    AcademicCapIcon,
    GlobeAltIcon
} from '@heroicons/vue/16/solid';

const skills = [
    {
        id: 1,
        title: 'Front-End Developer',
        icon: CodeBracketIcon,
        iconColor: 'text-emerald-400',
        percentage: 65,
        percentageColor: 'text-emerald-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
    {
        id: 2,
        title: 'Back-End Developer',
        icon: ServerIcon,
        iconColor: 'text-blue-400',
        percentage: 50,
        percentageColor: 'text-blue-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-blue-500 to-emerald-500'
    },
    {
        id: 3,
        title: 'UI/UX Design',
        icon: PaintBrushIcon,
        iconColor: 'text-emerald-400',
        percentage: 50,
        percentageColor: 'text-emerald-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
    {
        id: 4,
        title: 'Mobile Developer',
        icon: DevicePhoneMobileIcon,
        iconColor: 'text-blue-400',
        percentage: 20,
        percentageColor: 'text-blue-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-blue-500 to-emerald-500'
    },
    {
        id: 5,
        title: 'Database & SQL',
        icon: CircleStackIcon,
        iconColor: 'text-emerald-400',
        percentage: 60,
        percentageColor: 'text-emerald-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
    {
        id: 6,
        title: 'Networking',
        icon: GlobeAltIcon,
        iconColor: 'text-blue-400',
        percentage: 45,
        percentageColor: 'text-blue-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-blue-500 to-emerald-500'
    },
]

const techStack = [
    // Primary logos mapped from image_4.png
    { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><rect width="64" height="64" rx="6" fill="#f7df1e"/><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="28">JS</text></svg>' },
    { name: 'CSS3', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><path d="M6 4h52l-4.5 50L32 60 10.5 54 6 4z" fill="#264de4"/><path d="M32 46l13-7 2.5-28H32v35z" fill="#2965f1"/></svg>' },
    { name: 'HTML5', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><path d="M6 4h52l-4.5 50L32 60 10.5 54 6 4z" fill="#e34f26"/><path d="M32 46l13-7 2.5-28H32v35z" fill="#ef652a"/></svg>' },
    { name: 'PHP', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><ellipse cx="32" cy="32" rx="26" ry="14" fill="#777bb4"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="18" fill="#fff">php</text></svg>' },
    { name: 'C++', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><polygon points="32,6 56,20 56,44 32,58 8,44 8,20" fill="#1f7acb"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="18" fill="#fff">C++</text></svg>' },
    { name: 'Java', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><path d="M32 12s8 0 12 6-4 6-4 6 6 0 6 6c0 10-18 12-18 12s-18-2-18-12c0-6 6-6 6-6s-6 0-4-6 12-6 12-6z" fill="#d43f3a"/><text x="50%" y="78%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-size="10" fill="#6b2b2b">Java</text></svg>' },
    { name: 'Python', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><path d="M32 6c10 0 14 6 14 6v10c0 8-8 10-14 10H18v-6c0-10 14-20 14-20z" fill="#306998"/><path d="M32 58c-10 0-14-6-14-6V42c0-8 8-10 14-10h14v6c0 10-14 20-14 20z" fill="#ffde57"/></svg>' },
    // Additional techs (icons only)
    { name: 'Vue.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><path d="M2 2h60L32 58 2 2z" fill="#41b883"/></svg>' },
    { name: 'React JS', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><circle cx="32" cy="32" r="6" fill="#61dafb"/><path d="M32 4c8 0 24 8 24 28S40 60 32 60 8 52 8 32 24 4 32 4z" fill="none" stroke="#61dafb" stroke-width="2"/></svg>' },
    { name: 'Firebase', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><path d="M32 4l10 20-6 36L32 44 24 60 18 24 32 4z" fill="#ffca28"/></svg>' },
    { name: 'Kotlin', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><rect width="64" height="64" rx="6" fill="#7f52ff"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="14" fill="#fff">Kt</text></svg>' },
    { name: 'CodeIgniter', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="h-full w-full"><rect width="64" height="64" rx="6" fill="#e84a5f"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="14" fill="#fff">CI</text></svg>' },
]

const experience = [
    {
        id: 1,
        date: '2024 - Present',
        title: 'Web Tester (QA) & UI/UX Designer',
        company: 'CV Visual Code Indonesia (Viscode)',
        description: 'Melakukan pengujian fungsionalitas aplikasi web, menyusun test case dan scenario pengujian, serta memastikan kualitas produk sebelum dirilis. Terlibat dalam merancang antarmuka pengguna yang intuitif, responsif, dan sesuai kebutuhan pengguna.',
        type: 'Work Experience'
    },
    {
        id: 2,
        date: '2024 - 2027',
        title: 'D3 Manajemen Informatika',
        company: 'Politeknik Negeri Malang',
        description: 'Menempuh pendidikan vokasi dengan fokus pada pengembangan sistem informasi, manajemen basis data, dan rekayasa perangkat lunak. Aktif mengeksplorasi teknologi modern untuk membangun solusi web yang efisien dan skalabel.',
        type: 'Education'
    },
    {
        id: 3,
        date: '2021 - 2024',
        title: 'MIPA (Matematika & IPA)',
        company: 'MAN 3 Tangerang',
        description: 'Membangun fondasi logika dan analisis yang kuat melalui bidang peminatan sains. Mempelajari dasar-dasar algoritma secara mandiri dan aktif dalam kegiatan organisasi sekolah untuk mengasah soft skill komunikasi.',
        type: 'Education'
    },
]
</script>