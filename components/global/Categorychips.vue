<template>
  <div class="chip__group">
    <chip
      v-for="(chip, i) in chips"
      :key="`chip${i}`"
      :title="chip.title"
      :slug="chip.slug"
    ></chip>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Chip from '@/components/global/Chip.vue'
export default defineComponent({
  components: {
    Chip,
  },
  props: {
    chips: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
})
</script>
<style scoped lang="scss">
.chip__group {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
</style>
