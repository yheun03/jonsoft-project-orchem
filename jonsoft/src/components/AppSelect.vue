<template>
    <div ref="rootRef" class="app__select">
        <button
            ref="triggerRef"
            type="button"
            class="app__select-opener"
            :id="triggerId"
            :disabled="disabled"
            :aria-disabled="disabled ? 'true' : undefined"
            :aria-haspopup="'listbox'"
            :aria-expanded="isOpen ? 'true' : 'false'"
            :aria-controls="listId"
            :aria-label="computedAriaLabel"
            :aria-labelledby="ariaLabelledby || undefined"
            :aria-describedby="ariaDescribedby || undefined"
            @click="toggle"
            @keydown="onTriggerKeydown"
        >
            <span class="app__select-opener-label">
                {{ selectedLabel || placeholder }}
            </span>
            <span class="app__select-icon" aria-hidden="true">
                <ChevronIcon />
            </span>
        </button>

        <ul
            v-if="isOpen"
            :id="listId"
            class="app__select-list"
            role="listbox"
            :aria-labelledby="triggerId"
            :aria-activedescendant="activeDescendantId"
            @keydown="onListKeydown"
        >
            <li v-for="(option, index) in options" :key="getValue(option)">
                <button
                    ref="optionRefs"
                    type="button"
                    class="app__select-option"
                    role="option"
                    :id="getOptionId(option)"
                    :aria-selected="isSelected(option)"
                    @click="select(option)"
                >
                    <span class="app__select-option-label">
                        {{ getLabel(option) }}
                    </span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import ChevronIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'

const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    options: {
        type: Array,
        default: () => []
    },
    labelKey: {
        type: String,
        default: 'label'
    },
    valueKey: {
        type: String,
        default: 'value'
    },
    placeholder: {
        type: String,
        default: '선택'
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

const isOpen = ref(false)
const rootRef = ref(null)
const triggerRef = ref(null)
const optionRefs = ref([])

const listId = `select-list-${Math.random().toString(36).slice(2, 9)}`
const triggerId = `select-trigger-${Math.random().toString(36).slice(2, 9)}`

const selectedOption = computed(() => (
    props.options.find((option) => getValue(option) === props.modelValue)
))
const selectedLabel = computed(() => selectedOption.value ? getLabel(selectedOption.value) : '')

const computedAriaLabel = computed(() => {
    if (props.ariaLabelledby) {
        return undefined
    }
    return props.ariaLabel || '셀렉트'
})

const activeDescendantId = computed(() => {
    if (!selectedOption.value) {
        return undefined
    }
    return getOptionId(selectedOption.value)
})

const getLabel = (option) => option?.[props.labelKey] ?? ''
const getValue = (option) => option?.[props.valueKey]
const getOptionId = (option) => `select-option-${getValue(option)}`
const isSelected = (option) => getValue(option) === props.modelValue

const open = async () => {
    if (props.disabled) {
        return
    }
    isOpen.value = true
    await nextTick()
    focusSelectedOption()
}

const close = () => {
    isOpen.value = false
    nextTick(() => {
        triggerRef.value?.focus()
    })
}

const toggle = () => {
    if (props.disabled) {
        return
    }
    if (isOpen.value) {
        close()
    } else {
        open()
    }
}

const select = (option) => {
    if (props.disabled) {
        return
    }
    emit('update:modelValue', getValue(option))
    close()
}

const focusSelectedOption = () => {
    const index = props.options.findIndex((option) => isSelected(option))
    const target = optionRefs.value[index] || optionRefs.value[0]
    target?.focus()
}

const onTriggerKeydown = (event) => {
    if (props.disabled) {
        return
    }
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        open()
    }
}

const onListKeydown = (event) => {
    if (props.disabled) {
        return
    }
    const currentIndex = optionRefs.value.findIndex((el) => el === document.activeElement)
    if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
    }
    if (event.key === 'ArrowDown') {
        event.preventDefault()
        const next = optionRefs.value[currentIndex + 1] || optionRefs.value[0]
        next?.focus()
    }
    if (event.key === 'ArrowUp') {
        event.preventDefault()
        const prev = optionRefs.value[currentIndex - 1] || optionRefs.value[optionRefs.value.length - 1]
        prev?.focus()
    }
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        if (currentIndex >= 0) {
            select(props.options[currentIndex])
        }
    }
}

const onClickOutside = (event) => {
    if (!rootRef.value) {
        return
    }
    if (!rootRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', onClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside)
})
</script>
