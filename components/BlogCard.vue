<template>
  <div class=" flex flex-col items-center justify-center rounded-md">
    <div class="w-full flex flex-col items-start justify-center bg-white rounded-t-md  p-6 gap-6">
      <div class="flex items-center justify-start gap-6">
        <span>{{ blog.createdDate }}</span>
      </div>
      <div>
        <h4 class="text-xl lg:text-3xl font-bold leading-normal">{{ blog?.title }}
        </h4>
      </div>


    </div>
    <div class="w-full object-cover">
      <img class="w-full " :src="blog?.cover_img" alt="image">
    </div>
    <div class="w-full px-6 py-4 flex items-center justify-between rounded-b-md  bg-white">
      <NuxtLink :to="localePath({ name: 'blogs-blogSlug', params: { blogSlug: 'test' } })"
        class="uppercase md:text-lg  text-md font-semibold cursor-pointer">
        View</NuxtLink>
      <img src="~/assets/images/Arrow 1.svg" alt="">
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["blog"])

</script>
