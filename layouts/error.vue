<template>
  <div class="page__inner">
    <h2 class="title">お探しのページが見つかりませんでした</h2>
    <p>URLに間違いないか確認し、再度アクセスを試してください。</p>
    <p>また、つながらない場合は時間をおいて再度アクセスしてください。</p>
  </div>
</template>

<style scoped lang="scss">
.page__inner {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    margin-bottom: 50px;
    color: #333;
  }
}
</style>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  layout: 'error',
  props: ['error'],
})
</script>
