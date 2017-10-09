<template>
  <div>
    <navigation/>
    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div class="tc">
        <icon name="github" scale="3"></icon>
        <h1 class="f4">{{ data.name }}</h1>
        <hr class="mw3 bb bw1 b--black-10">
      </div>
      <p class="lh-copy measure center f6 black-70">
        {{ data.description }}
      </p>
      <p class="lh-copy measure center f6 black-70">
        <a class="link" :href="data.homepage">View project</a>
      </p>
      <p class="lh-copy measure center f6 black-70">
        {{ data.language }}
      </p>
      <p class="lh-copy measure center f6 black-70">
        {{ data.updated_at }}
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
        title: this.data.name,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.data.description
        }]
      }
    },
    async asyncData ({ params }) {
      let { data } = await axios.get(`https://api.github.com/repos/andrewhthomas/${params.id}`)
      return { data }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .project {
    background: #f8faff;
    font-family: $avenir;
    img {
      box-shadow: rgba(112, 128, 175, 0.2) 0 -16px 24px;
    }
  }
</style>
