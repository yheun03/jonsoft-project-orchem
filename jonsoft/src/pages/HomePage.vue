<template>
    <section class="home">
        <div class="home__hero">
            <p class="home__eyebrow">{{ t('home.eyebrow') }}</p>
            <h1 class="home__title">{{ t('home.title') }}</h1>
            <p class="home__subtitle">{{ t('home.subtitle') }}</p>
            <div class="home__actions">
                <RouterLink class="home__button home__button--primary" to="/project-note">
                    {{ t('home.actions.projectNote') }}
                </RouterLink>
                <RouterLink class="home__button home__button--ghost" to="/component/button">
                    {{ t('home.actions.components') }}
                </RouterLink>
            </div>
        </div>

        <div class="home__grid">
            <article class="home__card">
                <h2>{{ t('home.cards.goal.title') }}</h2>
                <ul>
                    <li>{{ t('home.cards.goal.items.0') }}</li>
                    <li>{{ t('home.cards.goal.items.1') }}</li>
                    <li>{{ t('home.cards.goal.items.2') }}</li>
                </ul>
            </article>
            <article class="home__card">
                <h2>{{ t('home.cards.scope.title') }}</h2>
                <ul>
                    <li>{{ t('home.cards.scope.items.0') }}</li>
                    <li>{{ t('home.cards.scope.items.1') }}</li>
                    <li>{{ t('home.cards.scope.items.2') }}</li>
                </ul>
            </article>
            <article class="home__card">
                <h2>{{ t('home.cards.guide.title') }}</h2>
                <ul>
                    <li>{{ t('home.cards.guide.items.0') }}</li>
                    <li>{{ t('home.cards.guide.items.1') }}</li>
                    <li>{{ t('home.cards.guide.items.2') }}</li>
                </ul>
            </article>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.home {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

.home__hero {
    padding: 28px 32px;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(55, 139, 150, 0.16), rgba(0, 98, 111, 0.12));
    border: 1px solid rgba(0, 98, 111, 0.15);
}

.home__eyebrow {
    @include font(b5, semibold, main);
    color: $primary-700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin: 0 0 8px;
}

.home__title {
    @include font(h4, semibold, main);
    margin: 0 0 12px;
    color: $primary-800;
}

.home__subtitle {
    @include font(b2, medium, main);
    color: $black-2;
    margin: 0;
    max-width: 680px;
    line-height: 1.6;
}

.home__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.home__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    padding: 0 20px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.home__button--primary {
    background: $primary-500;
    color: $white;
    box-shadow: 0 10px 20px -16px rgba(0, 98, 111, 0.7);
}

.home__button--primary:hover {
    transform: translateY(-1px);
}

.home__button--ghost {
    background: $white;
    color: $primary-700;
    border: 1px solid $primary-100;
}

.home__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
}

.home__card {
    background: $white;
    border-radius: 18px;
    border: 1px solid $black-4;
    padding: 20px;
    box-shadow: 0 14px 30px -24px rgba(15, 23, 42, 0.35);
}

.home__card h2 {
    @include font(t3, semibold, main);
    margin: 0 0 12px;
    color: $primary-800;
}

.home__card ul {
    margin: 0;
    padding-left: 18px;
    color: $black-2;
}

.home__card li {
    margin: 6px 0;
    line-height: 1.5;
    font-size: 16rem;
}

@media (max-width: 1024px) {
    .home__grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .home__hero {
        padding: 22px;
    }

    .home__grid {
        grid-template-columns: 1fr;
    }
}
</style>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
