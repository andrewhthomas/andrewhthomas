<template>
  <div class="wrapper">
    <nuxt/>
    <siteFooter/>
  </div>
</template>

<script>
  import siteFooter from '~/components/siteFooter.vue'

  export default {
    components: {
      siteFooter
    }
  }
</script>

<style lang="scss">



body {
  margin: 0;
  padding: 0;
}

</style>
