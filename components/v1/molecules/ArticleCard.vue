<template>
  <nuxt-link :to="'/articles/' + article.slug" class="article-card">
    <img :src="article.thumbnail" class="thumbnail" />
    <div class="card__inner">
      <div class="card__upper">
        <p class="createdAt">{{ article.createdDate }}</p>
        <div class="reading-time__wrapper">
          <Icon iconname="clock" :size="14" />
          <p class="reading-time">
            {{ Math.round(article.readingTime / 1000) }}min
          </p>
        </div>
      </div>
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
    .card__inner {
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
  .card__inner {
    padding: 25px 25px;

    .card__upper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;

      .createdAt {
        font-size: 14px;
        color: grey;
      }
      .reading-time__wrapper {
        display: flex;
        align-items: center;
        .reading-time {
          margin-left: 3px;
          font-size: 14px;
          color: grey;
        }
      }
    }
    .title {
      color: black;
    }
  }
}
</style>
