<template>
  <div class="page-nation">
    <ContentPaginationLink :content="prev" />
    <ContentPaginationLink :content="next" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'
import ContentPaginationLink from '@/components/v1/molecules/ContentPaginationLink.vue'

export default defineComponent({
  props: {
    prev: { type: Object as PropType<IContentDocument> },
    next: { type: Object as PropType<IContentDocument> },
  },
  components: {
    ContentPaginationLink,
  },
})
</script>

<style scoped lang="scss">
.page-nation {
  display: flex;
  justify-content: space-between;
}
</style>
