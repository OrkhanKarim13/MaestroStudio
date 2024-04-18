<template>
  <form @submit.prevent="save">
    <div class="space-y-12 border-t pt-6">
      <div class="border-b border-gray-900/10 pb-12">

        <!-- createdAt and isEnabled fields -->
        <div class="sm:w-1/2 flex flex-col gap-6">
          <!-- CREATED AT -->
          <div v-if="fields.includes('createdAt')">
            <label for="createdAt" class="block text-sm font-medium leading-6 text-gray-900">Creation Time</label>
            <input v-model="form.createdAt" type="datetime-local" id="createdAt" name="createdAt"
              class="mt-2 h-8 rounded border-gray-300 focus:ring-indigo-600">
          </div>

          <div v-if="fields.includes('deadline')">
            <label for="deadline" class="block text-sm font-medium leading-6 text-gray-900">Deadline</label>
            <input v-model="form.deadline" type="datetime-local" id="deadline" name="deadline"
              class="mt-2 h-8 rounded border-gray-300 focus:ring-indigo-600">
          </div>

          <!-- IS ENABLED OR NOT -->
          <div v-if="fields.includes('isEnabled')" class="relative flex gap-x-3">
            <div class="flex h-6 items-center">
              <input v-model="form.isEnabled" id="isEnabled" name="isEnabled" type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
            </div>
            <div class="text-sm leading-6">
              <label for="isEnabled" class="font-medium text-gray-900">Enable</label>
              <p class="text-gray-500">Item will be rendered on web app.</p>
            </div>
          </div>

          <!-- CATEGORY ID -->
          <div v-if="fields.includes('categoryId')">
            <label for="productCategory" class="block text-sm font-medium leading-6 text-gray-900">Category</label>
            <select v-model="form.categoryId" @change="changeCategory($event.target.value)"
              class="mt-2 text-sm rounded border-gray-300" id="productCategory">
              <option selected="selected" value="null" disabled>Select category</option>
              <option :value="category.id" v-for="category in productCategories" :key="category.id">
                {{ category.title.az }}
              </option>
            </select>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          <!-- TITLE INFO -->
          <div v-if="fields.includes('title')" class="w-full flex flex-col sm:flex-row gap-6 col-span-full">
            <div class="w-full">
              <label for="title-en" class="block text-sm font-medium leading-6 text-gray-900">Title en</label>
              <div class="mt-2">
                <input v-model="form.title.en" id="title-en" name="title-en" type="text" autocomplete="text"
                  class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="w-full">
              <label for="title-az" class="block text-sm font-medium leading-6 text-gray-900">Title az</label>
              <div class="mt-2">
                <input v-model="form.title.az" id="title-az" name="title-az" type="text" autocomplete="text"
                  class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="w-full">
              <label for="title-ru" class="block text-sm font-medium leading-6 text-gray-900">Title ru</label>
              <div class="mt-2">
                <input v-model="form.title.ru" id="title-ru" name="title-ru" type="text" autocomplete="text"
                  class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>

          <!-- SLUG INFO START -->
          <div v-if="fields.includes('slug')" class="w-full flex flex-col sm:flex-row gap-6 col-span-full">
            <div class="w-full">
              <label for="slug-en" class="block text-sm font-medium leading-6 text-gray-900">Slug en</label>
              <div class="mt-2">
                <input v-model="form.slug.en" id="slug-en" name="slug-en" type="text" autocomplete="text"
                  class="px-2 py-1.5 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="w-full">
              <label for="slug-az" class="block text-sm font-medium leading-6 text-gray-900">Slug az</label>
              <div class="mt-2">
                <input v-model="form.slug.az" id="slug-az" name="slug-az" type="text" autocomplete="text"
                  class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
            <div class="w-full">
              <label for="slug-ru" class="block text-sm font-medium leading-6 text-gray-900">Slug ru</label>
              <div class="mt-2">
                <input v-model="form.slug.ru" id="slug-ru" name="slug-ru" type="text" autocomplete="text"
                  class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              </div>
            </div>
          </div>
          <!-- SLUG INFO END -->

          <!-- DESCRIPTION INFO -->
          <div v-if="fields?.includes('description')" class="w-full flex flex-col sm:flex-row gap-6 col-span-full">
            <div class="w-full">
              <label for="description-en" class="block text-sm font-medium leading-6 text-gray-900">Description en</label>
              <div class="mt-2">
                <textarea v-model="form.description.en" id="description-en" name="description-en" rows="5"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div class="w-full">
              <label for="description-az" class="block text-sm font-medium leading-6 text-gray-900">Description az</label>
              <div class="mt-2">
                <textarea v-model="form.description.az" id="description-az" name="description-az" rows="5"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div class="w-full">
              <label for="description-ru" class="block text-sm font-medium leading-6 text-gray-900">Description ru</label>
              <div class="mt-2">
                <textarea v-model="form.description.ru" id="description-ru" name="description-ru" rows="5"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>

          <!-- CONTENT INFO -->
          <div v-if="fields.includes('content')" class="w-full flex flex-col gap-6 col-span-full">
            <div class="w-full">
              <label for="content-en" class="block text-sm font-medium leading-6 text-gray-900">Content en</label>
              <div class="mt-2">
                <!-- <client-only>
                  <AdminRichEditor v-model.lazy="form.content.en" />
                </client-only> -->
                <textarea v-model="form.content.en" id="content-en" name="content-en" rows="5" class="block mt-1 border-red-500 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div class="w-full">
              <label for="content-az" class="block text-sm font-medium leading-6 text-gray-900">Content az</label>
              <div class="mt-2">
                <!-- <client-only>
                  <AdminRichEditor v-model.lazy="form.content.az" />
                </client-only> -->
                <textarea v-model="form.content.az" id="content-az" name="content-az" rows="5" class="block mt-1 border-red-500 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
            <div class="w-full">
              <label for="content-ru" class="block text-sm font-medium leading-6 text-gray-900">Content ru</label>
              <div class="mt-2">
                <!-- <client-only>
                  <AdminRichEditor v-model.lazy="form.content.ru" />
                </client-only> -->
                <textarea v-model="form.content.ru" id="content-ru" name="content-ru" rows="5" class="block mt-1 border-red-500 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>
          </div>

          <!-- COVER IMAGE -->
          <div v-if="fields.includes('coverImage')" class="col-span-full">
            <label class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
            <div class="relative flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-4">
              <label :class="!(coverImagePreview || form.coverImage) ? 'p-8 border rounded-lg' : ''" for="coverImage"
                class="relative self-center cursor-pointer">
                <img class="max-w-lg max-h-60" :src="coverImagePreview || form.coverImage" />
                <div class="w-12 h-12 opacity-70 icon text-white">
                  <svg v-if="uploadingImage" aria-hidden="true" class="w-12 h-12 text-gray-200 animate-spin fill-blue-700"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor" />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill" />
                  </svg>
                  <svg v-else class="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                    <path fill-rule="evenodd"
                      d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <input v-show="false" type="file" id="coverImage" @change="handleCoverImageUpload" accept="image/*">
              </label>
            </div>
          </div>

          <!-- SLIDER IMAGES -->
          <div v-if="fields.includes('sliderImages')" class="col-span-full">
            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Slider images</label>
            <input type="file" id="sliderImages" @change="handleImageUploads" accept="image/*" multiple>
            <div
              class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 overflow-auto">
              <div v-if="sliderImagesPreview.length" class="flex gap-4">
                <div v-for="(image, index) in sliderImagesPreview" :key="index">
                  <img class="max-w-md max-h-44 border" :src="image" alt="">
                </div>
              </div>
              <div v-if="form.sliderImages?.length" class="flex gap-4">
                <div v-for="(image, index) in form.sliderImages" :key="index">
                  <img class="max-w-md max-h-44 border" :src="image" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- META INFORMATION -->
      <div v-if="fields.includes('meta')" class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">Meta Information</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Invisible tags that provide data about your page to search engines
          and website visitors.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- META TITLE -->
          <div class="sm:col-span-2">
            <label for="meta-title-en" class="block text-sm font-medium leading-6 text-gray-900">Meta title en</label>
            <div class="mt-2">
              <input v-model="form.meta.title.en" type="text" name="meta-title-en" id="meta-title-en" autocomplete="meta-title-en"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="meta-title-az" class="block text-sm font-medium leading-6 text-gray-900">Meta title az</label>
            <div class="mt-2">
              <input v-model="form.meta.title.az" type="text" name="meta-title-az" id="meta-title-az" autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="meta-title-ru" class="block text-sm font-medium leading-6 text-gray-900">Meta title ru</label>
            <div class="mt-2">
              <input v-model="form.meta.title.ru" type="text" name="meta-title-ru" id="meta-title-ru" autocomplete="family-name"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
          </div>

          <!-- META DESCRIPTION -->
          <div class="sm:col-span-2">
            <label for="meta-description-en" class="block text-sm font-medium leading-6 text-gray-900">Meta description
              en</label>
            <div class="mt-2">
              <textarea v-model="form.meta.description.en" id="meta-description-en" name="meta-description-en" rows="5" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="meta-description-az" class="block text-sm font-medium leading-6 text-gray-900">Meta description
              az</label>
            <div class="mt-2">
              <textarea v-model="form.meta.description.az" id="meta-description-az" name="meta-description-az" rows="5" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="meta-description-ru" class="block text-sm font-medium leading-6 text-gray-900">Meta description
              ru</label>
            <div class="mt-2">
              <textarea v-model="form.meta.description.ru" id="meta-description-ru" name="meta-description-ru" rows="5" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>

          <!-- META KEYWORDS -->
          <div class="sm:col-span-2">
            <label for="meta-keywords-en" class="block text-sm font-medium leading-6 text-gray-900">Meta keywords
              en</label>
            <div class="mt-2">
              <textarea v-model="form.meta.keywords.en" id="meta-keywords-en" name="meta-keywords-en" rows="5" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="meta-keywords-az" class="block text-sm font-medium leading-6 text-gray-900">Meta keywords az</label>
            <div class="mt-2">
              <textarea v-model="form.meta.keywords.az" id="meta-keywords-az" name="meta-keywords-az" rows="5" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="meta-keywords-ru" class="block text-sm font-medium leading-6 text-gray-900">Meta keywords ru</label>
            <div class="mt-2">
              <textarea v-model="form.meta.keywords.ru" id="meta-keywords-ru" name="meta-keywords-ru" rows="5" type="text"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ACTION BUTTONS -->
    <div class="mt-6 flex items-center justify-end gap-x-4">
      <button type="button" class="rounded-md px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-900">Cancel</button>
      <button type="submit"
        class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>

