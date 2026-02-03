<template>
    <div class="app__grid-multi-input">
        <input
            class="app__grid-input"
            type="text"
            :value="currentValue.left"
            @input="onLeftInput"
            placeholder="값1"
        />
        <input
            class="app__grid-input"
            type="text"
            :value="currentValue.right"
            @input="onRightInput"
            placeholder="값2"
        />
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    params: {
        type: Object,
        required: true
    }
})

const currentValue = computed(() => props.params.value || { left: '', right: '' })

const onLeftInput = (event) => {
    props.params.setValue({ ...currentValue.value, left: event.target.value })
}

const onRightInput = (event) => {
    props.params.setValue({ ...currentValue.value, right: event.target.value })
}
</script>
