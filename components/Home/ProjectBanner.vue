<template>
  <section class="md:mx-9 md:mb-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
      <div class="lg:rounded-md relative">
        <img class="w-full h-full hidden md:block" src="~/assets/gif/home.gif" alt="image">
        <a href="https://aralgroupbaku.com/en" target="_blank"><img
            class="md:absolute rounded-md md:w-[90%] md:left-[36px] md:top-[100px] hover:scale-[1.10] transition-all duration-300"
            src="../../public/images/aral-vector.png" alt="web-screen"></a>
      </div>
      <div class="bg-[#0047FF] pt-6 px-4 pb-12 lg:p-12 flex flex-col gap-5  items-start justify-between lg:rounded-md ">
        <h2 data-aos="fade-up" class="  text-white text-4xl font-bold leading-11">Tikinti şirkəti üçün hazırladığımız veb sayt.</h2>
        <div class="flex items-center justify-center">
          <AppIcon name="ArrowLeftLong" class="text-white" />
        </div>
        <div class="flex flex-col items-start justify-center gap-5">
          <p class="text-white text-lg w-full ">
            Digər layihələrə baxmaq üçün klikləyin</p>
          <a class="w-full md:w-auto text-center md:text-center py-4 px-8 bg-white text-black font-semibold rounded-full hover:bg-[#fdfdfd] hover:scale-[1.01]"
            href="/projects">Ətraflı bax</a>
        </div>
      </div>
    </div>
  </section>
</template>
