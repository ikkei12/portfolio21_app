<template>
  <Card class="about__card">
    <h2 class="title">About Me</h2>
    <div class="flex">
      <Icon icon-name="houseFill" :size="20" color="#333" />
      <p>
        live in <strong>{{ personalInfo.liveIn }}</strong>
      </p>
    </div>
    <div class="flex">
      <Icon icon-name="birthDayFill" :size="20" color="#333" />
      <p>
        born in <strong>1998.03.11 ({{ personalInfo.age }} y.o)</strong>
      </p>
    </div>
    <div class="flex">
      <Icon icon-name="buildingFill" :size="20" color="#333" />
      <p>
        student of <strong>{{ personalInfo.university }} </strong>and member of
        <strong>{{ personalInfo.organisation }}</strong>
      </p>
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
  height: 50%;
  .title {
    margin-bottom: 16px;
    color: $primary;
  }
  .flex {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    p {
      margin-left: 8px;
    }
  }
}
</style>
