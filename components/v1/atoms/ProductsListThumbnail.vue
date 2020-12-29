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
<style scoped>
.thumbnail {
  width: 100%;
}
</style>
