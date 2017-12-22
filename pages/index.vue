<template>
  <div>
    <navigation/>
    <section class="hero">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
          <h1>I&rsquo;m a Philadelphia based front end developer.</h1>
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
      </div>
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
  @import "~assets/scss/globals.scss";

  .hero {
    background: #ffefef;
    padding: 3rem 0;

    h1 {
      font-size: 6rem;
      font-family: "Nunito";
      color: $heading-color;
      font-weight: 300;
      margin: 0 0 1.5rem 0;
      letter-spacing: -1px;
      line-height: 1.2em;
    }

    p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    }
  }

  .project {
    background: #ffefef;
    padding: 3rem 0;
    h1 {
      font-size: 2.25rem;
      font-weight: 800;
      font-family: "Nunito";
      margin: 0 0 1.5rem 0;
    }

    p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    }

    img {
      box-shadow: rgba(112, 128, 175, 0.2) 0 -16px 24px;
    }
  }

  .promote {
    position: relative;
    padding-top: 0;
    background: $white;
    &:before {
      position: absolute;
      z-index: 1;
      top: -170px;
      display: block;
      width: 100%;
      height: 350px;
      content: "";
      -ms-transform: skewY(-6deg);
      transform: skewY(-6deg);
      background: white;
      box-shadow: rgba(112, 128, 175, 0.2) 0 -16px 24px;
    }
  }

  .project--image {
    background: $gray;
  }
</style>
