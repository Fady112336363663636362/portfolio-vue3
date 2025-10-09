<template>
  <section
     id="hero"  class="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-32 pb-20 bg-[#1f242d] text-white relative overflow-hidden animate-fade-in"
  >
    <!-- Left Side -->
    <div class="z-10 max-w-lg">
      <h1 class="mb-4 text-5xl font-extrabold leading-tight md:text-6xl">
        Fady <span class="text-[#00ff51]">Hany</span>
      </h1>
      <h2 class="mb-4 text-4xl font-bold text-gray-200">I'm <Text /></h2>

      <p class="mb-8 leading-relaxed text-gray-400">
        Passionate about building modern web apps with smooth user experiences
        and clean interfaces. Let's turn your ideas into reality!
      </p>

      <!-- Resume Button -->
      <div class="flex items-center gap-x-2 b-8 bgap-4">
        <a
          href="https://drive.google.com/file/d/1zieVTm_BiyWliRxP7QTnK2peHJfCHBkM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-[#00ff51] hover:bg-[#00e14bc6] text-black font-semibold px-6 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all"
        >
          VIEW MY CV
        </a>
        <div class="flex gap-4">
          <a
            href="https://github.com/Fady112336363663636362"
            target="_blank"
            rel="noopener noreferrer"
            class="border-2 border-[#00ff51] p-2 rounded-full hover:bg-[#00ff51] hover:text-black transition"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/fady-hany-039a17334/"
            class="border-2 border-[#00ff51] p-2 rounded-full hover:bg-[#00ff51] hover:text-black transition"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/u/0/#inbox"
            class="border-2 border-[#00ff51] p-2 rounded-full hover:bg-[#00ff51] hover:text-black transition"
          >
            <i class="far fa-envelope"></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/201275317044"
            class="border-2 border-[#00ff51] p-2 rounded-full hover:bg-[#00ff51] hover:text-black transition"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Right Side (Image + Dual Rotating Arcs + Glow) -->
    <div class="relative flex items-center justify-center">
      <!-- نفس المسار -->
      <div
        class="relative flex items-center justify-center w-[450px] h-[450px]"
      >
        <!-- القوس الأول -->
        <div
          class="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#00ff51] border-r-[#31b206] animate-spin-slow blur-[1px] opacity-70"
          style="animation-duration: 10s"
        ></div>

        <!-- القوس الثاني -->
        <div
          class="absolute inset-0 rounded-full border-[6px] border-transparent border-b-[#00ff51] border-l-[#00ff51] animate-spin-reverse blur-[1px] opacity-60"
          style="animation-duration: 10s"
        ></div>

        <!-- توهج خلف الصورة -->

        <div
          class="absolute w-[300px] h-[300px] bg-[#00ff51]/25 blur-[100px] rounded-full animate-pulse-zoom"
        ></div>

        <img
          src="/fady.png"
          alt="Fady Hany"
          class="relative z-10 object-cover w-[380px] h-[380px] rounded-full shadow-[0_0_60px_15px_rgba(0,255,81,0.4)] animate-pulse-zoom"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Text from "./Text.vue";
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");

@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes spin-reverse {
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.animate-spin-slow {
  animation: spin-slow linear infinite;
}
.animate-spin-reverse {
  animation: spin-reverse linear infinite;
}

/* زوم بسيط للصورة */
@keyframes pulse-zoom {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 15px rgba(0, 255, 81, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 35px rgba(0, 255, 81, 0.8);
  }
}
.animate-pulse-zoom {
  animation: pulse-zoom 3.5s ease-in-out infinite;
}


@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease-out forwards;
}
</style>
