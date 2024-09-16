<template>
  <section class="md:mx-9 md:mb-6 bg-[#0047FF]  px-4 py-6 md:rounded-[10px]">
    <div v-if="project" class="w-full flex flex-col items-start justify-center md:p-12  px-4 py-6 gap-12 md:gap-6">
      <h2 class="text-white lg:text-[90px] mb-4  text-[30px] leading-tight uppercase">{{ project?.title[locale] }}</h2>
      <p class="text-white text-3xl">{{ project?.description[locale] }}</p>
      <div class="flex items-center justify-between gap-2">
        <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">Digital Health</a>
        <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">MIS</a>
        <a class="text-white px-5 py-2 bg-[#CA04EB] rounded-full" href="/">HIS</a>
      </div>
    </div>
  </section>
  <section class="md:mx-9 mb-6 md:p-12 px-4 py-6 md:rounded-[10px] bg-[#0047FF]">
    <div v-if="project" class="flex flex-col items-start justify-center gap-6">
      <h2 class="text-6xl text-white mb-6  ">{{ $t("project_profile") }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="col-span-1 text-4xl  rounded-lg flex items-center justify-center">
          <img class="rounded-[10px] h-full" :src="project?.cover_img" alt="cover">
        </div>
        <div class="p-12 col-span-1 md:col-span-2 text-lg text-black  rounded-lg bg-white">{{ project?.background[locale] }}
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class=" col-span-1 text-4xl w-full  rounded-lg flex items-center justify-center">
          <img class="rounded-[10px] h-full " :src="project?.screen_img_3" alt="cover">
        </div>
        <div class="p-12 col-span-1 md:col-span-2 text-lg text-black  rounded-lg bg-white">{{ project?.objective[locale] }}
        </div>
      </div>
    </div>
  </section>
  <section v-if="project" class="mx-9 mb-6 rounded-[10px]">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6  ">
      <div class="col-span-1 flex flex-col gap-6  ">
        <img class="rounded-[10px] md:h-[320px] border border-black " :src="project?.screen_img_2" alt="cover">
        <div class="w-full"><img class="w-full md:h-[320px] border border-black  object-cover rounded-[10px]"
            :src="project?.screen_img_4" alt="cover"></div>
      </div>
      <div class="col-span-1 flex flex-col  gap-6 ">
        <div class="w-full"><img class="md:h-[320px] w-full border border-black  object-cover rounded-[10px]"
            :src="project?.screen_img" alt="cover"></div>
        <div class="w-full"><img class="w-full md:h-[320px] border border-black  object-cover rounded-[10px]"
            :src="project?.screen_img_3" alt="cover"></div>

      </div>

    </div>



  </section>

  <AppForm />
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
const route = useRoute();
const project = ref(null);

onMounted(async () => {
  const response = await fetch('/projects.json');
  const projects = await response.json();
  project.value = projects.find(p => p.id === parseInt(route.params.id));
});

console.log("route", route)
</script>