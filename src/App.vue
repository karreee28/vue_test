<template>
  <div id="app">
    <h1>PIG_Front</h1>

    <div class="tabW">
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Vue - Router" >
            <b-card-text>
              <VueRouterEx></VueRouterEx>
            </b-card-text>
          </b-tab>
          <b-tab title="Vue - computed, watch" active>
            <b-card-text>
              <VueComputed></VueComputed>
            </b-card-text>
          </b-tab>
          <b-tab title="Vue - $emit, bus">
            <b-card-text>
              <section class="wrap">
                <h2>Vue.js $emit</h2>
                <article>
                  <p>하위 컴포넌트에서 부모 컴포넌트(App.vue 포함)로 이벤트 전달</p>
                  <VueEmit @totalClick="totalClickUp"></VueEmit> <!--자식 컴포넌트로부터 totalClick 이벤트를 받아서 totalClickUp 함수 실행 -->
                  <VueEmit @totalClick="totalClickUp"></VueEmit>
                  <VueEmit @totalClick="totalClickUp"></VueEmit>
                  <VueBus></VueBus> <!--Bus 테스트를 위해 다른 컴포넌트 생성 후 삽입-->

                  <div class="testTxt">
                    <p>테스트 텍스트 - $emit test click : {{ totalClicks }}</p>
                  </div>
                </article>
              </section>
            </b-card-text>
          </b-tab>
          <b-tab title="Vue - 클래스 바인딩" >
            <b-card-text>
              <VueCSSBind></VueCSSBind>
            </b-card-text>
          </b-tab>
          <b-tab title="Vue - 이벤트 한정자" >
            <b-card-text>
              <VueEvent></VueEvent>
            </b-card-text>
          </b-tab>
          <b-tab title="Vue - 기타 개념 정리">
            <b-card-text>
              <VueEtc></VueEtc>
            </b-card-text>
          </b-tab>
          <b-tab title="Javascript">
            <b-card-text>
              <PartJS></PartJS>
            </b-card-text>
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
import PartJS from './components/part-javascript'
import VueEvent from './components/vue-event'
import VueRouterEx from './components/vue-router'
import VueCSSBind from './components/vue-css-bind'
import VueEmit from './components/vue-emit'
import VueBus from './components/vue-bus'
import VueComputed from './components/vue-computed'
import VueEtc from './components/vue-etc'
export default {
  name: 'app',
  components: { PartGIT, PartHTML, VueEvent, VueRouterEx, VueCSSBind, VueEmit, VueBus, VueComputed, VueEtc, PartJS },
  data () {
    return {
      totalClicks: 0,

    }
  },
  methods: {
    totalClickUp: function () {
      this.totalClicks++
    }
  },
  created () {
    this.$EventBus.$on('clickCountReset', () => { //Bus를 통해 vue-bus 컴포넌트가 보낸 clickCountReset 이벤트 수신 후
      this.totalClicks = 0  //데이터 처리
    });
  },
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
.testTxt {
  margin-top: 20px;
}
</style>
