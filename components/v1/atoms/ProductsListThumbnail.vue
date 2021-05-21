<template>
  <div class="thumbnail" :class="{ '--active': active }">
    <img :src="url" alt="thumbnail" width="100%" height="auto" />
    <div />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  props: {
    url: { type: String, required: true },
  },
  setup() {
    const active = ref(false)
    return active
  },
})
</script>
<style scoped lang="scss">
.thumbnail {
  opacity: 1;
  width: 33.3%;
  height: 250px;
  filter: grayscale(100%) brightness(60%);
  transition: 0.7s;
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
  }
  &:hover {
    filter: grayscale(0%) brightness(100%);
    transition: 0.7s;
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
