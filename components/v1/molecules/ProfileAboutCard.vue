<template>
  <Card class="about__card">
    <h3 class="title">About</h3>
    <div class="flex">
      <Icon icon-name="house" :size="18" color="#333" />
      <p>Tokyo</p>
    </div>
    <div class="flex">
      <Icon icon-name="birthDay" :size="18" color="#333" />
      <p>{{ age }}歳</p>
    </div>
    <div class="flex">
      <Icon icon-name="building" :size="18" color="#333" />
      <p>慶應義塾大学 / forStartups</p>
    </div>
  </Card>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
import Icon from '@/components/v1/atoms/Icon.vue'
export default defineComponent({
  components: {
    Card,
    Icon,
  },
  setup(_props, _context) {
    const age = computed(() => {
      return calculcateCurrentAge('1998-03-11 00:00:00')
    })

    const calculcateCurrentAge = (birthDay: string | number | Date) => {
      const diff = new Date(+Date.now() - +new Date(birthDay))
      return diff.getUTCFullYear() - 1970
    }

    return { age }
  },
})
</script>
<style scoped lang="scss">
.about__card {
  border-radius: 20px;
  margin-bottom: 50px;
  .title {
    margin-bottom: 8px;
  }
  .flex {
    display: flex;
    align-items: center;
    p {
      margin-left: 8px;
    }
  }
}
</style>
