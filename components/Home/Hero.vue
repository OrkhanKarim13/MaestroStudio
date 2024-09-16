<template>
  <section class="bg-[#0047FF] md:mx-9 md:mb-6 md:rounded-[10px]">
    <div class="flex flex-col items-center lg:items-start justfy-center px-4 py-14 md:p-12  gap-9">
      <h1 data-aos="fade-up"
        class="text-[45px]  lg:text-[90px] text-center lg:text-left font-normal  text-white w-full ">
        {{ $t("we_make_it") }}</h1>
      <p data-aos="fade-up" class="text-white text-center md:text-left  text-2xl">{{ $t("coaching_and_business_studio") }}</p>
      <NuxtLink
        class="w-full md:w-auto text-center text-[18px] md:text-center py-[18px] px-8 bg-white text-black font-semibold rounded-full uppercase hover:bg-[#fdfdfd] hover:scale-[1.01]"
        :to="localePath('contact')">{{ $t("contact") }}</NuxtLink>
    </div>
  </section>
</template>
<script setup></script>