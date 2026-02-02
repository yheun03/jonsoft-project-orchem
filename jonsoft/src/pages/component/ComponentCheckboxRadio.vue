<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">Checkbox & Radio</h1>
            <p class="component__section-desc">디자인 시스템 체크박스/라디오 컴포넌트를 한눈에 확인합니다.</p>
        </header>

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
            <h2 class="component__section-subtitle">토글</h2>
            <div class="component__section-row">
                <AppToggle v-model="toggleEnabled" label="알림" ariaLabel="알림 설정" />
                <AppToggle label="자동 저장" ariaLabel="자동 저장" disabled />
            </div>
            <p class="component__section-hint">선택 값: {{ toggleEnabled ? 'ON' : 'OFF' }}</p>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">속성 예시</h2>
            <div class="component__section-row">
                <span id="check-help" class="component__section-hint">작업 동의 체크</span>
                <AppCheckbox
                    v-model="checkboxLabel"
                    variant="icon-label"
                    label="동의"
                    ariaDescribedby="check-help"
                />
                <AppCheckbox v-model="checkboxFilled" variant="filled" label="비활성" disabled />
                <span id="radio-help" class="component__section-hint">우선 순위 선택</span>
                <AppRadio
                    v-model="radioValue"
                    name="radio-props"
                    value="high"
                    label="높음"
                    ariaDescribedby="radio-help"
                />
                <AppRadio
                    v-model="radioValue"
                    name="radio-props"
                    value="low"
                    label="낮음"
                    disabled
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import AppCheckbox from '@/components/AppCheckbox.vue'
import AppRadio from '@/components/AppRadio.vue'
import AppToggle from '@/components/AppToggle.vue'
import CalendarIcon from '@/assets/icons/24/ic-calendar.svg?component'
import ArrowIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'

const checkboxIconOnly = ref(false)
const checkboxLabel = ref(false)
const checkboxFilled = ref(true)
const checkboxFilledIcon = ref(false)

const radioValue = ref('label')
const toggleEnabled = ref(false)
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
