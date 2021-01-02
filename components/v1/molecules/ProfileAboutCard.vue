<template>
  <Card>
    <h3>About</h3>
    <p>エンジニアです</p>
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
