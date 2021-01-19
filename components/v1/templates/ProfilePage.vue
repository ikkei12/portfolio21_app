<template>
  <div class="profile-page">
    <div class="profile-page__inner">
      <div class="card__wrapper --info">
        <ProfileInformationCard class="profile-page__card" />
      </div>
      <div class="card__wrapper">
        <ProfileAboutCard class="profile-page__card" />
        <ProfileCareerCard
          class="profile-page__card"
          :career-nodes="careerNodes"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import ProfileInformationCard from '@/components/v1/molecules/ProfileInformationCard.vue'
import ProfileAboutCard from '@/components/v1/molecules/ProfileAboutCard.vue'
import ProfileCareerCard from '@/components/v1/molecules/ProfileCareerCard.vue'

export default defineComponent({
  components: {
    ProfileInformationCard,
    ProfileAboutCard,
    ProfileCareerCard,
  },
  props: {
    careerNodes: {
      type: Array as PropType<CareerNode[]>,
      default: [],
    },
  },
})
</script>
<style scoped lang="scss">
.profile-page {
  display: flex;
  justify-content: center;
  width: 100%;

  .profile-page__inner {
    width: 75%;
    display: flex;
    justify-content: center;

    .card__wrapper {
      width: 50%;
      padding: 60px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: center;
      overflow-y: scroll;
      &.--info {
        position: sticky;
        top: 0;
        height: 100vh;
      }
      &::-webkit-scrollbar {
        display: none;
      }
      .profile-page__card {
        width: 90%;
      }
    }
  }
}
@include tab {
  .profile-page {
    .profile-page__inner {
      width: 95%;
      display: block;
      :nth-child(2) {
        &.card__wrapper {
          padding-top: 0px;
        }
      }
      .card__wrapper {
        width: 100%;
        height: auto;
        overflow-y: unset;
        padding-top: 120px;
        &.--info {
          height: auto;
          position: unset;
        }
      }
    }
  }
}
</style>
