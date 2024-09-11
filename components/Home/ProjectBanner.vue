a<template>
  <section class="sm:mx-9  sm:my-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
      <a href="https://aralgroupbaku.com/en" target="_blank">
        <div
        class="relative bg-white border-4 border-black w-full md:rounded-md h-[250px] sm:h-full shadow-md">
        <img class="absolute inset-0 w-full  h-full md:block" src="../../public/images/aral-group-hero.png"
          alt="image" />
        <div class="absolute inset-0 bg-gray-100 opacity-5"></div>
        <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black w-24 h-4 rounded-b-md"></div>
      </div>
      </a>
      <div class="bg-[#0047FF] pt-6 px-4 pb-12 lg:p-12 flex flex-col gap-5  items-start justify-between lg:rounded-md ">
        <h2 data-aos="fade-up" class="  text-white text-4xl font-bold leading-11">{{ $t("we_developed_for") }}</h2>
        <div class="flex items-center justify-center">
          <AppIcon name="ArrowLeftLong" class="text-white" />
        </div>
        <div class="flex flex-col items-start justify-center gap-5">
          <p class="text-white text-lg w-full ">
            {{ $t("click_to_view") }}</p>
          <a class="w-full md:w-auto text-center md:text-center py-4 px-8 bg-white text-black font-semibold rounded-full hover:bg-[#fdfdfd] hover:scale-[1.01]"
            href="/projects">{{$t("see_more")}}</a>
        </div>
      </div>
    </div>
  </section>
</template>
