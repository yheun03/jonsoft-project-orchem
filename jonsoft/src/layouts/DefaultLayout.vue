<template>
    <div :class="layoutClass" @click="handleLnbControl">
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
</script>
