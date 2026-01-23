<template>
    <Transition name="fade">
        <button
            v-if="isVisible"
            @click="scrollToTop"
            aria-label="Scroll to top"
            class="fixed bottom-6 right-6 z-50 p-3 rounded-full 
                bg-gradient-to-r from-emerald-500 to-blue-500 text-white 
                shadow-lg transition-all duration-300
                hover:shadow-emerald-500/50 hover:scale-110"
        >
            <ArrowUpIcon class="w-6 h-6" />
        </button>
    </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ArrowUpIcon } from '@heroicons/vue/16/solid';

const isVisible = ref(false);

const handleScroll = () => {
    // Tombol akan muncul jika posisi scroll lebih dari 300px
    if (window.scrollY > 300) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Membuat scroll menjadi halus
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Transisi untuk tombol agar muncul dan hilang dengan halus */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}
</style>