<template>
    <div class="app__page-tabs">
        <button
            v-for="tab in tabs"
            :key="tab.path"
            type="button"
            class="app__page-tab"
            :class="{ 'app__page-tab--active': tab.path === activePath }"
            @click="moveTo(tab.path)"
        >
            <span class="app__page-tab-title">{{ tab.title }}</span>
            <span
                v-if="tabs.length > 1"
                class="app__page-tab-close"
                role="button"
                aria-label="탭 닫기"
                @click.stop="close(tab.path)"
            >
                ×
            </span>
        </button>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePageTabs } from '@/composables/usePageTabs'

const router = useRouter()
const route = useRoute()
const { state, ensureTab, removeTab } = usePageTabs()

const tabs = computed(() => state.tabs)
const activePath = computed(() => route.fullPath || route.path)

const moveTo = (path) => {
    if (path === activePath.value) {
        return
    }
    router.push(path)
}

const close = (path) => {
    const { index } = removeTab(path) || {}
    if (index === undefined) {
        return
    }
    if (path !== activePath.value) {
        return
    }
    const next = tabs.value[index] || tabs.value[index - 1]
    if (next) {
        router.push(next.path)
        return
    }
    router.push('/')
}

onMounted(() => {
    ensureTab(route)
})

watch(
    () => route.fullPath,
    () => ensureTab(route)
)
</script>
