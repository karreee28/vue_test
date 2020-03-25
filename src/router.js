import Vue from 'vue'
import VueRouter from 'vue-router' //import name from path

import PartGIT from './components/part-git'
import PartHTML from './components/part-html'
import VueEvent from './components/vue-event'

Vue.use(VueRouter);

const routes = [
	{ path: '/git', name: 'PartGIT', component: PartGIT },
	{ path: '/html', name: 'PartHTML', component: PartHTML },
	{ path: '/event1', name: 'VueEvent', component: VueEvent },
]

export default new VueRouter({
	mode: 'history',
	routes
})
