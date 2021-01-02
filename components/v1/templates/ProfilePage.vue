<template>
  <div class="profile-page">
    <div class="profile-page__inner --info">
      <ProfileInformationCard class="profile-page__card" />
    </div>
    <div class="profile-page__inner">
      <ProfileAboutCard class="profile-page__card" />
      <ProfileCareerCard class="profile-page__card" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import ProfileInformationCard from '@/components/v1/molecules/ProfileInformationCard.vue'
import ProfileAboutCard from '@/components/v1/molecules/ProfileAboutCard.vue'
import ProfileCareerCard from '@/components/v1/molecules/ProfileCareerCard.vue'

export default defineComponent({
  components: {
    ProfileInformationCard,
    ProfileAboutCard,
    ProfileCareerCard,
  },
})
</script>
<style scoped lang="scss">
.profile-page {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  .profile-page__inner {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    &.--info {
      position: fixed;
      left: 0;
    }
    .profile-page__card {
      width: 90%;
    }
  }
}
</style>
