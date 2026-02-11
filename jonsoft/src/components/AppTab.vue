<template>
    <div class="app__tab">
        <div class="app__tab-inner">
            <div class="app__tab-list" role="tablist" aria-label="탭 목록">
                <button
                    v-for="tab in tabs"
                    :key="tab.key"
                    class="app__tab-item"
                    type="button"
                    role="tab"
                    :id="`tab-${tab.key}`"
                    :aria-controls="`panel-${tab.key}`"
                    :aria-selected="tab.key === activeKey"
                    :tabindex="tab.key === activeKey ? 0 : -1"
                    :disabled="tab.disabled"
                    :class="{ 'app__tab-item--active': tab.key === activeKey }"
                    @click="selectTab(tab)"
                >
                    <span class="app__tab-item-label">{{ tab.label }}</span>
                </button>
            </div>
        </div>
        <div
            class="app__tab-panel"
            role="tabpanel"
            :id="activeKey ? `panel-${activeKey}` : undefined"
            :aria-labelledby="activeKey ? `tab-${activeKey}` : undefined"
        >
            <component v-if="activeComponent" :is="activeComponent" />
            <p v-else class="app__tab-empty">탭을 선택해 주세요.</p>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
    tabs: {
        type: Array,
        default: () => []
    },
    initialKey: {
        type: String,
        default: ''
    }
})

const activeKey = ref(props.initialKey || props.tabs[0]?.key || '')

watch(
    () => props.tabs,
    (nextTabs) => {
        if (!nextTabs?.length) {
            activeKey.value = ''
            return
        }
        const exists = nextTabs.some((tab) => tab.key === activeKey.value)
        if (!exists) {
            activeKey.value = nextTabs[0].key
        }
    },
    { deep: true }
)

const activeComponent = computed(() => {
    const current = props.tabs.find((tab) => tab.key === activeKey.value)
    return current?.component ?? null
})

const selectTab = (tab) => {
    if (tab.disabled) {
        return
    }
    activeKey.value = tab.key
}
</script>