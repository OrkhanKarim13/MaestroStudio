<template>
  <div v-if="blog">
    <section class="mx-9 mb-6 bg-[#0047FF]  rounded-md">
      <div class="flex flex-col items-start justify-center">
        <div class="flex flex-col items-center justify-center p-6">
          <div class="w-full flex items-center gap-6 text-white">
            <span>Dec 01, 2023</span>
            <span>8 min read</span>
          </div>
          <div class="w-full">
            <h2 class="text-6xl text-white leading-snug">{{blog?.title}}</h2>

          </div>
        </div>
        <div class="w-full"><img class="object-cover w-full" src="~/assets/images/Frame1222.svg" alt="cover"></div>
        <div class="p-12 w-full text-center">
          <p class="text-white text-2xl text-left w-2/3 mx-auto">{{ blog?.description }}</p>
        </div>
        <div class="w-full flex items-center justify-center"><img class="object-cover w-2/3"
            src="~/assets/images/Frame1222.svg" alt="cover"></div>
        <div class="p-12 w-full text-center">
          <div class="text-white text-2xl text-left flex flex-col items-start justify-center gap-4 w-2/3 mx-auto ">
            {{ blog?.content }}
          </div>
        </div>
      </div>
    </section>

    <!-- RELATED BLOGS -->
    <!-- <section v-if="blog" class="mx-9 mb-6 bg-[#0047FF]  rounded-md">
      <div class="grid grid-cols-2 gap-5">
        <div v-for="blog in blogs" :key="blog.id" >
        <BlogCard :blog="blog" />
      </div>
      </div>
    </section> -->
    <AppForm />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const blog = ref(null);

onMounted(async () => {
  const response = await fetch('/blogs.json');
  const blogs = await response.json();
  blog.value = blogs.find(p => p.id === parseInt(route.params.id));
});
</script>