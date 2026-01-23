<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <Navbar />
    <Hero />
    <Services />
    <ExperienceSkills />
    <Certificate />
    <Projects />
    <Contact />
    <ScrollOnTop />
    <Footer />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';

import { ref, nextTick, onMounted } from 'vue';
import Services from './components/Service.vue';
import ExperienceSkills from './components/ExperienceSkills.vue';
import Certificate from './components/Certificate.vue'
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import ScrollOnTop from './components/ScrollOnTop.vue';
import Footer from './components/Footer.vue';

export default {
  components : {
    Navbar, 
    Hero,
    Services,
    ExperienceSkills,
    Certificate,
    Projects,
    Contact,
    ScrollOnTop,
    Footer,
  },
  setup() {
    const loading = ref(true);

    onMounted(async () => {
      await nextTick();

      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        easing: 'ease-in-out',
      });

      setTimeout(() => {
        loading.value = false;
      }, 800);
    });

    return {loading};
  }
}
</script>