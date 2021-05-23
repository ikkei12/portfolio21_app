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
  padding-bottom: 4px;
  font-weight: 100;
  background: $body_bg;
  z-index: 5;
  width: fit-content;
  .title {
    font-size: 20px;
    width: fit-content;
  }
}

@include sp {
  .title__wrapper {
    padding: 18px 0;
  }
}
</style>
