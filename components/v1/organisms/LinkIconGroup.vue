<template>
  <div class="link__group">
    <a
      href="https://github.com/1keiuu"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <picture>
        <source
          type="image/webp"
          srcset="~/assets/images/logo/webp/github-black.webp"
        />
        <img
          src="~/assets/images/logo/png/github-black.png"
          class="icon"
          alt="icon"
          height="100px"
          width="100px"
        />
      </picture>
    </a>
    <a
      href="https://twitter.com/1keiuu"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <picture>
        <source
          type="image/webp"
          srcset="~/assets/images/logo/webp/twitter-black.webp"
        />
        <img
          src="~/assets/images/logo/png/twitter-black.png"
          class="icon"
          alt="icon"
          height="100px"
          width="100px"
        />
      </picture>
    </a>
    <a
      href="https://www.wantedly.com/id/keiu"
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <picture>
        <source
          type="image/webp"
          srcset="~/assets/images/logo/webp//wantedly-black.webp"
        />
        <img
          src="~/assets/images/logo/png/wantedly-black.png"
          class="icon"
          alt="icon"
          height="100px"
          width="100px"
        />
      </picture>
    </a>
  </div>
</template>
<style scoped lang="scss">
.link__group {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 35px;
  bottom: 35px;
  z-index: 10;
  &:nth-child(3) {
    margin-right: 0;
  }

  .link {
    margin-bottom: 16px;
    height: 25px;
    width: 25px;
    display: block;

    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
}
@include tab {
  .link__group {
    left: 10px;
    bottom: 8px;

    .link {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
