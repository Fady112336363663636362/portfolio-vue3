<template>
  <div
    class="min-h-screen font-sans text-black transition-colors bg-white dark:bg-gray-900 dark:text-white"
  >
    <Header @search-city="city = $event" />

    <main class="grid grid-cols-1 gap-4 p-4 lg:grid-cols-3">
      <section class="space-y-4 lg:col-span-1">
        <CurrentWeather :city="city" />
        <ForecastList :city="city" />
      </section>

      <section class="space-y-4 lg:col-span-2">
        <Highlights :city="city" />
      
        <TodayAt :city="city" />
      </section>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import CurrentWeather from "./components/CurrentWeather.vue";
import ForecastList from "./components/ForecastList.vue";
import Highlights from "./components/Highlights.vue";
import TodayAt from "./components/TodayAt.vue";

const city = ref("Cairo");
</script>
