<template>
    <DefaultLayout v-if="!isEmptyLayout">
        <RouterView />
    </DefaultLayout>
    <RouterView v-else />
</template>
<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()
const isEmptyLayout = computed(() => route.meta?.layout === 'empty')
</script>
