<template>
  <div class="article-page">
    <button class="open-menu__button" @click="setSpActive">
      <Icon color="white" icon-name="menu" />
    </button>
    <div
      class="categories-list__wrapper"
      :class="{ '--sp-active': isSpActive }"
    >
      <ArticleCategoriesList :categories="categories" />
    </div>
    <div class="article-page__inner">
      <Title :title="`${title ? title : '最新'}の記事`" color="#AEDADA" />
      <ArticleCardsGroup :articles="articles" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import ArticleCardsGroup from '@/components/v1/organisms/ArticleCardsGroup.vue'
import Title from '@/components/v1/atoms/Title.vue'
import ArticleCategoriesList from '@/components/v1/organisms/ArticleCategoriesList.vue'
import Icon from '@/components/v1/atoms/Icon.vue'
export default defineComponent({
  components: { ArticleCardsGroup, Title, ArticleCategoriesList, Icon },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
    },
    categories: {
      type: Array as PropType<ArticleCategoryItem[]>,
    },
    title: {
      type: String,
    },
  },
  setup() {
    const isSpActive = ref(false)
    const setSpActive = () => {
      isSpActive.value = !isSpActive.value
    }

    return { isSpActive, setSpActive }
  },
})
</script>
<style lang="scss" scoped>
.article-page {
  padding-top: 120px;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-right: 18%;
  justify-content: center;
  position: relative;
  .article-page__inner {
    width: 90%;
    padding: 0 2% 0 7%;
    margin-bottom: 200px;
  }

  .categories-list__wrapper {
    position: absolute;
    z-index: 5;
    right: 0;
    top: 0;
    width: 18%;
    height: 100%;
    background: #fefefe;
  }
  .open-menu__button {
    display: none;
    position: fixed;
    right: 16px;
    top: 70px;
    z-index: 6;
    background: $primary;
    border: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    outline: none;
  }
}

@include sp {
  .article-page {
    padding-right: 0;
    .open-menu__button {
      display: flex;
    }
    .article-page__inner {
      width: 95%;
    }
    .categories-list__wrapper {
      width: 0;
      transition: 0.5s;
      &.--sp-active {
        width: 100%;
        transition: 0.8s;
      }
    }
  }
}
</style>
