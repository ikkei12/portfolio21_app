<template>
  <div class="article-page">
    <button v-show="!isActive" class="menu__button --open" @click="openDrawer">
      <Icon color="white" icon-name="loupe" />
    </button>
    <div
      v-click-outside="closeDrawer"
      class="categories-list__wrapper"
      :class="{ '--active': isActive }"
    >
      <button class="menu__button --close" @click="closeDrawer">
        <Icon color="white" icon-name="cross" />
      </button>
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
import { Article, ArticleCategoryItem } from '~/@types/Article'
export default defineComponent({
  components: { ArticleCardsGroup, Title, ArticleCategoriesList, Icon },
  props: {
    articles: {
      type: Array as PropType<Article[]>,
      default: [],
    },
    categories: {
      type: Array as PropType<ArticleCategoryItem[]>,
      default: [],
    },
    title: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isActive = ref(false)
    const openDrawer = () => {
      console.log('open')
      isActive.value = true
    }
    const closeDrawer = (e: Event) => {
      console.log(isActive.value)
      if (!isActive.value && (e.target as HTMLElement).closest('.menu__button'))
        return
      isActive.value = false
    }

    return { isActive, openDrawer, closeDrawer }
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
    width: 0;
    transition: 0.4s;
    position: absolute;
    z-index: 5;
    right: 0;
    top: 0;
    height: 100%;
    background: #fefefe;
    &.--active {
      width: 20%;
      transition: 0.4s;
    }
  }
  .menu__button {
    position: fixed;
    display: flex;
    right: 30px;
    top: 90px;
    z-index: 6;
    background: $primary;
    border: 0;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    justify-content: center;
    align-items: center;
    outline: none;
    cursor: pointer;
  }
}

@include sp {
  .article-page {
    padding-right: 0;
    .menu__button {
      right: 12px;
      top: 70px;
      width: 50px;
      height: 50px;
    }
    .categories-list__wrapper {
      .menu__button {
        right: 12px;
        top: 70px;
        width: 50px;
        height: 50px;
      }
      &.--active {
        width: 100%;
      }
    }
    .article-page__inner {
      width: 95%;
    }
  }
}
</style>
