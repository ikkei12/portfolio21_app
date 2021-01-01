<template>
  <nuxt-link :to="'/articles/' + article.slug" class="article-card">
    <img :src="article.thumbnail" class="thumbnail" />
    <div class="title__wrapper">
      <p class="createdAt">{{ article.createdAt }}</p>
      <h4 class="title">{{ article.title }}</h4>
    </div>
  </nuxt-link>
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
  border-radius: 10px;
  margin-bottom: 5vh;
  background: white;
  text-decoration: none;
  &:hover {
    box-shadow: 0 0px 20px rgba(89, 89, 89, 0.096);
    .title__wrapper {
      .title {
        color: rgba(0, 0, 0, 0.737);
      }
    }
  }
  .thumbnail {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .createdAt {
    margin-bottom: 5px;
    font-size: 14px;
    color: grey;
  }
  .title__wrapper {
    padding: 25px 25px;
    .title {
      color: black;
    }
  }
}
</style>
