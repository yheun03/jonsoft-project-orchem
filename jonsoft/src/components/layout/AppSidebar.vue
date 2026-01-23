<template>
    <nav class="app-lnb">
        <div class="app-lnb__header">
            <h2 class="app-lnb__title">메뉴</h2>
            <button class="app-lnb__toggle" type="button" aria-label="메뉴 접기"></button>
        </div>
        <div class="app-lnb__content">
            <ul class="app-lnb__list">
                <li class="app-lnb__item">
                    <RouterLink class="app-lnb__link" to="/">홈</RouterLink>
                    <RouterLink class="app-lnb__link" to="/components">Components</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
