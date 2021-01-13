<template>
  <div class="info__card">
    <div class="inner">
      <img
        :src="storageURL + '/profile/avatar.jpg'"
        alt="Profile
      image"
        class="profile-image"
      />
      <h3 class="name-ja">原島 一桂</h3>
      <p class="name-en">Harashima Ikkei</p>
      <LinkIconGroup />
      <a href="mailto:ikkei12.inw@gmail.com" class="link">
        <img
          src="~/assets/images/logo/email.png"
          class="icon"
          alt="email icon"
        />
        <p>ikkei12.inw@gmail.com</p>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
import LinkIconGroup from '@/components/v1/organisms/LinkIconGroup.vue'

export default defineComponent({
  components: {
    Card,
    LinkIconGroup,
  },
  setup() {
    const storageURL = process.env.STORAGE_URL
    return { storageURL }
  },
})
</script>
<style scoped lang="scss">
.info__card {
  height: 70%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .profile-image {
      border-radius: 20px;
    }
    .name-ja {
      font-size: 2.5rem;
      font-weight: 100;
      margin-top: 4vh;
      white-space: nowrap;
    }
    .name-en {
      font-size: 1.8rem;
      font-weight: 100;
      letter-spacing: 0.15vw;
      margin-bottom: 4vh;
      white-space: nowrap;
    }
    .link {
      height: 30px;
      display: flex;
      text-decoration: none;
      color: black;
      align-items: center;
      margin-top: 4vh;
      .icon {
        height: 100%;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
}
@include sp {
  .info__card {
    .inner {
      .link {
        margin-top: 2vh;
      }
    }
  }
}
</style>
