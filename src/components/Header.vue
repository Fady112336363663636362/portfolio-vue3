<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['search-city'])
const search = ref('')
const isDark = ref(false)

function handleSearch() {
  if (search.value.trim() !== '') {
    emit('search-city', search.value)
    search.value = ''
  }
}

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme === 'dark'
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <header class="relative flex flex-col items-center gap-4 p-4 border-b border-gray-300 dark:border-gray-700 md:flex-row md:gap-0">
    
    <h1 class="flex-shrink-0 text-2xl font-bold text-black dark:text-white">🌤️ weatherio</h1>

    <div
      class="flex flex-wrap justify-center w-full gap-2 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-lg md:px-4 md:flex-nowrap"
    >
      <input
        type="text"
        placeholder="Search for city..."
        v-model="search"
        @keyup.enter="handleSearch"
        class="flex-grow min-w-0 px-4 py-2 text-black transition-colors bg-white rounded-full outline-none dark:bg-gray-800 dark:text-white"
      />
      <button
        @click="handleSearch"
        class="flex-shrink-0 px-4 py-2 text-white transition rounded-full bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500"
      >
        Search
      </button>
    </div>

   
    <button
      @click="toggleDarkMode"
      class="absolute top-4 right-4 md:static md:ml-auto px-3 py-1.5 text-sm rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 transition"
    >
      {{ isDark ? '☀️' : '🌙' }}
    </button>
  </header>
</template>
