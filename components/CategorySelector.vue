<template>
  <ul class="max-w-[300px] md:max-w-none flex border border-white rounded-full p-2 overflow-x-scroll  whitespace-nowrap">
      <li class="px-2 py-3 md:px-4 md:py-2 lg:px-8  lg:py-4 text-sm md:text-md  text-white">
          <NuxtLink to="/">
              ALL
          </NuxtLink>
      </li>
      <li class="px-2 py-3 md:px-4 md:py-2  lg:px-8  lg:py-4 text-sm md:text-md text-white">
          <NuxtLink to="/">
              STORE
          </NuxtLink>
      </li>
      <li class="px-2 py-3 md:px-4 md:py-2  lg:px-8  lg:py-4 text-sm md:text-md text-white">
          <NuxtLink to="/">
              EDUCATION
          </NuxtLink>
      </li>
      <li class="px-2 py-3 md:px-4 md:py-2  lg:px-8 lg:py-4 text-sm md:text-md text-white">
          <NuxtLink to="/">
              E-COMMERCE
          </NuxtLink>
      </li>
      <li class="px-2 py-3 md:px-4 md:py-2  lg:px-8 lg:py-4 text-sm md:text-md text-white">
          <NuxtLink to="/">
              AI & ML
          </NuxtLink>
      </li>
      <li class="px-2 py-3 md:px-4 md:py-2  lg:px-8 lg:py-4 text-sm md:text-md text-white">
          <NuxtLink to="/">
              HEALTHCARE
          </NuxtLink>
      </li>
  </ul>
</template>


<style scoped>
/* Hide horizontal scrollbar */
ul::-webkit-scrollbar {
  display: none;
}

ul {
  /* Firefox */
  scrollbar-width: none;
}
</style>