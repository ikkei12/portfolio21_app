<template>
  <div class="article-card">
    <img :src="article.thumbnail" class="thumbnail" />
    <div class="title__wrapper">
      <h4 class="title">{{ article.title }}</h4>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
export default defineComponent({
  props: {
    article: {
      type: Object as PropType<ArticleCard>,
    },
  },
})
</script>
<style scoped lang="scss">
.article-card {
  width: calc((100% / 3) - (50px * 2 / 3));
  border-radius: 15px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.096);
  margin-bottom: 5vh;
  .thumbnail {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  .title__wrapper {
    padding: 1vh 01vh 2vh;
    .title {
    }
  }
}
</style>
