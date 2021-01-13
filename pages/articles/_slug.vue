<template>
  <ArticleDetailPage :article="article" :prev="prev" :next="next" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Context } from '@nuxt/types'
import ArticleDetailPage from '@/components/v1/templates/ArticleDetailPage.vue'
export default defineComponent({
  components: { ArticleDetailPage },
  async asyncData({ params, $content }: Context) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next]: any = await $content('articles')
      .surround(params.slug)
      .fetch()
    return { article, prev, next }
  },
  head() {
    return {
      title: (this.article as Article).title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: "1keiuu's Blog",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.SITE_URL}/articles/${
            (this.article as Article).slug
          }`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://storage.googleapis.com/portfolio21-56e7e.appspot.com/products/translation/3.png',
        },
      ],
    }
  },
})
</script>
