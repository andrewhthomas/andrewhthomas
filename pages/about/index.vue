<template>
  <div>
    <navigation/>
    <div class="avenir pa3 pa5-m pa5-l pa5-ns mb3 cf bb b--black-05">
      <div class="fl w-100 w-100-m w-75-l w-75-ns">
        <article class="cf mb6">
          <header class="fn fl-ns w-100 w-30-l pr4-ns mb4 mb0-l">
            <h1 class="f2 lh-title fw7 mb3 mt0 pt3 bt bw2">2012&ndash;Present</h1>
            <time class="f6 ttu tracked">Web and Publishing Systems Developer, Scribe Inc., Philadelphia, PA</time>
          </header>
          <div class="fn fl-ns w-100 w-50-l">
            <p class="mt0">Maintained and deployed all company-managed Drupal and WordPress sites on the Pantheon platform.</p>
            <p>Migration to Pantheon cut deployment time by 30%.</p>
            <p>Lead theme developer for all company-produced Drupal and WordPress sites.</p>
            <p>Led front-end development of web application that allows Scribe clients to publish content to a variety of output
              formats, including EPUB, Kindle, and XML. Web application has cut title conversion times by 25%.</p>
            <p>Developed and deployed a custom production system for company-wide use on a PHP MVC framework.</p>
            <p>Transitioned company project data from existing Microsoft SQL system into current MySQL database model.</p>
            <p>Migrated existing CRM system from SugarCRM to BaseCRM.</p>
            <p>Developed custom content archives using Drupal 7 and Apache Solr that serves as the main search tool for major
              publishers.
            </p>
            <p>Project manager for transitioning content from legacy formats into modern XML.</p>
            <p>Wrote custom importer to create Drupal nodes based on custom data model.</p>
            <p>Developed theme and UI for specialized site users. Acted as lead architect for server LAMP stack and managed
              DNS updates andnetwork configuration.</p>
          </div>
        </article>
        <article class="cf mb6">
          <header class="fn fl-ns w-30-ns pr4-ns">
            <h1 class="f2 lh-title fw7 mb3 mt0 pt3 bt bw2">2008&ndash;2012</h1>
            <time class="f6 ttu tracked">XML Developer, Project Manager, Scribe Inc., Philadelphia, PA</time>
          </header>
          <div class="fn fl-ns w-50-ns">
            <p class="mt0">Acted as project manager for development of an archival site, which houses XML content from over 100 years of
              lectures on natural theology.</p>
            <p>Developed custom content management tool and migrated site to a Microsoft environment.</p>
            <p>Oversaw scanning and OCR of over 100 titles and provided regular reports to client PMs.</p>
          </div>
        </article>

        <article class="cf mb6">
          <header class="fn fl-ns w-30-ns pr4-ns">
            <h1 class="f2 lh-title fw7 mb3 mt0 pt3 bt bw2">2004&ndash;2007</h1>
            <time class="f6 ttu tracked">E-book Developer, Scribe Inc., Philadelphia, PA</time>
          </header>
          <div class="fn fl-ns w-50-ns">
            <p class="mt0">Led the development of medical texts in Mobipocket.</p>
            <p>Built educational materials for use with Palm devices, Microsoft Reader, and Adobe Reader.</p>
            <p>Assisted with development and conversion of print materials to XML for display on the web.</p>
          </div>
        </article>

        <article class="cf mb6">
          <header class="fn fl-ns w-30-ns pr4-ns">
            <h1 class="f2 lh-title fw7 mb3 mt0 pt3 bt bw2">2003&ndash;2004</h1>
            <time class="f6 ttu tracked">E-book Developer, OverDrive Inc., Cleveland, OH</time>
          </header>
          <div class="fn fl-ns w-50-ns">
            <p class="mt0">Project lead for title conversion to Mobipocket and Adobe Reader for two major publishers.</p>
            <p>Co-lead for digitization of New Yorker issues via Photoshop scripting.</p>
          </div>
        </article>
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
