<template>
    <section class="font-system">
        <header class="font-system__header">
            <h1 class="font-system__title">{{ t('components.font.title') }}</h1>
            <p class="font-system__desc">{{ t('components.font.desc') }}</p>
        </header>

        <div class="font-system__section">
            <h2 class="font-system__section-title">Main</h2>
            <div class="font-system__table">
                <div class="font-system__table-head">
                    <span>Name</span>
                    <span>Font size</span>
                    <span>Line Height</span>
                </div>
                <div class="font-system__table-body">
                    <template v-for="row in mainRows" :key="row.key">
                        <div v-if="row.divider" class="font-system__divider" aria-hidden="true"></div>
                        <div v-else class="font-system__row">
                            <span
                                class="font-system__name"
                                :class="row.sampleClass"
                                :data-weight="row.weight"
                            >
                                {{ row.name }}
                            </span>
                            <span class="font-system__value">{{ row.size }}</span>
                            <span class="font-system__value">{{ row.lineHeight }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="font-system__section">
            <h2 class="font-system__section-title">Sub</h2>
            <div class="font-system__table">
                <div class="font-system__table-head">
                    <span>Name</span>
                    <span>Font size</span>
                    <span>Line Height</span>
                </div>
                <div class="font-system__table-body">
                    <template v-for="row in subRows" :key="row.key">
                        <div class="font-system__row">
                            <span
                                class="font-system__name"
                                :class="row.sampleClass"
                                :data-weight="row.weight"
                            >
                                {{ row.name }}
                            </span>
                            <span class="font-system__value">{{ row.size }}</span>
                            <span class="font-system__value">{{ row.lineHeight }}</span>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const mainRows = [
    { key: 'h1', name: 'Heading 1', weight: 'bold', size: 48, lineHeight: 56, sampleClass: 'font-system__sample--main-h1' },
    { key: 'h2', name: 'Heading 2', weight: 'bold', size: 40, lineHeight: 48, sampleClass: 'font-system__sample--main-h2' },
    { key: 'h3', name: 'Heading 3', weight: 'bold', size: 32, lineHeight: 40, sampleClass: 'font-system__sample--main-h3' },
    { key: 'h4', name: 'Heading 4', weight: 'semibold', size: 28, lineHeight: 36, sampleClass: 'font-system__sample--main-h4' },
    { key: 'divider-1', divider: true },
    { key: 't1', name: 'Title 1', weight: 'semibold', size: 24, lineHeight: 32, sampleClass: 'font-system__sample--main-t1' },
    { key: 't2', name: 'Title 2', weight: 'semibold', size: 22, lineHeight: 30, sampleClass: 'font-system__sample--main-t2' },
    { key: 't3', name: 'Title 3', weight: 'semibold', size: 20, lineHeight: 28, sampleClass: 'font-system__sample--main-t3' },
    { key: 'divider-2', divider: true },
    { key: 'b1', name: 'Body 1', weight: 'medium', size: 20, lineHeight: 28, sampleClass: 'font-system__sample--main-b1' },
    { key: 'b2', name: 'Body 2', weight: 'medium', size: 18, lineHeight: 26, sampleClass: 'font-system__sample--main-b2' },
    { key: 'b3', name: 'Body 3', weight: 'medium', size: 16, lineHeight: 24, sampleClass: 'font-system__sample--main-b3' },
    { key: 'b4', name: 'Body 4', weight: 'medium', size: 14, lineHeight: 22, sampleClass: 'font-system__sample--main-b4' },
    { key: 'b5', name: 'Body 5', weight: 'medium', size: 12, lineHeight: 20, sampleClass: 'font-system__sample--main-b5' },
    { key: 'divider-3', divider: true },
    { key: 'btn1', name: 'Button 1', weight: 'semibold', size: 16, lineHeight: 24, sampleClass: 'font-system__sample--main-btn1' },
    { key: 'btn2', name: 'Button 2', weight: 'semibold', size: 14, lineHeight: 22, sampleClass: 'font-system__sample--main-btn2' },
]

const subRows = [
    { key: 'sub-h1', name: 'Heading 1', weight: 'bold', size: 32, lineHeight: 40, sampleClass: 'font-system__sample--sub-h1' },
    { key: 'sub-t1', name: 'Title 1', weight: 'semibold', size: 20, lineHeight: 28, sampleClass: 'font-system__sample--sub-t1' },
    { key: 'sub-b1', name: 'Body 1', weight: 'medium', size: 16, lineHeight: 24, sampleClass: 'font-system__sample--sub-b1' },
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.font-system {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.font-system__header {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.font-system__title {
    @include font(t1, semibold);
    color: $black-0;
}

.font-system__desc {
    @include font(b4, medium);
    color: $black-2;
}

.font-system__section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 20px;
    background: $white;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba($black-0, 0.08);
}

.font-system__section-title {
    @include font(b3, medium);
    color: $primary-700;
}

.font-system__table {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.font-system__table-head,
.font-system__row {
    display: grid;
    grid-template-columns: 1fr 120px 120px;
    gap: 24px;
    align-items: center;
}

.font-system__table-head {
    @include font(b4, medium);
    color: $black-2;
    padding-bottom: 10px;
    border-bottom: 1px solid $black-3;
}

.font-system__table-body {
    display: flex;
    flex-direction: column;
}

.font-system__row {
    padding: 10px 0;
}

.font-system__divider {
    height: 1px;
    background: $black-4;
    margin: 6px 0;
}

.font-system__name {
    color: $black-0;
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
}

.font-system__name::after {
    content: " / " attr(data-weight);
    @include font(b5, medium);
    color: $black-2;
}

.font-system__value {
    @include font(b4, medium);
    color: $black-1;
    text-align: right;
}

.font-system__sample--main-h1 { @include font(h1, main); }
.font-system__sample--main-h2 { @include font(h2, main); }
.font-system__sample--main-h3 { @include font(h3, main); }
.font-system__sample--main-h4 { @include font(h4, main); }
.font-system__sample--main-t1 { @include font(t1, main); }
.font-system__sample--main-t2 { @include font(t2, main); }
.font-system__sample--main-t3 { @include font(t3, main); }
.font-system__sample--main-b1 { @include font(b1, main); }
.font-system__sample--main-b2 { @include font(b2, main); }
.font-system__sample--main-b3 { @include font(b3, main); }
.font-system__sample--main-b4 { @include font(b4, main); }
.font-system__sample--main-b5 { @include font(b5, main); }
.font-system__sample--main-btn1 { @include font(btn1, main); }
.font-system__sample--main-btn2 { @include font(btn2, main); }

.font-system__sample--sub-h1 { @include font(h1, sub); }
.font-system__sample--sub-t1 { @include font(t1, sub); }
.font-system__sample--sub-b1 { @include font(b1, sub); }
</style>
