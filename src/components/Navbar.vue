<template>
    <header :class="['flex justify-between items-center px-6 py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-slate-950/50' : 'bg-transparent'
    ]">
        <!-- Logo -->
        <div class="text-2xl font-bold text-white cursor-pointer" @click="scrollToSection('#hero')">
            Ahmad<span class="text-emerald-400">Ubai</span>
        </div>

        <!-- Hamburger Mobile -->
        <div class="md:hidden z-30">
            <button type="button"
            class="block focus:outline-none p-2 rounded-lg hover:bg-slate-800 transition-all duration-300"
            @click="isMenuOpen = !isMenuOpen">
                <div class="relative w-6 h-6">
                    <span :class="['absolute left-0 w-6 h-0.5 bg-emerald-400 transition-all duration-300', isMenuOpen ? 'rotate-45 top-3' : 'top-1']"></span>
                    <span :class="['absolute left-0 w-6 h-0.5 bg-emerald-400 transition-all duration-300', isMenuOpen ? 'opacity-0' : 'top-3 opacity-100']"></span>
                    <span :class="['absolute left-0 w-6 h-0.5 bg-emerald-400 transition-all duration-300', isMenuOpen ? '-rotate-45 top-3' : 'top-5']"></span>
                </div>
            </button>
        </div>

        <!-- Nav -->
        <nav :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-slate-950 md:relative md:bg-transparent md:flex md:flex-row md:items-center',
            isMenuOpen ? 'flex' : 'hidden md:flex'
        ]">
            <ul class="flex flex-col items-center space-y-5 md:flex-row md:space-x-8 md:space-y-0">
                <li v-for="item in Menu" :key="item.name" class="group relative">
                    <a :href="item.href"
                    :class="['relative block transition-all duration-300 text-xl md:text-base font-medium group',
                        activeSection === item.href.slice(1) ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'
                    ]"
                    @click="scrollToSection(item.href)">
                        {{ item.name }}
                        <span :class="['absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300',
                            activeSection === item.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                        ]"></span>
                    </a>
                </li>
            </ul>
            <div class="mt-8 md:mt-0 md:ml-8">
                <a href="#contact" @click="scrollToSection('#contact')"
                class="px-6 py-2.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 font-medium">
                    Let's Talk
                </a>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const Menu = ref([
    { name: 'Services',     href: '#services' },
    { name: 'Skills',       href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects',     href: '#projects' },
    { name: 'Contact',      href: '#contact' },
]);

const isMenuOpen   = ref(false);
const scrolled     = ref(false);
const activeSection = ref('');

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;

    // Cek section mana yang sedang aktif
    const sections = Menu.value.map(item => item.href.slice(1));
    for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
            activeSection.value = id;
            break;
        }
    }
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>