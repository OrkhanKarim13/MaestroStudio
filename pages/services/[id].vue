<template>
    <div v-if="service" class="md:mx-9 md:mb-6 md:rounded-md">
        <div class="bg-[#0047FF] md:p-12 p-4 w-full  md:rounded-md">
            <img class="md:rounded-md w-full md:h-[450px]  " :src="service?.cover_img" alt="image" />
            <div class="flex flex-col gap-6 md:py-9 py-6">
                <h3 data-aos="fade-up" class="text-white text-[40px] md:text-7xl md:leading-100">{{ service?.title[locale] }}</h3>
                <div class="flex flex-col items-start justify-center gap-5">
                    <p class="text-white  text-xl">{{ service?.content[locale] }}</p>
                </div>
                <div class="flex flex-col items-start mt-3 justify-center gap-5">
                    <a class="py-4 px-8 bg-white text-black font-semibold rounded-full hover:bg-[#fdfdfd] hover:scale-[1.01]"
                        href="/contact">{{ $t("contact") }}</a>
                </div>
            </div>
        </div>

    </div>
    <PartnerList />
    <!-- <div v-if="service" class="flex flex-col items-start justify-center md:mx-9 md:mb-6 bg-[#0047FF] p-12 md:rounded-md gap-6">
        <h2 class="text-6xl text-white pb-5 ">Xidmət üçün həllər</h2>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="col-span-1 text-4xl text-white border border-white p-5  rounded-lg flex items-center justify-center">
                {{ service.title }}
            </div>
            <div class="p-12 col-span-1 text-md text-black  rounded-lg bg-white">{{ service.content }}
            </div>
        </div>
        
    </div> -->
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()
const route = useRoute();
const service = ref(null);

onMounted(async () => {
    const response = await fetch('/services.json');
    const services = await response.json();
    service.value = services.find(p => p.id === parseInt(route.params.id));
});
</script>