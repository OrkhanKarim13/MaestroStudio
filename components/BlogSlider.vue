<template>
    <Swiper class="mySwiper" :spaceBetween="20" :slidesPerView="1" :breakpoints="breakpoints">
        <SwiperSlide v-for="blog in blogs" :key="blog.id">
            <div class="border flex flex-col items-center justify-center rounded-md">
                <div class="w-full flex flex-col items-start justify-center bg-white rounded-t-md p-6 gap-0 md:gap-6">
                    <div class="h-[70px]">
                        <h4 class="text-xl lg:text-3xl text-black font-bold leading-normal">{{ blog.title }}</h4>
                    </div>
                    <span class="text-black">{{ blog.posted_date }}</span>
                </div>
                <div class="w-full">
                    <img class="border object-cover" :src="blog.cover_img" alt="image">
                </div>
                <div @click="() => goToDetails(blog.id)"
                    class="w-full px-6 py-4 flex cursor-pointer z-10 items-center justify-between rounded-b-md bg-white">
                    <button class="uppercase md:text-lg text-md font-semibold cursor-pointer text-black hover:scale-[1.01]">
                        Ətraflı bax
                    </button>
                    <img src="~/assets/images/arrow-right.svg" alt="arrow">
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from '#app'; // Nuxt 3 kullanımı
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import getBlogs from '@/public/blogs.json';

const blogs = ref(getBlogs);
const router = useRouter();

const breakpoints = {
    768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
};

const goToDetails = (id: string | number) => {
    router.push(`/blogs/${id}`);
};
</script>

<style scoped>
.mySwiper {
    width: 100%;
    height: 100%;
}
</style>
