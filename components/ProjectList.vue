<template>
  <section class="md:mx-9 md:mb-6 bg-[#0047FF] px-4 py-6 lg:p-12 md:rounded-md">
    <div class="flex flex-col gap-10">
      <div class="w-full grid grid-cols-1 md:grid-cols-5 items-center justify-between gap-6">
        <h2 class="md:col-span-4 text-white text-3xl font-bold leading-10 text-center md:text-left">{{ $t("projects_we_provide") }}
        </h2>
        <NuxtLink :to="localePath({ name: 'projects' })"
          class="col-span-1 uppercase cursor-pointer  px-8 py-5 rounded-full bg-transparent border border-white  text-white font-semibold text-center hover:scale-[1.05] ">
          {{$t("see_more")}}
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-6 gap-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        <!-- <div class="rounded-md bg-white px-4 py-6 md:p-12 flex flex-col items-start justify-center  gap-6">
          <img class="w-full mx-auto" src="../assets/images/Frame 12.svg" alt="image">
          <div class="flex flex-col items-start justify-center mx-auto gap-3">
            <h4 class="text-2xl text-black font-bold">EVOLVING ONE OF THE WORLD'S
              MOST ICONIC FOOTBALL CLUBS</h4>
            <p class="text-black text-lg">When we started in 2010, we were just a tight group dedicated to the craft of
              product building. Our attitude hasn't changed—but since then, we’ve grown to be a team.</p>
            <a class="py-4 px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]"
              href="/">view All</a>
          </div>
        </div>
        <div class="rounded-md bg-white px-4 py-6 md:p-12 flex flex-col items-start justify-center gap-6">
          <img class="w-full mx-auto" src="../assets/images/Frame 121.svg" alt="image">
          <div class="flex flex-col items-start justify-center  mx-auto gap-3">
            <h4 class="text-2xl text-black font-bold">THE BEST THINGS IN
              LIFE HAPPEN AROUND THE TABLE</h4>
            <p class="text-black text-lg">When we started in 2010, we were just a tight group dedicated to the craft of
              product building. Our attitude hasn't changed—but since then, we’ve grown to be a team.</p>
            <a class="py-4 px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]"
              href="/">view All</a>
          </div>
        </div>
        <div class="rounded-md bg-white px-4 py-6 md:p-12 flex flex-col items-start justify-center gap-6">
          <img class="w-full mx-auto" src="../assets/images/Frame 122.svg" alt="image">
          <div class="flex flex-col items-start justify-center  mx-auto gap-3">
            <h4 class="text-2xl text-black font-bold">UNITING THE WORLD'S BIGGEST
              PUBLISHER BEHIND A SHARED MISSION</h4>
            <p class="text-black text-lg">When we started in 2010, we were just a tight group dedicated to the craft of
              product building. Our attitude hasn't changed—but since then, we’ve grown to be a team.</p>
            <a class="py-4 px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]"
              href="/">view All</a>
          </div>
        </div>
        <div class="rounded-md bg-white px-4 py-6 md:p-12 flex flex-col items-start justify-center gap-6">
          <img class="w-full mx-auto" src="../assets/images/Frame 12 (3).svg" alt="image">
          <div class="flex flex-col items-start justify-center  mx-auto gap-3">
            <h4 class="text-2xl text-black font-bold">UNITING THE WORLD'S BIGGEST
              PUBLISHER BEHIND A SHARED MISSION</h4>
            <p class="text-black text-lg">When we started in 2010, we were just a tight group dedicated to the craft of
              product building. Our attitude hasn't changed—but since then, we’ve grown to be a team.</p>
            <a class="py-4 px-8 border border-black rounded-full text-black font-semibold rounded-ful uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]"
              href="/">view All</a>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>


<script setup>
import getProjects from "@/public/projects.json"

const projects=ref(getProjects)


</script>