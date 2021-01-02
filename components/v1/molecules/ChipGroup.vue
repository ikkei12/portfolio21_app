<template>
  <div>
    <Chip v-for="(chip, i) in chips" :key="`chip${i}`" :text="chip" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Chip from '@/components/v1/atoms/Chip.vue'
export default defineComponent({
  props: {
    chips: {
      type: Array as PropType<String[]>,
    },
  },
  components: {
    Chip,
  },
})
</script>
