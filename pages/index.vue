<template>
<div>
<navigation/>
<div class="bg-green avenir pa3 pa5-m pa5-l pa5-ns mb3 cf bb b--black-05">
  <div class="fl w-100 w-100-m w-60-l w-60-ns">
    <h1 class="f3 f2-m f2-l f2-ns black-70 mt0 pt3">Andrew H. Thomas</h1>
    <p class="f4 f3-m f3-l f3-ns black-90 measure lh-copy">
      I build websites with Drupal, WordPress, Grav, and a variety of other great open source software. I design HTML5 themes and templates with Sass and Less, and use Gulp as my task runner.
</p>
<p class="f4 f3-m f3-l f3-ns black-90 measure lh-copy">

Right now I'm focusing on learning React and brushing up on my Laravel skills.
</p>
<p class="f4 f3-m f3-l f3-ns black-90 measure lh-copy">I currently work for the publishing services firm Scribe Inc.</p>
    </p>
  </div>
  <div class="fl w-40 center tc dn dn-m db-l db-ns">
    <img data-src="images/donuts2.svg" class=" lazyloaded" src="images/donuts2.svg">
  </div>
</div>
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
