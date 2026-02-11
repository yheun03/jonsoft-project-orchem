<template>
    <textarea
        ref="textareaRef"
        :id="computedId"
        :name="computedName"
        :class="textareaClasses"
        :value="modelValue"
        :placeholder="placeholder"
        :rows="rows"
        :maxlength="maxlength"
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
    textareaId: {
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
    rows: {
        type: [String, Number],
        default: 4
    },
    maxlength: {
        type: [String, Number],
        default: undefined
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

const fallbackId = `app-textarea-${Math.random().toString(36).slice(2, 9)}`
const computedId = computed(() => props.textareaId || fallbackId)
const computedName = computed(() => props.name || computedId.value)

const textareaClasses = computed(() => [
    'app__textarea',
    { 'app__textarea--error': props.invalid }
])

const onInput = (event) => {
    emit('update:modelValue', event.target.value)
    emit('input', event)
}
</script>
