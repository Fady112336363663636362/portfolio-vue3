<template>
  <section id="experience" class="bg-[#1f242d] text-white py-20 text-center" data-aos="zoom-in">
    <h1 class="mb-6 text-4xl font-bold">
      <span class="text-[#00ff51]"> Chapters</span>
      Of My Career
    </h1>
    <p class="max-w-2xl mx-auto text-gray-400 mb-14">
      Since starting my journey as a Frontend developer, I've worked with
      startups and talented teams, gaining hands-on experience in building
      impactful, user-centric web applications. This has allowed me to sharpen
      my skills in frontend development, creating responsive interfaces and
      seamless user experiences using modern tools and frameworks.
    </p>
    <div
      class="flex flex-col-reverse items-center justify-between gap-10 px-6 mx-auto md:flex-row max-w-7xl"
    >
      <!-- الجزء الأيسر (النص) -->
      <div
        class="flex items-center justify-center flex-1 h-full text-center md:justify-start md:text-left"
      >
        <div>
          <h3 class="text-3xl font-bold leading-snug">
            Less than 1 year <br />
            experience as a

            <Text />
          </h3>
        </div>
      </div>

      <!-- الجزء الأيمن (الكروت) -->
      <div class="relative border-l-4 border-[#00ff51] pl-10 space-y-10 flex-1">
        <!-- Experience Card 1 -->
        <div class="relative">
          <span
            class="absolute -left-[13px] top-2 w-6 h-6 bg-[#1f242d] border-4 border-[#00ff51] rounded-full"
          ></span>
          <div
            class="bg-[#1f242d] border border-[#00ff51] shadow-[0_0_15px_#00ff51] rounded-xl p-6 hover:scale-[1.02] transition-transform"
          >
            <h3 class="text-xl font-semibold">Route Academy</h3>
            <p class="text-gray-400">
              Software development training institute providing courses in
              frontend development.
            </p>
            <p class="text-[#00ff51] font-semibold mt-2">Aug.2024 – Jan.2025</p>
          </div>
        </div>

        <!-- Experience Card 2 -->
        <div class="relative">
          <span
            class="absolute -left-[13px] top-2 w-6 h-6 bg-[#1f242d] border-4 border-[#00ff51] rounded-full"
          ></span>
          <div
            class="bg-[#1f242d] border border-[#00ff51] shadow-[0_0_15px_#00ff51] rounded-xl p-6 hover:scale-[1.02] transition-transform"
          >
            <h3 class="text-xl font-semibold">Bird Solution</h3>
            <p class="text-gray-400">
              Completed a 4-month internship at Bird Solution company, where I
              gained hands-on experience in building and maintaining responsive
              web applications using
              <span class="text-[#00ff51] font-medium">Vue.js</span>,
              <span class="text-[#00ff51] font-medium">React</span>, and
              <span class="text-[#00ff51] font-medium">Tailwind CSS</span>.
            </p>
            <p class="text-[#00ff51] font-semibold mt-2">Jan.2025 – May.2025</p>
            <p class="text-[#00ff51] mt-1">
              Certificate | Recommendation Letter
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Text from "./Text.vue";
</script>
