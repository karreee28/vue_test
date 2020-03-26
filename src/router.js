import Vue from 'vue'
import VueRouter from 'vue-router' 

import PartGIT from './components/part-git' //import name from 'path'
import PartHTML from './components/part-html'
import VueEvent from './components/vue-event'
import VueRouterEx from './components/vue-router'
import VueCSSBind from './components/vue-css-bind'
import VueEmit from './components/vue-emit'
import VueBus from './components/vue-bus'
import VueComputed from './components/vue-computed'
import VueEtc from './components/vue-etc'

Vue.use(VueRouter);

const routes = [ //path 배열 선언
	{ path: '/git', name: 'PartGIT', component: PartGIT }, //path 지정
	{ path: '/html', name: 'PartHTML', component: PartHTML },
	{ path: '/event', name: 'VueEvent', component: VueEvent },
	{ path: '/router', name: 'VueRouter', component: VueRouterEx },
	{ path: '/binding', name: 'VueCSSBind', component: VueCSSBind },
	{ path: '/emit', name: 'VueEmit', component: VueEmit },
	{ path: '/bus', name: 'VueBus', component: VueBus },
	{ path: '/computed', name: 'VueComputed', component: VueComputed },
	{ path: '/etc', name: 'VueEtc', component: VueEtc },
]

export default new VueRouter({
	mode: 'history', //링크 경로에 기본적으로 추가되는 # 제거
	routes //선언한 path 배열 실행
})
