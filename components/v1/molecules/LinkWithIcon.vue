<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    alt="icon"
    class="link"
  >
    <img :src="img" class="icon" />
    <p v-if="text">{{ text }}</p>
  </a>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    imgSrc: {
      type: String,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
    },
  },
})
</script>
<style scoped>
.link {
  height: 100%;
}
</style>
