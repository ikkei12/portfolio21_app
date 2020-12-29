<template>
  <div class="product-detail__page">
    <swiper
      ref="swiperRef"
      :options="swiperOptions"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(productContent, i) in productContents"
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
    <div
      class="swiper-button-prev"
      :class="{ '--disabled': activeIndex === 1 }"
      @click="slidePrev"
    />
    <div
      class="swiper-button-next"
      :class="{ '--disabled': activeIndex === contentLength }"
      @click="slideNext"
    />
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
      slidesPerView: 1.4,
      spaceBetween: 70,
      slideToClickedSlide: true,
      centeredSlides: true,
    }
    const contentLength = computed(() => {
      return props.product?.productContents?.length
    })
    const productContents = computed(() => {
      return props.product.productContents
    })
    const slideNext = () => {
      swiperRef.value.$swiper.slideNext()
    }
    const slidePrev = () => {
      swiperRef.value.$swiper.slidePrev()
    }
    const changeSlideIndex = (num: number | undefined) => {
      activeIndex.value = num
    }
    const onClickPaginationDot = (num: number) => {
      swiperRef.value.$swiper.slideTo(num - 1)
      changeSlideIndex(num)
    }
    const onSlideChange = (e) => {
      changeSlideIndex(e.activeIndex + 1)
    }
    return {
      productContents,
      activeIndex,
      contentLength,
      slideNext,
      slidePrev,
      swiperRef,
      swiperOptions,
      onClickPaginationDot,
      onSlideChange,
    }
  },
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding-top: 60px;
  position: relative;
  .swiper-button-next {
  }
}
.swiper-slide {
  opacity: 0.4;
  &-active {
    opacity: 1;
  }
  &-next,
  &-prev {
    cursor: pointer;
  }
}
.swiper-button-prev {
  &.--disabled {
    display: none;
  }
}
.swiper-button-next {
  &.--disabled {
    display: none;
  }
}
</style>
