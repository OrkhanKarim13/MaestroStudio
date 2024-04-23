<template>
  <div class="fixed bottom-8 right-0 flex flex-col gap-2">
    <transition-group name="notification">
      <div :class="notification.type === 'error' ? 'border-red-800' : 'border-blue-800'" class="px-4 py-2 flex justify-between gap-8 border-blue-800 border-l-4 bg-white" v-for="notification in notifications" :key="notification.id">
        <p>{{ notification.message }}</p>
        <button @click="removeNotification(notification.id)">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
  const { notifications, removeNotification } = useNotifications()
</script>

<style>
.notification-enter-active,
.notification-leave-active {
  transition: all .5s ease
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.notification-move {
  transition: transform .5s ease
}

</style>