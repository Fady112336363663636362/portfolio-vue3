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
      <!-- Project Display -->
      <div
        class="flex flex-col items-center gap-12 transition-all duration-700 ease-in-out md:flex-row"
      >
        <!-- Left: Text Content -->
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
          <a
            href="https://github.com/Fady112336363663636362"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-[#00ff51] p-2 rounded-full hover:bg-[#00ff51] hover:text-black transition"
          >
            <i class="fab fa-github"></i>
          </a>
        </div>

        <!-- Right: Project Image -->
        <div class="flex justify-center flex-1">
          <img
            v-if="projects[currentIndex]"
            :src="projects[currentIndex].image"
            :alt="projects[currentIndex].title"
            class="rounded-xl border border-[#00ff51] shadow-[0_0_20px_#00ff51] transition-all duration-700 ease-in-out"
          />
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

// المشاريع
const projects = ref([
  {
    icon: "🍽️",
    title: "SmartMeal✨",
    description: `Integrated with Gemini AI, this web app offers personalized meal 
      recommendations tailored to the user’s goals and available ingredients. 
      It helps users choose healthy meals and track their diet progress.`,
    tech: "Vue | Tailwind | Gemini AI | Firebase | REST API",
    image: "mit.png",
    github: "https://github.com/yourusername/smartmeal",
  },
  {
    icon: "🛍️",
    title: "SOEP E-Commerce Store 🛒",
    description: `An elegant modern e-commerce web app built using Vue 3, Tailwind CSS, 
      and DummyJSON API. Includes product filters, cart management, and user authentication.`,
    tech: "Vue | Tailwind | Pinia | DummyJSON API | LocalStorage",
    image: "soep-preview.png",
    github: "https://github.com/yourusername/soep-store",
  },
  {
    icon: "🌤️",
    title: "WeatherNow App ☀️",
    description: `A clean and responsive weather app using the OpenWeather API.
      Users can search for cities and view detailed 5-day forecasts.`,
    tech: "Vue | Tailwind | OpenWeather API | @headlessui/vue",
    image: "weather-preview.png",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    icon: "🛍️",
    title: "E-Commerce Store 🛒",
    description: `An elegant modern e-commerce web app built using Vue 3, Tailwind CSS, 
      and DummyJSON API. Includes product filters, cart management, and user authentication.`,
    tech: "HTML | CSS | Botistrab ",
    image: "e-comerc1.png",
    github: "https://github.com/yourusername/soep-store",
  },
  {
    icon: "🙎",
    title: "I am morgan freeman🛒",
    description: `The main Portfolio website displays the identity of the designer/developer or project owner in a clear and effective way: Hero with your big picture, an attractive tagline, an interactive scientific exhibition, network skills, and details of experience and expertise — all of this is clearly different, a different design with personal touches, and personal respect.`,
    tech: "HTML | CSS | Botistrab ",
    image: "morgan.png",
    github: "https://github.com/yourusername/soep-store",
  },
]);

// الحالة الحالية
const currentIndex = ref(0);

// الانتقال بين المشاريع
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
