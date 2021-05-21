<template>
  <div ref="containerRef" class="layout__container">
    <Header />
    <Nuxt />
    <!-- <div id="overlay" ref="overlayRef" class="overlay">
      <div class="overlay__inner">
        <div id="lottie" ref="lottieRef" />
      </div>
    </div> -->
    <LinkIconGroup />
  </div>
</template>

<script lang="ts">
import LinkIconGroup from '@/components/v1/organisms/LinkIconGroup.vue'

import {
  defineComponent,
  // onMounted,
  // onUnmounted,
  // ref,
} from '@vue/composition-api'
// import lottie from 'lottie-web'
// import animationData from '@/assets/images/lottie/coffee.json'
import Header from './Header.vue'

export default defineComponent({
  components: {
    Header,
    LinkIconGroup,
  },
  // const overlayRef = ref()
  // const timerID = ref()
  // const lottieRef = ref()
  // const containerRef = ref()
  // onMounted(() => {
  //   lottie.loadAnimation({
  //     container: lottieRef.value,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     animationData,
  //   })
  // })
  //   if (process.client) {
  //     window.addEventListener('load', () => {
  //       timerID.value = setTimeout(() => {
  //         if (overlayRef.value) {
  //           overlayRef.value.classList.add('--loaded')
  //         }
  //         if (containerRef.value) {
  //           containerRef.value.classList.add('--loaded')
  //         }
  //       }, 1500)
  //     })
  //   }

  //   onUnmounted(() => {
  //     clearTimeout(timerID.value)
  //   })
  //   return {
  //     overlayRef,
  //     lottieRef,
  //     containerRef,
  //   }
  // },
})
</script>
<style lang="scss">
// .layout__container {
//   position: relative;
//   height: 100vh;
//   overflow: hidden;
//   &.--loaded {
//     overflow: unset;
//     height: unset;
//   }
//   .overlay {
//     position: absolute;
//     top: 0;
//     height: 100%;
//     width: 100vw;
//     overflow: hidden;
//     background: $primary;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     z-index: 7;
//     &.--loaded {
//       display: none;
//     }
//     .overlay__inner {
//       width: 15%;
//     }
//   }
// }
// @include tab {
//   .layout__container {
//     .overlay {
//       .overlay__inner {
//         width: 25%;
//       }
//     }
//   }
// }
// @include sp {
//   .layout__container {
//     .overlay {
//       .overlay__inner {
//         width: 30%;
//       }
//     }
//   }
// }
</style>
