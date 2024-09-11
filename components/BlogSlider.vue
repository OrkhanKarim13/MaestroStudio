<template>

    <!-- {{ props.blogs }} -->
    <swiper class="mySwiper" space-between="20" :slidesPerView="1" :breakpoints="{
        
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
       
    }">
        <swiper-slide v-for="blog in props.blogs" :key="blog.id" :blog="blog "
            class="w-full flex justify-center  items-center  ">
            <div class="border  flex flex-col items-center justify-center rounded-md p-4  bg-white">
                <div class="w-full flex flex-col items-start justify-center rounded-t-md  gap-0">
                    <div class="py-3 flex flex-col gap-4">
                        <span>{{ blog?.posted_date }}</span>
                        <h4 class="h-[60px] text-xl lg:text-3xl text-black font-bold leading-normal">{{ blog?.title[locale] }}
                        </h4>
                        
                    </div>
                    <span class="text-black h-[80px] overflow-auto my-3">{{ blog?.description[locale] }}</span>
                </div>
                <div class="w-full   ">
                    <img class="border w-full md:h-[300px] md:object-cover" :src="blog?.cover_img" alt="image">
                </div>
                <div  @click="() => goToDetails(blog.id)"
                    class="w-full px-6 py-4 flex cursor-pointer z-10 items-center justify-between rounded-b-md  bg-white">

                    <button
                        class="uppercase md:text-lg  text-md font-semibold cursor-pointer text-black  hover:scale-[1.01]">Ətraflı
                        bax</button>
                    <img src="~/assets/images/arrow-right.svg" alt="arrow">
                </div>
            </div>
        </swiper-slide>

    </swiper>

   
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()





// const { t } = useI18n();
// import getBlogs from "@/public/blogs.json"

// const blogs = ref(getBlogs)
const router = useRouter();



const goToDetails = (id) => {
    router.push(`./blogs/${id}`);
};


const props = defineProps({
  blogs: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.mySwiper {
    width: 100%;
    height: 100%;
}
</style>