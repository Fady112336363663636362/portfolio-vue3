<template>
  <section class="p-4 text-black bg-white rounded-lg dark:bg-gray-800 dark:text-white">
    <h2 class="pb-2 mb-4 text-xl font-semibold border-b border-gray-300 dark:border-gray-700">The future is coming </h2>

    <div v-if="errorMessage" class="mb-4 text-red-600 dark:text-red-400">{{ errorMessage }}</div>

    <div v-if="hourly.length" class="space-y-6">
      
      <div>
        <h3 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">temperature</h3>
        <div class="flex gap-4 pb-1 overflow-x-auto">
          <div
            v-for="(hour, index) in todayHours"
            :key="index"
            class="flex flex-col items-center w-24 p-3 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700"
          >
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ formatTime(hour.dt) }}</p>
            <img
              :src="`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`"
              :alt="hour.weather[0].description"
              class="w-10 h-10"
            />
            <p class="font-bold">{{ Math.round(hour.main.temp) }}°C</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ hour.weather[0].description }}</p>
          </div>
        </div>
      </div>

    
      <div>
        <h3 class="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">winds</h3>
        <div class="flex gap-4 pb-1 overflow-x-auto">
          <div
            v-for="(hour, index) in todayHours"
            :key="index"
            class="flex flex-col items-center w-24 p-3 bg-gray-100 rounded-lg shadow-md dark:bg-gray-700"
          >
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ formatTime(hour.dt) }}</p>
            <div
              class="w-6 h-6 rotate-icon"
              :style="{ transform: `rotate(${hour.wind?.deg || 0}deg)` }"
              title=" Wind direction"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" class="w-full h-full text-blue-500 dark:text-blue-400">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v18m0 0l-6-6m6 6l6-6" />
              </svg>
            </div>
            <p class="text-sm">{{ hour.wind?.speed ? hour.wind.speed.toFixed(1) + ' km/h' : 'N/A' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500 dark:text-gray-400">Loading data...</div>
  </section>
</template>

<script setup>
import { ref, watch, onMounted, computed } from "vue";
import axios from "axios";

const props = defineProps({
  city: {
    type: String,
    required: true,
  },
});

const API_KEY = "1bf38f0074de70cb40d377fe27fcaafc";

const hourly = ref([]);
const errorMessage = ref("");

function formatTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  return date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

const todayHours = computed(() => {
  return hourly.value.slice(0, 8);
});

async function fetchTodayData() {
  errorMessage.value = "";
  hourly.value = [];

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${API_KEY}`
    );
    hourly.value = res.data.list;
  } catch (error) {
    errorMessage.value = `⚠️ We were unable to load today's data.: ${error.response?.data?.message || error.message}`;
    console.error("Error fetching Today At data:", error);
  }
}

onMounted(fetchTodayData);
watch(() => props.city, fetchTodayData);
</script>

<style scoped>
.rotate-icon {
  transition: transform 0.3s;
}
</style>



<style scoped>
.rotate-icon {
  transition: transform 0.3s;
}
</style>
