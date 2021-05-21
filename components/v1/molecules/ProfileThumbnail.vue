<template>
  <div class="thumbnail">
    <div class="image-wrapper" :class="{ '--active': activeIndex == 0 }">
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
        height="600px"
        width="400px"
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
    const timerID = setInterval(() => {
      if (activeIndex.value >= 1) activeIndex.value = 0
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
    opacity: 0;
    transition: 1.5s;
    &.--active {
      opacity: 1;
      transition: 1.5s;
    }
  }
}

@include sp {
}
</style>
