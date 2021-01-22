<template>
  <div class="title__wrapper" :style="'border-bottom: 4px solid ' + color">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    color: {
      type: String,
    },
  },
})
</script>
<style lang="scss" scoped>
.title__wrapper {
  padding: 8px 0;
  font-weight: 100;
  position: sticky;
  top: 60px;
  background: $body_bg;
  z-index: 10;
  .title {
    font-size: 1.8rem;
  }
}
@include sp {
  .title__wrapper {
    padding: 18px 0;
  }
}
</style>
