<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.tableDetail.title') }}</h1>
            <p class="component__section-desc">{{ t('components.tableDetail.desc') }}</p>
        </header>

        <div class="component__section-group">
            <p class="component__section-hint">
                {{ t('components.tableDetail.selectedId') }}: {{ id }}
            </p>
        </div>

        <div v-if="!form" class="component__section-empty">
            <p>{{ t('components.tableDetail.empty') }}</p>
            <AppButton
                :label="t('components.tableDetail.actions.back')"
                variant="text"
                textColor="primary-500"
                @click="goBack"
            />
        </div>

        <div v-else class="component__section-group">
            <table class="detail-table">
                <tbody>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.include') }}</th>
                        <td>
                            <input v-model="form.include" type="checkbox" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.order') }}</th>
                        <td>
                            <input v-model.number="form.order" type="number" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.itemCode') }}</th>
                        <td>
                            <input v-model="form.itemCode" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.itemName') }}</th>
                        <td>
                            <input v-model="form.itemName" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.result') }}</th>
                        <td>
                            <select v-model="form.result">
                                <option value="">{{ t('components.tableDetail.results.none') }}</option>
                                <option value="적합">{{ t('components.tableDetail.results.pass') }}</option>
                                <option value="부적합">{{ t('components.tableDetail.results.fail') }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.value') }}</th>
                        <td>
                            <input v-model="form.value" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.status') }}</th>
                        <td>
                            <select v-model="form.status">
                                <option value="default">{{ t('components.tableDetail.statuses.default') }}</option>
                                <option value="success">{{ t('components.tableDetail.statuses.success') }}</option>
                                <option value="error">{{ t('components.tableDetail.statuses.error') }}</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.multiLeft') }}</th>
                        <td>
                            <input v-model="form.multiInput.left" type="text" />
                        </td>
                    </tr>
                    <tr>
                        <th>{{ t('components.tableDetail.fields.multiRight') }}</th>
                        <td>
                            <input v-model="form.multiInput.right" type="text" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="detail-actions">
                <AppButton
                    :label="t('components.tableDetail.actions.back')"
                    variant="text"
                    textColor="black-2"
                    @click="goBack"
                />
                <AppButton
                    :label="t('components.tableDetail.actions.delete')"
                    variant="border"
                    color="secondary-600"
                    @click="onDelete"
                />
                <AppButton
                    :label="t('components.tableDetail.actions.save')"
                    variant="filled"
                    color="primary-500"
                    @click="onSave"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import AppButton from '@/components/AppButton.vue'
import { tableRowsStore } from '@/data/tableStore'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.id)
const rows = tableRowsStore
const form = ref(null)

const currentRow = computed(() => {
    const targetId = String(id.value)
    return rows.value.find((row) => String(row.id) === targetId)
})

const cloneRow = (row) => ({
    ...row,
    multiInput: {
        left: row?.multiInput?.left ?? '',
        right: row?.multiInput?.right ?? '',
    },
})

const persistRows = (nextRows) => {
    rows.value = nextRows
}

watchEffect(() => {
    form.value = currentRow.value ? cloneRow(currentRow.value) : null
})

const goBack = () => {
    router.push('/component/table')
}

const onSave = () => {
    if (!form.value) {
        return
    }
    const targetId = String(id.value)
    const nextRows = rows.value.map((row) => {
        if (String(row.id) !== targetId) {
            return row
        }
        return {
            ...row,
            include: Boolean(form.value.include),
            order: Number(form.value.order) || 0,
            itemCode: form.value.itemCode,
            itemName: form.value.itemName,
            result: form.value.result,
            value: form.value.value,
            status: form.value.status,
            multiInput: {
                left: form.value.multiInput?.left ?? '',
                right: form.value.multiInput?.right ?? '',
            },
        }
    })
    persistRows(nextRows)
    goBack()
}

const onDelete = () => {
    if (!form.value) {
        return
    }
    if (!window.confirm(t('components.tableDetail.deleteConfirm'))) {
        return
    }
    const targetId = String(id.value)
    const nextRows = rows.value.filter((row) => String(row.id) !== targetId)
    persistRows(nextRows)
    goBack()
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
    gap: 12px;
}

.component__section-hint {
    @include font(b4, medium);
    color: $black-2;
}

.component__section-empty {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid $black-4;
    background: $white;
    color: $black-2;
}

.detail-table {
    width: 100%;
    border-collapse: collapse;
    background: $white;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid $black-4;

    th,
    td {
        padding: 12px 14px;
        border-bottom: 1px solid $black-4;
        text-align: left;
    }

    th {
        width: 180px;
        background: $black-5;
        color: $black-1;
        @include font(b4, semibold);
    }

    td {
        @include font(b4, medium);
        color: $black-1;
    }

    input,
    select {
        width: 100%;
        height: 36px;
        padding: 0 10px;
        border-radius: 8px;
        border: 1px solid $black-3;
        background: $white;
        color: $black-1;
    }

    input[type='checkbox'] {
        width: 18px;
        height: 18px;
    }

    tr:last-child td,
    tr:last-child th {
        border-bottom: 0;
    }
}

.detail-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-end;
}
</style>
