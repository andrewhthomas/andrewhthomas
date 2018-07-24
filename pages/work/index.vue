<template>
  <div>
    <section v-if="projects">
      <ul>
        <li v-for="project in projects" :key="project.id">
          <router-link :to="`/work/${project.id}`" class='link'>
            <div class='placeholder'>
              <img
                :alt="project.title"
                :src="`https://media.graphcms.com/resize=w:100,h:100,fit:crop/${project.signatureImage.handle}`"
              />
            </div>
            <h3>{{project.title}}</h3>
          </router-link>
        </li>
      </ul>
      <button v-if="projectCount && projectCount > projects.length" @click="loadMoreProjects">
        {{loading ? 'Loading...' : 'Show more'}}
      </button>
    </section>
    <h2 v-else>
      Loading...
    </h2>
  </div>
</template>

<script>
import gql from 'graphql-tag'
const POSTS_PER_PAGE = 2
const projects = gql`
  query projects($first: Int!, $skip: Int!) {
    projects(first: $first, skip: $skip) {
      id
      slug
      title
      signatureImage {
        handle
      }
    }
  }
`
export default {
  name: 'HomePage',
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading',
    projects: {
      query: projects,
      variables: {
        skip: 0,
        first: POSTS_PER_PAGE
      }
    },
    projectCount: {
      query: gql`
        {
          projectsConnection {
            aggregate {
              count
            }
          }
        }
      `,
      update: ({ projectsConnection }) => projectsConnection.aggregate.count
    }
  },
  methods: {
    loadMoreProjects () {
      this.$apollo.queries.projects.fetchMore({
        variables: {
          skip: this.projects.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            projects: [...previousResult.projects, ...fetchMoreResult.projects]
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>



ul {
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid #eee;
  overflow: hidden;
  border-radius: 5px;
}
.link {
  display: flex;
  color: #000;
}
.link:hover {
  box-shadow: 1px 1px 5px #999;
}
.placeholder {
  background-color: #eee;
  min-width: 100px;
  margin-right: 24px;
}
img {
  display: block;
  height: 100%;
}
.show-more-wrapper {
  display: flex;
  justify-content: center;
}
button {
  width: 100%;
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  padding: 16px 24px;
  background: deepskyblue;
  border: none;
  border-radius: 0;
  cursor: pointer;
}
</style>
