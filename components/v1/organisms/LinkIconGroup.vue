<template>
  <div class="link__group">
    <a
      href="https://github.com/1keiuu"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <img
        src="~/assets/images/logo/github.webp"
        class="icon"
        alt="icon"
        height="100px"
        width="100px"
      />
    </a>
    <a
      href="https://twitter.com/1keiuu"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <img
        src="~/assets/images/logo/twitter.webp"
        class="icon"
        alt="icon"
        height="100px"
        width="100px"
      />
    </a>
    <a
      href="https://qiita.com/ikkei12"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <img
        src="~/assets/images/logo/qiita.webp"
        class="icon"
        alt="icon"
        height="100px"
        width="100px"
      />
    </a>
  </div>
</template>
<style scoped lang="scss">
.link__group {
  height: 30px;
  display: flex;
  width: 100%;
  justify-content: flex-start;

  &:nth-child(3) {
    margin-right: 0;
  }

  .link {
    margin-right: 16px;
    height: 30px;
    width: 30px;
    display: block;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
}
</style>
