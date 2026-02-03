<template>
    <div class="app__progress" role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="normalizedValue">
        <div class="app__progress-track">
            <div class="app__progress-bar" :style="{ width: `${normalizedValue}%` }"></div>
        </div>
        <span v-if="showLabel" class="app__progress-label">{{ normalizedValue }}%</span>
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    value: {
        type: Number,
        default: 0
    },
    showLabel: {
        type: Boolean,
        default: true
    }
})

const normalizedValue = computed(() => {
    if (Number.isNaN(props.value)) {
        return 0
    }
    return Math.min(Math.max(props.value, 0), 100)
})
</script>
