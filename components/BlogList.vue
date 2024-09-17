<template>
  <section class="md:mx-9 my-6 md:mb-6 bg-[#0047FF] px-4 py-6 md:p-12 md:rounded-md">
    <div class="w-full mb-6 flex items-center pb-5 justify-between gap-6">
      <h2 class="text-white text-3xl font-750 leading-10 text-center  md:text-left">{{ $t("blog") }}</h2>
      <NuxtLink :to="localePath({ name: 'blogs' })"
        class="col-span-1 uppercase cursor-pointer  px-8 py-[16px] rounded-full bg-transparent border border-white  text-white font-semibold text-center hover:scale-[1.05] ">
        {{ $t("see_more") }}
      </NuxtLink>
    </div>

    <BlogSlider :blogs="blogs" />
  </section>
</template>

<script setup>
import getBlogs from "@/public/blogs.json"

const blogs = ref(getBlogs)
</script>
