import { defineStore, acceptHMRUpdate } from 'pinia'
import { doc, getDoc, setDoc } from "firebase/firestore";

export const useUserStore = defineStore('userStore', () => {
  const { db } = useFirebase()
  const user = ref(null)

  async function createUser({ id, item }) {
    const userRef = doc(db, 'users', id);
    setDoc(userRef, item);

    const createdItem = await getDoc(userRef)
    console.log('createdItem', createdItem);
  }

  return {
    user,
    createUser
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}