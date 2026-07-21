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
                        <div class="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                            <div
                                v-for="tech in techStack"
                                :key="tech.name"
                                class="flex flex-1 min-w-[56px] basis-[calc(25%-0.75rem)] items-center justify-center rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-3 shadow-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/50 sm:min-w-[64px] sm:basis-[calc(16.66%-0.75rem)]"
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
    { name: 'Vue.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M3 7l9 12 9-12" /><path d="M7 7l5 7 5-7" /></svg>' },
    { name: 'Node.js', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8" /><path d="M8 12h5" /><path d="M8 16h3" /></svg>' },
    { name: 'JavaScript', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M9 9h3v8a1 1 0 0 1-1 1H9" /><path d="M15 9h3" /><path d="M15 13h2" /></svg>' },
    { name: 'MySQL', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" /></svg>' },
    { name: 'Figma', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M12 5a3 3 0 0 1 0 6 3 3 0 0 1 0-6z" /><path d="M7 14a3 3 0 0 1 0-6h5v6H7z" /><path d="M12 14h5a3 3 0 1 1-3 3v-3z" /></svg>' },
    { name: 'Git', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><circle cx="7" cy="6" r="2.5" /><circle cx="17" cy="12" r="2.5" /><circle cx="7" cy="18" r="2.5" /><path d="M9.5 7.5 14.5 10.5" /><path d="M9.5 16.5 14.5 13.5" /></svg>' },
    { name: 'REST APIs', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M5 7h14" /><path d="M5 17h14" /><path d="M8 7v10" /><path d="M16 7v10" /></svg>' },
    { name: 'PHP', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M7 8h4a3 3 0 0 1 0 6H7z" /><path d="M13 8h4a3 3 0 0 1 0 6h-4" /></svg>' },
    { name: 'Laravel', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M5 8l7-4 7 4" /><path d="M5 16l7 4 7-4" /><path d="M5 8v8" /><path d="M19 8v8" /><path d="M12 4v16" /></svg>' },
    { name: 'HTML5', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M4 3h16l-1.4 16-6.6 2-6.6-2L4 3z" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h5" /></svg>' },
    { name: 'CSS3', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M4 3h16l-1.4 16-6.6 2-6.6-2L4 3z" /><path d="M8 7h8" /><path d="M8 11h8" /><path d="M8 15h4" /></svg>' },
    { name: 'Tailwind CSS', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M4 7c2-2 4.5-3 7-3 2.8 0 4.8 1 5.8 2.8C18 8.7 16.6 10 14 10H8c-1.2 0-2.5 1-2.5 2.5S6.8 15 8 15h6" /><path d="M10 19c-2 0-3.5-1-4.5-3" /></svg>' },
    { name: 'React JS', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><circle cx="12" cy="12" r="4" /><path d="M4.5 9.5c2.8-2.8 6.8-4.4 10.5-4.4" /><path d="M4.5 14.5c2.8 2.8 6.8 4.4 10.5 4.4" /><path d="M19.5 9.5c-2.8-2.8-6.8-4.4-10.5-4.4" /><path d="M19.5 14.5c-2.8 2.8-6.8 4.4-10.5 4.4" /></svg>' },
    { name: 'Firebase', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M6 16.5 12 4l3 5-3 7-6-6z" /><path d="M12 4l6 12.5-3 3L9 13" /></svg>' },
    { name: 'Kotlin', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><path d="M4 20L20 4" /><path d="M4 4h8l8 8" /><path d="M4 20h8" /></svg>' },
    { name: 'CodeIgniter', icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-full w-full"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 8h8" /><path d="M8 12h5" /><path d="M8 16h3" /></svg>' },
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