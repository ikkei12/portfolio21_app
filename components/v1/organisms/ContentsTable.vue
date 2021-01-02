<template>
  <ul class="contents-table">
    <p>目次</p>
    <li
      v-for="link of page.toc"
      :key="link.id"
      :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
    >
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  props: {
    page: { type: Object as PropType<IContentDocument> },
  },
})
</script>
<style scoped lang="scss">
.contents-table {
  position: fixed;
  right: 1vw;
  top: 120px;
  padding: 50px 80px;
  //   box-shadow: 0px 0px 20px whitesmoke;
  border-radius: 20px;
  background: white;
}
</style>
