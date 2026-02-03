import { computed, reactive } from 'vue'
import navItems from '@/data/lnb.json'

const tabState = reactive({
    tabs: []
})

const getTitleByPath = (path) => {
    const match = navItems.find((item) => item.to === path)
    return match?.title
}

const normalizeRoute = (route) => {
    const path = route.fullPath || route.path
    const title = route.meta?.title || getTitleByPath(route.path) || route.name || path
    return { path, title }
}

const ensureTab = (route) => {
    const { path, title } = normalizeRoute(route)
    const existing = tabState.tabs.find((tab) => tab.path === path)
    if (existing) {
        existing.title = title
        return
    }
    tabState.tabs.push({ path, title })
}

const removeTab = (path) => {
    const index = tabState.tabs.findIndex((tab) => tab.path === path)
    if (index < 0) {
        return null
    }
    const [removed] = tabState.tabs.splice(index, 1)
    return { removed, index }
}

export const usePageTabs = () => ({
    state: tabState,
    ensureTab,
    removeTab
})

export const useTabsList = () => computed(() => tabState.tabs)
