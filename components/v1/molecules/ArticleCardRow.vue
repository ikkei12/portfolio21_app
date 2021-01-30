<template>
  <div class="card">
    <img
      class="thumbnail"
      :src="content.thumbnail"
      alt="thumbnail"
      width="auto"
      height="100%"
    />
    <div class="inner">
      <p class="created-at">{{ content.createdDate }}</p>
      <p class="title">{{ content.title }}</p>
    </div>
  </div>
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
.card {
  display: flex;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 20px rgba(89, 89, 89, 0.072);

  .thumbnail {
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .inner {
    padding: 25px 15px;
    width: 100%;

    .title {
      color: black;
      font-weight: bold;
    }

    .created-at {
      color: grey;
      font-size: 13px;
      margin-bottom: 5px;
    }
  }
}
</style>
