<template>
    <div ref="layoutRef" :class="layoutClass" :style="layoutStyle" @click="handleLnbControl">
        <header class="layout__gnb">
            <slot name="gnb">
                <AppHeader />
            </slot>
        </header>
        <aside v-if="hasLnb" class="layout__lnb">
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

const props = defineProps({
    gnbFull: {
        type: Boolean,
        default: false,
    },
    hasLnb: {
        type: Boolean,
        default: true,
    },
    lnbToggleMode: {
        type: String,
        default: 'compact',
        validator: (value) => ['compact', 'hidden'].includes(value),
    },
    lnbInitialOpenAll: {
        type: Boolean,
        default: true,
    },
    lnbSingleOpen: {
        type: Boolean,
        default: false,
    },
})

const lnbActive = ref(true)
const layoutRef = ref(null)
const lnbWidth = ref(150)
const minLnbWidth = 120
const maxLnbWidth = 360

const handleLnbControl = (event) => {
    if (!props.hasLnb) {
        return
    }
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
    'layout__gnb-full': props.gnbFull,
    'layout__lnb-none': !props.hasLnb,
    'layout__lnb-compact': props.hasLnb && props.lnbToggleMode === 'compact',
    'layout__lnb-hidden': props.hasLnb && props.lnbToggleMode === 'hidden',
    'layout__lnb-active': props.hasLnb && lnbActive.value,
    'layout__lnb-closed': props.hasLnb && !lnbActive.value,
}))

const layoutStyle = computed(() => ({
    '--lnb-open-width': `${lnbWidth.value}px`,
}))

const showResizeHandle = computed(() => props.hasLnb && lnbActive.value)

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const onResizeStart = (event) => {
    if (!props.hasLnb || !lnbActive.value) {
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
