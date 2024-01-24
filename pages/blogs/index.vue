<template>
  <section class="bg-[#0047FF] md:mx-9 md:mb-6 md:rounded-md">
    <div class="flex flex-col items-center justify-center w-full md:p-12 px-4 py-6 md:gap-10 gap-6">
      <h2 class="md:text-6xl text-3xl font-bold text-white">Blogs on Software Development</h2>
      <CategorySelector />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BlogCard v-for="i in 6" :key="i" />
      </div>
    </div>
  </section>
</template>