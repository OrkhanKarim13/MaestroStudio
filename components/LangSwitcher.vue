<script setup>
const { locale, locales, setLocale } = useI18n()

const selectedLocale = ref(locales.value.find(i => i.code === locale.value))
watch(selectedLocale, () => setLocale(selectedLocale.value.code))

const availableLocales = computed(() => (locales.value).filter(i => i.code !== locale.value))

</script>

<template>
  <div>
    <div class="inline-flex lg:w-4">

      <select v-model="selectedLocale">
        <option v-for="loc in availableLocales" :value="loc">{{ loc.code }}</option>
      </select>
        <!-- <PDropdown 
          v-model="selectedLocale"
          :options="availableLocales" 
          optionLabel="code" 
          :placeholder="selectedLocale.code" 
          :pt-options="{ mergeProps: true }"
          :pt="{
            root: '!p-0 w-2 rounded-none border-transparent uppercase bg-transparent',
            trigger: 'w-[18px]',
            input: '!p-2 text-sm',
            list: '!p-0 flex flex-col',
            item: '!p-2 border text-sm uppercase',
          }" 
        /> -->
    </div>
  </div>
</template>
