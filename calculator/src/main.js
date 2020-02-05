import Vue from 'vue'
import App from './App'

new Vue({
    render: h => h(App)
    /*
    * Entendendo a linha acima
    *
    * render(createElement) {
    *    return createElement(App)
    * }
    */
}).$mount("#app")