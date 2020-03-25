<template>
  <div id="app">
    <h1>PIG_Front</h1>

    <div class="tabW">
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Vue - Router" active>
            <b-card-text>
              <VueRouterEx></VueRouterEx>
            </b-card-text>
          </b-tab>
          <b-tab title="Vue - 이벤트 한정자" >
            <b-card-text>
              <VueEvent></VueEvent>
            </b-card-text>
          </b-tab>
          <b-tab title="Javascript">
            <b-card-text>Tab contents 3</b-card-text>
          </b-tab>
          <b-tab title="HTML,CSS">
            <b-card-text>
              <PartHTML></PartHTML>
            </b-card-text>
          </b-tab>
          <b-tab title="GIT">
            <b-card-text>
              <PartGIT></PartGIT>
            </b-card-text>
          </b-tab>

        </b-tabs>
      </b-card>
    </div>



  </div>
</template>

<script>
import PartGIT from './components/part-git'
import PartHTML from './components/part-html'
import VueEvent from './components/vue-event'
import VueRouterEx from './components/vue-router'
export default {
  name: 'app',
  components: { PartGIT, PartHTML, VueEvent, VueRouterEx },
  data () {
    return {

    }
  },
  methods: {
  }
}
</script>

<style>
#app {
  padding: 20px;
}
.tabW {
  margin-top: 40px;
}
.tabW h2 {
  margin-bottom: 40px;
}
.tabW b {
  display: block;
  font-size: 1.1em;
}
.tabW article {
  padding-bottom: 40px;
}
</style>
