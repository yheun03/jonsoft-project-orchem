<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.modal.title') }}</h1>
            <p class="component__section-desc">{{ t('components.modal.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">기본</h2>
            <div class="component__section-row">
                <AppButton label="기본 확인" color="primary-500" @click="openBasic" />
            </div>
            <p class="component__section-hint">결과: {{ resultText }}</p>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">문구/버튼 텍스트</h2>
            <div class="component__section-row">
                <AppButton label="커스텀 타이틀" color="secondary-600" @click="openCustomText" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">닫기 동작 제어</h2>
            <div class="component__section-row">
                <AppButton label="딤 클릭 비활성" variant="text" textColor="primary-700" @click="openNoDim" />
                <AppButton label="ESC 닫기 비활성" variant="text" textColor="primary-700" @click="openNoEsc" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">중첩 모달</h2>
            <div class="component__section-row">
                <AppButton label="2개 연속 호출" color="primary-700" @click="openNested" />
            </div>
            <p class="component__section-hint">두 번째 모달이 항상 위에 뜹니다.</p>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '@/components/AppButton.vue'
import { confirm } from '@/composables/useModal'

const { t } = useI18n()
const lastResult = ref(null)

const resultText = computed(() => {
    if (lastResult.value === null) {
        return '대기 중'
    }
    return lastResult.value ? 'true' : 'false'
})

const openBasic = async () => {
    lastResult.value = await confirm({
        title: '확인',
        message: '계속 진행하시겠습니까?'
    })
}

const openCustomText = async () => {
    lastResult.value = await confirm({
        title: '삭제',
        message: '선택한 항목을 삭제할까요?',
        confirmText: '삭제',
        cancelText: '취소'
    })
}

const openNoDim = async () => {
    lastResult.value = await confirm({
        title: '딤 클릭 비활성',
        message: '딤 클릭으로 닫히지 않습니다.',
        closeOnDim: false
    })
}

const openNoEsc = async () => {
    lastResult.value = await confirm({
        title: 'ESC 닫기 비활성',
        message: 'ESC 키로 닫히지 않습니다.',
        closeOnEsc: false
    })
}

const openNested = async () => {
    const first = confirm({
        title: '첫 번째 모달',
        message: '두 번째 모달이 위에 표시됩니다.'
    })
    const second = confirm({
        title: '두 번째 모달',
        message: '이 모달이 가장 위에 있습니다.'
    })
    const [firstResult, secondResult] = await Promise.all([first, second])
    lastResult.value = firstResult && secondResult
}
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
