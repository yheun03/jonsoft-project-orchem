<template>
    <label :class="radioClasses">
        <input
            class="app__radio-input"
            type="radio"
            :name="name"
            :value="value"
            :checked="modelValue === value"
            :disabled="disabled"
            :aria-label="computedAriaLabel"
            @change="onChange"
        />
        <span v-if="showControl" class="app__radio-control" aria-hidden="true"></span>
        <span v-if="showSlotIcon" class="app__radio-icon" aria-hidden="true">
            <slot name="icon" />
        </span>
        <span v-if="hasLabel" class="app__radio-label">{{ label }}</span>
        <span v-else class="app__sr-only">{{ computedAriaLabel }}</span>
    </label>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        default: ''
    },
    name: {
        type: String,
        default: ''
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
    }
})

const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

const hasLabel = computed(() => !!props.label)
const computedAriaLabel = computed(() => props.ariaLabel || props.label || '라디오 버튼')
const showControl = computed(() => !['filled', 'filled-icon-text'].includes(props.variant))
const showSlotIcon = computed(() => props.variant === 'filled-icon-text' && !!slots.icon)

const radioClasses = computed(() => [
    'app__radio',
    `app__radio--${props.variant}`,
    { 'app__radio--checked': props.modelValue === props.value },
    { 'app__radio--disabled': props.disabled }
])

const onChange = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>
