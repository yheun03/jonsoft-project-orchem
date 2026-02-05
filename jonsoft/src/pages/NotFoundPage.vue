<template>
    <section class="not-found">
        <div class="not-found__card">
            <div class="not-found__badge">404</div>
            <h1 class="not-found__title">페이지를 찾을 수 없습니다</h1>
            <p class="not-found__desc">
                요청하신 주소가 변경되었거나 삭제되었습니다.<br/>
                아래 버튼을 통해 홈으로 이동해 주세요.
            </p>
            <RouterLink class="not-found__link" to="/">홈으로 돌아가기</RouterLink>
        </div>
        <div class="not-found__bg"></div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
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
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    box-shadow: 0 12px 24px -18px rgba(0, 98, 111, 0.6);
}

.not-found__link:hover {
    transform: translateY(-1px);
    box-shadow: 0 16px 28px -18px rgba(0, 98, 111, 0.7);
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
