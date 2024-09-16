<template>
  <div class=" flex flex-col rounded-[10px]">
    <div class="border flex flex-col items-center justify-center rounded-[10px] p-6 bg-white">
          <div class="w-full flex flex-col items-start justify-center rounded-t-md gap-0">
            <div class="py-3 flex flex-col gap-4">
              <span class="font-[12px]">{{ blog?.posted_date }}</span>
              <h4 class="h-[100px] text-xl lg:text-[24px] text-black font-750 leading-normal">{{ blog?.title[locale] }}</h4>
            </div>
            <!-- <span class="text-black h-[80px] overflow-auto my-3">{{ blog?.description[locale] }}</span> -->
          </div>
          <div class="w-full">
            <img class="border w-full md:h-[300px] md:object-cover" :src="blog?.cover_img" alt="image">
          </div>
          <div @click="() => goToDetails(blog)" class="w-full px-6 pt-4 flex cursor-pointer z-10 items-center justify-between rounded-b-md bg-white">
            <button class="uppercase md:text-lg text-md font-semibold cursor-pointer text-black hover:scale-[1.01]">{{$t("see_more")}}</button>
            <img src="~/assets/images/arrow-right.svg" alt="arrow">
          </div>
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
  const localeRoute = useLocaleRoute()
  
      const route = localeRoute({ path: '/blogs/' + props.blog.id || 1 })
    router.push(route)
};
</script>

