<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup(_props, context) {
    context.root.$axios
      .get('/products')
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e))
  },
})
</script>

<style></style>
