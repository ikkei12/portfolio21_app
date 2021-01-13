<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    class="ogp-card__link"
  >
    <div class="ogp-card">
      <img :src="ogp.image" class="image" />
      <div class="ogp-card__inner">
        <h3 class="ogp-card__title">{{ ogp.title }}</h3>
        <p class="ogp-card__description">{{ ogp.description }}</p>
      </div>
    </div>
  </a>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  props: {
    url: { type: String },
  },
  setup(props) {
    const url = props.url
    const ogp = reactive<{
      title: string | null
      description: string | null
      image: string | null
    }>({
      title: '',
      description: '',
      image: '',
    })
    if (!url) return
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const el = new DOMParser().parseFromString(text, 'text/html')
        const headEls = el.head.children
        console.log(el.head)
        Array.from(headEls).map((v) => {
          const prop = v.getAttribute('property')
          if (!prop) return
          switch (prop) {
            case 'og:image':
              ogp.image = v.getAttribute('content')
              break
            case 'og:title':
              ogp.title = v.getAttribute('content')
              break
            case 'og:description':
              ogp.description = v.getAttribute('content')
              break
          }
        })
      })
    return { ogp }
  },
})
</script>
<style scoped lang="scss">
.ogp-card__link {
  text-decoration: none;
  color: #333;
  display: block;
  margin: 60px 0;
  .ogp-card {
    display: flex;
    height: 150px;
    border: 1px solid #efefef;
    border-radius: 3px;
    .image {
      height: 150px;
      width: 150px;
      object-fit: cover;
    }
    .ogp-card__inner {
      padding: 8px 12px;
      .ogp-card__description {
        line-height: 1.2;
        color: grey;
      }
    }
  }
}
</style>
