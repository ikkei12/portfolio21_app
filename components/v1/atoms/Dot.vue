<template>
  <div class="dot" :style="`width:${size}px; height:${size}px;`">
    <div
      :style="`width:${size / 1.8}px; height:${
        size / 1.8
      }px; background:${color}`"
      class="dot__core"
    ></div>
    <div
      class="dot__outline"
      :style="`width:${size}px; height:${size}px; border:2px solid ${color};`"
    ></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    size: { type: Number },
    color: { type: String },
  },
})
</script>
<style scoped lang="scss">
.dot {
  border-radius: 50%;
  position: relative;
  .dot__core {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .dot__outline {
    background: white;
    border-radius: 50%;
  }
}
</style>
