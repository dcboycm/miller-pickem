import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import About from '@/components/About'
import Matchups from '@/components/Matchups'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/matchups/:id',
            name: 'Matchups',
            component: Matchups
        }
    ]
})