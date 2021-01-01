<template>
  <nuxt-content :document="page[0]" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { Context } from '@nuxt/types'
export default defineComponent({
  async asyncData({ params, $content }: Context) {
    const slug = params.slug
    const page = await $content('articles').where({ slug }).fetch()
    return { page }
  },
})
</script>
