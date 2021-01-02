<template>
  <div class="article-detail">
    <div class="article-detail__content">
      <ChipGroup :chips="chips" />
      <nuxt-content :document="article" />
      <ContentPagination :next="next" :prev="prev" />
    </div>
    <ContentsTable :article="article" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'
import ContentPagination from '@/components/v1/organisms/ContentPagination.vue'
import ContentsTable from '@/components/v1/organisms/ContentsTable.vue'
import ChipGroup from '@/components/v1/molecules/ChipGroup.vue'

export default defineComponent({
  props: {
    article: { type: Object as PropType<IContentDocument> },
    prev: { type: Object as PropType<IContentDocument> },
    next: { type: Object as PropType<IContentDocument> },
  },
  components: {
    ContentPagination,
    ContentsTable,
    ChipGroup,
  },
  setup(props) {
    const chips = computed(() => {
      const color = '#333'
      return props.article?.categories.map((category: string) => {
        return { text: category, color }
      })
    })
    return { chips }
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
