<template>
    <div class="app__grid-overlay">
        <span class="app__grid-overlay-icon">🔍</span>
        <span class="app__grid-overlay-text">{{ t('grid.noRows') }}</span>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
