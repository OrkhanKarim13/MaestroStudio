<script setup lang="ts">
const authStore = useAuthStore()

interface registerPayload {
  email: string,
  password: string
}
const user = {
  email: 'test@mail.com',
  password: 'testpass'
}
</script>

<template>
  <div>
    <h1 class="m-6 text-3xl font-bold underline">
      Hello world!
    </h1>
    <button @click="authStore.registerWithEmailAndPassword(user)">register</button>
  </div>
</template>
