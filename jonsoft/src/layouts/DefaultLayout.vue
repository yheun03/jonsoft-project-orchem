<template>
    <div :class="layoutClass" @click="handleLnbControl">
        <header class="layout__gnb">
            <slot name="gnb">
                <AppHeader />
            </slot>
        </header>
        <aside v-if="hasLnb" class="layout__lnb">
            <slot name="lnb">
                <AppSidebar />
            </slot>
        </aside>
        <main class="layout__content">
            <slot />
        </main>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

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
})

const lnbMode = ref('expanded')

const getNextLnbMode = (currentMode) =>
    currentMode === 'expanded' ? props.lnbToggleMode : 'expanded'

const handleLnbControl = (event) => {
    if (!props.hasLnb) {
        return
    }
    const target = event.target
    if (!(target instanceof Element)) {
        return
    }
    if (target.closest('.control__lnb')) {
        lnbMode.value = getNextLnbMode(lnbMode.value)
    }
}

const layoutClass = computed(() => ({
    layout: true,
    'layout--gnb-full': props.gnbFull,
    'layout--no-lnb': !props.hasLnb,
    'layout--lnb-compact': props.hasLnb && lnbMode.value === 'compact',
    'layout--lnb-hidden': props.hasLnb && lnbMode.value === 'hidden',
    'layout--lnb-closed': props.hasLnb && lnbMode.value !== 'expanded',
}))
</script>
