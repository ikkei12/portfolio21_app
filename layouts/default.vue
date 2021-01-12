<template>
  <div ref="containerRef" class="layout__container">
    <Header />
    <Nuxt />
    <div id="overlay" ref="overlayRef" class="overlay">
      <div class="overlay__inner">
        <div id="lottie" ref="lottieRef" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@vue/composition-api'
import lottie from 'lottie-web'
import animationData from '@/assets/images/lottie/coffee.json'
import Header from './Header.vue'
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const overlayRef = ref()
    const timerID = ref()
    const lottieRef = ref()
    const containerRef = ref()
    onMounted(() => {
      lottie.loadAnimation({
        container: lottieRef.value, // document.getElementbyId('lottie') などでも OK
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      })
    })
    timerID.value = setTimeout(() => {
      if (overlayRef.value) {
        overlayRef.value.style.display = 'none'
      }
      if (containerRef.value) {
        containerRef.value.style.overflow = 'unset'
        containerRef.value.style.height = 'unset'
      }
    }, 1500)
    onUnmounted(() => {
      clearTimeout(timerID.value)
    })
    return {
      overlayRef,
      lottieRef,
      containerRef,
    }
  },
})
</script>
<style lang="scss">
.layout__container {
  position: relative;
  height: 100vh;
  overflow: hidden;
  .overlay {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100vw;
    overflow: hidden;
    background: $primary;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 7;
    .overlay__inner {
      width: 15%;
    }
  }
}
@include tab {
  .layout__container {
    .overlay {
      .overlay__inner {
        width: 25%;
      }
    }
  }
}
@include sp {
  .layout__container {
    .overlay {
      .overlay__inner {
        width: 30%;
      }
    }
  }
}
</style>
