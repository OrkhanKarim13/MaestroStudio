<script lang="ts" setup>
  const menu = ref(false);
  const { getLinks } = useLinks();
  const links = getLinks({ names: ['about', 'services', 'projects', 'blogs', 'contact'] });
  const switchLocalePath = useSwitchLocalePath();

  const props = defineProps({
    isBlack: {
      type: Boolean,
      default: true
    },
  });

  const isDropdownOpen = ref(false);

  const languages = [
    { label: 'AZ', code: 'az' },
    { label: 'EN', code: 'en' },
    { label: 'RU', code: 'ru' },
  ];

  const selectedLanguage = ref('az');

  const changeLanguage = (code: string) => {
    selectedLanguage.value = code;
    window.location.href = switchLocalePath(code);
  };

  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
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
          <li class="px-8 py-4 block text-black font-aspekta uppercase hover:scale-[1.03]" v-for="link in links">
            <NuxtLink :to="localePath({ name: link.name })">{{ link.title.en }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Custom language dropdown -->
      <div class="relative  flex gap-4 uppercase text-black px-8 py-4">
        <div
          class="cursor-pointer border flex gap-2  md:border md:border-blue-500 md:rounded-full px-4 py-2"
          @click="toggleDropdown"
        >
          {{ languages.find(lang => lang.code === selectedLanguage).label }} <img src="../public/images/Frame.svg" alt="">
        </div>

        <!-- Dropdown content -->
        <ul
          v-if="isDropdownOpen"
          class="absolute top-14 w-[80px] bg-white border border-gray-300 rounded-lg mt-2 "
        >
          <li
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            class="cursor-pointer px-4 py-2 hover:bg-gray-100 text-black"
          >
            {{ lang.label }}
          </li>
        </ul>
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
