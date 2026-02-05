<template>
    <input
        ref="inputRef"
        :id="computedId"
        :name="computedName"
        :class="['app__date-input', { 'app__date-input--disabled': disabled }]"
        :placeholder="placeholder"
        :disabled="disabled"
        :aria-label="ariaLabel || undefined"
        :aria-labelledby="ariaLabelledby || undefined"
        :aria-describedby="ariaDescribedby || undefined"
        type="text"
        readonly
    />
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
import { Korean } from 'flatpickr/dist/l10n/ko.js'
import { Japanese } from 'flatpickr/dist/l10n/ja.js'
import { Vietnamese } from 'flatpickr/dist/l10n/vn.js'

const props = defineProps({
    inputId: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Array],
        default: ''
    },
    mode: {
        type: String,
        default: 'single',
        validator: (value) => ['single', 'range', 'multiple'].includes(value)
    },
    placeholder: {
        type: String,
        default: ''
    },
    dateFormat: {
        type: String,
        default: 'Y.m.d'
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
const inputRef = ref(null)
const picker = ref(null)
const { locale } = useI18n()
const fallbackId = `date-input-${Math.random().toString(36).slice(2, 9)}`

const computedId = computed(() => props.inputId || fallbackId)
const computedName = computed(() => props.name || computedId.value)

const localeMap = {
    ko: Korean,
    ja: Japanese,
    vi: Vietnamese
}

const getLocale = (value) => localeMap[value] || undefined

const initPicker = () => {
    if (!inputRef.value) {
        return
    }
    picker.value = flatpickr(inputRef.value, {
        mode: props.mode,
        dateFormat: props.dateFormat,
        allowInput: false,
        locale: getLocale(locale.value),
        defaultDate: props.modelValue || undefined,
        onChange: (selectedDates) => {
            if (props.mode === 'single') {
                const next = selectedDates[0]
                    ? flatpickr.formatDate(selectedDates[0], props.dateFormat)
                    : ''
                emit('update:modelValue', next)
                return
            }
            const next = selectedDates.map((date) => flatpickr.formatDate(date, props.dateFormat))
            emit('update:modelValue', next)
        },
        onDayCreate: (_, __, ___, dayElem) => {
            const day = dayElem?.dateObj?.getDay()
            if (day === 0) {
                dayElem.classList.add('app__date-day--sunday')
            }
            if (day === 6) {
                dayElem.classList.add('app__date-day--saturday')
            }
        }
    })
}

onMounted(initPicker)

onBeforeUnmount(() => {
    picker.value?.destroy()
})

watch(
    () => props.modelValue,
    (value) => {
        if (!picker.value) {
            return
        }
        picker.value.setDate(value || null, false)
    }
)

watch(
    () => props.mode,
    () => {
        picker.value?.destroy()
        initPicker()
    }
)

watch(
    () => locale.value,
    (value) => {
        if (!picker.value) {
            return
        }
        picker.value.set('locale', getLocale(value))
    }
)
</script>
