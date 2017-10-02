<template>
  <nav class="navbar db dt-l border-box pa3 pa5-ns ph5-l">
    <nuxt-link class="navbar--name" to="/" title="Home">
      A. Thomas</nuxt-link>
    <div class="navbar--menu">
      <nuxt-link class="link dim white f6 fw1 tracked f5-l dib mr3 mr4-l" to="/about" title="About">About</nuxt-link>
      <nuxt-link class="link dim white f6 fw1 tracked f5-l dib mr3 mr4-l" to="/work" title="Work">Work</nuxt-link>
      <nuxt-link class="link dim white f6 fw1 tracked f5-l dib" to="/contact" title="Contact">Contact</nuxt-link>
    </div>
  </nav>
</template>


<style lang="scss" scoped>

@import '~assets/scss/main.scss';

.navbar {
  background-color: #2d68ee;
  background-image: linear-gradient(60deg,#1259fe,#003098);
  width: 100%;
}

.navbar--name {

  @extend .db;
  @extend .dtc-l;
  @extend .v-mid;
  color: $white;
  @extend .fw9;
  @extend .link;
  @extend .dim;
  @extend .w-100;
  @extend .w-25-l;
  @extend .tc;
  @extend .tl-l;
  @extend .mb2;
  @extend .mb0-l;
}

.navbar--menu {
 @extend .db;
   @extend .dtc-l;
   @extend .v-mid;
   @extend .w-100;
   @extend .w-75-l;
   @extend .tc;
   @extend .tr-l;
  


}

</style>