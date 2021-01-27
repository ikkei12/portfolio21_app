<template>
  <header class="header">
    <nuxt-link
      v-for="(item, i) in headerItems"
      :key="'item' + i"
      :to="item.path"
      class="link"
    >
      <p class="link__text" :class="{ '--active': currentPath == item.name }">
        {{ item.title }}
      </p>
      <div
        class="link__border"
        :class="{ '--active': currentPath == item.name }"
      ></div>
    </nuxt-link>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@vue/composition-api'

export default defineComponent({
  setup(_props, context) {
    const currentPath = ref('')
    const headerItems: Array<{
      name: string
      title: string
      path: string
    }> = reactive([
      {
        name: '',
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
    const getCurrentPath = () => {
      const path = context.root.$route.path.split('/')
      currentPath.value = path[1]
    }
    // ページ遷移ごとに呼び出される処理
    context.root.$router.afterEach(() => {
      getCurrentPath()
    })

    getCurrentPath()
    return { currentPath, headerItems }
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
  z-index: 10;
  background: $secondary;
  width: 100%;
  box-shadow: 0 0 10px rgba(89, 89, 89, 0.072);
  justify-content: flex-end;

  .link {
    margin-right: 30px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:last-child {
      margin-right: 0;
    }

    .link__text {
      font-weight: 500;
      color: #fff;

      &.--active {
        padding-bottom: 3px;
        color: #066;
        font-weight: bold;
      }
    }

    .link__border {
      padding-top: 1px;
      height: 2px;
      width: 20%;

      &.--active {
        height: 0;
        border-bottom: 3px solid #066;
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
