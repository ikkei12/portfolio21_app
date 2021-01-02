<template>
  <Card>
    <img src="/image/profile.jpg" alt="Profile image" class="profile-image" />
    <h3>原島 一桂</h3>
    <p>Ikkei Harashima</p>
    <LinkIconGroup />
  </Card>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
import LinkIconGroup from '@/components/v1/organisms/LinkIconGroup.vue'

export default defineComponent({
  components: {
    Card,
    LinkIconGroup,
  },
})
</script>
