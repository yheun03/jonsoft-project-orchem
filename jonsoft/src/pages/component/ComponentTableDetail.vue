<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">Table Detail</h1>
            <p class="component__section-desc">선택한 행의 상세 페이지 예시입니다.</p>
        </header>

        <div class="component__section-group">
            <p class="component__section-hint">선택 ID: {{ id }}</p>
            <AppButton label="뒤로가기" variant="text" textColor="primary-500" @click="goBack" />
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppButton from '@/components/AppButton.vue'

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id)

const goBack = () => {
    router.push('/component/table')
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
    gap: 12px;
}

.component__section-hint {
    @include font(b4, medium);
    color: $black-2;
}
</style>
