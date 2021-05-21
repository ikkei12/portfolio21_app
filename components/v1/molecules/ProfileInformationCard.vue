<template>
  <div class="info__card">
    <div class="inner">
      <!-- <div class="profile-image__wrapper">
        <img
          src="~/assets/images/profile.webp"
          alt="Profile image"
          class="profile-image"
          width="230px"
          height="230px"
        />
      </div> -->
      <h3 class="name-en">Ikkei Harashima</h3>
      <!-- <p class="name-ja">原島 一桂</p> -->
      <h3 class="title">Portfolio</h3>

      <LinkIconGroup />
      <a href="mailto:ikkei12.inw@gmail.com" class="link">
        <div class="link__inner">
          <div class="icon__wrapper">
            <img
              src="~/assets/images/logo/email.webp"
              class="icon"
              alt="email icon"
              height="100px"
              width="100px"
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
      font-size: 2.5rem;
      white-space: nowrap;
      font-family: Roboto;
      font-style: italic;
      font-weight: 500;
    }

    .title {
      font-size: 48px;
      font-family: Roboto;
      font-style: italic;
      font-weight: 500;
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
