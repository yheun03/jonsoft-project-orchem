<template>
    <div class="app__header">
        <div class="app__header-inner">
            <RouterLink class="app__header-brand" to="/">Jonsoft</RouterLink>
            <button class="app__lnb-toggle control__lnb" type="button" aria-label="LNB 토글">
                LNB 토글
            </button>
            <nav class="app__header-nav">
                <RouterLink to="/">홈</RouterLink>
                <a href="https://vuejs.org" target="_blank" rel="noreferrer">Vue 문서</a>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
