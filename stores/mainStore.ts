import { defineStore, acceptHMRUpdate } from 'pinia'

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    blogs: [],
    blogObjectDefault: {
      createdAt: null,
      isEnabled: false,
      title: { en: '', az: '', ru: '' },
      description: { en: '', az: '', ru: '' },
      content: { en: '', az: '', ru: '' },
      coverImage: null,
      meta: {
        title: { en: '', az: '', ru: '' },
        description: { en: '', az: '', ru: '' },
        keywords: { en: '', az: '', ru: '' },
      },
    },
  }),
  getters: {
    getResourceFields: (state) => {
      return (resource) => Object.keys(state[`${resource}ObjectDefault`]);
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}