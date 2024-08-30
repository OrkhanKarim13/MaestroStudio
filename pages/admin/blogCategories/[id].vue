<template>
  <div class="m-4 p-4 flex flex-col gap-4 w-full rounded-xl shadow-lg">
    <AdminItemEditor :item="blogCategory" :fields="blogCategoryFields" resource="blogCategories" />
  </div>
</template>

<script setup async>
  // import { useMainStore } from '~/stores/MainStore'

  // const store = useMainStore()
  const route = useRoute()
  const { id } = route.params
  // const { fetchItem, getResourceFields } = store

  const blogCategoryFields = computed(() => getResourceFields('blogCategory'));

  const blogCategory = await fetchItem({id, resource: 'blogCategories'})
</script>