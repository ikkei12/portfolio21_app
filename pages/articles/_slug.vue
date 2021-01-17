<template>
  <ArticleDetailPage :article="article" :prev="prev" :next="next" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Context } from '@nuxt/types'
import ArticleDetailPage from '@/components/v1/templates/ArticleDetailPage.vue'
export default defineComponent({
  components: { ArticleDetailPage },
  async asyncData({ params, $content, $axios }: Context) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next]: any = await $content('articles')
      .surround(params.slug)
      .fetch()
    const ogpInfo: OGP = {
      title: ((article as unknown) as Article).title,
      description: "1keiuu's Blog",
      url: 'https://portfolio21-56e7e.web.app/articles',
      image: '',
    }
    await $axios
      .post(
        'http://localhost:5001/portfolio21-56e7e/us-central1/createOgpImageAndSave',
        {
          title: ((article as unknown) as Article).title,
          slug: ((article as unknown) as Article).slug,
          name: '@1keiuu',
        }
      )
      .then((res) => {
        console.log(res.data)
        // ogpInfo.image = res.data.ogp.image
        // ogpInfo.description = res.data.ogp.description
        // ogpInfo.title = res.data.ogp.title
      })
      .catch((e) => console.error(e))
    return { article, prev, next, ogpInfo }
  },
  head() {
    return {
      title: (this.article as Article).title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: (this.ogpInfo as OGP).description,
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
          content: (this.ogpInfo as OGP).image,
        },
      ],
    }
  },
})
</script>
