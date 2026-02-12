<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.table.title') }}</h1>
            <p class="component__section-desc">{{ t('components.table.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">검색</h2>
            <div class="component__section-row">
                <input
                    v-model="keyword"
                    class="app__table-search"
                    type="text"
                    name="temp-table-search"
                    placeholder="검색어를 입력하세요"
                    @keyup.enter="applySearch"
                />
                <div class="app__table-search-actions">
                    <AppButton label="검색" name="temp-table-search-submit" variant="filled" color="primary-500" @click="applySearch" />
                    <AppButton label="초기화" name="temp-table-search-reset" variant="text" textColor="black-2" @click="resetSearch" />
                </div>
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">그리드</h2>
            <AppGrid
                ref="gridRef"
                :column-defs="columnDefs"
                :row-data="rows"
                :grid-options="gridOptions"
                :default-col-def="defaultColDef"
                :quick-filter-text="appliedKeyword"
                @row-clicked="onRowClicked"
            />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import AppGrid from '@/components/AppGrid.vue'
import AppGridMultiInputRenderer from '@/components/grids/AppGridMultiInputRenderer.vue'
import AppButton from '@/components/AppButton.vue'
import { tableRowsStore } from '@/data/tableStore'

const { t } = useI18n()
const router = useRouter()
const gridRef = ref(null)
const keyword = ref('')
const appliedKeyword = ref('')
const rows = tableRowsStore

const columnDefs = [
    {
        headerName: '포함',
        width: 80,
        sortable: false,
        filter: false,
        editable: false
    },
    { headerName: '순번', field: 'order', width: 80 },
    { headerName: '검사항목', field: 'itemCode', width: 160 },
    {
        headerName: '검사항목명',
        field: 'itemName',
        flex: 1,
        rowSpan: (params) => params.data?.rowSpan || 1,
        colSpan: (params) => (params.data?.groupSpan ? 2 : 1)
    },
    {
        headerName: '결과',
        field: 'result',
        width: 120,
        editable: true,
        cellEditor: 'agSelectCellEditor',
        cellEditorParams: { values: ['적합', '부적합'] }
    },
    {
        headerName: '측정값',
        field: 'value',
        width: 140,
        editable: true,
        cellEditor: 'agTextCellEditor'
    },
    {
        headerName: '다중 입력',
        field: 'multiInput',
        width: 180,
        cellRenderer: 'multiInputRenderer',
        valueFormatter: (params) => {
            if (!params.value) {
                return ''
            }
            const left = params.value.left ?? ''
            const right = params.value.right ?? ''
            return `${left} / ${right}`.trim()
        },
        editable: false
    }
]

const defaultColDef = {
    sortable: true,
    resizable: true,
    filter: true
}

const gridOptions = {
    components: {
        multiInputRenderer: AppGridMultiInputRenderer
    },
    rowSelection: {
        mode: 'multiRow',
        checkboxes: true,
        headerCheckbox: true,
        enableClickSelection: true,
        enableSelectionWithoutKeys: true
    },
    selectionColumnDef: {
        headerName: '포함',
        width: 80
    },
    suppressRowTransform: true
}

const applySearch = () => {
    appliedKeyword.value = keyword.value.trim()
}

const resetSearch = () => {
    keyword.value = ''
    appliedKeyword.value = ''
}

const onRowClicked = (event) => {
    const target = event.event?.target
    if (target?.closest?.('input[type="checkbox"]')) {
        return
    }
    event.node.setSelected(!event.node.isSelected(), true)
    router.push({ name: 'component-table-detail', params: { id: event.data?.id } })
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/base/variables' as *;

.component__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.component__section-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.component__section-title {
    @include font(t1, semibold);
    color: $black-0;
}

.component__section-desc {
    @include font(b4, medium);
    color: $black-2;
}

.component__section-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.component__section-subtitle {
    @include font(b3, semibold);
    color: $black-1;
}

.component__section-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
}

.app__table-search {
    @include font(b4, medium);
    width: 260px;
    height: 38px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid $black-3;
    background: $white;
    color: $black-1;
}

.app__table-search-actions {
    display: inline-flex;
    gap: 8px;
    align-items: center;
}
</style>
