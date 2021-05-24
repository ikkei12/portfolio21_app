<template>
  <div class="thumbnail">
    <!-- TODO: 画像を毎回ランダムに持ってくる -->

    <picture
      class="image-wrapper --horizontal"
      :class="{ '--next': activeIndex == 4, '--active': activeIndex == 0 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/1.webp" />
      <img
        src="~/assets/images/top/jpg/1.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="490px"
        width="700px"
      />
    </picture>
    <picture
      class="image-wrapper --vertical"
      :class="{ '--active': activeIndex == 1 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/2.webp" />
      <img
        src="~/assets/images/top/jpg/2.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="650px"
        width="430px"
      />
    </picture>

    <picture
      class="image-wrapper --horizontal"
      :class="{ '--next': activeIndex == 1, '--active': activeIndex == 2 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/3.webp" />
      <img
        src="~/assets/images/top/jpg/3.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="490px"
        width="700px"
      />
    </picture>

    <picture
      class="image-wrapper --vertical"
      :class="{ '--next': activeIndex == 2, '--active': activeIndex == 3 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/4.webp" />
      <img
        src="~/assets/images/top/jpg/4.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="650px"
        width="430px"
      />
    </picture>
    <picture
      class="image-wrapper --vertical"
      :class="{ '--next': activeIndex == 3, '--active': activeIndex == 4 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/5.webp" />
      <img
        src="~/assets/images/top/jpg/5.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="650px"
        width="430px"
      />
    </picture>

    <picture
      class="image-wrapper --vertical"
      :class="{ '--next': activeIndex == 4, '--active': activeIndex == 5 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/6.webp" />
      <img
        src="~/assets/images/top/jpg/6.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="650px"
        width="430px"
      />
    </picture>
    <picture
      class="image-wrapper --vertical"
      :class="{ '--next': activeIndex == 5, '--active': activeIndex == 6 }"
    >
      <source type="image/webp" srcset="~/assets/images/top/webp/7.webp" />
      <img
        src="~/assets/images/top/jpg/7.jpg"
        class="thumbnail"
        alt="thumbnail"
        height="650px"
        width="430px"
      />
    </picture>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted, ref } from '@vue/composition-api'

export default defineComponent({
  components: {},
  setup() {
    const activeIndex = ref(0)
    const maxActiveIndex = ref(5)
    const timerID = setInterval(() => {
      if (activeIndex.value >= maxActiveIndex.value) activeIndex.value = 0
      else activeIndex.value++
    }, 4000)
    onUnmounted(() => {
      window.clearInterval(timerID)
    })
    return { activeIndex }
  },
})
</script>
<style scoped lang="scss">
.thumbnail {
  height: 100%;
  .image-wrapper {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    margin: auto;
    opacity: 0.2;
    transition: 1.5s;
    filter: blur(4px);
    &.--horizontal {
      height: 490px;
      width: 700px;
    }
    &.--vertical {
      height: 650px;
      width: 430px;
    }
    &.--active {
      opacity: 1;
      transition: 1.5s;
      z-index: 3;
      filter: blur(0);
    }
    &.--next {
      opacity: 0.4;
      z-index: 2;
    }
  }
}

@include tab {
  .thumbnail {
    .image-wrapper {
      top: 0;
      left: 0;
    }
  }
}
</style>
