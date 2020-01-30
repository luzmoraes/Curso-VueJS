import Vue from 'vue'
import Router from 'vue-router'

import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'
import Inicio from './components/Inicio.vue'

// Vamos importar de forma tardia, ou seja, só quando o componente for acessado
// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

// Carregamento de forma tardia
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario.vue')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista.vue')
const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe.vue')
const UsuarioEditar = () => import('./components/usuario/UsuarioEditar.vue')

const router = new Router({
    // hash | history
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
        // return { x: 0, y: 1000 }
    },
    routes: [
        {
            path: '/',
            name: 'inicio',
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu
            }
        },
        {
            path: '/usuario',
            // component: Usuario,
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            props: true,
            children: [
                { 
                    path: '',
                    component: UsuarioLista
                },
                {
                    path: ':id',
                    component: UsuarioDetalhe,
                    props: true,
                    beforeEnter: (to, from, next) => {
                        console.log('Antes da rota -> usuário detalhe')
                        // next()
                        const auth = true
                        auth ? next() : next(false)
                    }
                },
                {
                    path: ':id/editar',
                    component: UsuarioEditar,
                    props: true,
                    name: 'editarUsuario'
                }
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})

router.beforeEach((to, from, next) => {
    console.log('Antes das rotas -> global')
    next()
})

export default router