<template>
  <section class="md:mx-9 md:mb-6 bg-[#0047FF] md:p-12 px-4 py-6 md:rounded-md">
    <div v-if="project" class="w-full flex flex-col items-start justify-center md:p-12  px-4 py-6 gap-12 md:gap-6">
      <h2 class="text-white lg:text-8xl md:text-4xl text-3xl leading-tight uppercase">{{ project.title }}</h2>
      <p class="text-white text-xl">{{ project.description }}</p>
      <div class="flex items-center justify-between gap-2">
        <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">Digital Health</a>
        <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">MIS</a>
        <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">HIS</a>
      </div>
    </div>
  </section>
  <section class="md:mx-9 md:mb-6 md:p-12 px-4 py-6 md:rounded-md bg-[#0047FF]">
    <div v-if="project" class="flex flex-col items-start justify-center gap-6">
      <h2 class="text-6xl text-white uppercase ">Partner's Profile</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-12 col-span-1 text-4xl text-white border border-blue rounded-lg flex items-center justify-center">
          BACKGROUND</div>
        <div class="p-12 col-span-2 text-md text-black border border-blue rounded-lg bg-white">{{ project.background }}
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-12 col-span-1 text-4xl text-white border border-blue rounded-lg flex items-center justify-center">
          <h3 class="mr-20">Objective</h3>
        </div>
        <div class="p-12 col-span-2 text-md text-black border border-blue rounded-lg bg-white">{{ project.objective }}
        </div>
      </div>
    </div>
  </section>
  <section v-if="project" class="mx-9 mb-6 rounded-md">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6  ">
      <div class="col-span-1 flex flex-col gap-6  ">
        <img class="rounded-md " :src="project?.screen_img_2" alt="cover">
        <div class="w-full"><img class="w-full  object-cover rounded-md" :src="project?.screen_img_4" alt="cover"></div>
      </div>
      <div class="col-span-1 flex flex-col gap-6 ">
        <div class="w-full"><img class=" w-full  object-cover rounded-md" :src="project?.screen_img" alt="cover"></div>
        <div class="w-full"><img class="w-full  object-cover rounded-md" :src="project?.screen_img_3" alt="cover"></div>

      </div>

    </div>



  </section>

  <AppForm />
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = ref(null);

onMounted(async () => {
  const response = await fetch('/projects.json');
  const projects = await response.json();
  project.value = projects.find(p => p.id === parseInt(route.params.id));
});
</script>