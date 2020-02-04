import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store/store'

Vue.config.productionTip = false

/* Observação: o ideal é ter uma pasta só para os filtros */
Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
