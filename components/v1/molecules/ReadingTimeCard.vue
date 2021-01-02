<template>
  <Card class="reading-time__card">
    <h4>記事を読むのにかかる時間</h4>
    <div class="reading-time__inner">
      <Icon iconname="clock" />
      <p class="reading-time">{{ Math.round(readingTime / 1000) }}min</p>
    </div>
  </Card>
</template>
<script lang="ts">
import Card from '@/components/v1/molecules/Card.vue'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    readingTime: {
      type: Number,
    },
  },
  components: {
    Card,
  },
})
</script>
<style scoped lang="scss">
.reading-time__card {
  position: fixed;
  right: 50px;
  top: 300px;
  width: 15%;
  h4 {
    font-size: 12px;
    font-weight: 100;
    margin-bottom: 7px;
  }
  .reading-time__inner {
    display: flex;
    align-items: center;
    .reading-time {
      margin-left: 4px;
      font-weight: bold;
    }
  }
}
</style>
