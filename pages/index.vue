<template>
  <div>
    <navigation/>
    <section class="hero is-primary">
  <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-10">
          <h1 class="title">I&rsquo;m a Philadelphia based front end developer.</h1>
          <p>
            I build websites with Drupal, WordPress, Grav, and a variety of other great open source software. I design HTML5 themes and
            templates with Sass and Less, and use Gulp as my task runner.
          </p>
          <p>
            Right now I&rsquo;m focusing on learning Vue.js and brushing up on my Laravel skills.
          </p>
          <p>I currently work for the publishing services firm Scribe Inc.</p>
          </p>
        </div>
        </div>
      </div></div>
    </section>
    <section class="project">
       <div class="container">
        <div class="columns">
          <div class="column">
      <h1>Recent Projects</h1>
      <p>
        I build websites with Drupal, WordPress, Grav, and a variety of other great open source software. I design HTML5 themes and
        templates with Sass and Less, and use Gulp as my task runner.
      </p>
          </div>
          </div>

          <div class="columns">
      <div class="column">
        <nuxt-link to="/work/the-gifford-lectures">
          <img src="~/assets/img/gifford-lectures-phone.png" v-scroll-reveal.reset>
        </nuxt-link>
      </div>
      <div class="column">
        <nuxt-link to="/work/acculturated">
          <img src="~/assets/img/acculturated_phone.png" v-scroll-reveal.reset>
        </nuxt-link>
      </div>
      <div class="column">
        <img src="~/assets/img/charlene_phone.png" v-scroll-reveal.reset>
      </div>
      <div class="column">
        <img src="~/assets/img/ears-magic_phone.png" v-scroll-reveal.reset>
      </div>
      </div>
</div>
    </section>

    <section class="promote">

    </section>
  </div>
</template>
<script>
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style lang="scss" scoped>



</style>
