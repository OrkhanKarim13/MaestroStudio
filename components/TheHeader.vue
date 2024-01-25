<script lang="ts" setup>
  const menu = ref(false)
  const { getLinks } = useLinks()
  const links = getLinks({ names: ['about', 'services', 'projects', 'blogs', 'contact'] });

</script>


<template>
  <div
    class=" text-black w-full bg-white p-4 lg:p-9"
    :class="{ 'absolute w-full  top-0 left-0': menu }"
  >
    <div class=" w-full justify-between flex ">
      
        <!-- Title -->
        <div class="w-[209px]">
              <NuxtLink :to="localePath({name: 'index'})">
                  <img class="w-full h-full" src="../assets/images/logo-maestro-black.svg" alt="logo">
              </NuxtLink>
          </div>
        <!-- Icon -->

      
      <!-- Desktop nav list -->
      <nav class=" hidden md:border md:border-blue-500 md:rounded-full sm:flex items-center">
        <ul class="flex">
          <li class="px-8 py-4 block text-black font-aspekta uppercase" v-for="link in links">
            <NuxtLink :to="localePath({ name: link.name})">{{ link.title.en }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Mobile icon -->
        <div
          class="ml-auto sm:hidden p-6"
          @click="menu = !menu"
        >
        <svg class=" w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
        </div>
      </div>
      <!-- Mobile nav list -->
      <nav v-show="menu" class="w-full">
        <ul class="flex flex-col text-center">
          <li v-for="link in links" :key="link.name" class="px-8 py-4 text-black hover:text-blue-700">
            <NuxtLink :to="localePath({ name: link.name })">{{ link.title.en }}</NuxtLink>
          </li>
      </ul>
    </nav>
  </div>
</template>
