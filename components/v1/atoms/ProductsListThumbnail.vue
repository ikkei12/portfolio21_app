<template>
  <div class="thumbnail" :class="{ '--active': active }">
    <img :src="url" alt="thumbnail" />
    <div />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    url: { type: String, required: true },
    active: {
      type: Boolean,
    },
  },
})
</script>
<style scoped lang="scss">
.thumbnail {
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  img {
    width: 100%;
  }
  &.--active {
    opacity: 1;
    transition: 0.8s;
    animation: fadeIn;
    animation-duration: 0.8s;
  }
}
@keyframes fadeIn {
  0% {
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
