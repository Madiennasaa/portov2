<template>
    <section class="relative py-20 overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900" id="contact">
        <!-- Background Elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                        Get In
                    </span>
                    Touch
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto" 
                data-aos="fade-up"
                data-aos-delay="100">
                    Tertarik untuk berkolaborasi atau ingin bertanya lebih lanjut? Hubungi saya!
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-start">
                <div class="space-y-6" data-aos="fade-right">
                    <div v-for="item in contactInfo"
                    :key="item.id"
                    class="flex items-start p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50">
                        <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex-shrink-0 mr-4">
                            <component :is="item.icon" class="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-white">{{ item.title }}</h4>
                            <p class="text-slate-300 text-sm">{{ item.detail }}</p>
                        </div>
                    </div>
                    
                    <div class="pt-4" data-aos="fade-right" data-aos-delay="300">
                        <h4 class="text-xl font-bold text-white mb-4">Follow Me</h4>
                        <div class="flex gap-4">
                            <a v-for="social in socialLinks" 
                            :key="social.name"
                            :href="social.link" target="_blank"
                            class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800/50 text-emerald-400 border border-slate-700/50 hover:bg-emerald-500/10 hover:border-emerald-400/50 transition-all duration-300"
                            :aria-label="social.name">
                                <component :is="social.icon" class="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div class="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 shadow-2xl" 
                data-aos="fade-left">
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                            <input type="text" id="name" v-model="form.name" required
                            class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                            <input type="email" id="email" v-model="form.email" required
                            class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
                            <textarea id="message" v-model="form.message" rows="4" required
                            class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"></textarea>
                        </div>
                        <button type="submit" :disabled="isLoading"
                            class="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span v-if="isLoading">Mengirim...</span>
                            <span v-else class="flex items-center">
                                Send Message
                                <PaperAirplaneIcon class="w-4 h-4 ml-2"/>
                            </span>
                        </button>

                        <!-- Status message -->
                        <p v-if="statusMsg" 
                            :class="isSuccess ? 'text-emerald-400' : 'text-red-400'"
                            class="text-sm text-center mt-2">
                            {{ statusMsg }}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { 
    EnvelopeIcon, 
    PhoneIcon, 
    MapPinIcon, 
    PaperAirplaneIcon,
    UserIcon,
    CodeBracketIcon,
    CameraIcon
} from '@heroicons/vue/16/solid';

const form = ref({ name: '', email: '', message: '' });
const isLoading = ref(false);
const statusMsg = ref('');
const isSuccess = ref(false);

const submitForm = async () => {
    isLoading.value = true;
    statusMsg.value = '';

    try {
        await emailjs.send(
            'service_3qriz9d',
            'template_bfgzpql',
            {
                from_name: form.value.name,
                from_email: form.value.email,
                message: form.value.message,
            },
            '2uSqy7hts8dDzgvYp'
        );
        isSuccess.value = true;
        statusMsg.value = 'Pesan berhasil terkirim!';
        form.value = { name: '', email: '', message: '' };
    } catch (error) {
        isSuccess.value = false;
        statusMsg.value = 'Gagal mengirim pesan. Coba lagi.';
    } finally {
        isLoading.value = false;
    }
};

const contactInfo = [
    { id: 1, icon: EnvelopeIcon, title: 'Email Address', detail: 'ahmadubai02@gmail.com' },
    { id: 2, icon: PhoneIcon, title: 'Phone Number', detail: '+62 857-5637-3129' },
    { id: 3, icon: MapPinIcon, title: 'Location', detail: 'Kediri, Jawa Timur, Indonesia' },
];

const socialLinks = [
    { name: 'LinkedIn', icon: UserIcon, link: 'https://www.linkedin.com/in/ahmadubai02' },
    { name: 'GitHub', icon: CodeBracketIcon, link: 'https://github.com/Madiennasaa' },
    { name: 'Instagram', icon: CameraIcon, link: 'https://www.instagram.com/madnst_/' },
];
</script>