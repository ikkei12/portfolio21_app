<template>
  <div>
    <ContentsTable :page="page" />

    <nuxt-content :document="page" />
    <ContentPagination :next="next" :prev="prev" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'
import ContentPagination from '@/components/v1/organisms/ContentPagination.vue'
import ContentsTable from '@/components/v1/organisms/ContentsTable.vue'

export default defineComponent({
  props: {
    page: { type: Object as PropType<IContentDocument> },
    prev: { type: Object as PropType<IContentDocument> },
    next: { type: Object as PropType<IContentDocument> },
  },
  components: {
    ContentPagination,
    ContentsTable,
  },
})
</script>
<style scoped lang="scss">
::v-deep .nuxt-content-container {
  width: 85%;
  .nuxt-content {
    padding: 100px 5vw;
    h1 {
      margin-bottom: 50px;
    }
    h2,
    h3,
    h4 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 10px;
    }
  }
}
</style>
