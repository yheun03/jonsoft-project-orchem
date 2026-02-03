<template>
    <section class="settings__section">
        <header class="settings__header">
            <h1 class="settings__title">{{ t('settings.title') }}</h1>
            <p class="settings__desc">{{ t('settings.desc') }}</p>
        </header>

        <div class="settings__group">
            <label class="settings__label" :for="selectId">
                {{ t('settings.languageLabel') }}
            </label>
            <AppSelect
                :id="selectId"
                v-model="selectedLocale"
                :options="languageOptions"
                :placeholder="t('settings.languagePlaceholder')"
                :ariaLabel="t('settings.languageLabel')"
            />
        </div>
    </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppSelect from '@/components/AppSelect.vue'
import { setLocale } from '@/i18n'

const { t, locale } = useI18n()
const selectId = 'settings-language'

const languageOptions = computed(() => ([
    { label: t('settings.languageOptions.ko'), value: 'ko' },
    { label: t('settings.languageOptions.en'), value: 'en' },
    { label: t('settings.languageOptions.ja'), value: 'ja' },
    { label: t('settings.languageOptions.vi'), value: 'vi' }
]))

const selectedLocale = ref(locale.value)

watch(selectedLocale, (value) => {
    if (!value || value === locale.value) {
        return
    }
    setLocale(value)
})

watch(locale, (value) => {
    if (value !== selectedLocale.value) {
        selectedLocale.value = value
    }
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.settings__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.settings__header {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.settings__title {
    @include font(t1, semibold);
    color: $black-0;
}

.settings__desc {
    @include font(b4, medium);
    color: $black-2;
}

.settings__group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.settings__label {
    @include font(b4, medium);
    color: $black-1;
}
</style>
