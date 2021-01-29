<template>
  <div class="profile-page">
    <div class="profile-page__inner">
      <section class="top-view__wrapper">
        <ProfileInformationCard class="profile-page__card" />
        <div v-if="isPC" class="scroll-button__wrapper">
          <button
            v-scroll-to="'#second-view'"
            class="scroll-button ripple"
            aria-label="Scroll"
          >
            <Icon icon-name="arrowDown" color="#3b8070" />
          </button>
        </div>
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
import Icon from '@/components/v1/atoms/Icon.vue'
export default defineComponent({
  components: {
    ProfileInformationCard,
    ProfileAboutCard,
    ProfileCareerCard,
    Icon,
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
        if (currentPos > startPos - 100) {
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
    const isPC = ref(false)
    onMounted(() => {
      isPC.value = screen.width > 1040
      if (!isPC.value) return
      window.addEventListener('scroll', handleScroll)
    })
    onUnmounted(() => {
      if (!isPC.value) return
      window.removeEventListener('scroll', handleScroll, true)
    })
    return { isPC }
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

      .scroll-button__wrapper {
        position: absolute;
        bottom: 100px;
        left: 0;
        right: 0;
        margin: auto;
        display: flex;
        justify-content: center;

        .scroll-button {
          display: inline-block;
          background: #fff;
          font-size: 14px;
          border: 2px #3b8070 solid;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          outline: 0;
          cursor: pointer;
        }

        .scroll-button.ripple {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .scroll-button.ripple::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          z-index: -1;
          background: #3b8070;
          -webkit-animation: ripple 4s cubic-bezier(0.3, 0, 0.1, 0) infinite;
          animation: ripple 4s cubic-bezier(0.3, 0, 0.1, 0) infinite;
        }

        @keyframes ripple {
          0% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            opacity: 0;
          }

          10% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            opacity: 0.5;
          }

          30% {
            -webkit-transform: scale(1.6, 1.6);
            transform: scale(1.6, 1.6);
            opacity: 0;
          }

          31% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            opacity: 0;
          }

          50% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            opacity: 0.5;
          }

          70% {
            -webkit-transform: scale(1.6, 1.6);
            transform: scale(1.6, 1.6);
            opacity: 0;
          }

          71% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            opacity: 0;
          }

          90% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
            opacity: 0.5;
          }
        }
      }
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
        align-items: flex-start;
        padding: 80px 0 60px;
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
