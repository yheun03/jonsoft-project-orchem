<template>
    <label :class="checkboxClasses">
        <input
            class="app__check-input"
            type="checkbox"
            :checked="modelValue"
            :disabled="disabled"
            :aria-label="computedAriaLabel"
            :aria-labelledby="ariaLabelledby || undefined"
            :aria-describedby="ariaDescribedby || undefined"
            @change="onChange"
        />
        <span v-if="showControl" class="app__check-control" aria-hidden="true"></span>
        <span v-if="showSlotIcon" class="app__check-icon" aria-hidden="true">
            <slot name="icon" />
        </span>
        <span v-if="hasLabel" class="app__check-label">{{ label }}</span>
        <span v-else class="app__sr-only">{{ computedAriaLabel }}</span>
    </label>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    variant: {
        type: String,
        default: 'icon-label'
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
const slots = useSlots()

const hasLabel = computed(() => !!props.label)
const computedAriaLabel = computed(() => {
    if (props.ariaLabelledby) {
        return undefined
    }
    return props.ariaLabel || props.label || '체크박스'
})
const showControl = computed(() => !['filled', 'filled-icon-text'].includes(props.variant))
const showSlotIcon = computed(() => props.variant === 'filled-icon-text' && !!slots.icon)

const checkboxClasses = computed(() => [
    'app__check',
    `app__check--${props.variant}`,
    { 'app__check--checked': props.modelValue },
    { 'app__check--disabled': props.disabled }
])

const onChange = (event) => {
    emit('update:modelValue', event.target.checked)
}
</script>
