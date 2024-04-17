<template>
  <div v-if="blogs" class="m-4 p-4 flex flex-col gap-4 w-full rounded-xl shadow-lg">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl">Blogs</h2>
      <button 
        @click="isEditorOpen = !isEditorOpen"
        class="tracking-wider rounded-md px-4 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
        :class="[isEditorOpen ? 'text-gray-900 bg-gray-100' : 'text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600']"
      >
        {{ `${isEditorOpen ? 'Close' : 'Add' }` }}
      </button>
    </div>
    <AdminItemList v-if="isEditorOpen" :items="blogs" resource="blogs" />
    <AdminItemEditor v-else @closeEditor="isEditorOpen = false" resource="blogs" :fields="blogFields" :defaultForm="blogObjectDefault" />
  </div>
  <div v-else>
    ...loading
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '~/stores/MainStore'
// import ItemEditor from '~/components/Admin/ItemEditor.vue';

const isEditorOpen = ref(false)

const store = useMainStore()

const { blogs } = storeToRefs(store)

const { fetchItems, getResourceFields, blogObjectDefault } = store
// fetchItems({ resource: 'blogs', isAdmin: true })
const blogFields = computed(() => getResourceFields('blog'));

</script>