<template>
  <table class="table-auto w-full">
    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
      <tr>
        <th class="border w-2 p-2 whitespace-nowrap">
          <span class="font-semibold text-left">No</span>
        </th>
        <th class="border w-2/3 p-2 whitespace-nowrap">
          <div class="font-semibold text-left">Title</div>
        </th>
        <th class="border w-[100px] p-2 whitespace-nowrap">
          <div class="font-semibold text-center">Enable</div>
        </th>
        <th class="border w-[100px] p-2 whitespace-nowrap">
          <div class="font-semibold text-center">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody v-if="loading[resource]" class="text-sm divide-y divide-gray-100">
      <tr v-for="i in 10">
        <td v-for="i in 4" class="p-2 border">
          <div class="animate-pulse h-8 bg-gray-300 rounded"></div>
        </td>
      </tr>
    </tbody>
    <tbody v-else class="text-sm divide-y divide-gray-100">
      <tr v-for="(item, index) in items" :key="item.id">
        <td class="p-2 text-center whitespace-nowrap w-1/10 border">
          <div>{{ index + 1 }}</div>
        </td>
        <td class="p-2 whitespace-nowrap w-2/3 border">
            <div class="text-left">{{ item.title[locale] }}</div>
        </td>
        <td class="p-2 whitespace-nowrap w-1/10 border">
            <div 
              class="py-1 px-2 text-center font-medium border rounded"
              :class="item.isEnabled ? 'bg-green-200 border-green-300' : 'bg-red-200 border-red-300'"
            >
              {{ `${ item.isEnabled ? 'Enable' : 'Disable'}` }}
            </div>
        </td>
        <td class="p-2 w-1/10 border">
          <div class="flex gap-2">
            <NuxtLink :prefetch="false" :to="localePath({ name: `admin-${resource}-id`, params: {id: item.id} })" class="rounded bg-cyan-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </NuxtLink>
            <button @click="handleDeleteItem(item)" class="rounded bg-red-600 px-1.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const { locale } = useI18n()
const props = defineProps({
  items: { type: Array },
  resource: { type: String }
})

// const store = useMainStore()
const { loading } = storeToRefs(store)

function handleDeleteItem(item) {
  const isConfirmed = confirm('Sure to delete?')
  if(!isConfirmed) return
  store.deleteItem({ item, resource: props.resource })
}
</script>