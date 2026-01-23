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
                    Eksplorasi keahlian teknis dan perjalanan akademik saya dalam membangun solusi digital yang inovatif dan efisien.
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
                        <div class="flex flex-wrap gap-3">
                            <span v-for="tech in techStack" :key="tech"
                            class="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-lg text-slate-300 text-sm font-medium hover:scale-105 hover:border-emerald-400/50 transition-all duration-300">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Education -->
                <div>
                    <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <AcademicCapIcon class="w-6 h-6 text-blue-400" />
                        Education
                    </h3>
                    
                    <div class="relative ml-4">
                        <div class="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-30"></div>

                        <div class="space-y-12">
                            <div v-for="exp in experience" :key="exp.id" class="relative pl-10 group">
                                <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-8 ring-slate-950 group-hover:ring-emerald-500/20 bg-emerald-500/20 border border-emerald-500/50 transition-all duration-300 z-10">
                                    <BriefcaseIcon class="w-3 h-3 text-emerald-400"/>
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
    CloudIcon, 
    CodeBracketIcon, 
    DevicePhoneMobileIcon, 
    PaintBrushIcon, 
    ServerIcon, 
    Squares2X2Icon, 
    BriefcaseIcon,
    AcademicCapIcon
} from '@heroicons/vue/16/solid';

const skills = [
    {
        id: 1,
        title: 'Front-End Developer',
        icon: CodeBracketIcon,
        iconColor: 'text-emerald-400',
        percentage: 60,
        percentageColor: 'text-emerald-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
    {
        id: 2,
        title: 'Back-End Developer',
        icon: ServerIcon,
        iconColor: 'text-blue-400',
        percentage: 45,
        percentageColor: 'text-blue-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-blue-500 to-emerald-500'
    },
    {
        id: 3,
        title: 'UI/UX Design',
        icon: PaintBrushIcon,
        iconColor: 'text-emerald-400',
        percentage: 65,
        percentageColor: 'text-emerald-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
    {
        id: 4,
        title: 'Mobile Developer',
        icon: DevicePhoneMobileIcon,
        iconColor: 'text-blue-400',
        percentage: 10,
        percentageColor: 'text-blue-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-blue-500 to-emerald-500'
    },
    {
        id: 5,
        title: 'DevOps & Cloud',
        icon: CloudIcon,
        iconColor: 'text-emerald-400',
        percentage: 30,
        percentageColor: 'text-emerald-400 text-sm font-medium',
        gradient: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
]

const techStack = [
    'Vue.js', 'Node.js', 'Javascript', 'MySQL', 'Figma', 'Docker', 'Git', 'REST APIs', 'PHP', 'Laravel',
]

const experience = [
    {
        id: 1,
        date: '2024 - 2027',
        title: 'D3 Manajemen Informatika',
        company: 'Politeknik Negeri Malang',
        description: 'Menempuh pendidikan vokasi dengan fokus pada pengembangan sistem informasi, manajemen basis data, dan rekayasa perangkat lunak. Aktif mengeksplorasi teknologi modern untuk membangun solusi web yang efisien dan skalabel.',
        type: 'Education'
    },
    {
        id: 2,
        date: '2021 - 2024',
        title: 'MIPA (Matematika & IPA)',
        company: 'MAN 3 Tangerang',
        description: 'Membangun fondasi logika dan analisis yang kuat melalui bidang peminatan sains. Mempelajari dasar-dasar algoritma secara mandiri dan aktif dalam kegiatan organisasi sekolah untuk mengasah soft skill komunikasi.',
        type: 'Education'
    },
]
</script>