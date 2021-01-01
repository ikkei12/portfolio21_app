<template>
  <NuxtLink v-if="content" :to="'/articles/' + content.slug" class="content">
    <img class="content__thumbnail" :src="content.thumbnail" />
    {{ content.title }}
  </NuxtLink>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  props: {
    content: { type: Object as PropType<IContentDocument> },
  },
})
</script>
<style scoped lang="scss">
.content {
  .content__thumbnail {
    width: 100%;
  }
}
</style>
