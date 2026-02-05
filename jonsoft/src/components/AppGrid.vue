<template>
    <div class="app__grid ag-theme-alpine">
        <AgGridVue
            :columnDefs="columnDefs"
            :rowData="rowData"
            :defaultColDef="mergedDefaultColDef"
            :gridOptions="mergedGridOptions"
            :localeText="mergedLocaleText"
            :overlayNoRowsTemplate="noRowsOverlayTemplate"
            :noRowsOverlayComponent="AppGridNoRowsOverlay"
            @grid-ready="onGridReady"
            @row-clicked="onRowClicked"
        />
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { AgGridVue } from 'ag-grid-vue3'
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community'
import AppGridNoRowsOverlay from '@/components/AppGridNoRowsOverlay.vue'

ModuleRegistry.registerModules([AllCommunityModule])

const props = defineProps({
    columnDefs: {
        type: Array,
        default: () => []
    },
    rowData: {
        type: Array,
        default: () => []
    },
    defaultColDef: {
        type: Object,
        default: () => ({})
    },
    gridOptions: {
        type: Object,
        default: () => ({})
    },
    quickFilterText: {
        type: String,
        default: ''
    },
    overlayNoRowsTemplate: {
        type: String,
        default: ''
    },
    overlayLoadingTemplate: {
        type: String,
        default: ''
    }
})

const emit = defineEmits(['grid-ready', 'row-clicked'])
const gridApi = ref(null)
const { t } = useI18n()

const mergedDefaultColDef = computed(() => ({
    sortable: true,
    resizable: true,
    filter: true,
    ...props.defaultColDef
}))

const mergedLocaleText = computed(() => ({
    ...props.gridOptions.localeText,
    contains: t('grid.filter.contains'),
    notContains: t('grid.filter.notContains'),
    equals: t('grid.filter.equals'),
    notEqual: t('grid.filter.notEquals'),
    startsWith: t('grid.filter.startsWith'),
    endsWith: t('grid.filter.endsWith'),
    blank: t('grid.filter.blank'),
    notBlank: t('grid.filter.notBlank'),
    noRowsToShow: t('grid.noRows'),
}))

const noRowsOverlayTemplate = computed(
    () => `<span class="ag-overlay-no-matching-rows-center">${t('grid.noRows')}</span>`
)

const mergedGridOptions = computed(() => {
    const baseRowSelection = {
        mode: 'multiRow',
        checkboxes: true,
        headerCheckbox: true,
        enableClickSelection: true,
        enableSelectionWithoutKeys: true
    }

    return {
        ...props.gridOptions,
        theme: props.gridOptions.theme || 'legacy',
        rowSelection: {
            ...baseRowSelection,
            ...(props.gridOptions.rowSelection || {})
        }
    }
})

const onGridReady = (params) => {
    gridApi.value = params.api
    setQuickFilter(props.quickFilterText)
    emit('grid-ready', params)
}

const onRowClicked = (event) => {
    emit('row-clicked', event)
}

const setQuickFilter = (value) => {
    const api = gridApi.value
    if (!api) {
        return
    }
    if (typeof api.setGridOption === 'function') {
        api.setGridOption('quickFilterText', value)
        return
    }
    if (typeof api.setQuickFilter === 'function') {
        api.setQuickFilter(value)
    }
}

watch(
    () => props.quickFilterText,
    (value) => setQuickFilter(value),
    { immediate: true }
)

watch(
    () => mergedLocaleText.value,
    (value) => {
        if (gridApi.value?.setGridOption) {
            gridApi.value.setGridOption('localeText', value)
        }
    }
)

watch(
    () => noRowsOverlayTemplate.value,
    () => {
        if (gridApi.value?.getDisplayedRowCount?.() === 0) {
            gridApi.value.showNoRowsOverlay?.()
        }
    }
)

defineExpose({ setQuickFilter })
</script>
