<template>
  <section id="contact" class="bg-[#1f242d] text-white py-20" data-aos="zoom-in">
    <div class="max-w-4xl px-4 mx-auto text-center">
      <h2 class="mb-4 text-3xl font-bold">Get in Touch</h2>
      <p class="mb-10 text-gray-400">
        Get in touch with me using the links below to discuss how I can assist
        you.
      </p>

      <div
        class="bg-[#2b323c] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_20px_#00ff51]"
      >
        <div class="text-left md:w-2/3">
          <h3 class="text-[#00ff51] font-bold text-2xl mb-2">
            Let's create something amazing!
          </h3>
          <p class="mb-4 text-gray-300">
            Feel free to reach out if you'd like to discuss a project, a job
            opportunity, or simply want to connect.
          </p>
          <a
            href="mailto:fady85320@gmail.com"
            class="bg-[#00ff51c7] text-[#1f242d] font-semibold py-2 px-5 rounded-md hover:scale-105 transition-transform"
          >
            Say Hello
          </a>
        </div>

        <div class="flex justify-center md:w-1/3">
          <img
            src="/rop.gif"
            alt="Bot"
            class="w-60 drop-shadow-[0_0_20px_#00ff51]"
          />
        </div>
      </div>

      <div
        class="mt-12 flex justify-center gap-6 border-t border-[#00ff51]/50 pt-6"
      >
        <Media />
      </div>

      <div class="mt-8 text-sm text-gray-400">
        © 2025 All rights reserved.
        <span class="text-[#00ff51]">Fady Hany.</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import Media from './media.vue';

</script>
