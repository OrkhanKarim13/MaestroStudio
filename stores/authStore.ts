import { defineStore, acceptHMRUpdate } from 'pinia'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const useAuthStore = defineStore('authStore', () => {
  const { auth } = useFirebase()
  const user = ref(null)

  async function registerWithEmailAndPassword({email, password}) {
    try {
      console.log(email, password);
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential);
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error, errorCode);
    }
  }

  return {
    user,
    registerWithEmailAndPassword
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}