<script lang="ts" setup>
  const links = [
    'Web Development',
    'Mobile Development',
    'Custom Software Development',
    'UI/UX Design',
    'Testing & Quality Assurance',
    'AI Software Development'
  ]
</script>


<template>
  <section class="my-6 md:mx-9 md:mb-6 bg-[#0047FF] md:rounded-md p-4 lg:p-12">
    <div class="flex flex-col items-center justify-center gap-8 lg:gap-12 ">
      <h2 class="text-white text-xl text-center lg:text-3xl font-bold leading-6">Təqdim etdiyimiz xidmətlər</h2>
      <div class="w-full bg-white rounded-md grid  grid-cols-1  md:grid-cols-2 lg:gap-40">
        <div class=" p-3 lg:p-6">
          <ul class="flex flex-col items-start justify-center text-lg lg:text-2xl font-semibold">
            <li v-for="link in links" class="px-4 py-2 lg:px-8 lg:py-4 font-bold">{{ link }}</li>
            <button class="px-4 py-2 lg:px-8 lg:py-4 font-bold">
              <a class="uppercase  text-blue-700 text-lg font-semibold cursor-pointer" href="/services">Ətraflı bax</a>
            </button>
          </ul>
        </div>
        <div class="p-6">
          <img src="~/assets/images/rocket.svg" alt="image">
        </div>
      </div>
    </div>
  </section>
</template>
