import { defineStore, acceptHMRUpdate } from 'pinia'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const useAuthStore = defineStore('authStore', () => {
  const { auth } = useFirebase()
  const userStore = useUserStore()
  const router = useRouter()

  // STATE
  const authUser = ref<Object | null>(null);

  // ACTIONS
  async function registerWithEmailAndPassword({email, password}) {
    try {
      console.log(email, password);
      const username = 'asgar'
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential);
      await userStore.createUser({ id: userCredential.user.uid, item: { email, username} })
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error, errorCode);
    }
  }

  async function loginWithEmailAndPassword({ email, password }) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      console.log('responseee', user);
      authUser.value = user
      router.push('/admin')
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      authUser.value = null
    } catch (error) {
      console.log(error);
      
    }
  }

  return {
    authUser,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}