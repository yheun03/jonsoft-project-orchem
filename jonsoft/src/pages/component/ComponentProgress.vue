<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.progress.title') }}</h1>
            <p class="component__section-desc">{{ t('components.progress.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">기본</h2>
            <div class="component__section-row">
                <AppProgress :value="20" />
                <AppProgress :value="45" />
                <AppProgress :value="75" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">라벨 숨김</h2>
            <div class="component__section-row">
                <AppProgress :value="60" :show-label="false" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppProgress from '@/components/AppProgress.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.component__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.component__section-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.component__section-title {
    @include font(t1, semibold);
    color: $black-0;
}

.component__section-desc {
    @include font(b4, medium);
    color: $black-2;
}

.component__section-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.component__section-subtitle {
    @include font(b3, semibold);
    color: $black-1;
}

.component__section-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}
</style>
