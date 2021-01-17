<template>
  <div class="chip__group">
    <Chip v-for="(chip, i) in chips" :key="`chip${i}`" :chip="chip" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Chip from '@/components/v1/atoms/Chip.vue'
export default defineComponent({
  props: {
    chips: {
      type: Array as PropType<Chip[]>,
    },
  },
  components: {
    Chip,
  },
})
</script>
<style scoped lang="scss">
.chip__group {
  display: flex;
  margin-bottom: 8px;
}
</style>
