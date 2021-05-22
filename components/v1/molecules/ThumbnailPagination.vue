<template>
  <div class="thumbnail-pagination">
    <div
      v-for="(thumbnail, i) in thumbnails"
      :key="`thumbnail${i}`"
      class="thumbnail-pagination__item"
      :class="{ '--active': activeIndex == i }"
      @click="onPaginationClick(i)"
    >
      <img
        :src="thumbnail"
        height="100%"
        width="auto"
        class="thumbnail-pagination__image"
        alt="product thumbnail"
      />
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
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .thumbnail-pagination__item {
    margin-right: 3%;
    height: 75px;
    background: $secondary__thin;
    cursor: pointer;
    filter: opacity(0.4);
    padding: 5px 8px;
    border-radius: 5px;

    .thumbnail-pagination__image {
      height: 100%;
      object-fit: cover;
    }

    &.--active {
      filter: opacity(1);
      border: 3px solid $primary;
    }
  }
}
@include tab {
  .thumbnail-pagination .thumbnail-pagination__item {
    height: 50px;
  }
}
@include sp {
  .thumbnail-pagination {
    justify-content: start;
  }

  .thumbnail-pagination .thumbnail-pagination__item {
    height: 50px;
  }
}
</style>
