
<template>
  <section
      class=" h-auto md:mx-9 md:mb-6 px-4 py-6 lg:p-12 flex flex-col items-center justify-center gap-8 md:gap-12 bg-[#0047FF] p-8 md:p-12 md:rounded-md ">
      <h3 class=" text-white text-3xl font-bold leading-8 text-center md:text-left">Proud to be partnered with the best
      </h3>
      <div class="grid h-full w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          <div v-for="i in 8" :key="i" class="group  ">
              <div
                  class="relative w-full rounded-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div class="w-full">
                      <div
                          class=" bg-white relative flex overflow-hidden justify-center items-center rounded-lg   cursor-pointer shadow-md shadow-black backface-hidden">
                          <img class="w-full p-4 group-hover:opacity-0  z-10 " src="../assets/images/image 33.svg"
                              alt="logo">
                          <div class="absolute  mx-auto  w-15 animate-[spin_8s_ease-in-out_infinite] rounded-full  p-4 w-full h-full overflow-hidden pointer-events-none">

                              <img src="../assets/images/Cylinder.svg" alt="Icon"
                                  class="absolute bottom-10 left-8 w-20 h-24  filter blur-sm  animate-[spin_10s_ease-in-out_infinite] " />
                          </div>
                      </div>
                  </div>
                  <div
                      class="absolute py-10 top-0 left-0 h-fit w-full rounded-xl flex flex-col items-center justify-between text-slate-200 opacity-0 group-hover:opacity-100  [transform:rotateY(180deg)] ">
                      <p class="text-black px-9   text-base text-center">As a clothing brand, Levis plays an important
                          role
                          in the
                          American and
                          European markets.</p>
                      <div><img class="" src="../assets/images/image 33.svg" alt="img"></div>
                  </div>
              </div>

          </div>

      </div>

  </section>
  
</template>

<script>

</script>

<style>

</style>






