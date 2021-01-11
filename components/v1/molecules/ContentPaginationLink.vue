<template>
  <NuxtLink
    v-if="content"
    :to="'/articles/' + content.slug"
    class="pagination-link"
  >
    <ArticleCardRow :content="content" />
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'
import ArticleCardRow from '@/components/v1/molecules/ArticleCardRow.vue'
export default defineComponent({
  props: {
    content: { type: Object as PropType<IContentDocument> },
  },
  components: {
    ArticleCardRow,
  },
})
</script>
<style scoped lang="scss">
.pagination-link {
  text-decoration: none;
  height: 150px;
  display: block;
}
</style>
