<template>
  <div>
    <navigation/>
    <section class="project pa3 pa5-m pa5-l pa5-ns cf">
      <div class="fl w-100">
        <h1 class="f5 ttu fw6 tracked mb4 avenir">Latest Work</h1>
        <div class="fl w-100 pr4">
          <nuxt-link to="/work/acculturated"><img src="~/assets/img/acculturated-devices.png" v-scroll-reveal.reset></nuxt-link>
        </div>
      </div>
    </section>

    <section class="cf mt5 pa3 pa5-m pa5-l pa5-ns">
      <h1 class="f5 ttu fw6 tracked mb4 avenir">Other Work</h1>
      <nuxt-link to="/work/earsmagic" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
        <div class="grow cover bg-center pv5 pv6-l earsmagic" v-scroll-reveal.reset></div>
      </nuxt-link>
      <nuxt-link to="/work/the-gifford-lectures" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
        <div class="grow cover bg-center pv5 pv6-l gifford" v-scroll-reveal.reset></div>
      </nuxt-link>
      <a href="#0" class="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
        <div class="grow cover bg-top pv5 pv6-l" style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/cc010611.s_960.jpg);"></div>
      </a>
      <a href="#0" class="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
        <div class="grow cover bg-top pv5 pv6-l" style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg);"></div>
      </a>
      <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
        <div class="grow cover bg-center pv5 pv7-l" style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/zh170311.4.cargo_960.jpg);"></div>
      </a>
      <a href="#0" class="fl w-50 border-box overflow-hidden ba bw2 white" title="">
        <div class="grow cover bg-center pv5 pv7-l" style="background-image:url(https://s3-us-west-2.amazonaws.com/prnt/hw090911_960.jpg);"></div>
      </a>
    </section>

  </div>
</template>



<script>
  import Navigation from '~/components/Navigation.vue'

  export default {
    components: {
      Navigation
    },
    head () {
      return {
        title: 'Work & projects',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'My custom description 2'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .project {
    background: #f8faff;
    font-family: $avenir;
  }
  .earsmagic {
    background-image: url("~/assets/img/earsmagic_desktop.png");
  }
  .gifford {
    background-image: url("~/assets/img/gifford-lectures_desktop.png");
  }
</style>
