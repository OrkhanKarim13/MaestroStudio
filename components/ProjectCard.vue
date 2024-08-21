<template>
  <div data-aos="fade-up" class="rounded-md bg-white px-4 py-6 md:px-16 md:py-12 flex flex-col items-center justify-center  gap-6">
    <img class="w-full h-[200px] rounded-lg object-contain" :src="project?.cover_img" alt="image">
    <div class="flex flex-col items-center justify-center mx-auto gap-3">
      <h4 class="text-2xl text-black font-bold">
       {{project.title}}
      </h4> 
      <!-- <p class="text-black text-lg">
        {{ product?.description }}
      </p> -->
    </div>
    <div class="w-full flex justify-start">
      <!-- <NuxtLink :to="localePath({ name: 'projects-projectSlug', params: { projectSlug: 'test' } })" class="py-4 flex px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]">
      View All  
    </NuxtLink> -->
    <button class="py-4 flex px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]" @click="goToDetails">View All  </button>
    </div>
  </div>
</template>
<!-- 

<script setup>
const props = defineProps(["project"])
</script> -->

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const goToDetails = () => {
  router.push(`/projects/${props.project.id}`);
};
</script>