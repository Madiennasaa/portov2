<template>
    <!-- Ticker -->
    <div class="fixed top-0 left-0 right-0 z-50">
        <div
            class="bg-gradient-to-r from-emerald-600 to-blue-600 py-1.5 overflow-hidden whitespace-nowrap"
        >
            <div class="ticker-inner inline-flex gap-8">
                <span v-for="i in 2" :key="i" class="inline-flex gap-8">
                    <template v-for="item in tickerItems" :key="item">
                        <span
                            class="text-white text-[10px] font-semibold tracking-widest uppercase opacity-90"
                            >{{ item }}</span
                        >
                        <span class="text-white/30 text-[8px]">◆</span>
                    </template>
                </span>
            </div>
        </div>

        <!-- Navbar -->
        <header
            :class="[
                'px-6 py-3 flex items-center justify-between transition-all duration-300',
                scrolled
                    ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-slate-950/50'
                    : 'bg-slate-950',
            ]"
        >
            <!-- Logo -->
            <div
                class="text-[15px] font-black tracking-tight text-white cursor-pointer"
                @click="scrollToSection('#hero')"
            >
                My<span class="text-emerald-400"> Portofolio</span>
            </div>

            <!-- Links Desktop -->
            <nav
                class="hidden md:flex items-center gap-5 bg-white/[0.03] border border-white/[0.07] rounded-full px-5 py-1.5"
            >
                <a
                    v-for="item in Menu"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                        'text-xs font-medium transition-colors duration-200',
                        activeSection === item.href.slice(1)
                            ? 'text-white'
                            : 'text-slate-500 hover:text-slate-300',
                    ]"
                    @click.prevent="scrollToSection(item.href)"
                >
                    {{ item.name }}
                </a>
            </nav>

            <!-- CTA + Hamburger -->
            <div class="flex items-center gap-3">
                <button @click="toggleLocale" class="flex items-center gap-1.5 text-xs font-bold border border-white/20 text-white px-2.5 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                    <img :src="locale === 'id' ? 'https://flagcdn.com/w20/gb.png' : 'https://flagcdn.com/w20/id.png'" :alt="locale" class="w-5 h-3.5 object-cover rounded-sm" />
                    {{ locale === 'id' ? 'EN' : 'ID' }}
                </button>
                <a
                    href="#contact"
                    @click.prevent="scrollToSection('#contact')"
                    class="hidden md:block text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-full transition-all duration-300"
                >
                    {{ locale === 'id' ? "Mari Bicara" : "Let's Talk" }}
                </a>

                <!-- Hamburger Mobile -->
                <button
                    class="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-all"
                    @click="isMenuOpen = !isMenuOpen"
                >
                    <div class="relative w-5 h-5">
                        <span
                            :class="[
                                'absolute left-0 w-5 h-0.5 bg-emerald-400 transition-all duration-300',
                                isMenuOpen ? 'rotate-45 top-2.5' : 'top-0.5',
                            ]"
                        ></span>
                        <span
                            :class="[
                                'absolute left-0 w-5 h-0.5 bg-emerald-400 transition-all duration-300',
                                isMenuOpen
                                    ? 'opacity-0'
                                    : 'top-2.5 opacity-100',
                            ]"
                        ></span>
                        <span
                            :class="[
                                'absolute left-0 w-5 h-0.5 bg-emerald-400 transition-all duration-300',
                                isMenuOpen
                                    ? '-rotate-45 top-2.5'
                                    : 'top-[18px]',
                            ]"
                        ></span>
                    </div>
                </button>
            </div>
        </header>

        <!-- Mobile Menu -->
        <div
            v-if="isMenuOpen"
            class="md:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-6 py-6 flex flex-col gap-5"
        >
            <a
                v-for="item in Menu"
                :key="item.name"
                :href="item.href"
                :class="[
                    'text-base font-medium transition-colors duration-200',
                    activeSection === item.href.slice(1)
                        ? 'text-emerald-400'
                        : 'text-slate-400',
                ]"
                @click.prevent="scrollToSection(item.href)"
            >
                {{ item.name }}
            </a>
            <a
                href="#contact"
                @click.prevent="scrollToSection('#contact')"
                class="text-sm font-semibold bg-emerald-500 text-white px-5 py-2.5 rounded-full text-center transition-all duration-300"
            >
                {{ locale === 'id' ? 'Mari Bicara' : "Let's Talk" }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { locale, toggleLocale } from "../i18n/locale.js";

const Menu = computed(() => [
    { name: locale.value === 'id' ? 'Layanan' : 'Services', href: "#services" },
    { name: locale.value === 'id' ? 'Keahlian' : 'Skills', href: "#skills" },
    { name: locale.value === 'id' ? 'Sertifikat' : 'Certificates', href: "#certificates" },
    { name: locale.value === 'id' ? 'Proyek' : 'Projects', href: "#projects" },
    { name: locale.value === 'id' ? 'Kontak' : 'Contact', href: "#contact" },
]);

const tickerItems = [
    "Full-Stack Developer",
    "Laravel & Vue",
    "Available for Work",
    "Kediri, Indonesia",
];

const isMenuOpen = ref(false);
const scrolled = ref(false);
const activeSection = ref("");

const scrollToSection = (href) => {
    isMenuOpen.value = false;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
    const sections = Menu.value.map((item) => item.href.slice(1));
    for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
            activeSection.value = id;
            break;
        }
    }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.ticker-inner {
    animation: ticker 16s linear infinite;
}
@keyframes ticker {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
</style>
