<template>
  <div class="qiita-cards__group">
    <QiitaCard
      v-for="(qiita, i) in qiitaArticles"
      :key="`qiita${i}`"
      :qiita="qiita"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import QiitaCard from '@/components/v1/molecules/QiitaCard.vue'
import { QiitaArticle } from '~/@types/Ogp'
export default defineComponent({
  components: { QiitaCard },
  props: {
    qiitaArticles: {
      type: Array as PropType<QiitaArticle[]>,
      default: [],
    },
  },
})
</script>
<style scoped lang="scss">
.qiita-cards__group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
