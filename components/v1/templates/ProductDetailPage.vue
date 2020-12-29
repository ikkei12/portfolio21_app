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
    <Pagination
      :active-index="activeIndex"
      :length="contentLength"
      @onClickPaginationDot="onClickPaginationDot"
    />
    <div class="swiper-button-prev" @click="slidePrev" />
    <div class="swiper-button-next" @click="slideNext" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@vue/composition-api'
import Pagination from '@/components/v1/molecules/Pagination.vue'

export default defineComponent({
  components: { Pagination },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
  setup(props, _context) {
    const swiperRef = ref<HTMLImageElement>({})
    const activeIndex = ref<number>(1)
    const swiperOptions = {
      loop: true,
    }
    const contentLength = computed(() => {
      return props.product?.productContents?.length
    })

    const slideNext = () => {
      swiperRef.value.$swiper.slideNext()
      if (contentLength.value) {
        if (activeIndex.value >= contentLength.value) {
          changeSlideIndex(1)
          return
        }
      }
      activeIndex.value += 1
    }
    const slidePrev = () => {
      swiperRef.value.$swiper.slidePrev()
      if (activeIndex.value <= 1) {
        changeSlideIndex(contentLength?.value)
        return
      }
      activeIndex.value -= 1
    }
    const changeSlideIndex = (num: number | undefined) => {
      activeIndex.value = num
    }
    const onClickPaginationDot = (num: number) => {
      swiperRef.value.$swiper.slideTo(num)
      changeSlideIndex(num)
    }
    return {
      activeIndex,
      contentLength,
      slideNext,
      slidePrev,
      swiperRef,
      swiperOptions,
      onClickPaginationDot,
    }
  },
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding: 0 8vw;
  padding-top: 60px;
  position: relative;
  .swiper-button-next {
  }
}
</style>
