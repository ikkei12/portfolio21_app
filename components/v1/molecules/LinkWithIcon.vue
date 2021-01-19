<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    alt="icon"
    class="link"
  >
    <img :src="img" class="icon" alt="icon" />
    <p v-if="text">{{ text }}</p>
  </a>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
})
</script>
<style scoped>
.link {
  height: 100%;
}
</style>
