<template>
  <div id="app">
    <h1>PIG_Front</h1>

    <div class="tabW">
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Vue - 이벤트 한정자" active>
            <b-card-text>
              <vueEvent></vueEvent>
            </b-card-text>
          </b-tab>
          <b-tab title="Tab 3">
            <b-card-text>Tab contents 3</b-card-text>
          </b-tab>
          <b-tab title="Tab 3">
            <b-card-text>Tab contents 3</b-card-text>
          </b-tab>
          <b-tab title="HTML,CSS">
            <b-card-text>
              <partHTML></partHTML>
            </b-card-text>
          </b-tab>
          <b-tab title="GIT">
            <b-card-text>
              <partGIT></partGIT>
            </b-card-text>
          </b-tab>

        </b-tabs>
      </b-card>
    </div>



  </div>
</template>

<script>
import partGIT from './components/part-git'
import partHTML from './components/part-html'
import vueEvent from './components/vue-event'
export default {
  name: 'app',
  components: { partGIT, partHTML, vueEvent },
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
