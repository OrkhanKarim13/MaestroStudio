<template>
  <section
    class=" h-auto my-6 md:mx-9 md:mb-6 px-4 py-6 lg:p-12 flex flex-col items-center justify-center gap-8 md:gap-12 bg-[#0047FF] p-8 md:p-12 md:rounded-[10px] ">
    <h3 class=" text-white text-3xl w-full font-750 leading-8 text-center ">{{ $t("partners") }}
      
    </h3>
    <div class="grid h-full w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
      <div v-for="partner in partners" :key="partner.id">
        <PartnerCard :partner="partner" />
      </div>
    </div>
  </section>
</template>
<script setup>
import getPartners from "@/public/partners.json"

const partners=ref(getPartners)


</script>


