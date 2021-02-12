<template>
  <div class="pagination">
    <div class="pagination__inner">
      <div v-if="prev" class="link__wrapper">
        <h3 class="link__desc">次の記事</h3>
        <ContentPaginationLink :content="prev" />
      </div>
      <div v-if="next" class="link__wrapper">
        <h3 class="link__desc">前の記事</h3>
        <ContentPaginationLink :content="next" />
      </div>
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
.pagination {
  margin: 50px 0;

  .pagination__inner {
    .link__wrapper {
      width: 100%;
      margin-bottom: 80px;

      .link__desc {
        margin-bottom: 10px;
      }
    }
  }
}

.article-card {
  display: none;
}

@include sp {
  .pagination {
    .pagination__inner {
      .link__wrapper {
        margin-bottom: 30px;

        .pagination-link {
          display: none;
        }
      }

      .article-card {
        display: block;
        margin-top: 10px;
      }
    }
  }
}
</style>
