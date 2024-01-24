<template>
  <div>
    <section class="mx-9 mb-6 bg-[#0047FF]  rounded-md">
      <div class="flex flex-col items-start justify-center">
        <div class="flex flex-col items-center justify-center p-6">
          <div class="w-full flex items-center gap-6 text-white">
            <span>Dec 01, 2023</span>
            <span>8 min read</span>
          </div>
          <div class="w-full">
            <h2 class="text-6xl text-white leading-snug">SDH at Digital Health Conference 2023 in Berlin</h2>

          </div>
        </div>
        <div class="w-full"><img class="object-cover w-full" src="~/assets/images/Frame1222.svg" alt="cover"></div>
        <div class="p-12 w-full text-center">
          <p class="text-white text-2xl text-left w-2/3 mx-auto">[Berlin, 30-11-2023] — SDH is thrilled to share
            highlights from
            its participation in the Digital Health Conference 2023 organized by Bitkom, held on 30 November at the
            historic Alte Münze in Berlin-Mitte. The conference brought together key stakeholders, thought leaders,
            and experts in the digital health domain to explore the future of healthcare and the practical
            implementation of the Federal Ministry of Health's digitalization strategy.</p>
        </div>
        <div class="w-full flex items-center justify-center"><img class="object-cover w-2/3"
            src="~/assets/images/Frame1222.svg" alt="cover"></div>
        <div class="p-12 w-full text-center">
          <div class="text-white text-2xl text-left flex flex-col items-start justify-center gap-4 w-2/3 mx-auto ">
            <span>[Berlin, 30-11-2023] — SDH is thrilled to share
              highlights from
              its participation in the Digital Health Conference 2023 organized by Bitkom, held on 30 November at
              the
              historic Alte Münze in Berlin-Mitte. The conference brought together key stakeholders, thought
              leaders,
              and experts in the digital health domain to explore the future of healthcare and the practical
              implementation of the Federal Ministry of Health's digitalization strategy.</span>

            <span> its participation in the Digital Health Conference 2023 organized by Bitkom, held on 30 November
              at the
              historic Alte Münze in Berlin-Mitte. The conference brought together key stakeholders, thought
              leaders,
              and experts in the digital health domain to explore the future of healthcare and the practical
              implementation of the Federal Ministry of Health's digitalization strategy.
            </span>
            <span>its participation in the Digital Health Conference 2023 organized by Bitkom, held on 30 November
              at the
              historic Alte Münze in Berlin-Mitte. The conference brought together key stakeholders, thought
              leaders,
              and experts in the digital health domain to explore the future of healthcare and the practical
              implementation of the Federal Ministry of Health's digitalization strategy.</span>
          </div>
        </div>
      </div>
    </section>

    <!-- RELATED BLOGS -->
    <section class="mx-9 mb-6 bg-[#0047FF]  rounded-md">
      <div class=" grid grid-cols-1 md:grid-cols-2 gap-6 p-12">
        <BlogCard v-for="i in 2" :key="i" />
      </div>
    </section>
    <AppForm />
  </div>
</template>