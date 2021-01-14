<template>
  <header class="header">
    <nuxt-link
      v-for="(item, i) in headerItems"
      :key="'item' + i"
      :to="item.path"
      class="link"
    >
      <p class="link__text">{{ item.title }}</p>
      <div class="link__border"></div>
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
        title: 'Home',
        path: '/',
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
@keyframes slideIn {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
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
      color: #006666;
      color: #fff;
    }
    .link__border {
      padding-top: 1px;
      height: 2px;
    }
    &:hover {
      .link__border {
        height: 0;
        border-bottom: 2px solid #fff;
        animation: slideIn 0.5s;
      }
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
