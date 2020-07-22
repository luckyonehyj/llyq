import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home'
import Detail from '@/views/Detail'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router