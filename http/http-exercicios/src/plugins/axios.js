import Vue from 'vue'
import axios from 'axios'
/* Quando usamos a instância global do Vue */
// axios.defaults.baseURL = 'https://curso-vue-beb1a.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-beb1a.firebaseio.com/',
            // headers: {
            //     "Authorization": "abc123"
            // }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            // console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for (let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] })
            //     /*
            //         Equivalente a:
            //         array.push({ id: chave, nome: res.data[chave].nome, email: res.data[chave].email })
            //     */
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})