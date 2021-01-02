<template>
  <div class="article-detail">
    <div class="article-detail__content">
      <nuxt-content :document="page" />
      <ContentPagination :next="next" :prev="prev" />
    </div>
    <ContentsTable :page="page" />
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
.article-detail {
  display: flex;
  justify-content: center;
  margin-top: 120px;
  .article-detail__content {
    width: 60%;
  }
}
::v-deep .nuxt-content-container {
  .nuxt-content {
    padding: 5vh 100px 5vw;
    background: white;
    h1 {
      margin-bottom: 0;
    }
    h2,
    h3,
    h4 {
      margin-bottom: 20px;
    }
    p {
      line-height: 1.9;
      margin-bottom: 10px;
    }
    .created-date {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-bottom: 20px;
      p {
        margin-left: 8px;
        margin-bottom: 0;
        color: grey;
      }
    }
    .thumbnail {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
