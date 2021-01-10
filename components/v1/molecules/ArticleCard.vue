<template>
  <article>
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
        <h4 class="title">
          {{
            article.title.length > 27
              ? `${article.title.substring(0, 27)}…`
              : article.title
          }}
        </h4>
      </div>
    </nuxt-link>
  </article>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
export default defineComponent({
  props: {
    article: {
      type: Object as PropType<Article>,
    },
  },
})
</script>
<style scoped lang="scss">
article {
  width: 300px;
  padding: 0 2%;
  margin-top: 50px;
  &:hover {
    .card__inner {
      .title {
        color: rgba(0, 0, 0, 0.737);
      }
    }
  }

  .article-card {
    margin-bottom: 5vh;
    text-decoration: none;

    .thumbnail {
      width: 100%;
      box-shadow: 0 0px 20px rgba(89, 89, 89, 0.072);
      display: block;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .card__inner {
      padding: 25px 25px;
      min-height: 140px;
      box-shadow: 0 0px 20px rgba(89, 89, 89, 0.072);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      background: white;

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
}
</style>
