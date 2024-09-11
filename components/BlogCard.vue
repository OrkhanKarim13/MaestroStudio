<template>
  <div class="border flex flex-col items-center justify-center rounded-md">
    <div class="w-full flex flex-col items-start justify-center bg-white rounded-t-md  p-6 ">
      <div class="md:h-[70px]">
        <h4 class=" lg:text-[24px] font-semibold leading-normal">{{ blog?.title[locale] }}
        </h4>
      </div>
      <span>{{ blog?.posted_date }}</span>
    </div>
    <div class="w-full   ">
      <img class="border object-cover" :src="blog?.cover_img" alt="image">
    </div>
    <div @click="goToDetails"  class="w-full px-6 py-4 flex cursor-pointer items-center justify-between rounded-b-md  bg-white">
      
        <button class="uppercase md:text-lg  text-md font-semibold cursor-pointer  hover:scale-[1.01]" >Ətraflı bax</button>
      <img src="~/assets/images/arrow-right.svg" alt="arrow">
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
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
const router = useRouter();

const goToDetails = () => {
  router.push(`/blogs/${props.blog.id}`);
};
</script>

<!-- 
<script setup>
const props = defineProps(["blog"])

</script> -->
