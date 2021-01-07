<template>
  <Card class="career__card">
    <h3 class="title">Career</h3>
  </Card>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
export default defineComponent({
  components: {
    Card,
  },
})
</script>
<style scoped lang="scss">
.career__card {
  border-radius: 20px;
  .title {
    margin-bottom: 8px;
  }
}
</style>
