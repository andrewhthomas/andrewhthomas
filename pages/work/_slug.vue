<template>
<div>
    <navigation/>
  <h2 v-if="loading > 0">
    Loading...
  </h2>
  <div v-else>
    <article>
      <h1>{{project.title}}</h1>
      <vue-markdown>{{project.content}}</vue-markdown>
    </article>
  </div></div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  import gql from 'graphql-tag'
  import VueMarkdown from 'vue-markdown'
  const project = gql`
    query project($id: ID!) {
      project(where: {id: $id}) {
        id
        slug
        title
        signatureImage {
          handle
        }
        content
      }
    }
  `
  export default {
    name: 'ProjectPage',
    data: () => ({
      loading: 0
    }),
    apollo: {
      $loadingKey: 'loading',
      project: {
        query: project,
        variables () {
          return {
            id: this.$route.params.slug
          }
        }
      }
    },
    components: { Navigation, VueMarkdown }
  }
</script>

<style lang="scss" scoped>


  .placeholder {
    height: 366px;
    background-color: #eee;
  }
</style>
