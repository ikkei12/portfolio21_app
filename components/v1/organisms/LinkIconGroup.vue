<template>
  <div class="link__group">
    <a
      href="https://github.com/ikkei12"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <img src="~/assets/images/logo/github.png" class="icon" alt="icon" />
    </a>
    <a
      href="https://twitter.com/1keiuu"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <img src="~/assets/images/logo/twitter.png" class="icon" alt="icon" />
    </a>
    <a
      href="https://qiita.com/ikkei12"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <img src="~/assets/images/logo/qiita.png" class="icon" alt="icon" />
    </a>
  </div>
</template>
<style scoped lang="scss">
.link__group {
  height: 30px;
  display: flex;
  width: 50%;
  justify-content: space-around;

  .link {
    height: 100%;
    img {
      height: 100%;
      border-radius: 50%;
    }
  }
}
</style>
