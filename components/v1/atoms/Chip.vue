<template>
  <div class="chip" :style="`border:1px solid ${chip.color}`">
    <p class="chip__text" :style="`color:${chip.color}`">{{ chip.text }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    chip: {
      type: Object as PropType<Chip>,
    },
  },
})
</script>

<style scoped lang="scss">
.chip {
  border-radius: 30px;
  padding: 5px 20px;
  .chip__text {
    font-size: 10px;
    font-weight: bold;
  }
}
</style>
