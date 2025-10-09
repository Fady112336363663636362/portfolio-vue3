<template>
  <section id="skills" class="bg-[#1f242d] py-20 px-6 text-center"  data-aos="zoom-in">
    <h2 class="mb-6 text-4xl font-bold text-white">
      What <span class="text-[#00ff51]">Can I Do?</span>
    </h2>
    <p class="max-w-2xl mx-auto text-gray-400 mb-14">
      I build responsive and modern web applications using the latest technologies with a focus on performance and clean design.
    </p>

    <!-- Skills Grid -->
    <div   class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="bg-[#1f242d] border border-transparent hover:border-[#00ff51] shadow-[0_0_25px_#00ff51aa] transition-all duration-500 rounded-2xl p-8 text-left w-full max-w-[360px] animate-fade-in"
      >
        <div class="flex items-center gap-3 mb-4">
          <img :src="skill.icon" :alt="skill.title" class="w-10 h-10" />
          <h3 class="text-xl font-semibold text-white">
            {{ skill.title }}
          </h3>
        </div>
        <p class="mb-4 text-sm text-gray-400">{{ skill.description }}</p>

        <ul class="space-y-1">
          <li
            v-for="(tech, i) in skill.technologies"
            :key="i"
            class="flex items-center gap-2 text-gray-300"
          >
            <i class="fa-solid fa-code text-[#00ff51]"></i> {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  {
    title: "Frontend Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description:
      "Building responsive, dynamic and user-friendly interfaces using modern frameworks.",
    technologies: ["Vue.js", "React.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    title: "UI / UX Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description:
      "Designing clean and attractive interfaces that focus on user experience and simplicity.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "Wireframing"],
  },
  {
    title: "API Integration",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description:
      "Connecting frontend apps with RESTful APIs and handling asynchronous data efficiently.",
    technologies: ["Axios", "Fetch", "JSON", "OpenWeather API"],
  },
  {
    title: "Version Control",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description:
      "Collaborating on projects and managing source code versions effectively.",
    technologies: ["Git", "GitHub", "Branches", "Pull Requests"],
  },
  {
    title: "Performance Optimization",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
    description:
      "Improving load speed and performance using code splitting and caching techniques.",
    technologies: ["Vite", "Lazy Loading", "Compression"],
  },
  {
    title: "Deployment & Hosting",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    description:
      "Deploying web apps on modern platforms with CI/CD integration.",
    technologies: ["Vercel", "Netlify", "GitHub Pages"],
  },
];
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
