<template>
    <swiper 
      class="mySwiper" 
      space-between="20"
      :slidesPerView="1"
      :breakpoints="{
        
        '768': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
       
    }"
    >
      <swiper-slide v-for="person in team"  class="w-full flex justify-center rounded-md items-center bg-blue-500 text-white h-64">
        <div 
              class="p-6 flex flex-col items-center justify-center bg-white md:bg-[#0047FF]  rounded-md">
              <div class="md:w-full flex flex-col gap-4">
                <div class="w-full  bg-white rounded-md"><img class="w-full rounded-md" :src="person?.person_img" alt="person">
                </div>
                <p class="md:text-white text-black  text-left">{{ person?.position }}</p>
                <h4 class="md:text-white text-black font-bold text-2xl text-left">{{ person?.person_name }}</h4>
              </div>
            </div>
      </swiper-slide>

    </swiper>
  </template>
  
  <script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  



import getTeam from "@/public/team.json"

const team = ref(getTeam)


  </script>
  
  <style scoped>
  .mySwiper {
    width: 100%;
    height: 100%;
  }
  </style>
  