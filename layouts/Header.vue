<template>
  <header class="header">
    <nuxt-link
      v-for="(item, i) in headerItems"
      :key="'item' + i"
      :to="item.path"
      class="link"
    >
      <p class="link__text">{{ item.title }}</p>
    </nuxt-link>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const headerItems: Array<{ title: string; path: string }> = reactive([
      {
        title: 'HOME',
        path: '/',
      },
      {
        title: 'PROFILE ',
        path: '/profile',
      },
      {
        title: 'PRODUCT',
        path: '/products',
      },
      {
        title: 'ARTICLE',
        path: '/articles',
      },
    ])

    return { headerItems }
  },
})
</script>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 60px;
  padding-right: 32px;
  z-index: 5;
  .link {
    margin-right: 16px;
    text-decoration: none;
    .link__text {
      font-weight: bold;
      color: black;
    }
  }
}
</style>
