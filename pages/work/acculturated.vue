<template>
  <div>
    <navigation/>
    <div class="card">
      <header class="card-header">
        <icon name="github" scale="3"></icon>
        <p class="card-header-title">{{ name }}</p>
       </header>
      <div class="card-content">
        {{ description }}
      </div>
      <p class="lh-copy measure center f6 black-70">
        <a class="link" :href="homepage">View project</a>
      </p>
      <p class="lh-copy measure center f6 black-70">
        {{ language }}
      </p>
      <p class="lh-copy measure center f6 black-70">
        {{ updated_at }}
      </p>
      <footer class="card-footer">
<p class="card-footer-item">
      <span>
        <a class="link" :href="homepage">View project</a>
      </span>
    </p>
    <p class="card-footer-item">
      <span>
        {{ language }}
      </span>
    </p>
      </footer>
    </div>
    
  </div>
</template>



<script>
  import Navigation from '~/components/Navigation.vue'
  import axios from 'axios'

  export default {
    components: {
      Navigation
    },
    head () {
      return {
        // title: this.data.name,
        meta: [{
          hid: 'description',
          name: 'description'
          // content: this.data.description
        }]
      }
    },
    async asyncData ({ params }) {
      return axios.get(`https://api.github.com/repos/andrewhthomas/acculturated`)
        .then((res) => {
          return {
            name: res.data.name,
            description: res.data.description,
            homepage: res.data.homepage,
            language: res.data.language,
            updated_at: res.data.updated_at
          }
        })
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/_variables.scss";
  .project {
    background: #f8faff;
    img {
      box-shadow: rgba(112, 128, 175, 0.2) 0 -16px 24px;
    }
  }
</style>
