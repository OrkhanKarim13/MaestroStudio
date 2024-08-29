<template>

<!-- <ServiceCard v-for="service in services" :service="service"/> -->

  <div>
    <ServiceCard
      v-for="(service, index) in services"
      :key="service.id"
      :card="service"
      :index="index"
    />
  </div>
</template>


<script setup>
import ServiceCard from '~/components/ServiceCard.vue'
import services from '~/public/services.json'
</script>