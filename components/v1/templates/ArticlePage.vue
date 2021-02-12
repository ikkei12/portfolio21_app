<template>
  <div class="article-page">
    <button
      v-show="!isActive"
      class="menu__button --open open-menu__button"
      @click="openDrawer"
    >
      <Icon color="white" icon-name="loupe" />
    </button>
    <div
      v-click-outside="closeDrawer"
      class="categories-list__wrapper"
      :class="{ '--active': isActive }"
    >
      <!-- <button
        v-show="isActive"
        class="menu__button --close"
        @click="closeDrawer"
      >
        <Icon color="white" icon-name="cross" />
      </button> -->
      <ArticleCategoriesList :categories="categories" />
    </div>
    <div class="article-page__inner">
      <section class="article__section">
        <Title :title="`${title ? title : '最新'}の記事`" color="#AEDADA" />
        <ArticleCardsGroup :articles="articles" />
      </section>
      <section v-if="pageType !== 'categories'" class="qiita__section">
        <Title title="Qiita" color="#AEDADA" />
        <QiitaCardsGroup :qiita-articles="qiitaArticles" />
        <a href="https://qiita.com/ikkei12" class="qiita-user__link">
          <p>Qiitaの記事をもっと見る</p>
        </a>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import ArticleCardsGroup from '@/components/v1/organisms/ArticleCardsGroup.vue'
import Title from '@/components/v1/atoms/Title.vue'
import ArticleCategoriesList from '@/components/v1/organisms/ArticleCategoriesList.vue'
import Icon from '@/components/v1/atoms/Icon.vue'
import QiitaCardsGroup from '@/components/v1/organisms/QiitaCardsGroup.vue'
import { Article, ArticleCategoryItem } from '~/@types/Article'
import { QiitaArticle } from '~/@types/Ogp'
export default defineComponent({
  components: {
    ArticleCardsGroup,
    Title,
    ArticleCategoriesList,
    Icon,
    QiitaCardsGroup,
  },
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
    qiitaArticles: {
      type: Array as PropType<QiitaArticle[]>,
      default: () => {
        return []
      },
    },
    pageType: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isActive = ref(false)
    const openDrawer = () => {
      isActive.value = true
    }
    const closeDrawer = (e: Event) => {
      if (
        isActive.value &&
        (e.target as HTMLElement).closest('.open-menu__button')
      )
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
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  position: relative;

  .article-page__inner {
    width: 100%;
    padding: 0 10%;
    margin-bottom: 200px;
  }

  .article__section {
    margin-bottom: 80px;
  }

  .qiita__section {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .qiita-user__link {
      font-weight: bold;
      color: $primary;
      position: absolute;
      bottom: -50px;
      right: 50px;
    }
  }

  .categories-list__wrapper {
    width: 0;
    transition: 0.4s;
    position: absolute;
    z-index: 6;
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
