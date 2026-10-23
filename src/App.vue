<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-x-hidden bg-white selection:bg-neutral-900 selection:text-white">
    <Navbar />
    <main class="flex-grow pb-16 pt-24 md:pt-28 print:pt-0">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
