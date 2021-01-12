<template>
  <div class="thumbnail-pagination">
    <div
      v-for="(thumbnail, i) in thumbnails"
      :key="`thumbnail${i}`"
      class="thumbnail-pagination__item"
      :class="{ '--active': activeIndex == i }"
      @click="onPaginationClick(i)"
    >
      <img :src="thumbnail" class="thumbnail-pagination__image" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    thumbnails: {
      type: Array,
    },
    activeIndex: {
      type: Number,
    },
  },
  setup(_props, context) {
    const onPaginationClick = (i: Number) => {
      context.emit('onPaginationClick', i)
    }

    return { onPaginationClick }
  },
})
</script>
<style lang="scss">
.thumbnail-pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .thumbnail-pagination__item {
    margin-right: 3%;
    cursor: pointer;
    .thumbnail-pagination__image {
      width: 130px;
      object-fit: cover;
      border-radius: 8px;
      filter: opacity(0.4);
    }
    &.--active {
      .thumbnail-pagination__image {
        border: 2px solid $primary;
        filter: opacity(1);
      }
    }
  }
}
</style>
