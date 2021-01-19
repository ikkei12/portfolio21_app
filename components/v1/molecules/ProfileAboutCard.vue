<template>
  <Card class="about__card">
    <h2 class="title">About</h2>
    <div class="flex">
      <Icon icon-name="house" :size="16" color="#7db5b5" />
      <p>{{ personalInfo.liveIn }}</p>
    </div>
    <div class="flex">
      <Icon icon-name="birthDay" :size="16" color="#7db5b5" />
      <p>{{ personalInfo.age }}歳</p>
    </div>
    <div class="flex">
      <Icon icon-name="building" :size="16" color="#7db5b5" />
      <p>{{ personalInfo.organisation }}</p>
    </div>
  </Card>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
import Icon from '@/components/v1/atoms/Icon.vue'
export default defineComponent({
  components: {
    Card,
    Icon,
  },
  props: {
    personalInfo: {
      type: Object as PropType<PersonalInformation>,
      default: () => {
        return {
          liveIn: '',
          age: 0,
          organisation: '',
        }
      },
    },
  },
})
</script>
<style scoped lang="scss">
.about__card {
  border-radius: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  .title {
    margin-bottom: 8px;
    color: $primary;
  }
  .flex {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    p {
      margin-left: 8px;
    }
  }
}
</style>
