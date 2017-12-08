<template>

  <header id="navbar" role="header">
    <div class="container">
    <div class="columns">
      <div class="column">
    <nuxt-link class="navbar--name" to="/" title="Home">
      A. Thom&lt;a&gt;s</nuxt-link>
      </div>
      
      <div class="column">
    <nav role="navigation">
      <ul class="navbar--menu">
      <li><nuxt-link class="link dim white f6 fw1 tracked f5-l dib mr3 mr4-l" to="/about" title="About">About</nuxt-link></li>
      <li><nuxt-link class="link dim white f6 fw1 tracked f5-l dib mr3 mr4-l" to="/work" title="Work">Work</nuxt-link></li>
      <li><nuxt-link class="link dim white f6 fw1 tracked f5-l dib" to="/contact" title="Contact">Contact</nuxt-link></li>
      </ul>
    </nav>
    </div>
    </div>
    <hr>
    </div>
  </header>
</template>


<style lang="scss" scoped>

@import "~assets/scss/globals.scss";



#navbar {
  width: 100%;
  background-color: #ffefef;
  padding: 4rem 0;

}
.navbar--name {
  color: $white;
  font-family: "Nunito";
  padding: .5rem;
  background: #000;
  font-weight: 900;
}

.navbar--menu {
  text-align: right;
  font-family: "Nunito";
  li {
    display: inline-block;
    margin-right: 2rem;

    &:nth-last-child() {
     margin-right: 0;
    }

    a {
      color: $text-color;
      font-weight: 700;
      letter-spacing: .1rem;
    }
  }
}

</style>
