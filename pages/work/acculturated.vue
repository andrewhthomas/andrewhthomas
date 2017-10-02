<template>
  <div>
    <navigation/>
    <section class="project pa3 pa5-m pa5-l pa5-ns cf">
      <div class="fl w-100 w-100-m w-60-l w-60-ns">
        <h1 class="f3 f2-m f2-l f2-ns mt0 pt3">Front-end Developer, Drupal &amp; WordPress</h1>
        <p class="f4 f3-m f3-l f3-ns measure lh-copy">
          I build websites with Drupal, WordPress, Grav, and a variety of other great open source software. I design HTML5 themes and
          templates with Sass and Less, and use Gulp as my task runner.
        </p>
        <p class="f4 f3-m f3-l f3-ns measure lh-copy">
          Right now I'm focusing on learning Vue.js and brushing up on my Laravel skills.
        </p>
        <p class="f4 f3-m f3-l f3-ns measure lh-copy">I currently work for the publishing services firm Scribe Inc.</p>
        </p>
      </div>
    </section>

    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="Photo of a kitty staring at you">
    <h1 class="f4">{{ data.name }}</h1>
    <hr class="mw3 bb bw1 b--black-10">
  </div>
  <p class="lh-copy measure center f6 black-70">
    {{ data.description }}
  </p>
  <p class="lh-copy measure center f6 black-70">
    <a :href="data.homepage">View project</a>
  </p>

  <p class="lh-copy measure center f6 black-70">
    {{ data.language }}
  </p>
</article>
    
    
  </div>
</template>



<script>
  import axios from 'axios'
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Navigation
    },
    head () {
      return {
        title: this.title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }]
      }
    },
    async asyncData ({
      params
    }) {
      let {
        data
      } = await axios.get('https://api.github.com/repos/andrewhthomas/acculturated')
      return {
        data
      }
    }
  }
</script>

<style lang="scss" scoped>

@import "~assets/scss/_variables.scss";

.project {

  background: #f8faff;
  font-family: $avenir;
  img {
    box-shadow: rgba(112,128,175,0.2) 0 -16px 24px;

  }
}
</style>
