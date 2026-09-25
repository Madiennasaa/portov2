<template>
    <section class="relative py-20 overflow-hidden bg-slate-950" id="skills">
        <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500"
                    >
                        {{ tr("skills.title") }}
                    </span>
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto font-light">
                    {{ tr("skills.subtitle") }}
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <!-- Technical Skills -->
                <div>
                    <h3
                        class="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                    >
                        <CodeBracketIcon class="w-6 h-6 text-emerald-400" />
                        {{ tr("skills.technicalSkills") }}
                    </h3>

                    <div class="space-y-6">
                        <div
                            v-for="skill in skills"
                            :key="skill.id"
                            class="group"
                        >
                            <div class="flex items-center justify-between mb-3">
                                <span
                                    class="text-slate-300 font-medium flex items-center gap-2"
                                >
                                    <component
                                        :is="skill.icon"
                                        class="w-5 h-5"
                                        :class="skill.iconColor"
                                    ></component>
                                    {{ skill.title }}
                                </span>
                                <span :class="skill.percentageColor">
                                    {{ skill.percentage }}%
                                </span>
                            </div>
                            <div
                                class="h-2 bg-slate-800 rounded-full overflow-hidden"
                            >
                                <div
                                    class="h-full rounded-full transition-all duration-1000 group-hover:scale-105"
                                    :class="skill.gradient"
                                    :style="{ width: skill.percentage + '%' }"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-12">
                        <h4
                            class="text-xl font-bold text-white mb-6 flex items-center gap-2"
                        >
                            <Squares2X2Icon class="w-6 h-6 text-blue-400" />
                            {{ tr("skills.techStack") }}
                        </h4>
                        <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
                            <div
                                v-for="tech in techStack"
                                :key="tech.name"
                                class="group flex flex-col items-center gap-2 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/30 p-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
                            >
                                <span
                                    class="flex h-10 w-10 items-center justify-center"
                                    v-html="tech.icon"
                                ></span>
                                <span
                                    class="text-xs font-medium text-slate-300 group-hover:text-white text-center leading-tight"
                                    >{{ tech.name }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education -->
                <div>
                    <h3
                        class="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                    >
                        <AcademicCapIcon class="w-6 h-6 text-blue-400" />
                        {{ tr("skills.eduExp") }}
                    </h3>

                    <div class="relative ml-4">
                        <div
                            class="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-emerald-500 via-blue-500 to-transparent opacity-30"
                        ></div>

                        <div class="space-y-12">
                            <div
                                v-for="exp in experience"
                                :key="exp.id"
                                class="relative pl-10 group"
                            >
                                <span
                                    class="absolute w-3 h-3 rounded-full -start-1.5 top-7 ring-4 ring-slate-950 bg-emerald-400 group-hover:bg-emerald-300 transition-all duration-300 z-10"
                                >
                                </span>

                                <div
                                    class="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/30 backdrop-blur-md rounded-2xl border border-slate-700/50 group-hover:border-emerald-500/50 transition-all duration-500 shadow-xl group-hover:-translate-y-1"
                                >
                                    <div
                                        class="flex items-center justify-between mb-4 flex-wrap gap-2"
                                    >
                                        <span
                                            class="px-3 py-1 text-[10px] font-bold rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider"
                                        >
                                            {{ exp.date }}
                                        </span>
                                        <span
                                            class="px-3 py-1 text-[10px] font-semibold rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20 uppercase"
                                        >
                                            {{ exp.type }}
                                        </span>
                                    </div>

                                    <h4
                                        class="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors"
                                    >
                                        {{ exp.title }}
                                    </h4>
                                    <p
                                        class="text-blue-200/90 font-medium mb-3 italic text-sm"
                                    >
                                        {{ exp.company }}
                                    </p>
                                    <p
                                        class="text-slate-300/70 text-sm leading-relaxed font-light"
                                    >
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
    GlobeAltIcon,
} from "@heroicons/vue/16/solid";
import { t as tr } from "../i18n/locale.js";
import { computed } from "vue";

