<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.button.title') }}</h1>
            <p class="component__section-desc">{{ t('components.button.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트 버튼</h2>
            <div class="component__section-row">
                <AppButton label="기본" name="temp-btn-text-primary" appearance="text" textColor="primary-500" />
                <AppButton label="보조" name="temp-btn-text-secondary" appearance="text" textColor="secondary-600" />
                <AppButton label="위험" name="temp-btn-text-danger" appearance="text" textColor="error" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">면 버튼</h2>
            <div class="component__section-row">
                <AppButton label="기본" name="temp-btn-filled-primary" appearance="filled" color="primary-500" />
                <AppButton label="보조" name="temp-btn-filled-secondary" appearance="filled" color="secondary-600" />
                <AppButton label="성공" name="temp-btn-filled-success" appearance="filled" color="success" />
                <AppButton label="경고" name="temp-btn-filled-warning" appearance="filled" color="warning" textColor="black-0" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">보더 버튼</h2>
            <div class="component__section-row">
                <AppButton label="기본" name="temp-btn-border-primary" appearance="border" color="primary-500" />
                <AppButton label="보조" name="temp-btn-border-secondary" appearance="border" color="secondary-600" />
                <AppButton label="성공" name="temp-btn-border-success" appearance="border" color="success" />
                <AppButton label="경고" name="temp-btn-border-warning" appearance="border" color="warning" textColor="warning" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">아이콘 + 텍스트</h2>
            <div class="component__section-row">
                <AppButton layout="icon-text" name="temp-btn-icon-text-calendar" appearance="filled" color="primary-700" label="캘린더">
                    <template #icon-left>
                        <CalendarIcon />
                    </template>
                </AppButton>
                <AppButton layout="icon-text" name="temp-btn-icon-text-download" appearance="filled" color="secondary-600" label="다운">
                    <template #icon-left>
                        <ArrowIcon />
                    </template>
                </AppButton>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트 + 아이콘</h2>
            <div class="component__section-row">
                <AppButton layout="text-icon" name="temp-btn-text-icon-next" appearance="text" textColor="primary-700" label="다음">
                    <template #icon-right>
                        <ArrowIcon />
                    </template>
                </AppButton>
                <AppButton layout="text-icon" name="temp-btn-text-icon-plan" appearance="text" textColor="secondary-600" label="일정">
                    <template #icon-right>
                        <CalendarIcon />
                    </template>
                </AppButton>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">아이콘 버튼</h2>
            <div class="component__section-row">
                <AppButton layout="icon" name="temp-btn-icon-calendar" appearance="filled" ariaLabel="캘린더 열기" color="primary-500">
                    <template #icon>
                        <CalendarIcon />
                    </template>
                </AppButton>
                <AppButton layout="icon" name="temp-btn-icon-close" appearance="border" ariaLabel="닫기" color="secondary-600">
                    <template #icon>
                        <ArrowIcon />
                    </template>
                </AppButton>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">속성 예시</h2>
            <div class="component__section-row">
                <AppButton label="비활성" name="temp-btn-disabled" appearance="filled" color="primary-500" disabled />
                <AppButton label="전송" name="temp-btn-submit" appearance="filled" color="secondary-600" type="submit" />
                <span id="button-help" class="component__section-hint">버튼 설명 텍스트</span>
                <AppButton label="설명 연결" name="temp-btn-described" appearance="text" textColor="primary-500" ariaDescribedby="button-help" />
                <span id="icon-button-label" class="component__section-hint">설정 열기</span>
                <AppButton layout="icon" name="temp-btn-icon-labelled" appearance="border" color="primary-700" ariaLabelledby="icon-button-label">
                    <template #icon>
                        <ArrowIcon />
                    </template>
                </AppButton>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'
import CalendarIcon from '@/assets/icons/24/ic-calendar.svg?component'
import ArrowIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'

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