<template>
  <img :src="url" class="thumbnail" />
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    url: { type: String, required: true },
  },
})
</script>
<style scoped lang="scss">
.thumbnail {
  width: 100%;
  opacity: 0;
  transform: translateY(100px);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  &.--active {
    opacity: 1;
    transition: 0.8s;
    transform: translateY(0);
  }
}
</style>
