<template>
  <div class="container">
    <ProfilePage :career-nodes="careerNodes" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProfilePage from '@/components/v1/templates/ProfilePage.vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  components: {
    ProfilePage,
  },
  async asyncData({ $content }) {
    const fetchData = await $content('profile').fetch()
    const careerNodes: CareerNode[] = fetchData.find(
      (item: IContentDocument) => {
        return item.slug === 'career'
      }
    )!.nodes

    return { careerNodes }
  },
})
</script>

<style></style>
