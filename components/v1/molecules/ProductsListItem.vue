<template>
  <nuxt-link
    class="list-item__link"
    :to="'/products/' + product.id"
    :class="{ '--active': active }"
  >
    <div class="list-item" @mouseover="onMouseOver">
      <p class="list-item__index">{{ itemIndex }}.</p>
      <p class="list-item__text">{{ product.title }}</p>
      <p class="list-item__created-date">{{ createdDate }}</p>
    </div>
  </nuxt-link>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props, context) {
    const onMouseOver = () => {
      context.emit('onMouseOver', props.product)
    }
    const itemIndex = computed(() => {
      if (props.index <= 9) return '0' + props.index
      else return props.index
    })
    const createdDate = computed(() => {
      let date = ''
      if (!props.product.createdDate) return
      new Date(props.product.createdDate)
        .toLocaleDateString()
        .split('/')
        .forEach((item, i) => {
          const formatted = item.length < 2 ? '0' + item : item
          if (i === 2) date += formatted
          else date += formatted + '-'
        })

      return date
    })
    return { onMouseOver, itemIndex, createdDate }
  },
})
</script>
<style scoped lang="scss">
.list-item__link {
  text-decoration: none;
  display: inline-block;
  width: 100%;
  margin-top: 2vh;
  .list-item {
    display: flex;
    align-items: center;
    padding: 3vh 2vw;
    cursor: pointer;
    border-bottom: 2px solid rgb(241, 241, 241);
    position: relative;
    .list-item__index {
      font-size: 1rem;
      margin-right: 3vw;
      color: rgb(210, 210, 210);
    }
    .list-item__text {
      font-weight: bold;
      font-size: 1.5rem;
      color: rgb(210, 210, 210);
    }
    .list-item__created-date {
      color: rgb(121, 121, 121);
      position: absolute;
      top: 5px;
      right: 8px;
      opacity: 0;
    }
  }
  &.--active {
    background: #0066660b;
    .list-item__index {
      color: black;
    }
    .list-item__text {
      color: black;
    }
    .list-item__created-date {
      opacity: 1;
    }
  }
}
</style>
