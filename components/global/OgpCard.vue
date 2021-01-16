<template>
  <div class="ogp-card__wrapper">
    <a
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
      class="ogp-card__link"
    >
      <div class="ogp-card">
        <img v-lazy-load :src="ogp.image" class="image" alt="ogp thumbnail" />
        <div class="ogp-card__inner">
          <h3 class="ogp-card__title">{{ ogp.title }}</h3>
          <p class="ogp-card__description">{{ ogp.description }}</p>
        </div>
      </div>
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from '@vue/composition-api'

export default defineComponent({
  props: {
    url: { type: String },
  },
  // TODO: SSG(asyncData)にしたいができていないので都度取得している
  setup(props, context) {
    const ogp = reactive<{
      title: string | null
      description: string | null
      image: string | null
    }>({
      title: 'OGP',
      description: 'fetching data... \n Please wait for a while.',
      image: '/lazy_thin.png',
    })

    onMounted(() => {
      const url = props.url
      if (!url) return
      context.root.$axios
        .post(
          'https://asia-northeast1-portfolio21-56e7e.cloudfunctions.net/getOgpInfo',
          { url },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((res) => {
          console.log(res)
          ogp.image = res.data.ogp.image
          ogp.description = res.data.ogp.description
          ogp.title = res.data.ogp.title
        })
        .catch((e) => console.error(e))
    })
    return { ogp }
  },
})
</script>
<style scoped lang="scss">
.ogp-card__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  .ogp-card__link {
    text-decoration: none;
    color: #333;
    display: block;
    margin: 60px 0;
    width: 100%;
    &:hover {
      box-shadow: 0 0 20px rgba(173, 173, 173, 0.285);
    }
    .ogp-card {
      display: flex;
      height: 150px;
      border: 1px solid #efefef;
      border-radius: 3px;

      .image {
        height: 150px;
        width: 150px;
        object-fit: cover;
        margin-bottom: 0;
      }
      .ogp-card__inner {
        height: 100%;
        padding: 8px 12px;
        overflow: hidden;
        .ogp-card__title {
          line-height: initial;
          margin-bottom: 10px;
        }
        .ogp-card__description {
          font-size: 13px;
          line-height: 1.1;
          color: grey;
          margin-bottom: 0;
        }
      }
    }
  }
}
@include tab {
  .ogp-card__wrapper {
    .ogp-card__link {
      width: 60%;
      .ogp-card {
        display: table;
        width: 100%;
        .image {
          height: 200px;
          width: 100%;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
        }
        .ogp-card__inner {
          .ogp-card__title {
            font-size: 13px;
          }
          .ogp-card__description {
            font-size: 11px;
          }
        }
      }
    }
  }
}
@include sp {
  .ogp-card__wrapper {
    .ogp-card__link {
      width: 95%;
    }
  }
}
</style>
