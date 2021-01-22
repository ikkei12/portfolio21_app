<template>
  <a v-if="qiita.isShow" :href="qiita.url" class="qiita-card__link">
    <div class="qiita-card">
      <img :src="qiita.image" class="thumbnail" width="300" />
      <div class="inner">
        <p>{{ qiita.title }}</p>
        <div class="likes-count__wrapper">
          <Icon icon-name="heart" color="#FF846B" />
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
  margin: 0 2%;
  &:hover {
    .thumbnail {
      filter: opacity(0.7);
      transition: 0.4s;
    }
  }
  .qiita-card {
    background: white;
    width: 300px;
    border-radius: 8px;
    .thumbnail {
      width: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    .inner {
      height: 100px;
      padding: 8px;
      p {
        font-size: 14px;
      }
      .likes-count__wrapper {
        display: flex;
        align-items: center;
        margin-top: 4px;
        .likes-count__text {
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
