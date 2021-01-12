<template>
  <div>
    <Header />
    <Nuxt />
    <div id="overlay" ref="overlayRef" class="overlay"></div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
} from '@vue/composition-api'
import Header from './Header.vue'
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const overlayRef = ref()
    const timerID = ref()
    onMounted(() => {
      timerID.value = setTimeout(() => {
        overlayRef.value.style.display = 'none'
      }, 1500)
    })
    onUnmounted(() => {
      clearTimeout(timerID.value)
    })
    return {
      overlayRef,
    }
  },
})
</script>
<style lang="scss">
.overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: $primary;
  display: block;
  z-index: 7;
}
</style>
