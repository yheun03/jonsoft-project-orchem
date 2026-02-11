<template>
    <input
        ref="inputRef"
        :id="computedId"
        :name="computedName"
        :class="inputClasses"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :aria-label="ariaLabel || undefined"
        :aria-labelledby="ariaLabelledby || undefined"
        :aria-describedby="ariaDescribedby || undefined"
        :aria-invalid="invalid ? 'true' : undefined"
        @input="onInput"
    />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    inputId: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false
    },
    readonly: {
        type: Boolean,
        default: false
    },
    invalid: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'default',
        validator: (v) => ['default', 'compact'].includes(v)
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

const emit = defineEmits(['update:modelValue', 'input'])

const fallbackId = `app-input-${Math.random().toString(36).slice(2, 9)}`
const computedId = computed(() => props.inputId || fallbackId)
const computedName = computed(() => props.name || computedId.value)

const inputClasses = computed(() => [
    'app__input',
    { 'app__input--compact': props.size === 'compact' },
    { 'app__input--error': props.invalid }
])

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
    emit('input', event)
}
</script>
