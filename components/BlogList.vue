<template>
  <section class="md:mx-9 my-6 md:mb-6 bg-[#0047FF] px-4 py-3 md:p-12 md:rounded-md">
    <h2 class="text-white text-3xl font-bold leading-10 text-center md:text-left">Proqram təminatının inkişafı üzrə blog</h2>

    <BlogSlider />
  </section>
</template>

<script setup>
import getBlogs from "@/public/blogs.json"

const blogs=ref(getBlogs)
</script>
