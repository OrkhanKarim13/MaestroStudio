<template>
  <section class="md:mx-9 md:mb-6 bg-[#0047FF] md:rounded-md">
    <div class="flex flex-col items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 md:justify-between justify-center  py-6 px-4 md:p-12">
        <h3 class="text-white text-3xl md:text-6xl text-center md:text-left leading-normal ">Komandamızla tanış olun</h3>
        <p class="text-white py-4 md:ml-16 text-center md:text-left ">Uğur qazanmaq üçün tək texnologiya kifayət deyil, hər bir məhsula əllərindən gələni edəcək insanlardan ibarət komanda lazımdır.</p>
      </div>
      <div class="w-full text-center px-4 py-6 md:px-28 md:py-16 bg-[#0047FF] rounded-md">
        <div class="w-full md:bg-white flex flex-col items-center justify-center md:p-12 rounded-md gap-8 md:gap-14 ">
          <h4 class="md:text-black text-white text-3xl md:text-6xl font-bold">İcra Komandası</h4>
          <TeamSlider/>
         
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import getTeam from "@/public/team.json"

const team = ref(getTeam)


</script>