<script setup>
import { useMainStore } from '~/stores/MainStore'


const localeRoute = useLocaleRoute()
const router = useRouter()
const { addNotification } = useNotifications()

const store = useMainStore()

const props = defineProps({
  item: { type: Object },
  resource: { type: String },
  fields: { type: Array },
  defaultForm: { type: Object },
})

const emit = defineEmits(['closeEditor'])

const coverImagePreview = ref(null)
const iconImagePreview = ref(null)
const sliderImagesPreview = reactive([])
const uploadingImage = ref(false)
const uploadingImages = ref(false)
const oldCoverImage = ref(props.item?.coverImage)
const oldIconImage = ref(props.item?.iconImage)
const oldSliderImages = props.item?.sliderImages?.length > 0 ? ref(props.item?.sliderImages) : null
const form = computed(() => {
  const form = props.item?.id ? props.item : props.defaultForm
  return form
})

async function save() {
  if (props.item?.id) {
    const res = await store.updateItem({ item: form.value, resource: props.resource, oldCoverImage: oldCoverImage.value, oldIconImage: oldIconImage.value, oldSliderImages: oldSliderImages?.value })
    if (!res) return
    const route = localeRoute({ name: `admin-${props.resource}` })
    router.push(route)
    addNotification({ message: 'Successfully updated' })
  } else {
    const res = await store.createItem({ item: form.value, resource: props.resource })
    if (!res) return
    emit('closeEditor')
    addNotification({ message: 'Successfully created' })
  }
}

function handleCoverImageUpload(e) {
  uploadingImage.value = true
  form.value.coverImage = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (event) => {
    coverImagePreview.value = event.target.result
  }
  if (form.value.coverImage) {
    reader.readAsDataURL(form.value.coverImage)
  }
  uploadingImage.value = false
}

function handleImageUploads(e) {
  uploadingImages.value = true
  form.value.sliderImages = [...e.target.files]
  for (const image of form.value.sliderImages) {
    const reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
    }
    reader.onload = (event) => {
      sliderImagesPreview.push(event.target.result)
    };
  }
  uploadingImages.value = false
}

</script>

<style scoped>
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}</style>