const skillMeta = [
    { icon: CodeBracketIcon, iconColor: "text-emerald-400", percentage: 65, percentageColor: "text-emerald-400 text-sm font-medium", gradient: "bg-gradient-to-r from-emerald-500 to-blue-500" },
    { icon: ServerIcon, iconColor: "text-blue-400", percentage: 50, percentageColor: "text-blue-400 text-sm font-medium", gradient: "bg-gradient-to-r from-blue-500 to-emerald-500" },
    { icon: PaintBrushIcon, iconColor: "text-emerald-400", percentage: 50, percentageColor: "text-emerald-400 text-sm font-medium", gradient: "bg-gradient-to-r from-emerald-500 to-blue-500" },
    { icon: DevicePhoneMobileIcon, iconColor: "text-blue-400", percentage: 20, percentageColor: "text-blue-400 text-sm font-medium", gradient: "bg-gradient-to-r from-blue-500 to-emerald-500" },
    { icon: CircleStackIcon, iconColor: "text-emerald-400", percentage: 60, percentageColor: "text-emerald-400 text-sm font-medium", gradient: "bg-gradient-to-r from-emerald-500 to-blue-500" },
    { icon: GlobeAltIcon, iconColor: "text-blue-400", percentage: 45, percentageColor: "text-blue-400 text-sm font-medium", gradient: "bg-gradient-to-r from-blue-500 to-emerald-500" },
];
const skills = computed(() => skillMeta.map((m, i) => ({ id: i + 1, ...m, title: tr(`skills.items.${i}`) })));

const techStack = [
    {
        name: "JavaScript",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="h-10 w-10 object-contain" alt="JavaScript" />',
    },
    {
        name: "CSS3",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="h-10 w-10 object-contain" alt="CSS3" />',
    },
    {
        name: "HTML5",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="h-10 w-10 object-contain" alt="HTML5" />',
    },
    {
        name: "PHP",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" class="h-10 w-10 object-contain" alt="PHP" />',
    },
    {
        name: "Laravel",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" class="h-10 w-10 object-contain" alt="Laravel" />',
    },
    {
        name: "Nuxt.js",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" class="h-10 w-10 object-contain" alt="Nuxt.js" />',
    },
    {
        name: "Python",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="h-10 w-10 object-contain" alt="Python" />',
    },
    {
        name: "Vue.js",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="h-10 w-10 object-contain" alt="Vue.js" />',
    },
    {
        name: "React JS",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="h-10 w-10 object-contain" alt="React" />',
    },
    {
        name: "Firebase",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" class="h-10 w-10 object-contain" alt="Firebase" />',
    },
    {
        name: "Kotlin",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" class="h-10 w-10 object-contain" alt="Kotlin" />',
    },
    {
        name: "CodeIgniter",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" class="h-10 w-10 object-contain" alt="CodeIgniter" />',
    },
    {
        name: "Flutter",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" class="h-10 w-10 object-contain" alt="Flutter" />',
    },
    {
        name: "MySQL",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" class="h-10 w-10 object-contain" alt="MySQL" />',
    },
    {
        name: "PostgreSQL",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" class="h-10 w-10 object-contain" alt="PostgreSQL" />',
    },
    {
        name: "Node.js",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="h-10 w-10 object-contain" alt="Node.js" />',
    },
    {
        name: "Express",
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" class="h-10 w-10 object-contain bg-white rounded p-1" alt="Express" />',
    },
];

const experience = computed(() => {
    const count = 4;
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        date: tr(`experience.items.${i}.date`),
        title: tr(`experience.items.${i}.title`),
        company: tr(`experience.items.${i}.company`),
        description: tr(`experience.items.${i}.description`),
        type: tr(`experience.items.${i}.type`),
    }));
});
</script>
