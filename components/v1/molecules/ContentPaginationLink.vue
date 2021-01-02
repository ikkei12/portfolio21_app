<template>
  <NuxtLink v-if="content" :to="'/articles/' + content.slug" class="content">
    <img class="content__thumbnail" :src="content.thumbnail" />
    <div class="content__inner">
      <p>{{ content.title }}</p>
    </div>
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
  width: 300px;
  border-radius: 10px;
  background: #fff;
  text-decoration: none;
  .content__thumbnail {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .content__inner {
    padding: 15px 15px;
    p {
      color: black;
    }
  }
}
</style>
