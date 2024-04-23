import CKEditor from '@ckeditor/ckeditor5-vue';
// import { SimpleUploadAdapter } from '@ckeditor/ckeditor5-upload';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(CKEditor)
})