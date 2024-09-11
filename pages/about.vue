<template>
  <section class=" bg-white md:mx-9 md:my-6 md:rounded-md">
    <div class="flex flex-col items-center justify-center">
      <div class="w-full md:h-[600px] ">
        <div class="video-container rounded-md">
          <video class="custom-video" autoplay muted >
            <source src="~/assets/videos/background.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2  bg-[#0047FF] md:p-12 px-4 py-6 gap-9  md:rounded-t-none md:rounded-b-md">
        <h2 data-aos="fade-up" class="text-white text-4xl md:text-6xl lg:w-2/3  md:leading-normal">{{ $t("about") }}</h2>
        <p data-aos="fade-up" class="text-white flex items-end justify-self-end md:w-3/4 text-left text-lg">{{$t("about_info")}}</p>
      </div>
    </div>
  </section>
  <PartnerList />
  <!-- <TeamList /> -->
  <StatisticsList />
  <AppForm />
</template>


<style scoped>
.video-container {
  max-width: 100%;
  overflow: hidden;
}

.custom-video {
  width: 100%;
  height: auto;
}
</style>