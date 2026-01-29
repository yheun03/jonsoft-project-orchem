<template>
    <section class="home">
        <h1 class="home__title">HomePage</h1>
        <h2 class="home__subtitle">NanumSquare Example</h2>
    </section>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.home__title {
    @include font(t1, semibold, main);
}

.home__subtitle {
    @include font(t1, medium, sub);
}
</style>

<script setup>
</script>
