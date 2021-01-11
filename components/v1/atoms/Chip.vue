<template>
  <nuxt-link :to="'/articles/categories/' + chip.text" class="chip__link">
    <div class="chip" :style="`border:1px solid ${chip.color}`">
      <p class="chip__text" :style="`color:${chip.color}`">{{ chip.text }}</p>
    </div>
  </nuxt-link>
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
.chip__link {
  text-decoration: none;
  margin-right: 8px;
  .chip {
    border-radius: 30px;
    padding: 5px 20px;
    height: 30px;
    .chip__text {
      font-size: 10px;
      font-weight: bold;
      margin-bottom: 0 !important;
    }
  }
}
</style>
