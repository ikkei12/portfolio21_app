<template>
  <Card>
    <img
      src="~/assets/images/profile.jpg"
      alt="Profile image"
      class="profile-image"
    />
    <h3>原島 一桂</h3>
    <p>Ikkei Harashima</p>
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
