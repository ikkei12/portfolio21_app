<template>
  <div class="profile-page">
    <div class="profile-page__inner">
      <section class="top-view__wrapper">
        <ProfileInformationCard class="profile-page__card" />
        <button v-scroll-to="'#second-view'">scroll</button>
      </section>
      <section id="second-view" class="second-view__wrapper">
        <ProfileAboutCard
          class="profile-page__card"
          :personal-info="personalInfo"
        />
        <ProfileCareerCard
          class="profile-page__card"
          :career-nodes="careerNodes"
        />
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
} from '@vue/composition-api'
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
  setup() {
    let startPos = 0
    // eslint-disable-next-line no-undef
    let timeoutId: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(timeoutId)
      // NOTE: timerを使う事でスクロール"終了時"にメソッドを呼べる
      timeoutId = setTimeout(function () {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop
        const currentPos = scrollTop
        if (currentPos > startPos) {
          scrollTo({
            top: window.innerHeight + 60,
            left: 0,
            behavior: 'smooth',
          })
        } else {
          scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
        startPos = currentPos
      }, 500)
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll, true)
    })
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
      height: 100vh;
      align-items: center;
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
      width: 100%;
      display: block;
      padding: 0 12px;
      .top-view__wrapper {
        height: unset;
        margin: 100px 0;
      }
      .second-view__wrapper {
        height: unset;
        flex-direction: column;
        justify-content: flex-start;
        .profile-page__card {
          width: 95%;
          height: unset;
          padding: 0;
          margin-bottom: 50px;
        }
      }
    }
  }
}
</style>
