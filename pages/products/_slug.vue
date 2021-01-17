<template>
  <ProductsProvider>
    <ProductDetailPage :product="res[0]" />
  </ProductsProvider>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProductDetailPage from '@/components/v1/templates/ProductDetailPage.vue'
import { IContentDocument } from '@nuxt/content/types/content'
export default defineComponent({
  components: {
    ProductDetailPage,
  },
  async asyncData({ $content, params }) {
    const slug = params.slug
    const res = await $content('products').where({ slug }).fetch()

    return { res }
  },
  head() {
    return {
      title: (this.res as IContentDocument)[0].title,
      meta: [
        {
          hid: 'og:description',
          property: 'og:description',
          content: (this.res as IContentDocument)[0].contents[0].description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.SITE_URL}/products/${
            (this.res as IContentDocument)[0].slug
          }`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: (this.res as IContentDocument)[0].contents[0].image.url,
        },
      ],
    }
  },
})
</script>
