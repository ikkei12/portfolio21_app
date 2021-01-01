<template>
  <ArticleDetailPage :page="page" :prev="prev" :next="next" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Context } from '@nuxt/types'
import ArticleDetailPage from '@/components/v1/templates/ArticleDetailPage.vue'
export default defineComponent({
  components: { ArticleDetailPage },
  async asyncData({ params, $content }: Context) {
    const page = await $content('articles', params.slug).fetch()
    const [prev, next]: any = await $content('articles')
      .surround(params.slug)
      .fetch()
    return { page, prev, next }
  },
})
</script>
