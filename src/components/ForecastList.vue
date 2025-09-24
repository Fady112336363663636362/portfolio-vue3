<template>
  <section class="p-4 text-black transition-colors bg-white rounded-lg dark:bg-gray-800 dark:text-white">
    <h2 class="mb-4 text-xl font-semibold">5-day forecast</h2>

    <div v-if="forecast.length > 0" class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div
        v-for="(item, index) in forecast"
        :key="index"
        class="flex flex-col items-center p-3 transition-colors bg-gray-200 rounded-lg dark:bg-gray-700"
      >
        <p class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ formatDate(item.dt_txt) }}</p>
        <img
          :src="`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`"
          :alt="item.weather[0].description"
          class="w-16 h-16"
        />
        <p class="text-lg font-bold">{{ Math.round(item.main.temp) }}°C</p>
        <p class="text-sm text-gray-600 capitalize dark:text-gray-400">{{ item.weather[0].description }}</p>
      </div>
    </div>

    <p v-else class="text-red-500 dark:text-red-400">⚠️ No data available now.</p>
  </section>
</template>


<script setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";

const props = defineProps({
  city: {
    type: String,
    required: true,
  },
});

const forecast = ref([]);
const API_KEY = "1bf38f0074de70cb40d377fe27fcaafc";

const fetchForecast = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${API_KEY}`
    );

    
    forecast.value = response.data.list.filter(item => item.dt_txt.includes("12:00:00"));
  } catch (error) {
    console.error("An error occurred while fetching the weather forecast:", error);
    forecast.value = [];
  }
};

const formatDate = (datetime) => {
  const date = new Date(datetime);
  return date.toLocaleDateString("ar-EG", { weekday: "long", month: "short", day: "numeric" });
};

onMounted(fetchForecast);
watch(() => props.city, fetchForecast);
</script>
