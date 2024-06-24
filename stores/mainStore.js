import { defineStore, acceptHMRUpdate } from 'pinia'
import { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, writeBatch, query, where, limit } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    loading: {
      blogs: false
    },
    blogs: [],
    blogCategories: [],
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
    blogCategoryObjectDefault: {
      createdAt: null,
      isEnabled: false,
      title: { en: '', az: '', ru: '' },
    }
  }),
  getters: {
    getResourceFields: (state) => {
      return (resource) => Object.keys(state[`${resource}ObjectDefault`]);
    },
  },
  actions: {
    async fetchItem({ resource, id, slug_az = null }) {
      const { db } = useFirebase()
      let item

      if (slug_az) {
        let q = query(collection(db, resource), where("slug.az", "==", slug_az));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          item = docToResource(doc);
        });
      } else {
        const docRef = doc(db, resource, id)
        const docSnap = await getDoc(docRef)
        item = docToResource(docSnap);
      }
      // console.log('fetchItem: ', item);
      return item
    },
    // fetch all the docs of the collection
    async fetchItems({ resource, isAdmin = false, count = null, categoryId = null }) {
      if(this[resource].length) return
      this.loading[resource] = true
      try {
        const { db } = useFirebase()
        let q = query(collection(db, resource));
        if (!isAdmin) q = query(collection(db, resource), where('isEnabled', "==", true));
        if (categoryId) q = query(collection(db, resource), where("categoryId", "==", categoryId));
        if (count) q = query(collection(db, resource), limit(count));

        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          upsert(this[resource], docToResource(doc));
        });
      } catch (err) {
        console.log('fetchItems: ', err);
      } finally {
        this.loading[resource] = false
      }
    },
    async createItem({ item, resource }) {
      const { db } = useFirebase()
      // create a new document with a generated id
      const itemRef = doc(collection(db, resource));

      if (item.title) {
        const slug = {
          az: createSlug(item.title.az),
          en: createSlug(item.title.en),
          ru: createSlug(item.title.ru)
        }
        item.slug = slug
      }

      // upload images to storage and get imageUrl from storage
      if (item.coverImage) {
        const coverImage = await this.uploadImage({ resource, itemId: itemRef.id, file: item.coverImage })
        item.coverImage = coverImage
      }

      if (item.sliderImages) {
        const sliderImages = []
        for (const image of item.sliderImages) {
          const sliderImage = await this.uploadImage({ resource, itemId: itemRef.id, file: image })
          sliderImages.push(sliderImage)
        }
        item.sliderImages = sliderImages
      }


      // set item to firestore
      await setDoc(itemRef, item); // returns undefined

      // get created item from firestore
      const createdItem = await getDoc(itemRef)

      console.log('createdItem', createdItem);

      // update vuex store with new item
      upsert(this[resource], docToResource(createdItem));
      // commit('setItem', { resource, item: createdItem })
      return docToResource(createdItem)
    },
    async updateItem({ item, resource, oldCoverImage = null, oldSliderImages = null }) {
      const { db } = useFirebase()
      // create a reference for item
      const itemRef = doc(db, resource, item.id)

      // check if the type of image is object, that means user uploaded it. because preuploaded image type is string
      const isObject = (image) => typeof image === 'object'

      // update coverImage and delete old one if it exist
      if (isObject(item.coverImage)) {
        item.coverImage = await this.uploadImage({ resource, itemId: itemRef.id, file: item.coverImage })
        if (oldCoverImage) await this.deleteImage({ image: oldCoverImage })
      }

      // update sliderImages and delete old ones if they exist
      if (item.sliderImages?.length && item.sliderImages?.every(isObject)) {
        const sliderImages = []
        for (const image of item.sliderImages) {
          const sliderImage = await this.uploadImage({ resource, itemId: itemRef.id, file: image })
          sliderImages.push(sliderImage)
        }
        item.sliderImages = sliderImages
        if (oldSliderImages) {
          for (const image of oldSliderImages) {
            await this.deleteImage({ image: image })
          }
        }
      }

      if (item.title) {
        const slug = {
          az: createSlug(item.title.az),
          en: createSlug(item.title.en),
          ru: createSlug(item.title.ru),
        }
        item.slug = slug
      }

      // update firestore document and set it to the store
      await updateDoc(itemRef, item)
      const updatedItem = await getDoc(itemRef)
      upsert(this[resource], docToResource(updatedItem));

      // we return value here in order to be valid for asyncData function
      return true
    },
    async deleteItem({ item, resource }) {
      const { db } = useFirebase()
      // create a reference for item
      const docRef = doc(db, resource, item.id)
      // first delete images of the item from storage by their url
      if (item.coverImage) {
        this.deleteImage({ image: item.coverImage })
      }
      if (item.sliderImages?.length) {
        for (const image of item.sliderImages) {
          this.deleteImage({ image })
        }
      }
      // then delete the item from firestore
      await deleteDoc(docRef)
      // then remove the item from the store
      const index = this[resource].findIndex(i => i.id === item.id);
      if (!(index > -1)) return
      this[resource].splice(index, 1);
    },
    async uploadImage({ resource, itemId, file }) {
      if (!file || !resource || !itemId) return null
      try {
        const storage = getStorage()
        const storageRef = ref(storage, `uploads/${resource}/${itemId}/${Date.now()}-${file.name}`);
        const snapshot = await uploadBytes(storageRef, file)
        const url = await getDownloadURL(ref(storage, snapshot.ref.fullPath))

        return url
      } catch {
        alert('Uploading image failed!')
      }
    },
    deleteImage({ image }) {
      const storage = getStorage();
      const imageRef = ref(storage, image);
      // Delete the file
      deleteObject(imageRef).then(() => {
        // console.log('image deleted');
        // File deleted successfully
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
    },
    clearItems({ resource }) {
      this[resource] = []
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))
}