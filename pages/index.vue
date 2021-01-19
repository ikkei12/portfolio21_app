<template>
  <div class="container">
    <ProfilePage :career-nodes="careerNodes" :personal-info="personalInfo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import ProfilePage from '@/components/v1/templates/ProfilePage.vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default defineComponent({
  components: {
    ProfilePage,
  },
  async asyncData({ $content }) {
    const fetchData = await $content('profile').fetch()
    const careerNodes: CareerNode[] = fetchData.find(
      (item: IContentDocument) => {
        return item.slug === 'career'
      }
    )!.nodes
    const personalInfo: PersonalInformation = fetchData.find(
      (item: IContentDocument) => {
        return item.slug === 'about'
      }
    )
    const currentAge = computed(() => {
      const res = calculcateCurrentAge('1998-03-11 00:00:00')
      if (res) return res
      else return 23
    })
    const calculcateCurrentAge = (birthDay: string | number | Date) => {
      const diff = new Date(+Date.now() - +new Date(birthDay))
      return diff.getUTCFullYear() - 1970
    }
    personalInfo.age = currentAge.value

    return { careerNodes, personalInfo }
  },
})
</script>

<style></style>
