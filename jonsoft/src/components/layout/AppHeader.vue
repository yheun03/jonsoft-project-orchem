<template>
    <div class="app-header">
        <div class="app-header__inner">
            <RouterLink class="app-header__brand" to="/">Jonsoft</RouterLink>
            <button class="app-header__lnb-toggle control__lnb" type="button" aria-label="LNB 토글">
                LNB 토글
            </button>
            <nav class="app-header__nav">
                <RouterLink to="/">홈</RouterLink>
                <a href="https://vuejs.org" target="_blank" rel="noreferrer">Vue 문서</a>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
