<template>
  <div class=" bg-white rounded-md px-4 py-6 md:px-16 md:py-12 flex flex-col items-center justify-center  gap-6">
    <div class="">
      <img class="object-fit h-[210px] w-full " :src="project?.cover_img" alt="image">
    </div>
    <div class="flex flex-col items-center justify-center mx-auto gap-3">
      <h4 class="text-2xl text-black font-bold">
       {{project.title}}
      </h4> 
 
    </div>
    <div class="w-full flex justify-start">
 
    <button class="py-4 flex px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]" @click="goToDetails">Ətraflı bax</button>
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