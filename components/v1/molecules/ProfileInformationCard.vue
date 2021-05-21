<template>
  <div class="info__card">
    <div class="inner">
      <h3 class="name-en">Ikkei Harashima</h3>
      <h3 class="title">Portfolio</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {},
})
</script>
<style scoped lang="scss">
.info__card {
  width: 75%;
  display: flex;
  justify-content: space-between;

  .inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

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
