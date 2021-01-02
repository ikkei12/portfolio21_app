<template>
  <Card>
    <img
      src="~/assets/images/profile.jpg"
      alt="Profile image"
      class="profile-image"
    />
    <h3>原島 一桂</h3>
    <p>Ikkei Harashima</p>
    <LinkIconGroup />
    <a href="mailto:ikkei12.inw@gmail.com" class="link">
      <img src="~/assets/images/logo/email.png" class="icon" alt="email icon" />
      <p>ikkei12.inw@gmail.com</p>
    </a>
  </Card>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import Card from '@/components/v1/molecules/Card.vue'
import LinkIconGroup from '@/components/v1/organisms/LinkIconGroup.vue'

export default defineComponent({
  components: {
    Card,
    LinkIconGroup,
  },
})
</script>
<style scoped lang="scss">
.link {
  height: 30px;
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  .icon {
    height: 100%;
    border-radius: 50%;
    margin-right: 8px;
  }
}
</style>
