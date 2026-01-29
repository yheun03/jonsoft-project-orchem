<template>
    <section class="component__section">
        <h1 class="component__section-title">Component</h1>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트 버튼</h2>
            <div class="component__section-row">
                <AppButton label="기본" variant="text" textColor="primary-500" />
                <AppButton label="보조" variant="text" textColor="secondary-600" />
                <AppButton label="위험" variant="text" textColor="error" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">면 버튼</h2>
            <div class="component__section-row">
                <AppButton label="기본" variant="filled" color="primary-500" />
                <AppButton label="보조" variant="filled" color="secondary-600" />
                <AppButton label="성공" variant="filled" color="success" />
                <AppButton label="경고" variant="filled" color="warning" textColor="black-0" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">아이콘 + 텍스트</h2>
            <div class="component__section-row">
                <AppButton variant="icon-text" color="primary-700" label="캘린더">
                    <template #icon-left>
                        <CalendarIcon />
                    </template>
                </AppButton>
                <AppButton variant="icon-text" color="secondary-600" label="다운">
                    <template #icon-left>
                        <ArrowIcon />
                    </template>
                </AppButton>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트 + 아이콘</h2>
            <div class="component__section-row">
                <AppButton variant="text-icon" textColor="primary-700" label="다음">
                    <template #icon-right>
                        <ArrowIcon />
                    </template>
                </AppButton>
                <AppButton variant="text-icon" textColor="secondary-600" label="일정">
                    <template #icon-right>
                        <CalendarIcon />
                    </template>
                </AppButton>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">아이콘 버튼</h2>
            <div class="component__section-row">
                <AppButton variant="icon" ariaLabel="캘린더 열기" color="primary-500">
                    <template #icon>
                        <CalendarIcon />
                    </template>
                </AppButton>
                <AppButton variant="icon" ariaLabel="닫기" color="secondary-600">
                    <template #icon>
                        <ArrowIcon />
                    </template>
                </AppButton>
            </div>
        </div>
    </section>
</template>

<script setup>
import AppButton from '@/components/AppButton.vue'
import CalendarIcon from '@/assets/icons/24/ic-calendar.svg?component'
import ArrowIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'
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
</style>