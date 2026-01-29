import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ComponentButton from '@/pages/component/ComponentButton.vue'
import ComponentInput from '@/pages/component/ComponentInput.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/button',
        name: 'component-button',
        component: ComponentButton,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/input',
        name: 'component-input',
        component: ComponentInput,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundPage,
        meta: {
            layout: 'empty',
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
