<template>
  <div class="pagination">
    <span
      v-for="i in length"
      :key="'pagination' + i"
      class="pagination__dot"
      :class="{ '--active': i == activeIndex }"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    activeIndex: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  setup() {},
})
</script>
<style lang="scss" scoped>
.pagination {
  width: 100%;
  height: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 10px;
  z-index: 3;
  .pagination__dot {
    border-radius: 50%;
    border: 1px solid rgb(191, 191, 191);
    width: 15px;
    height: 15px;
    margin-right: 8px;
    &.--active {
      background: rgb(212, 212, 212);
    }
  }
}
</style>
