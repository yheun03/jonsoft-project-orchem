<template>
    <label :class="toggleClasses">
        <input
            class="app__toggle-input"
            type="checkbox"
            role="switch"
            :id="id || undefined"
            :name="name || undefined"
            :checked="modelValue"
            :disabled="disabled"
            :aria-label="computedAriaLabel"
            :aria-labelledby="ariaLabelledby || undefined"
            :aria-describedby="ariaDescribedby || undefined"
            @change="onChange"
        />
        <span class="app__toggle-track" aria-hidden="true">
            <span class="app__toggle-thumb"></span>
        </span>
        <span v-if="hasLabel" class="app__toggle-label">{{ label }}</span>
        <span v-else class="app__sr-only">{{ computedAriaLabel }}</span>
    </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    ariaLabel: {
        type: String,
        default: ''
    },
    ariaLabelledby: {
        type: String,
        default: ''
    },
    ariaDescribedby: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['update:modelValue'])

const hasLabel = computed(() => !!props.label)
const computedAriaLabel = computed(() => {
    if (props.ariaLabelledby) {
        return undefined
    }
    return props.ariaLabel || props.label || '토글'
})

const toggleClasses = computed(() => [
    'app__toggle',
    { 'app__toggle--disabled': props.disabled }
])

const onChange = (event) => {
    emit('update:modelValue', event.target.checked)
}
</script>
