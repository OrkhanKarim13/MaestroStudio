<script setup lang="ts">
import { onAuthStateChanged } from "firebase/auth";

const { auth } = useFirebase()
const router = useRouter()
const authStore = useAuthStore()
let authListener = <Function | null>(null)

if(process.client) {
  authListener = onAuthStateChanged(auth, (user) => {
    if (!user) return router.push({ name: 'login' })
    authStore.authUser = user
  })
}

onBeforeUnmount(() => {
  // clear up listener
  authListener?.()
})
</script>

<template>
  <div>
    Hello peter
  </div>
</template>