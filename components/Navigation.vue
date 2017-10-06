<template>
  <nav class="navbar db dt-l border-box pa4 pa5-ns ph5-l">
    <div class="w-100 w-25-l dtc-l tc tl-l mb4 mb4-m mb0-l">
    <nuxt-link class="navbar--name dbv-mid fw8 link dimtl-l mb2 mb0-l bg-black pa2" to="/" title="Home">
      A. Thom&lt;a&gt;s</nuxt-link>
      </div>
    <div class="navbar--menu db dtc-l v-mid w-100 w-75-l tc tr-l">
      <nuxt-link class="link dim white f6 fw1 tracked f5-l dib mr3 mr4-l" to="/about" title="About">About</nuxt-link>
      <nuxt-link class="link dim white f6 fw1 tracked f5-l dib mr3 mr4-l" to="/work" title="Work">Work</nuxt-link>
      <nuxt-link class="link dim white f6 fw1 tracked f5-l dib" to="/contact" title="Contact">Contact</nuxt-link>
    </div>
  </nav>
</template>


<style lang="scss" scoped>

@import "~assets/scss/_variables.scss";
.navbar {
  width: 100%;
  background-color: #2d68ee;
  background-image: linear-gradient(60deg,#1259fe,#003098);
}
.navbar--name {
  color: $white;
}

</style>