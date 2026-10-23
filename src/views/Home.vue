<script setup>
import Hero from "../components/Hero.vue";
import Recruiter from "../components/Recruiter.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Experience from "../components/Experience.vue";
import FeaturedProjects from "../components/FeaturedProjects.vue";
import FeaturedProduct from "../components/FeaturedProduct.vue";
import Contact from "../components/Contact.vue";
</script>

<template>
  <div class="space-y-24 md:space-y-40">
    <Hero />
    <Recruiter />
    <About />
    <Skills />
    <Experience />
    <FeaturedProjects />
    <FeaturedProduct />
    <Contact />
  </div>
</template>
