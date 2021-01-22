<template>
  <a v-if="qiita.isShow" :href="qiita.url" class="qiita-card__link">
    <div class="qiita-card">
      <img :src="qiita.image" class="thumbnail" width="300" />
      <div class="inner">
        <p>{{ qiita.title }}</p>
        <div class="likes-count__wrapper">
          <Icon icon-name="heart" color="#FF846B" size="16" />
          <p class="likes-count__text">{{ qiita.likesCount }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Icon from '@/components/v1/atoms/Icon.vue'
export default defineComponent({
  components: { Icon },
  props: {
    qiita: {
      type: Object as PropType<QiitaArticle>,
      default: {},
    },
  },
})
</script>
<style scoped lang="scss">
.qiita-card__link {
  text-decoration: none;
  color: black;
  display: block;
  padding: 0 2%;
  width: calc(100% / 3);
  margin-top: 50px;
  &:hover {
    .thumbnail {
      filter: opacity(0.7);
      transition: 0.4s;
    }
  }
  .qiita-card {
    background: white;
    border-radius: 8px;
    width: 100%;
    .thumbnail {
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .inner {
      min-height: 100px;
      padding: 8px;
      padding-bottom: 30px;
      position: relative;
      p {
        font-size: 14px;
      }
      .likes-count__wrapper {
        display: flex;
        align-items: center;
        margin-top: 4px;
        position: absolute;
        left: 8px;
        bottom: 8px;
        .likes-count__text {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
