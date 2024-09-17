<template>
  <div class=" bg-white md:rounded-[10px] px-4 py-6 md:p-6 flex flex-col items-center justify-between  gap-6">
    <div class="w-full lg:h-[200px]">
      <img class="object-fit h-[210px] w-full " :src="project?.cover_img" alt="image">
    </div>
    <div class="flex w-full lg:h-[150px] mb-8 items-start flex-col  mx-auto gap-3">
      <h4 class="text-[24px] text-black font-750">
       {{project.title[locale]}}
      </h4> 
      <p class="text-lg text-[#222222] font-normal">{{project.description[locale]}}</p>
 
    </div>
    <div class="w-full flex justify-start">
 
    <button class="py-4 flex px-8 border border-black rounded-full text-black font-semibold text-lg rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]" to="projects/1" @click="goToDetails">{{$t("see_more")}}</button>
    </div>
  </div>
</template>
<!-- 

<script setup>
const props = defineProps(["project"])
</script> -->

<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const goToDetails = () => {
  const localeRoute = useLocaleRoute()
  
      const route = localeRoute({ path: '/projects/' + props.project.id || 1 })
    router.push(route)
  // router.push(`./projects/${props.project.id}`);
};
</script>