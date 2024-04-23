<template>
  <div class="relative">
    <component :is="name" :class="$attrs['class']" />
    <span v-if="badgeValue"
      class="absolute -top-1 -right-1 px-1 text-[8px] font-medium text-white border border-white rounded-[10px]  bg-[#E12D55]">
      {{ badgeValue }}
    </span>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    badgeValue: {
      type: String | Number,
    }
  },
  components: {
    ArrowDownLong: defineAsyncComponent(() => import('@/components/Icons/ArrowDownLong.vue')),
    ArrowLeftLong: defineAsyncComponent(() => import('@/components/Icons/ArrowLeftLong.vue')),
    ArrowRightLong: defineAsyncComponent(() => import('@/components/Icons/ArrowRightLong.vue')),
  },
}
</script>
