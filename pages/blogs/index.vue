<template>
  <section class="bg-[#0047FF] md:mx-9 md:mb-6 md:rounded-md">
    <div class="flex flex-col items-center justify-center w-full md:p-12 px-4 py-6 md:gap-10 gap-6">
      <h2 class="md:text-6xl text-3xl font-bold text-white">Proqram təminatının inkişafı üzrə bloglar</h2>
      <!-- <CategorySelector /> -->
      <div class="grid grid-cols-2 gap-5">
        <div v-for="blog in blogs" :key="blog.id" >
        <BlogCard :blog="blog" />
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BlogCard from '~/components/BlogCard.vue';
import getBlogs from "@/public/blogs.json"

const blogs=ref(getBlogs)


</script>