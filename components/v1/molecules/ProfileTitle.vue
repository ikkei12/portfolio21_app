<template>
  <div class="profile-title">
    <h3 class="name-en">Ikkei Harashima</h3>
    <h3 class="title">Portfolio</h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {},
})
</script>
<style scoped lang="scss">
.profile-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;
  .name-en {
    font-size: 4rem;
    white-space: nowrap;
    font-family: Roboto;
    font-style: italic;
    font-weight: 500;
  }

  .title {
    font-size: 4rem;
    font-family: Roboto;
    font-style: italic;
    font-weight: 500;
    margin-top: 10px;
    line-height: 50px;
  }
}

@include tab {
  .profile-title {
    padding: 0 5%;

    .title,
    .name-en {
      color: white;
      font-size: 3rem;
    }
  }
}

@include sp {
  .profile-title {
    .link {
      margin-top: 2vh;
    }

    .title,
    .name-en {
      color: white;
      font-size: 2rem;
    }
  }
}
</style>
