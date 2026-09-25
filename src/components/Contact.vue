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
                        {{ tr('contact.title').split(' ').slice(0,-1).join(' ') }}
                    </span>
                    {{ tr('contact.title').split(' ').slice(-1)[0] }}
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto" 
                data-aos="fade-up"
                data-aos-delay="100">
                    {{ tr('contact.subtitle') }}
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
                        <h4 class="text-xl font-bold text-white mb-4">{{ tr('contact.followMe') }}</h4>
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
                            <label for="name" class="block text-sm font-medium text-slate-300 mb-2">{{ tr('contact.yourName') }}</label>
                            <input type="text" id="name" v-model="form.name" required
                            class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-slate-300 mb-2">{{ tr('contact.yourEmail') }}</label>
                            <input type="email" id="email" v-model="form.email" required
                            class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300">
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-slate-300 mb-2">{{ tr('contact.message') }}</label>
                            <textarea id="message" v-model="form.message" rows="4" required
                            class="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300"></textarea>
                        </div>
                        <button type="submit" :disabled="isLoading"
                            class="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center bg-emerald-500 text-white hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span v-if="isLoading">{{ tr('contact.sending') }}</span>
                            <span v-else class="flex items-center">
                                {{ tr('contact.sendMessage') }}
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
import { ref, computed } from 'vue';
import { t as tr } from '../i18n/locale.js';
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

    if(!form.value.name.trim() || !form.value.email.trim() || !form.value.message.trim()){
        isSuccess.value=false; statusMsg.value=tr('contact.error'); isLoading.value=false; return
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)){
        isSuccess.value=false; statusMsg.value=tr('contact.error'); isLoading.value=false; return
    }
    try {
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_3qriz9d',
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_bfgzpql',
            {
                from_name: form.value.name,
                from_email: form.value.email,
                message: form.value.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '2uSqy7hts8dDzgvYp'
        );
        isSuccess.value = true;
        statusMsg.value = tr('contact.success');
        form.value = { name: '', email: '', message: '' };
    } catch (error) {
        isSuccess.value = false;
        statusMsg.value = tr('contact.error');
    } finally {
        isLoading.value = false;
    }
};

const contactInfo = computed(() => [
    { id: 1, icon: EnvelopeIcon, title: tr('contact.emailAddress'), detail: 'ahmadubai02@gmail.com' },
    { id: 2, icon: PhoneIcon, title: tr('contact.phoneNumber'), detail: '+62 857-5637-3129' },
    { id: 3, icon: MapPinIcon, title: tr('contact.location'), detail: tr('contact.locationDetail') },
]);

const socialLinks = [
    { name: 'LinkedIn', icon: UserIcon, link: 'https://www.linkedin.com/in/ahmadubai02' },
    { name: 'GitHub', icon: CodeBracketIcon, link: 'https://github.com/Madiennasaa' },
    { name: 'Instagram', icon: CameraIcon, link: 'https://www.instagram.com/madnst_/' },
];
</script>