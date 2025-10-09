<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-[#1f242d]/90 backdrop-blur-md py-4 px-8 flex items-center justify-between"
  >
    <!-- Logo -->
    <h1 class="text-3xl font-extrabold text-white">
      <span class="text-[#00ff51]">F</span>ady.por
    </h1>

    <!-- Desktop Nav -->
    <ul class="hidden space-x-10 font-semibold text-white md:flex">
      <li v-for="link in navLinks" :key="link.name">
        <!-- important: keep href for accessibility/SEO but prevent default and use scrollTo -->
        <a
          :href="link.href"
          class="hover:text-[#00ff51] transition duration-300"
          :class="{ 'text-[#00ff51]': activeLink === link.name }"
          @click.prevent="handleNavClick(link)"
        >
          {{ link.name }}
        </a>
      </li>
    </ul>

    <!-- Mobile menu icon -->
    <button class="text-3xl text-white md:hidden" @click="toggleMenu">
      <component :is="isMenuOpen ? XMarkIcon : Bars3Icon" class="w-7 h-7" />
    </button>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-0 w-full bg-[#1f242d] flex flex-col items-center py-4 md:hidden border-t border-gray-700"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="py-2 text-lg text-white"
          :class="{ 'text-[#00ff51]': activeLink === link.name }"
          @click.prevent="handleMobileNavClick(link)"
        >
          {{ link.name }}
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navLinks = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const activeLink = ref("Home");
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setActive = (name) => {
  activeLink.value = name;
};

function smoothScrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const nav = document.querySelector("nav");
  const navHeight = nav ? nav.getBoundingClientRect().height : 0;

  const top =
    target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

function handleNavClick(link) {
  setActive(link.name);

  smoothScrollToId(link.id || link.href.replace("#", ""));

  history.replaceState(null, "", link.href);
}

function handleMobileNavClick(link) {
  handleNavClick(link);

  isMenuOpen.value = false;
}

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -40% 0px",
  threshold: 0,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      const found = navLinks.find((n) => n.id === id);
      if (found) activeLink.value = found.name;
    }
  });
}, observerOptions);

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
  });
} else {
  navLinks.forEach((l) => {
    const el = document.getElementById(l.id);
    if (el) observer.observe(el);
  });
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
