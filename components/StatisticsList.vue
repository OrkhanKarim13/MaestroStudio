<template>
  <section class=" md:mx-9 md:mb-6 mx-4 my-6 rounded-md flex flex-col gap-6">
    <div class="w-ful grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center gap-6">
      <div data-aos="fade-up"  class="col-span-1 px-8 py-12 bg-[#0047FF] rounded-md flex flex-col items-center justify-center">
        <h3 class="text-4xl text-white font-bold " style="line-height: 70px;">100+</h3><img
          src="../assets/images/stat-line.svg" class="mb-4" alt="line">
        <p class="text-white text-base font-bold uppercase leading-none">{{ $t("projects") }}</p>
      </div>
      <div data-aos="fade-up"  class="col-span-1 px-8 py-12 bg-[#0047FF] rounded-md flex flex-col items-center justify-center">
        <h3 class="text-4xl text-white font-bold " style="line-height: 70px;">50+</h3><img
          src="../assets/images/stat-line.svg" class="mb-4" alt="line">
        <p class="text-white text-base font-bold uppercase leading-none">{{ $t("clients") }}</p>
      </div>
      <div data-aos="fade-up"  class="col-span-1 px-8 py-12 bg-[#0047FF] rounded-md flex flex-col items-center justify-center">
        <h3 class="text-4xl text-white font-bold " style="line-height: 70px;">20+</h3><img
          src="../assets/images/stat-line.svg" class="mb-4" alt="line">
        <p class="text-white text-base font-bold uppercase leading-none">{{ $t("team_size") }}</p>
      </div>
      <div data-aos="fade-up"  class="col-span-1 px-8 py-12 bg-[#0047FF] rounded-md flex flex-col items-center justify-center">
        <h3 class="text-4xl text-white font-bold " style="line-height: 70px;">4+</h3><img
          src="../assets/images/stat-line.svg" class="mb-4" alt="line">
        <p class="text-white text-base font-bold uppercase leading-none">{{ $t("years_on_market") }}</p>
      </div>
    </div>
  </section>
</template>
