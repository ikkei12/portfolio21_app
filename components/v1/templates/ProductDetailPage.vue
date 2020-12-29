<template>
  <div class="product-detail__page">
    <swiper ref="swiperRef" :options="swiperOptions">
      <swiper-slide
        v-for="(productContent, i) in product.productContents"
        :key="'slide' + i"
      >
        <div>
          <img :src="productContent.image.url" style="width: 100%" />
        </div>
      </swiper-slide>
    </swiper>
    <Pagination current="" :length="product.productContents.length" />
    <div class="swiper-button-prev" @click="slidePrev" />
    <div class="swiper-button-next" @click="slideNext" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import { Pagination } from '@/components/v1/molecules/Pagination.vue'

export default defineComponent({
  components: { Pagination },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
  setup(_props, _context) {
    const swiperRef = ref<HTMLImageElement>({})
    const swiperOptions = {
      loop: true,
    }
    const slideNext = () => {
      swiperRef.value.$swiper.slideNext()
    }
    const slidePrev = () => {
      swiperRef.value.$swiper.slidePrev()
    }

    return { slideNext, slidePrev, swiperRef, swiperOptions }
  },
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding: 0 8vw;
  padding-top: 60px;
  .swiper-button-next {
  }
}
</style>
