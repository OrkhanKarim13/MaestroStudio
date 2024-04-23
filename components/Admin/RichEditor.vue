<template>
  <div>
    <ckeditor :editor="editor" v-model="content" :config="editorConfig"></ckeditor>
  </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import UploadAdapter from '@/utils/uploadAdapter'
// import { Image, ImageResize } from '@ckeditor/ckeditor5-image';

const props = defineProps({
  modelValue: { type: String }
})
const emit = defineEmits(['update:modelValue'])

const editor = ClassicEditor

const content = ref('')
content.value = props.modelValue

watch(content, newValue => {
  emit('update:modelValue', newValue)
})

const editorConfig = {
  // plugins: [Image],
  extraPlugins: [uploader],
}

function uploader(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new UploadAdapter(loader);
  }
}

</script>