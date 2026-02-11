<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.input.title') }}</h1>
            <p class="component__section-desc">{{ t('components.input.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트 인풋</h2>
            <div class="component__section-row">
                <div class="component__field">
                    <label class="component__label" for="input-basic">기본 입력</label>
                    <AppInput
                        input-id="input-basic"
                        name="temp-input-basic"
                        placeholder="기본 입력"
                        aria-describedby="input-basic-help"
                    />
                    <p id="input-basic-help" class="component__helper">예: ORC-4164</p>
                </div>
                <div class="component__field">
                    <label class="component__label" for="input-disabled">비활성</label>
                    <AppInput
                        input-id="input-disabled"
                        name="temp-input-disabled"
                        placeholder="비활성"
                        disabled
                        aria-describedby="input-disabled-help"
                    />
                    <p id="input-disabled-help" class="component__helper">비활성 상태에서는 입력할 수 없습니다.</p>
                </div>
                <div class="component__field">
                    <label class="component__label" for="input-error">오류 상태</label>
                    <AppInput
                        input-id="input-error"
                        name="temp-input-error"
                        placeholder="오류 상태"
                        invalid
                        aria-describedby="input-error-help"
                    />
                    <p id="input-error-help" class="component__helper component__helper--error">필수 입력 항목입니다.</p>
                </div>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트에어리어</h2>
            <div class="component__section-row">
                <div class="component__field component__field--wide">
                    <label class="component__label" for="textarea-basic">기본 입력</label>
                    <AppTextarea
                        textarea-id="textarea-basic"
                        name="temp-textarea-basic"
                        :rows="4"
                        placeholder="내용을 입력하세요"
                        aria-describedby="textarea-basic-help"
                    />
                    <p id="textarea-basic-help" class="component__helper">최대 200자까지 입력할 수 있습니다.</p>
                </div>
                <div class="component__field component__field--wide">
                    <label class="component__label" for="textarea-disabled">비활성</label>
                    <AppTextarea
                        textarea-id="textarea-disabled"
                        name="temp-textarea-disabled"
                        :rows="4"
                        placeholder="비활성"
                        disabled
                        aria-describedby="textarea-disabled-help"
                    />
                    <p id="textarea-disabled-help" class="component__helper">비활성 상태에서는 입력할 수 없습니다.</p>
                </div>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">속성 예시</h2>
            <div class="component__section-row">
                <div class="component__field">
                    <label class="component__label" for="input-required">필수 입력</label>
                    <AppInput
                        input-id="input-required"
                        name="temp-input-required"
                        placeholder="필수 입력"
                        aria-describedby="input-required-help"
                    />
                    <p id="input-required-help" class="component__helper">필수 항목입니다.</p>
                </div>
                <div class="component__field">
                    <label class="component__label" for="input-readonly">읽기 전용</label>
                    <AppInput
                        input-id="input-readonly"
                        name="temp-input-readonly"
                        model-value="readonly"
                        readonly
                        aria-describedby="input-readonly-help"
                    />
                    <p id="input-readonly-help" class="component__helper">수정할 수 없습니다.</p>
                </div>
                <div class="component__field component__field--wide">
                    <label class="component__label" for="textarea-count">최대 글자 수</label>
                    <AppTextarea
                        textarea-id="textarea-count"
                        name="temp-textarea-count"
                        :rows="3"
                        placeholder="100자 이내"
                        :maxlength="100"
                        aria-describedby="textarea-count-help"
                    />
                    <p id="textarea-count-help" class="component__helper">최대 100자까지 입력됩니다.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppInput from '@/components/AppInput.vue'
import AppTextarea from '@/components/AppTextarea.vue'

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

.component__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 240px;
}

.component__field--wide {
    min-width: 320px;
}

.component__label {
    @include font(b5, semibold);
    color: $black-1;
}

.component__helper {
    @include font(b5, medium);
    color: $black-2;
}

.component__helper--error {
    color: $error;
}
</style>
