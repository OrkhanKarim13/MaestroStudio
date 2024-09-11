<script setup lang="ts">
useHead({
  title: '',
  titleTemplate: titleChunk => titleChunk ? `${titleChunk} - Maestro` : 'Maestro',
  meta: [
    { name: 'description', content: 'Hehe boi' },
  ],
})
</script>

<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter/>
  </div>
</template>
