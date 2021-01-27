<template>
  <div class="product-detail__page">
    <div class="swiper__wrapper">
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
            <img
              :src="productContent.image.url"
              style="width: 100%;"
              alt="content image"
            />
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
    <p
      v-for="(productContent, i) in productContents"
      :key="'slide' + i"
      class="description"
      :class="{ '--active': activeIndex - 1 == i }"
    >
      {{ productContent.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@vue/composition-api'
import Pagination from '@/components/v1/molecules/Pagination.vue'
import SwiperClass from 'swiper'
import { SwiperDOM } from '@/@types/Swiper'
export default defineComponent({
  components: { Pagination },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
  setup(props, _context) {
    const swiperRef = ref<SwiperDOM>()
    const activeIndex = ref<number>(1)
    const swiperOptions = {
      slidesPerView: 1.4,
      spaceBetween: 70,
      slideToClickedSlide: true,
      centeredSlides: true,
    }
    const contentLength = computed(() => {
      return props.product?.contents?.length
    })
    const productContents = computed(() => {
      if (!props.product) return
      return props.product.contents
    })

    const slideNext = () => {
      swiperRef.value!.$swiper.slideNext()
    }
    const slidePrev = () => {
      swiperRef.value!.$swiper.slidePrev()
    }
    const changeSlideIndex = (num: number | undefined) => {
      if (!num) return
      activeIndex.value = num
    }
    const onClickPaginationDot = (num: number) => {
      swiperRef.value!.$swiper.slideTo(num - 1)
      changeSlideIndex(num)
    }
    const onSlideChange = (e: SwiperClass) => {
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
  height: 100vh;
  width: 100%;
  position: relative;
  animation: fadeIn 2s;

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

.swiper-container {
  .swiper-slide {
    opacity: 0.4;
    width: 500px;

    &-active {
      opacity: 1;
    }

    &-next,
    &-prev {
      cursor: pointer;
    }
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

.description {
  opacity: 0;
  filter: blur(4px);
  position: absolute;

  &.--active {
    transition: 1s;
    opacity: 1;
    filter: blur(0);
  }
}
</style>
