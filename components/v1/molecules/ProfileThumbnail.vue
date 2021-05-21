<template>
  <div class="thumbnail">
    <!-- TODO: 画像を毎回ランダムに持ってくる -->
    <div
      class="image-wrapper"
      :class="{ '--next': activeIndex == 4, '--active': activeIndex == 0 }"
    >
      <img
        src="~/assets/images/top/1.webp"
        class="icon"
        alt="icon"
        height="490px"
        width="700px"
      />
    </div>
    <div class="image-wrapper" :class="{ '--active': activeIndex == 1 }">
      <img
        src="~/assets/images/top/2.webp"
        class="icon"
        alt="icon"
        height="650px"
        width="430px"
      />
    </div>
    <div
      class="image-wrapper"
      :class="{ '--next': activeIndex == 1, '--active': activeIndex == 2 }"
    >
      <img
        src="~/assets/images/top/3.webp"
        class="icon"
        alt="icon"
        height="490px"
        width="700px"
      />
    </div>
    <div
      class="image-wrapper"
      :class="{ '--next': activeIndex == 2, '--active': activeIndex == 3 }"
    >
      <img
        src="~/assets/images/top/4.webp"
        class="icon"
        alt="icon"
        height="650px"
        width="430px"
      />
    </div>
    <div
      class="image-wrapper"
      :class="{ '--next': activeIndex == 3, '--active': activeIndex == 4 }"
    >
      <img
        src="~/assets/images/top/5.webp"
        class="icon"
        alt="icon"
        height="650px"
        width="430px"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted, ref } from '@vue/composition-api'

export default defineComponent({
  components: {},
  setup() {
    const activeIndex = ref(0)
    const maxActiveIndex = ref(4)
    const timerID = setInterval(() => {
      if (activeIndex.value >= maxActiveIndex.value) activeIndex.value = 0
      else activeIndex.value++
    }, 5000)
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
    height: fit-content;
    opacity: 0.2;
    transition: 1.5s;
    filter: blur(4px);
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
