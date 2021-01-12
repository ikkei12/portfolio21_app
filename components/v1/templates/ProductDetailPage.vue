<template>
  <div class="product-detail__page">
    <div class="product-detail__inner">
      <div class="upper">
        <h1 class="title">
          {{ product.title }} {{ product.title }}{{ product.title }}
          ポートフォリオです ポートフォリオです ポートフォリオです
        </h1>
        <p class="created-date">{{ product.createdDate }}</p>
      </div>
      <ProductContentSection
        v-for="(content, i) in product.contents"
        :key="`content-
          ${i}`"
        :content="content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Pagination from '@/components/v1/molecules/Pagination.vue'
import Title from '@/components/v1/atoms/Title.vue'
import ProductContentSection from '@/components/v1/organisms/ProductContentSection.vue'
export default defineComponent({
  components: { Pagination, Title, ProductContentSection },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
  setup(props) {
    console.log(props.product)
  },
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  .product-detail__inner {
    background: white;
    width: 75%;
    min-height: 100vh;
    padding: 60px 0;
    margin: 40px 0;
    .upper {
      display: flex;
      justify-content: space-between;
      padding: 0 4%;
      margin-bottom: 30px;
      .title {
        font-size: 2.5rem;
        padding-right: 3%;
        line-height: 3.2rem;
      }
      .created-date {
        color: grey;
      }
    }
  }
  .swiper__wrapper {
    position: relative;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
