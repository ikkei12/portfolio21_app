<template>
  <div class="info__card">
    <div class="inner">
      <div class="profile-image__wrapper">
        <img
          src="https://storage.googleapis.com/portfolio21-56e7e.appspot.com/profile/avatar.jpg"
          alt="Profile image"
          class="profile-image"
        />
      </div>
      <h3 class="name-ja">Harashima Ikkei</h3>
      <p class="name-en">原島 一桂</p>
      <h3 class="title">Welcome to My Portfolio</h3>

      <LinkIconGroup />
      <a href="mailto:ikkei12.inw@gmail.com" class="link">
        <div class="link__inner">
          <div class="icon__wrapper">
            <img
              src="~/assets/images/logo/email.png"
              class="icon"
              alt="email icon"
            />
          </div>
          <p class="contact-msg">Contact Me</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LinkIconGroup from '@/components/v1/organisms/LinkIconGroup.vue'

export default defineComponent({
  components: {
    LinkIconGroup,
  },
})
</script>
<style scoped lang="scss">
.info__card {
  height: 60%;
  display: flex;
  justify-content: center;

  .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .profile-image__wrapper {
      width: 100px;
      height: 100px;
      margin: 0 0 20px;

      .profile-image {
        border-radius: 50%;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .name-ja {
      font-size: 2.5rem;
      font-weight: 500;
      letter-spacing: 0.15vw;
      white-space: nowrap;
    }

    .name-en {
      font-size: 20px;
      font-weight: 400;
      white-space: nowrap;
    }

    .title {
      font-size: 48px;
      font-weight: bold;
      margin: 30px 0;
      line-height: 50px;
    }

    .link {
      text-decoration: none;
      color: black;
      margin-top: 40px;

      .link__inner {
        background: #c62828;
        display: flex;
        align-items: center;
        border-radius: 4px;
        padding: 4px 16px 4px 4px;

        .icon__wrapper {
          height: 30px;
          width: 30px;
          display: block;

          .icon {
            height: 100%;
            width: 100%;
            border-radius: 50%;
          }
        }

        .contact-msg {
          color: #fff;
          font-weight: bold;
        }
      }

      p {
        margin-left: 8px;
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
