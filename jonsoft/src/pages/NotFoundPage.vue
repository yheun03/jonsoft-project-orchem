<template>
    <section class="not-found">
        <div class="not-found__card">
            <div class="not-found__badge">404</div>
            <h1 class="not-found__title">{{ t('notFound.title') }}</h1>
            <p class="not-found__desc">
                {{ t('notFound.descLine1') }}<br/>
                {{ t('notFound.descLine2') }}
            </p>
            <div class="not-found__actions">
                <button class="not-found__ghost" type="button" @click="goBack">
                    {{ t('notFound.back') }}
                </button>
                <RouterLink class="not-found__link" to="/">
                    {{ t('notFound.home') }}
                </RouterLink>
            </div>
        </div>
        <div class="not-found__bg"></div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const goBack = () => window.history.back()
</script>

<style scoped>
.not-found {
    position: relative;
    min-height: 100dvh;
    display: grid;
    place-items: center;
    padding: 32px 16px;
    overflow: hidden;
}

.not-found__card {
    position: relative;
    z-index: 2;
    max-width: 520px;
    width: 100%;
    padding: 32px;
    border-radius: 24px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    box-shadow: 0 20px 60px -40px rgba(15, 23, 42, 0.55);
    text-align: center;
}

.not-found__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    padding: 0 16px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: #0f172a;
    background: rgba(0, 98, 111, 0.12);
}

.not-found__title {
    margin: 18px 0 10px;
    font-size: 26px;
    font-weight: 700;
    color: #0f172a;
}

.not-found__desc {
    margin: 0 0 24px;
    line-height: 1.7;
    font-size: 14rem;
    color: #64748b;
}

.not-found__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 22px;
    border-radius: 12px;
    background: #00626f;
    color: #ffffff;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 12px 24px -18px rgba(0, 98, 111, 0.6);
}

.not-found__link:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 28px -18px rgba(0, 98, 111, 0.7);
}

.not-found__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
}

.not-found__ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 20px;
    border-radius: 12px;
    border: 1px solid #cbd5f5;
    background: #ffffff;
    color: #1e3a8a;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
    box-shadow: 0 10px 20px -20px rgba(30, 58, 138, 0.7);
}

.not-found__ghost:hover {
    transform: translateY(-1px);
    border-color: #94a3b8;
    box-shadow: 0 14px 26px -22px rgba(30, 58, 138, 0.7);
}

.not-found__bg {
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at 20% 20%, rgba(55, 139, 150, 0.18), transparent 45%),
        radial-gradient(circle at 80% 10%, rgba(0, 98, 111, 0.16), transparent 40%),
        radial-gradient(circle at 50% 90%, rgba(75, 178, 191, 0.12), transparent 45%);
    z-index: 1;
}

@media (max-width: 768px) {
    .not-found__card {
        padding: 26px;
    }

    .not-found__title {
        font-size: 22px;
    }
}
</style>
