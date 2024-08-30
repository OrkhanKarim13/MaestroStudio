<template>
  <div class="m-4 p-4 flex flex-col gap-2 w-full rounded-xl shadow-lg border border-gray-50">
    <div class="flex justify-between items-center">
      <h2 class="text-xl font-medium">Blog Categories</h2>
      <button 
        @click="isEditorOpen = !isEditorOpen"
        class="tracking-wider rounded-md px-4 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        :class="[isEditorOpen ? 'text-gray-900 bg-gray-100' : 'text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600']"
      >
        {{ `${isEditorOpen ? 'Close' : 'Add' }` }}
      </button>
    </div>
    <AdminItemList v-if="!isEditorOpen" :items="blogCategories" resource="blogCategories" />
    <AdminItemEditor v-else @closeEditor="isEditorOpen = false" resource="blogCategories" :fields="blogCategoryFields" :defaultForm="blogCategoryObjectDefault" />
  </div>
</template>

<script setup>
const isEditorOpen = ref(false)

// const store = useMainStore()

// const { blogCategories } = storeToRefs(store)

// const { fetchItems, getResourceFields, blogCategoryObjectDefault } = store
// const blogCategoryFields = computed(() => getResourceFields('blogCategory'));

// fetchItems({ resource: 'blogCategories', isAdmin: true })

</script>