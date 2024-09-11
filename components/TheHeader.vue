<script lang="ts" setup>
const menu = ref(false) // Mobile navigation menu
const languageMenu = ref(false) // Language dropdown menu

const { getLinks } = useLinks()
const links = getLinks({ names: ['about', 'services', 'projects', 'blogs', 'contact'] });
const switchLocalePath = useSwitchLocalePath()
const props = defineProps({
  isBlack: {
    type: Boolean,
    default: true
  },
})

// Selected locale
const selectedLocale = ref('az') // Default language

const locales = [
  { code: 'az', label: 'Azərbaycan', flag: '/images/azerbaijan.png' },
  { code: 'en', label: 'English', flag: '/images/united-kingdom.png' },
  { code: 'ru', label: 'Русский', flag: '/images/russia.png' }
]

const switchLocale = () => {
  window.location.href = switchLocalePath(selectedLocale.value)
}
</script>

<template>
  <div class="text-black w-full bg-white p-4 lg:p-9" :class="{ 'absolute w-full top-0 left-0 z-[50]': menu }">
    <div class="w-full justify-between flex">
      <!-- Title -->
      <div class="w-[209px]">
        <NuxtLink :to="localePath({ name: 'index' })">
          <img class="w-full h-full" src="../assets/images/logo-maestro-black.svg" alt="logo">
        </NuxtLink>
      </div>

      <!-- Desktop nav list -->
      <nav class="hidden md:border md:border-blue-500 md:rounded-full sm:flex items-center">
        <ul class="flex items-center">
          <li class="px-8 py-4 block text-black font-aspekta uppercase hover:scale-[1.03]" v-for="link in links" :key="link.name">
            <NuxtLink :to="localePath({ name: link.name })">{{ link.title.en }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Language dropdown with flags -->
      <div class="relative flex items-center gap-4 uppercase text-black px-8 py-4">
        <div class="relative inline-block">
          <button class="flex items-center  p-2 rounded focus:outline-none" @click="languageMenu = !languageMenu">
            <img :src="locales.find(locale => locale.code === selectedLocale)?.flag" alt="flag" class="w-6 h-6 mr-2" />
            <span>{{ locales.find(locale => locale.code === selectedLocale)?.label }}</span>
            
          </button>

          <!-- Dropdown menu -->
          <div v-if="languageMenu" class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
            <ul>
              <li v-for="locale in locales" :key="locale.code" class="p-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  @click="selectedLocale = locale.code; switchLocale(); languageMenu = false">
                <img :src="locale.flag" alt="flag" class="w-6 h-6 mr-2" />
                <span>{{ locale.label }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Mobile icon -->
      <div class="ml-auto sm:hidden p-6" @click="menu = !menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </div>
    </div>

    <!-- Mobile nav list -->
    <nav v-show="menu" class="w-full flex items-center">
      <ul class="flex flex-col bg-white text-center">
        <li v-for="link in links" :key="link.name" class="px-8 py-4 text-black hover:text-blue-700">
          <NuxtLink :to="localePath({ name: link.name })">{{ link.title.en }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
