<template>
  <section
    id="portfolio"
    class="bg-[#1f242d] text-white py-20"
    data-aos="zoom-in"
  >
    <div class="relative px-6 mx-auto max-w-7xl">
      <h1 class="mb-6 text-4xl font-bold text-center">
        <span class="text-[#00ff51]">Diverse </span>
        Projects Portfolio
      </h1>
      <p class="max-w-2xl mx-auto text-center text-gray-400 mb-14">
        Explore my portfolio to see a collection of projects that showcase my
        journey in Frontend development, where Innovation meets seamless user
        experiences.
      </p>

      <div
        class="flex flex-col items-center gap-12 transition-all duration-700 ease-in-out md:flex-row"
      >
        <!-- Left: Project Info -->
        <div class="flex-1" v-if="projects[currentIndex]">
          <h3 class="mb-4 text-4xl font-bold">
            {{ projects[currentIndex].icon }}
            <span class="text-[#00ff51]">{{
              projects[currentIndex].title
            }}</span>
          </h3>

          <p class="mb-6 text-gray-400">
            {{ projects[currentIndex].description }}
          </p>

          <p class="text-[#00ff51] font-semibold mb-6">
            {{ projects[currentIndex].tech }}
          </p>
          <hr class="mb-5" />
          <div class="flex gap-3">
            <a
              :href="projects[currentIndex].github"
              target="_blank"
              rel="noopener noreferrer"
              class="border-2 border-[#00ff51] p-2 rounded-full hover:bg-[#00ff51] hover:text-black transition"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <!-- Right: Project Image with Go Site button -->
        <div class="flex justify-center flex-1">
          <div class="relative w-full max-w-md group">
            <img
              v-if="projects[currentIndex]"
              :src="projects[currentIndex].image"
              :alt="projects[currentIndex].title"
              class="rounded-xl border border-[#00ff51] shadow-[0_0_20px_#00ff51] transition-all duration-700 ease-in-out w-full"
            />

            <!-- زر Go Site يظهر عند hover -->
            <a
              v-if="projects[currentIndex]"
              :href="projects[currentIndex].site"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute inset-0 flex items-center justify-center font-semibold text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-70 rounded-xl group-hover:opacity-100"
            >
              Go Site
            </a>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div
        class="flex justify-end gap-4 mt-5 bottom-10 right-6 md:right-0 md:bottom-0"
      >
        <button
          @click="prevProject"
          class="p-3 rounded-lg border border-[#00ff51] hover:bg-[#00ff51] hover:text-[#1f242d] transition"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </button>

        <button
          @click="nextProject"
          class="p-3 rounded-lg border border-[#00ff51] hover:bg-[#00ff51] hover:text-[#1f242d] transition"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// كل المشاريع مع روابط مباشرة للموقع في site
const projects = ref([
  {
    icon: "🎬",
    title: "Netflix-Style Movie",
    description: `Netflix-Style Movie Streaming App (Nuxt + Vue 3 + TMDB API) I built a fully-functional Netflix-style streaming interface powered by real movie data from TMDB. The project focuses on speed, clean UI/UX, state management, and a smooth browsing experience similar to modern streaming platforms. 🚀 Key Features Dynamic Home Page Sections Trending Movies • Top Rated • Popular • Weekly Highlights All sections load real data from TMDB in real-time. Movie Details Page Each movie includes: High-quality poster & backdrop Rating & release info Overview Image preview Watch Now interaction Favorites System (Fully Persistent) Powered by Pinia + pinia-plugin-persistedstate Add/remove movies to Favorites Favorites saved automatically in Local Storage Consistent UI state across all pages Heart button syncs instantly across the app Reusable FavoriteButton Component Smart state detection Animated toggle Works in all movie sections (Trending, Top Rated, Details Page, etc.) Responsive Modern UI Built with Tailwind CSS Fully optimized for mobile, tablet, and desktop.`,
    tech: "HTML | CSS | Nuxt 3 | Pinia | Tailwind | Axios | TMDB API | FontAwesome",
    image: "nuxt.png",
    github: "https://github.com/Fady112336363663636362",
    site: "https://exquisite-parfait-75bd7e.netlify.app/NUXTFLIX/",
  },
  {
    icon: "🍽️",
    title: "SmartMeal✨",
    description: `Integrated with Gemini AI, this web app offers personalized meal recommendations tailored to the user’s goals and available ingredients. It helps users choose healthy meals and track their diet progress.`,
    tech: "JS |CSS | HTML | REST API",
    image: "mit.png",
    github: "https://github.com/Fady112336363663636362",
    site: "https://fady112336363663636362.github.io/Forkify/",
  },
  {
    icon: "🛍️",
    title: "E-Commerce Website 2",
    description: `Modern e-commerce website with product filters, cart management, and responsive UI.`,
    tech: "HTML | CSS | Tailwind  | JavaScript",
    image: "e-comerc1.png",
    github: "https://github.com/Fady112336363663636362",
    site: "https://fady112336363663636362.github.io/ecommerce-website2/",
  },
  {
    icon: "🛍️",
    title: "E-Commerce",
    description: `An elegant modern e-commerce web app built using Vue 3, Tailwind CSS, and DummyJSON API. Includes product filters, cart management, and user authentication.`,
   tech: "Vue | Tailwind | Pinia | DummyJSON API | LocalStorage",
    image: "soep-preview.png",
    github: "https://github.com/Fady112336363663636362",
    site: "https://fady112336363663636362.github.io/e-commerce/",
  },
  {
    icon: "🌤️",
    title: "Weather App Starter",
    description: `A responsive weather app using OpenWeather API, with city search and 5-day forecasts.`,
    tech: "HTML | CSS | JavaScript | OpenWeather API",
    image: "weather-preview.png",
    github: "https://github.com/Fady112336363663636362",
    site: "https://fady112336363663636362.github.io/weather-app-starter/",
  },
]);

const currentIndex = ref(0);

const nextProject = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length;
};

const prevProject = () => {
  currentIndex.value =
    (currentIndex.value - 1 + projects.value.length) % projects.value.length;
};
</script>

<style scoped>
button i {
  font-size: 1.2rem;
}
</style>
