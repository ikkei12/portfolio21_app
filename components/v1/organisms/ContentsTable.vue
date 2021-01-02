<template>
  <div class="contents-table__wrapper">
    <div class="contents-table">
      <h4>目次</h4>
      <ul ref="linkGroupRef">
        <li
          v-for="link of page.toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink
            v-scroll-to="{
              el: `#${link.text}`,
              onStart: changeActiveLink,
            }"
            to="#"
            >{{ link.text }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  props: {
    page: { type: Object as PropType<IContentDocument> },
  },
  setup(_props, _context) {
    const linkGroupRef = ref<HTMLElement>()
    const changeActiveLink = (clickedLink: HTMLElement) => {
      if (!linkGroupRef.value) return
      for (let i = 0; i < linkGroupRef.value?.children?.length; i++) {
        const link = linkGroupRef.value?.children[i]
        const targetLink = link.children[0]
        targetLink.classList.remove('--active')
        if (clickedLink.id === targetLink.textContent) {
          targetLink.classList.add('--active')
        }
      }
    }
    return { linkGroupRef, changeActiveLink }
  },
})
</script>
<style scoped lang="scss">
.contents-table__wrapper {
  width: 15%;
  .contents-table {
    position: fixed;
    right: 1vw;
    top: 120px;
    padding: 20px 50px;
    //   box-shadow: 0px 0px 20px whitesmoke;
    border-radius: 20px;
    background: white;
    li {
      list-style: circle;
      a {
        color: grey;
        text-decoration: none;
      }
      a {
        &.--active {
          color: #333;
        }
      }
    }
  }
}
</style>
