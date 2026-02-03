import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import ComponentButton from '@/pages/component/ComponentButton.vue'
import ComponentCheckboxRadio from '@/pages/component/ComponentCheckboxRadio.vue'
import ComponentInput from '@/pages/component/ComponentInput.vue'
import ComponentFont from '@/pages/component/ComponentFont.vue'
import ComponentModal from '@/pages/component/ComponentModal.vue'
import ComponentTable from '@/pages/component/ComponentTable.vue'
import ComponentTableDetail from '@/pages/component/ComponentTableDetail.vue'
import ComponentSelect from '@/pages/component/ComponentSelect.vue'
import ComponentProgress from '@/pages/component/ComponentProgress.vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import TestPage from '@/pages/TestPage.vue'

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
        path: '/test',
        name: 'test',
        component: TestPage,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/font',
        name: 'component-font',
        component: ComponentFont,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/checkbox-radio',
        name: 'component-checkbox-radio',
        component: ComponentCheckboxRadio,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/table',
        name: 'component-table',
        component: ComponentTable,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/table/:id',
        name: 'component-table-detail',
        component: ComponentTableDetail,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/modal',
        name: 'component-modal',
        component: ComponentModal,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/component/progress',
        name: 'component-progress',
        component: ComponentProgress,
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
        path: '/component/select',
        name: 'component-select',
        component: ComponentSelect,
        meta: {
            layout: 'default',
        },
    },
    {
        path: '/settings',
        name: 'settings',
        component: SettingsPage,
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
