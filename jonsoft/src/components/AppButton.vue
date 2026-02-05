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
        default: ''
    },
    appearance: {
        type: String,
        default: ''
    },
    layout: {
        type: String,
        default: ''
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

const resolveLayout = () => {
    if (props.layout) {
        return props.layout
    }
    if (['icon', 'icon-text', 'text-icon', 'text'].includes(props.variant)) {
        return props.variant || 'text'
    }
    return 'text'
}

const resolveAppearance = () => {
    if (props.appearance) {
        return props.appearance
    }
    if (['filled', 'border', 'text'].includes(props.variant)) {
        return props.variant
    }
    return 'filled'
}

const layoutVariant = computed(() => resolveLayout())
const appearanceVariant = computed(() => resolveAppearance())

const showLeftIcon = computed(() => (
    layoutVariant.value === 'icon-text' && (hasIconLeft.value || hasIcon.value)
))
const showRightIcon = computed(() => (
    layoutVariant.value === 'text-icon' && (hasIconRight.value || hasIcon.value)
))
const showOnlyIcon = computed(() => (
    layoutVariant.value === 'icon' && (hasIcon.value || hasIconLeft.value || hasIconRight.value)
))
const showLabel = computed(() => layoutVariant.value !== 'icon' && hasLabel.value)

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
    `app__button--appearance-${appearanceVariant.value}`,
    `app__button--layout-${layoutVariant.value}`,
    props.color ? `app__button--color-${props.color}` : '',
    props.textColor ? `app__button--text-${props.textColor}` : '',
    { 'app__button--icon-only': layoutVariant.value === 'icon' }
])
</script>
