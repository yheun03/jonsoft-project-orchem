<template>
    <div class="app__grid ag-theme-alpine">
        <AgGridVue
            :columnDefs="columnDefs"
            :rowData="rowData"
            :defaultColDef="mergedDefaultColDef"
            :gridOptions="mergedGridOptions"
            :noRowsOverlayComponent="AppGridNoRowsOverlay"
            @grid-ready="onGridReady"
            @row-clicked="onRowClicked"
        />
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
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

const mergedDefaultColDef = computed(() => ({
    sortable: true,
    resizable: true,
    filter: true,
    ...props.defaultColDef
}))

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

defineExpose({ setQuickFilter })
</script>
