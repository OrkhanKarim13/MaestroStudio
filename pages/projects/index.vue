<template>
  <section class="md:mx-9 md:mb-6 md:rounded-md bg-[#0047FF]">
      <div class="flex flex-col items-center justify-center w-full md:p-12 py-6 px-4 gap-5 md:gap-10">
          <h2 class="md:text-6xl text-2xl font-bold text-white">Projects we provide</h2>
          <CategorySelector />
          <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="flex flex-col items-start justify-center bg-white rounded-md gap-3 md:gap-6 md:p-12 py-6 px-4">
                    <div class="bg-white w-full ">
                         <img class="w-full" src="../../assets/images/Frame12(4).svg" alt="image">
                    </div>
                    <h3 class="text-black font-bold text-2xl">EVOLVING ONE OF THE WORLD’S MOST ICONIC FOOTBALL CLUBS</h3>
                    <p class="text-[#222] text-xl" >When we started in 2010, we were just a tight group dedicated to the craft of
                        product building. Our attitude hasn't changed...</p>
                        <nuxt-link to="projects/1" class="border border-black px-9 py-4 text-black rounded-full" >VIEW ALL</nuxt-link>
                </div>
              </div> -->
              <!-- <ProjectCard v-for="project in projects" :key="project" :project="project"/> -->
               <div v-for="project in projects" :key="project.id">
                <ProjectCard :project="project"/>
               </div>
      </div>
  </section>
  <AppForm/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '~/components/ProjectCard.vue';

const projects = ref([]);

onMounted(async () => {
  const response = await fetch('public/projects.json');
  projects.value = await response.json();
});
</script>
<!-- <script setup>
import getProjects from "@/public/projects.json"

const projects=ref(getProjects)

console.log("projects",projects.value)
</script> -->

