<template>
  <div class="chip__group">
    <Chip v-for="(chip, i) in chips" :key="`chip${i}`" :chip="chip" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Chip from '@/components/global/Chip.vue'
export default defineComponent({
  props: {
    chips: {
      type: Array,
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
  flex-wrap: wrap;
  margin-bottom: 8px;
}
</style>
