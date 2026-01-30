<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">Input</h1>
            <p class="component__section-desc">디자인 시스템 입력 컴포넌트를 한눈에 확인합니다.</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">텍스트 인풋</h2>
            <div class="component__section-row">
                <div class="component__field">
                    <label class="component__label" for="input-basic">기본 입력</label>
                    <input
                        id="input-basic"
                        class="component__input"
                        type="text"
                        placeholder="기본 입력"
                        aria-describedby="input-basic-help"
                    />
                    <p id="input-basic-help" class="component__helper">예: ORC-4164</p>
                </div>
                <div class="component__field">
                    <label class="component__label" for="input-disabled">비활성</label>
                    <input
                        id="input-disabled"
                        class="component__input"
                        type="text"
                        placeholder="비활성"
                        disabled
                        aria-describedby="input-disabled-help"
                    />
                    <p id="input-disabled-help" class="component__helper">비활성 상태에서는 입력할 수 없습니다.</p>
                </div>
                <div class="component__field">
                    <label class="component__label" for="input-error">오류 상태</label>
                    <input
                        id="input-error"
                        class="component__input component__input--error"
                        type="text"
                        placeholder="오류 상태"
                        aria-invalid="true"
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
                    <textarea
                        id="textarea-basic"
                        class="component__textarea"
                        rows="4"
                        placeholder="내용을 입력하세요"
                        aria-describedby="textarea-basic-help"
                    ></textarea>
                    <p id="textarea-basic-help" class="component__helper">최대 200자까지 입력할 수 있습니다.</p>
                </div>
                <div class="component__field component__field--wide">
                    <label class="component__label" for="textarea-disabled">비활성</label>
                    <textarea
                        id="textarea-disabled"
                        class="component__textarea"
                        rows="4"
                        placeholder="비활성"
                        disabled
                        aria-describedby="textarea-disabled-help"
                    ></textarea>
                    <p id="textarea-disabled-help" class="component__helper">비활성 상태에서는 입력할 수 없습니다.</p>
                </div>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">속성 예시</h2>
            <div class="component__section-row">
                <div class="component__field">
                    <label class="component__label" for="input-required">필수 입력</label>
                    <input
                        id="input-required"
                        class="component__input"
                        type="text"
                        placeholder="필수 입력"
                        required
                        aria-describedby="input-required-help"
                    />
                    <p id="input-required-help" class="component__helper">필수 항목입니다.</p>
                </div>
                <div class="component__field">
                    <label class="component__label" for="input-readonly">읽기 전용</label>
                    <input
                        id="input-readonly"
                        class="component__input"
                        type="text"
                        value="readonly"
                        readonly
                        aria-describedby="input-readonly-help"
                    />
                    <p id="input-readonly-help" class="component__helper">수정할 수 없습니다.</p>
                </div>
                <div class="component__field component__field--wide">
                    <label class="component__label" for="textarea-count">최대 글자 수</label>
                    <textarea
                        id="textarea-count"
                        class="component__textarea"
                        rows="3"
                        placeholder="100자 이내"
                        maxlength="100"
                        aria-describedby="textarea-count-help"
                    ></textarea>
                    <p id="textarea-count-help" class="component__helper">최대 100자까지 입력됩니다.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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

.component__input,
.component__textarea {
    @include font(b4, medium);
    padding: 10px 12px;
    border: 1px solid $black-3;
    border-radius: 8px;
    background: $white;
    color: $black-0;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.component__input:focus,
.component__textarea:focus {
    border-color: $primary-500;
    box-shadow: 0 0 0 3px rgba($primary-300, 0.25);
}

.component__input:disabled,
.component__textarea:disabled {
    background: $black-5;
    color: $black-2;
    cursor: not-allowed;
}

.component__input--error {
    border-color: $error;
}

.component__textarea {
    resize: vertical;
}
</style>
