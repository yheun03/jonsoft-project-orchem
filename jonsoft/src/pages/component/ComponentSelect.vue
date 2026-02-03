<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.select.title') }}</h1>
            <p class="component__section-desc">{{ t('components.select.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">셀렉트</h2>
            <div class="component__section-row">
                <AppSelect v-model="selectValue" :options="selectOptions" placeholder="작업 상태 선택" />
                <AppSelect v-model="selectRole" :options="roleOptions" placeholder="역할 선택" />
            </div>
            <p class="component__section-hint">선택 값: {{ selectValue }}</p>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">속성 예시</h2>
            <div class="component__section-row">
                <span id="select-help" class="component__section-hint">진행 상태를 선택하세요.</span>
                <AppSelect
                    v-model="selectValue"
                    :options="selectOptions"
                    placeholder="상태 선택"
                    ariaDescribedby="select-help"
                />
                <AppSelect
                    v-model="selectRole"
                    :options="roleOptions"
                    placeholder="비활성"
                    disabled
                />
                <AppSelect
                    v-model="customValue"
                    :options="customOptions"
                    labelKey="name"
                    valueKey="code"
                    placeholder="커스텀 키"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppSelect from '@/components/AppSelect.vue'

const { t } = useI18n()
const selectOptions = [
    { label: '대기', value: 'waiting' },
    { label: '진행 중', value: 'working' },
    { label: '완료', value: 'done' }
]

const roleOptions = [
    { label: '관리자', value: 'admin' },
    { label: '매니저', value: 'manager' },
    { label: '작업자', value: 'worker' }
]

const customOptions = [
    { name: '우선', code: 'first' },
    { name: '일반', code: 'normal' },
    { name: '낮음', code: 'low' }
]

const selectValue = ref('waiting')
const selectRole = ref('admin')
const customValue = ref('normal')
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

.component__section-hint {
    @include font(b5, medium);
    color: $black-2;
}
</style>
