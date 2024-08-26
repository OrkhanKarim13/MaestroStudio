<template>
  <div class="border flex flex-col items-center justify-center rounded-md">
    <div class="w-full flex flex-col items-start justify-center bg-white rounded-t-md  p-6 gap-6">
      <div class="h-[80px]">
        <h4 class="text-xl lg:text-3xl font-bold leading-normal">{{ blog?.title }}
        </h4>
      </div>
    </div>
    <div class="w-full  ">
      <img class="h-[350px] w-full" :src="blog?.cover_img" alt="image">
    </div>
    <div @click="goToDetails"  class="w-full px-6 py-4 flex cursor-pointer items-center justify-between rounded-b-md  bg-white">
      
        <button class="uppercase md:text-lg  text-md font-semibold cursor-pointer" >View</button>
      <img src="~/assets/images/Arrow.svg" alt="arrow">
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  blog: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const goToDetails = () => {
  router.push(`/blogs/${props.blog.id}`);
};
</script>

<!-- 
<script setup>
const props = defineProps(["blog"])

</script> -->
