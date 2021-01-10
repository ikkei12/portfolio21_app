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
      // {
      //   title: 'HOME',
      //   path: '/',
      // },
      {
        title: 'Profile',
        path: '/profile',
      },
      {
        title: 'Product',
        path: '/products',
      },
      {
        title: 'Article',
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
  padding-right: 45px;
  z-index: 6;
  .link {
    margin-right: 30px;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }
    .link__text {
      font-weight: 400;
      color: #006666;
    }
  }
}
</style>
