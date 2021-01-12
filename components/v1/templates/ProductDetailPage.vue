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
      <div class="carousel__wrapper">
        <swiper
          ref="swiperRef"
          :options="swiperOptions"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(content, i) in product.contents"
            :key="'slide' + i"
          >
            <div class="swiper-slide__inner">
              <img
                :src="content.image.url"
                style="width: 100%"
                class="swiper-slide__img"
              />
            </div>
          </swiper-slide>
        </swiper>
        <ThumbnailPagination
          :thumbnails="
            product.contents.map((content) => {
              return content.image.url
            })
          "
          :active-index="activeIndex"
          @onPaginationClick="changeCurrentSlide"
        />
      </div>
      <div class="descriptions-group">
        <p>作成日: {{ product.createdDate }}</p>
        <p
          v-for="(content, i) in product.contents"
          :key="`desc-${i}`"
          class="description"
        >
          {{ content.description }}
        </p>
        <div class="product-url__wrapper">
          <p>サイトのURL:</p>
          <a
            :href="product.url"
            target="_blank"
            rel="noopener noreferrer"
            class="product-url"
          >
            <p>{{ product.url }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import Pagination from '@/components/v1/molecules/Pagination.vue'
import Title from '@/components/v1/atoms/Title.vue'
import ThumbnailPagination from '@/components/v1/molecules/ThumbnailPagination.vue'
import SwiperClass from 'swiper'
import { SwiperDOM } from '~/types/Swiper'
export default defineComponent({
  components: { Pagination, Title, ThumbnailPagination },
  props: {
    product: {
      type: Object as PropType<Product>,
      require: true,
    },
  },
  setup(_props) {
    const swiperRef = ref<SwiperDOM>()
    const activeIndex = ref<number>(0)

    const swiperOptions = {
      slidesPerView: 1,
      spaceBetween: 70,
      centeredSlides: true,
    }
    const changeSlideIndex = (i: number) => {
      activeIndex.value = i
    }
    const onSlideChange = (e: SwiperClass) => {
      changeSlideIndex(e.activeIndex)
    }
    const changeCurrentSlide = (i: number) => {
      swiperRef.value!.$swiper.slideTo(i)
    }
    return {
      swiperOptions,
      swiperRef,
      activeIndex,
      changeCurrentSlide,
      onSlideChange,
    }
  },
})
</script>
<style scoped lang="scss">
.product-detail__page {
  padding-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  .product-detail__inner {
    width: 80%;
    min-height: 100vh;
    margin: 40px 0;
    padding: 60px 4%;
    .upper {
      display: flex;
      flex-direction: column;
      padding: 0 4%;
      margin-bottom: 30px;
      .title {
      }
      .created-date {
        color: grey;
        margin-top: 8px;
      }
    }
  }
  .carousel__wrapper {
    padding: 0 15%;
    .swiper-slide__inner {
      background: #fafafa;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3% 5%;
    }
  }
  .descriptions-group {
    padding: 0 20%;
    margin-top: 5%;
    p {
      font-size: 20px;
    }
    .description {
      white-space: pre-line;
      margin-bottom: 2%;
    }
    .product-url__wrapper {
      display: flex;
      margin-top: 2%;
      align-items: center;
      .product-url {
        font-weight: bold;
        color: $primary;
        display: block;
        text-decoration: none;
        margin-left: 4px;
      }
    }
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
