<template>
  <header class="header">
    <nuxt-link
      v-for="(item, i) in headerItems"
      :key="'item' + i"
      :to="item.path"
      class="link"
    >
      <p class="link__text">
        {{ item.title }}
      </p>
      <div class="link__border"></div>
    </nuxt-link>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const headerItems: Array<{
      name: string
      title: string
      path: string
    }> = reactive([
      {
        name: 'home',
        title: 'Home',
        path: '/',
      },
      {
        name: 'products',
        title: 'Product',
        path: '/products',
      },
      {
        name: 'articles',
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
  background: $secondary;
  width: 100%;
  box-shadow: 0 0px 10px rgba(89, 89, 89, 0.072);
  justify-content: flex-end;
  .link {
    margin-right: 30px;
    text-decoration: none;
    &:last-child {
      margin-right: 0;
    }
    .link__text {
      font-weight: 500;
      color: #fff;
    }
    .link__border {
      padding-top: 1px;
      height: 2px;
      width: 20%;
    }
  }
  .nuxt-link-active {
    display: flex;
    flex-direction: column;
    align-items: center;
    .link__text {
      padding-bottom: 3px;
      color: #006666;
      font-weight: bold;
    }
    .link__border {
      height: 0;
      border-bottom: 3px solid #006666;
    }
  }
}
@include sp {
  .header {
    padding-right: 16px;
    .link {
      margin-right: 12px;
    }
  }
}
</style>
