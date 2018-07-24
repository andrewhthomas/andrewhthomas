<template>
<div>
  <header role="banner">

  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
  <div class="navbar-brand">


    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

    <div class="navbar-menu">
      <div class="navbar-start">
      <nuxt-link class="navbar-item" to="/" title="Intro">Intro</nuxt-link>
      <nuxt-link class="navbar-item" to="/about" title="About">About</nuxt-link>
      <nuxt-link class="navbar-item" to="/work" title="Work">Work</nuxt-link>
      <nuxt-link class="navbar-item" to="/contact" title="Contact">Contact</nuxt-link>
      </div>
    </div>
    </div>
    </nav>

    </header>
</div>
</template>


<style lang="scss" scoped>



.navbar-item {
  font-weight: 300;
}




</style>
