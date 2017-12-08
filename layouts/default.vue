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

<style lang="scss" scoped>

@import "~assets/scss/_variables.scss";
.wrapper {
  background: $white;
  font-family: $font-body;
  color: $text-color;
  font-weight: 500;
}

</style>
