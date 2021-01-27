<template>
  <div class="product-content__section">
    <div class="thumbnail__wrapper">
      <img class="thumbnail" :src="content.image.url" alt="thumbnail" />
    </div>
    <div class="inner">
      <div class="content-title__wrapper">
        <h3 class="content-title">
          {{ content.title }}
        </h3>
      </div>
      <div class="description__wrapper">
        <p class="description">
          {{ content.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    content: {
      type: Object as PropType<ProductContent>,
    },
  },
})
</script>

<style scoped lang="scss">
.product-content__section {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .thumbnail__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;

    .thumbnail {
      width: 90%;
    }
  }

  .inner {
    width: 60%;
    padding: 80px 0;

    .content-title__wrapper {
      margin: 30px 0 15px;
    }

    .description__wrapper {
      .description {
      }
    }
  }
}
</style>
