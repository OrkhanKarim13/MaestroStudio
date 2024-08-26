<template>
  <section class="md:mx-9 md:mb-6 md:rounded-md bg-[#0047FF]">
    <div class="flex flex-col items-center justify-center w-full md:p-12 py-6 px-4 gap-5 md:gap-10">
      <h2 class="md:text-6xl text-2xl font-bold text-white">Projects we provide</h2>

      
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </section>
  <AppForm />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProjectCard from '~/components/ProjectCard.vue';
import getProjects from "@/public/projects.json"

const projects = ref(getProjects)


</script>
<!-- <script setup>
import getProjects from "@/public/projects.json"

const projects=ref(getProjects)

console.log("projects",projects.value)
</script> -->
