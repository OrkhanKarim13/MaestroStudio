<template>
  <section class="md:mx-9 my-6 md:mb-6 bg-[#0047FF] px-4 py-3 md:p-12 md:rounded-md">
    <h2 class="text-white text-3xl font-bold leading-10 text-center md:text-left">Blog on Software Development</h2>
    <div class="py-12 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
      <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue"
const blogs=ref([
  {
    id:1,
    createdDate:"01.01.2024",
    title:"Blog title1",
    cover_img:'/images/card-cover.svg'
  },
  {
    id:2,
    createdDate:"02.01.2024",
    title:"Blog title2",
    cover_img:'/images/card-cover.svg'
  },
])
</script>
