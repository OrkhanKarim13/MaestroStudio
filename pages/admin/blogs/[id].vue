<template>
  <div class="m-4 p-4 flex flex-col gap-4 w-full rounded-xl shadow-lg">
    <AdminItemEditor :item="blog" :fields="blogFields" resource="blogs" />
  </div>
</template>

<script setup async>
  import { useMainStore } from '~/stores/MainStore'

  const store = useMainStore()
  const route = useRoute()
  const { id } = route.params
  const { fetchItem, getResourceFields } = store

  const blogFields = computed(() => getResourceFields('blog'));

  const blog = await fetchItem({id, resource: 'blogs'})
</script>