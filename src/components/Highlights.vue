<template>
  <section class="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <h2
      class="pb-2 mb-6 text-2xl font-semibold text-gray-800 border-b border-gray-300 dark:text-white dark:border-gray-700"
    >
      Weather details
    </h2>

    <p
      v-if="errorMessage"
      class="mb-4 font-semibold text-red-600 dark:text-red-400"
    >
      {{ errorMessage }}
    </p>

    <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(item, index) in highlights"
        :key="index"
        class="flex items-center gap-4 p-4 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
      >
        <component
          :is="item.icon"
          class="w-8 h-8 text-sky-500 dark:text-sky-400"
        />
        <div>
          <h3 class="text-sm text-gray-600 dark:text-gray-300">
            {{ item.label }}
          </h3>
          <p class="text-lg font-bold text-gray-900 dark:text-white">
            {{ item.value }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";

import {
  ChartBarIcon,
  EyeIcon,
  SunIcon,
  MoonIcon,
  FireIcon,
  GlobeAltIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
  city: {
    type: String,
    required: true,
  },
});

const API_KEY = "1bf38f0074de70cb40d377fe27fcaafc";
const highlights = ref([]);
const errorMessage = ref("");

const fetchDetails = async () => {
  try {
    errorMessage.value = "";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${API_KEY}`
    );
    const data = response.data;

    highlights.value = [
      {
        label: "atmospheric pressure",
        value: `${data.main.pressure} hPa`,
        icon: ChartBarIcon,
      },
      {
        label: "Vision",
        value: `${(data.visibility / 1000).toFixed(1)} كم`,
        icon: EyeIcon,
      },
      {
        label: "sunrise",
        value: new Date(data.sys.sunrise * 1000).toLocaleTimeString("ar-EG", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        icon: SunIcon,
      },
      {
        label:"sunset",
        value: new Date(data.sys.sunset * 1000).toLocaleTimeString("ar-EG", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        icon: MoonIcon,
      },
      {
        label: "thermal sensation",
        value: `${Math.round(data.main.feels_like)}°C`,
        icon: FireIcon,
      },
      {
        label: "sea ​​level",
        value: data.main.sea_level ? `${data.main.sea_level} hPa` : "غير متوفر",
        icon: GlobeAltIcon,
      },
    ];
  } catch (error) {
    errorMessage.value = "⚠️ The city is incorrect or the data cannot be fetched.";
    highlights.value = [];
    console.error("❌ Failed to load weather details:", error);
  }
};

onMounted(fetchDetails);
watch(() => props.city, fetchDetails);
</script>
