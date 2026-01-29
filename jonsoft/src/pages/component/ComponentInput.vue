<template>
    <section class="component__section">
        <h1 class="component__section-title">Component</h1>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">체크박스</h2>
            <div class="component__section-row">
                <AppCheckbox v-model="checkboxIconOnly" variant="icon" aria-label="아이콘 체크" />
                <AppCheckbox v-model="checkboxLabel" variant="icon-label" label="라벨 체크" />
                <AppCheckbox v-model="checkboxFilled" variant="filled" label="면 선택" />
                <AppCheckbox v-model="checkboxFilledIcon" variant="filled-icon-text" label="면 선택 + 아이콘">
                    <template #icon>
                        <CalendarIcon />
                    </template>
                </AppCheckbox>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">라디오</h2>
            <div class="component__section-row">
                <AppRadio v-model="radioValue" name="radio-basic" value="icon" variant="icon" aria-label="아이콘 라디오" />
                <AppRadio v-model="radioValue" name="radio-basic" value="label" variant="icon-label" label="라벨 라디오" />
                <AppRadio v-model="radioValue" name="radio-basic" value="filled" variant="filled" label="면 선택" />
                <AppRadio v-model="radioValue" name="radio-basic" value="filled-icon" variant="filled-icon-text" label="면 선택 + 아이콘">
                    <template #icon>
                        <ArrowIcon />
                    </template>
                </AppRadio>
            </div>
            <p class="component__section-hint">선택 값: {{ radioValue }}</p>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">셀렉트</h2>
            <div class="component__section-row">
                <AppSelect v-model="selectValue" :options="selectOptions" placeholder="작업 상태 선택" />
                <AppSelect v-model="selectRole" :options="roleOptions" placeholder="역할 선택" />
            </div>
            <p class="component__section-hint">선택 값: {{ selectValue }}</p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import AppRadio from '@/components/AppRadio.vue'
import AppSelect from '@/components/AppSelect.vue'
import CalendarIcon from '@/assets/icons/24/ic-calendar.svg?component'
import ArrowIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'

const checkboxIconOnly = ref(false)
const checkboxLabel = ref(false)
const checkboxFilled = ref(true)
const checkboxFilledIcon = ref(false)

const radioValue = ref('label')

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

const selectValue = ref('waiting')
const selectRole = ref('admin')
</script>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.component__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
