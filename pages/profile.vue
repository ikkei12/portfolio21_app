<template>
  <div class="container">
    <ProfilePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProfilePage from '@/components/v1/templates/ProfilePage.vue'
export default defineComponent({
  components: {
    ProfilePage,
  },
  // setup(_props, context) {
  //   context.root.$axios
  //     .get('/products')
  //     .then((res) => console.log(res.data))
  //     .catch((e) => console.log(e))
  // },
})
</script>

<style></style>
