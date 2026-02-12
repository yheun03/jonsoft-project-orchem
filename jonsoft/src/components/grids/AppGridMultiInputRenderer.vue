<template>
    <div class="app__grid-multi-input">
        <AppInput
            :model-value="currentValue.left"
            size="compact"
            placeholder="값1"
            @update:model-value="onLeftInput"
        />
        <AppInput
            :model-value="currentValue.right"
            size="compact"
            placeholder="값2"
            @update:model-value="onRightInput"
        />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import AppInput from '@/components/AppInput.vue'

const props = defineProps({
    params: {
        type: Object,
        required: true
    }
})

const currentValue = computed(() => props.params.value || { left: '', right: '' })

const onLeftInput = (value) => {
    props.params.setValue({ ...currentValue.value, left: value })
}

const onRightInput = (value) => {
    props.params.setValue({ ...currentValue.value, right: value })
}
</script>
