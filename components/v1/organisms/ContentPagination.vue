<template>
  <div class="page-nation">
    <h3>次に読む</h3>
    <div class="page-nation__inner">
      <ContentPaginationLink :content="prev" />
      <ContentPaginationLink :content="next" />
    </div>
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
  padding: 100px 5vw;
  .page-nation__inner {
    display: flex;
    justify-content: space-between;
  }
}
</style>
