<template>
    <section
        class=" h-auto md:mx-9 md:mb-6 px-4 py-6 lg:p-12 flex flex-col items-center justify-center gap-8 md:gap-12 bg-[#0047FF] p-8 md:p-12 md:rounded-md ">
        <h3 class=" text-white text-3xl font-bold leading-8 text-center md:text-left">Proud to be partnered with the
            best
        </h3>
        <div class="grid h-full w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
           
                <PartnerCard v-for="partner in partners" :key ="partner.id" :partner="partner" />

            

        </div>

    </section>

</template>

<script setup>
import {ref} from "vue"
const partners=ref([
  {
    id:1,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/Cylinder.svg",
  },
  {
    id:2,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/Cone.svg",
  },
  {
    id:3,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/Cube-2.svg",
  },
  {
    id:4,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/pill.svg",
  },
  {
    id:5,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/RoundCube.svg",
  },
  {
    id:6,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/SuperToroid.svg",
  },
  {
    id:7,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/Sphere.svg",
  },
  {
    id:8,
    partner_img:'/images/image33.svg',
    description:'fkfkrfkskkfsm kdfmd',
    figure_img:"/images/SuperToroid-2.svg",
  },
])
</script>

