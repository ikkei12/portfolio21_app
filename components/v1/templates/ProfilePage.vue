<template>
  <div class="profile-page">
    <div class="profile-page__inner">
      <div class="top-view__wrapper">
        <ProfileInformationCard class="profile-page__card" />
      </div>
      <div class="second-view__wrapper">
        <ProfileAboutCard
          class="profile-page__card"
          :personal-info="personalInfo"
        />
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
.profile-page {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  .profile-page__inner {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .top-view__wrapper {
      height: 100vh;
      width: 100%;
      padding-top: 60px;
      display: flex;
      align-items: center;
    }
    .second-view__wrapper {
      width: 100%;
      display: flex;
      .profile-page__card {
        width: 50%;
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
