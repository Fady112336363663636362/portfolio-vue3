<template>
  <section
    class="p-4 text-black transition-colors bg-white rounded-lg dark:bg-gray-800 dark:text-white"
  >
    <p v-if="errorMessage" class="mt-2 text-red-400">{{ errorMessage }}</p>
    <h2 class="mb-2 text-xl font-semibold">{{ city }}</h2>
    <div class="flex items-center gap-4">
      <img
        v-if="weatherIcon"
        :src="`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`"
        :alt="weatherDescription"
        class="w-20 h-20"
      />
      <div>
        <p class="text-4xl font-bold">{{ temperature }}°C</p>
        <p class="capitalize">{{ weatherDescription }}</p>
      </div>
    </div>

    <div class="flex gap-6 mt-4 text-sm text-gray-500 dark:text-gray-300">
      <p>Humidity: {{ humidity }}%</p>
      <p>winds: {{ windSpeed }} m/s</p>
    </div>
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

const temperature = ref(null);
const weatherDescription = ref("");
const weatherIcon = ref("");
const humidity = ref(null);
const windSpeed = ref(null);
const errorMessage = ref("");

const API_KEY = "1bf38f0074de70cb40d377fe27fcaafc";

const fetchWeather = async () => {
  try {
    errorMessage.value = "";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;

    temperature.value = Math.round(data.main.temp);
    weatherDescription.value = data.weather[0].description;
    weatherIcon.value = data.weather[0].icon;
    humidity.value = data.main.humidity;
    windSpeed.value = data.wind.speed;
  } catch (error) {
    errorMessage.value = "⚠️The city is incorrect or the data cannot be fetched..";
    console.error("An error occurred while fetching weather data.:", error);
  }
};

onMounted(fetchWeather);
watch(() => props.city, fetchWeather);
</script>
