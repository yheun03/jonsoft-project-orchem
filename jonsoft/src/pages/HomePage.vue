<template>
    <section class="home">
        <div class="home__hero">
            <p class="home__eyebrow">JO&SOFT Framework</p>
            <h1 class="home__title">UI 프레임워크</h1>
            <p class="home__subtitle">
                JO&amp;SOFT 표준 UI 프레임워크로, 공통 레이아웃과 컴포넌트,
                다국어 및 디자인 토큰 체계를 기반으로 일관된 화면을 빠르게 구축합니다.
            </p>
            <div class="home__actions">
                <RouterLink class="home__button home__button--primary" to="/project-note">
                    프로젝트 노트 보기
                </RouterLink>
                <RouterLink class="home__button home__button--ghost" to="/component/button">
                    컴포넌트 살펴보기
                </RouterLink>
            </div>
        </div>

        <div class="home__grid">
            <article class="home__card">
                <h2>핵심 목표</h2>
                <ul>
                    <li>표준 레이아웃과 UI 컴포넌트 체계 제공</li>
                    <li>페이지 히스토리, 모달, 차트 등 공통 기능 내장</li>
                    <li>다국어(i18n) 및 디자인 토큰 기반 확장성 확보</li>
                </ul>
            </article>
            <article class="home__card">
                <h2>주요 구성</h2>
                <ul>
                    <li>레이아웃: GNB, LNB, 콘텐츠 영역</li>
                    <li>UI: 버튼, 입력, 테이블, 차트, 탭, 토글</li>
                    <li>데이터: LNB 메뉴 JSON, 테이블 샘플</li>
                </ul>
            </article>
            <article class="home__card">
                <h2>빠른 안내</h2>
                <ul>
                    <li>신규 페이지 추가 시 라우터와 LNB를 함께 갱신</li>
                    <li>공통 스타일은 SCSS 토큰/믹스인 기준으로 적용</li>
                    <li>프로젝트 노트에 변경 이력을 체계적으로 기록</li>
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
</script>
