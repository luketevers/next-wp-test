<template lang='pug' src='./index.pug'></template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get(`https://ankenyortho.roostertest3.com/wp-json/wp/v2/pages`)
      const data = response.reduce(
        (allData, data) => ({
          ...allData,
          [data.slug]: {
            title: data.title.rendered,
            ...data.acf
          }
        }),
        {}
      )
      return { home: data.home }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style lang="sass" src='./index.sass'></style>
