<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.calendar.title') }}</h1>
            <p class="component__section-desc">{{ t('components.calendar.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">{{ t('components.calendar.subtitle') }}</h2>
            <div class="component__section-row">
                <div class="component__field">
                    <label class="component__label" for="calendar-demo-single">
                        {{ t('components.calendar.single') }}
                    </label>
                    <AppDatePicker
                        :input-id="'calendar-demo-single'"
                        v-model="singleDate"
                        :placeholder="t('components.calendar.placeholderSingle')"
                    />
                </div>
                <div class="component__field">
                    <label class="component__label" for="calendar-demo-range">
                        {{ t('components.calendar.range') }}
                    </label>
                    <AppDatePicker
                        :input-id="'calendar-demo-range'"
                        v-model="rangeDate"
                        mode="range"
                        :placeholder="t('components.calendar.placeholderRange')"
                    />
                </div>
                <div class="component__field">
                    <label class="component__label" for="calendar-demo-multiple">
                        {{ t('components.calendar.multiple') }}
                    </label>
                    <AppDatePicker
                        :input-id="'calendar-demo-multiple'"
                        v-model="multipleDates"
                        mode="multiple"
                        :placeholder="t('components.calendar.placeholderMultiple')"
                    />
                </div>
            </div>
            <p class="component__helper">
                {{ t('components.calendar.helper') }}
            </p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppDatePicker from '@/components/AppDatePicker.vue'

const { t } = useI18n()
const singleDate = ref('')
const rangeDate = ref([])
const multipleDates = ref([])
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

.component__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 240px;
}

.component__label {
    @include font(b5, semibold);
    color: $black-1;
}

.component__helper {
    @include font(b5, medium);
    color: $black-2;
}
</style>
