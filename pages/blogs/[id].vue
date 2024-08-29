<template>
  <div v-if="blog">
    <section class="mx-9 mb-6 bg-[#0047FF]  rounded-md">
      <div class="flex flex-col items-start justify-center">
        <div class="flex flex-col items-center justify-center p-6">
          <div class="w-full flex items-center gap-6 text-white">
            <span>{{ blog?.posted_date }}</span>
            
          </div>
          <div class="w-full">
            <h2 data-aos="fade-left" class="text-6xl w-3/4 text-white leading-snug">{{ blog?.title }}</h2>

          </div>
        </div>
        <div class="w-full h-[500px]"><img class="block md:hidden object-cover w-full"
            src="~/assets/images/Frame1222.svg" alt="cover">
          <video class="hidden md:block object-cover h-full w-full" :src="blog?.cover_video" loop autoplay
            muted></video>
        </div>
        <div class="py-12 w-full text-center">
          <p class="text-white  text-2xl text-justify w-2/3 mx-auto">{{ blog?.description }}</p>
        </div>
        <div class=" w-2/3 mx-auto  flex items-center justify-center"><img class="object-cover h-full "
            :src="blog?.cover_img" alt="cover"></div>
        <div class="py-12 w-full text-center">
          <div class="text-white text-2xl text-justify flex flex-col items-start justify-center gap-4 w-2/3 mx-auto ">
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