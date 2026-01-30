<template>
    <button
        :type="type"
        :class="buttonClasses"
        :id="id || undefined"
        :name="name || undefined"
        :disabled="disabled"
        :aria-disabled="disabled ? 'true' : undefined"
        :aria-label="computedAriaLabel"
        :aria-labelledby="ariaLabelledby || undefined"
        :aria-describedby="ariaDescribedby || undefined"
    >
        <span v-if="showLeftIcon" class="app__button-icon app__button-icon--left">
            <slot v-if="hasIconLeft" name="icon-left" />
            <slot v-else name="icon" />
        </span>
        <span v-if="showLabel" class="app__button-label">
            <slot>{{ label }}</slot>
        </span>
        <span v-if="showRightIcon" class="app__button-icon app__button-icon--right">
            <slot v-if="hasIconRight" name="icon-right" />
            <slot v-else name="icon" />
        </span>
        <span v-if="showOnlyIcon" class="app__button-icon app__button-icon--only">
            <slot v-if="hasIconLeft" name="icon-left" />
            <slot v-else-if="hasIconRight" name="icon-right" />
            <slot v-else name="icon" />
        </span>
    </button>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'filled'
    },
    color: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'button'
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

const slots = useSlots()
const hasDefaultSlot = computed(() => !!slots.default)
const hasLabel = computed(() => hasDefaultSlot.value || !!props.label)
const hasIcon = computed(() => !!slots.icon)
const hasIconLeft = computed(() => !!slots['icon-left'])
const hasIconRight = computed(() => !!slots['icon-right'])

const showLeftIcon = computed(() => (
    props.variant === 'icon-text' && (hasIconLeft.value || hasIcon.value)
))
const showRightIcon = computed(() => (
    props.variant === 'text-icon' && (hasIconRight.value || hasIcon.value)
))
const showOnlyIcon = computed(() => (
    props.variant === 'icon' && (hasIcon.value || hasIconLeft.value || hasIconRight.value)
))
const showLabel = computed(() => props.variant !== 'icon' && hasLabel.value)

const computedAriaLabel = computed(() => {
    if (props.ariaLabelledby) {
        return undefined
    }
    if (hasLabel.value) {
        return undefined
    }
    return props.ariaLabel || '버튼'
})

const buttonClasses = computed(() => [
    'app__button',
    `app__button--${props.variant}`,
    props.color ? `app__button--color-${props.color}` : '',
    props.textColor ? `app__button--text-${props.textColor}` : '',
    { 'app__button--icon-only': props.variant === 'icon' }
])
</script>
