<template>
  <div class="article-detail">
    <div class="article-detail__inner">
      <div class="article-detail__content">
        <nuxt-content :document="article" />
      </div>
      <ContentPagination :next="next" :prev="prev" />
    </div>

    <ContentsTable :article="article" />
    <ReadingTimeCard :reading-time="readingTime" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'
import ContentPagination from '@/components/v1/organisms/ContentPagination.vue'
import ContentsTable from '@/components/v1/organisms/ContentsTable.vue'
import ChipGroup from '@/components/v1/molecules/ChipGroup.vue'
import ReadingTimeCard from '@/components/v1/molecules/ReadingTimeCard.vue'

export default defineComponent({
  name: 'ChipGroup',
  props: {
    article: { type: Object as PropType<IContentDocument> },
    prev: { type: Object as PropType<IContentDocument> },
    next: { type: Object as PropType<IContentDocument> },
  },
  components: {
    ContentPagination,
    ContentsTable,
    ChipGroup,
    ReadingTimeCard,
  },
  setup(props) {
    const chips = computed(() => {
      const color = 'grey'
      return props.article?.categories.map((category: string) => {
        return { text: category, color }
      })
    })
    const readingTime = props.article?.readingTime
      ? props.article?.readingTime
      : ''
    return { chips, readingTime }
  },
})
</script>
<style scoped lang="scss">
.article-detail {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  .article-detail__inner {
    width: 60%;
    .article-detail__content {
      background: white;
      padding: 5vh 100px 5vw;
    }
  }
}

::v-deep .nuxt-content {
  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 10px;
  }
  p {
    line-height: 1.9;
    margin-bottom: 10px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .created-date {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      p {
        margin-left: 8px;
        margin-bottom: 0;
        color: grey;
      }
    }
  }
  .thumbnail {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 80px;
  }
  @include sp {
    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 20px;
    }
    p {
      line-height: 1.9;
      margin-bottom: 10px;
    }
  }
}
@include sp {
  .article-detail {
    .article-detail__inner {
      width: 95%;
      .article-detail__content {
        padding: 10px 16px;
      }
    }
    .contents-table {
      display: none;
    }
    .reading-time__card {
      display: none;
    }
  }
}
</style>
