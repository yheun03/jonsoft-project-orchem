<template>
    <div :class="layoutClass" :style="layoutStyle" @click="handleLnbControl">
        <header class="layout__gnb">
            <slot name="gnb">
                <AppHeader />
            </slot>
        </header>
        <div class="layout__pagination">
            <slot name="pagination">
                <AppPageTabs />
            </slot>
        </div>
        <aside class="layout__lnb">
            <slot name="lnb">
                <AppSidebar
                    :lnb-initial-open-all="lnbInitialOpenAll"
                    :lnb-single-open="lnbSingleOpen"
                />
            </slot>
            <div
                v-if="showResizeHandle"
                class="layout__lnb-resize-handle"
                role="separator"
                aria-orientation="vertical"
                @pointerdown="onResizeStart"
            ></div>
        </aside>
        <main class="layout__content">
            <slot />
        </main>
        <AppModalHost />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppModalHost from '@/components/AppModalHost.vue'
import AppPageTabs from '@/components/AppPageTabs.vue'

const props = defineProps({
    lnbInitialOpenAll: {
        type: Boolean,
        default: true,
    },
    lnbSingleOpen: {
        type: Boolean,
        default: false,
    },
    // 확장 스케폴딩: 필요 시 아래 옵션을 복구해서 사용
    // gnbFull: { type: Boolean, default: false },
    // paginationFull: { type: Boolean, default: false },
    // showPageTabs: { type: Boolean, default: true },
    // hasLnb: { type: Boolean, default: true },
    // lnbToggleMode: {
    //     type: String,
    //     default: 'compact',
    //     validator: (value) => ['compact', 'hidden'].includes(value),
    // },
})

const lnbActive = ref(true)
const lnbWidth = ref(150)
const minLnbWidth = 120
const maxLnbWidth = 360

const handleLnbControl = (event) => {
    const target = event.target
    if (!(target instanceof Element)) {
        return
    }
    if (target.closest('.control__lnb')) {
        lnbActive.value = !lnbActive.value
    }
}

const layoutClass = computed(() => ({
    layout: true,
    'layout__lnb-active': lnbActive.value,
    'layout__lnb-closed': !lnbActive.value,
    // 확장 스케폴딩
    // 'layout__gnb-full': props.gnbFull,
    // 'layout__pagination-full': props.paginationFull,
    // 'layout__lnb-none': !props.hasLnb,
    // 'layout__lnb-compact': props.hasLnb && props.lnbToggleMode === 'compact',
    // 'layout__lnb-hidden': props.hasLnb && props.lnbToggleMode === 'hidden',
}))

const layoutStyle = computed(() => ({
    '--lnb-open-width': `${lnbWidth.value}px`,
}))

const showResizeHandle = computed(() => lnbActive.value)

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const onResizeStart = (event) => {
    if (!lnbActive.value) {
        return
    }
    const startX = event.clientX
    const startWidth = lnbWidth.value
    const body = document.body
    const prevUserSelect = body.style.userSelect
    const prevCursor = body.style.cursor
    body.style.userSelect = 'none'
    body.style.cursor = 'col-resize'

    const onMove = (moveEvent) => {
        const nextWidth = startWidth + (moveEvent.clientX - startX)
        lnbWidth.value = clamp(nextWidth, minLnbWidth, maxLnbWidth)
    }

    const onUp = () => {
        body.style.userSelect = prevUserSelect
        body.style.cursor = prevCursor
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup', onUp)
    }

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
}
</script>
