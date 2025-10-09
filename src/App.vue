<template>
  <div class="bg-[#1f242d] min-h-screen">
    <Navbar />
    <HeroSection  />
    <Skills/>
    <Experience/>
    <Project/>
    <Contact/>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Project from './components/Project.vue';
import Contact from './components/Contact.vue';

</script>
