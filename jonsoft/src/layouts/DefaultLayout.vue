<template>
    <div :class="layoutClass">
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
import { computed } from 'vue'
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
})

const layoutClass = computed(() => ({
    layout: true,
    'layout--gnb-full': props.gnbFull,
    'layout--no-lnb': !props.hasLnb,
}))
</script>
