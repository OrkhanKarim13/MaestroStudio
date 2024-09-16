<template>
  <div v-if="index % 2 === 1" class="mx-4 mb-3 md:mx-9 md:mb-6 bg-[#0047FF] rounded-md p-4 md:p-14">
    <div class="grid grid-cols-1 w-full md:grid-cols-5 gap-6">
      <div class="col-span-3 md:rounded-md">
        <img
          class="md:rounded-md w-full  md:h-[600px] "
          :src="card.card_img"
          alt="image"
        />
      </div>
      <div class="md:col-span-2 w-full bg-[#0047FF] flex flex-col items-start gap-4 justify-between rounded-md">
        <h3 data-aos="fade-up" class="text-white text-4xl leading-11">{{ card?.title[locale] }}</h3>
        <div class="flex flex-col items-start justify-center gap-5">
          <p data-aos="fade-up" class="text-white md:w-1/2 text-xl">{{ card?.description[locale] }}</p>
        </div>
        <div @click="goToDetails" class="flex flex-col items-start justify-center gap-5">
          <p
            class="py-4 px-8 bg-white text-black cursor-pointer font-semibold rounded-full hover:bg-[#fdfdfd] hover:scale-[1.01]"
            
            >{{$t("see_more")}}</p
          >
        </div>
      </div>
    </div>
  </div>

  <div v-else class="mx-4 mb-3 md:mx-9 md:mb-6 bg-[#0047FF] rounded-md p-4  md:p-14">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div class="col-span-2 bg-[#0047FF] flex flex-col items-start gap-4 justify-between rounded-md">
        <h3 data-aos="fade-up" class="text-white text-4xl leading-11">{{ card?.title[locale] }}</h3>
        <div class="flex flex-col items-start justify-center gap-5">
          <p data-aos="fade-up" class="text-white w-full  md:w-1/2 text-xl">{{ card?.description[locale] }}</p>
        </div>
        <div  @click="goToDetails"  class="flex flex-col items-start justify-center gap-5">
          <p
            class="py-4 px-8 bg-white text-black cursor-pointer font-semibold rounded-full hover:bg-[#fdfdfd] hover:scale-[1.01]"
            
            >{{$t("see_more")}}</p
          >
        </div>
      </div>
      <div class="col-span-3 rounded-md">
        <img
          class="rounded-md w-full  md:h-[600px]"
          :src="card.card_img"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  card: Object,
  index: Number
})
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
const router = useRouter();
const goToDetails = () => {
  const localeRoute = useLocaleRoute()
  
      const route = localeRoute({ path: '/services/' + props.card.id || 1 })
    router.push(route)
};
</script>


