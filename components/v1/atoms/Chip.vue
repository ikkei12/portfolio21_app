<template>
  <div class="chip">
    <p class="chip__text">{{ text }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
    },
  },
})
</script>

<style scoped lang="scss">
.chip {
  border-radius: 30px;
  .chip__text {
  }
}
</style>
