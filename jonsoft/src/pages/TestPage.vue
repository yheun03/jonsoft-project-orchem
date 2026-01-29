<template>
    <div>
        <JqxGrid :theme="'fluent'" :source="source" :columns="columns" :columngroups="columnGroups"></JqxGrid>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue3/vue_jqxgrid.vue';
export default {
    components: {
        JqxGrid
    },
    setup(props, context) {
        const columns = [
            { text: 'Id', datafield: 'id', columngroup: 'Details' },
            { text: 'Name', datafield: 'name', columngroup: 'Details' }
        ];

        const source = [
            { id: 1, name: 'Hydrogen' },
            { id: 2, name: 'Helium' },
            { id: 3, name: 'Lithium' },
            { id: 4, name: 'Beryllium' },
            { id: 5, name: 'Boron' },
            { id: 6, name: 'Carbon' },
            { id: 7, name: 'Nitrogen' },
            { id: 8, name: 'Oxygen' },
            { id: 9, name: 'Fluorine' },
            { id: 10, name: 'Neon' },
            { id: 11, name: 'Sodium' },
            { id: 12, name: 'Magnesium' },
            { id: 13, name: 'Aluminum' },
            { id: 14, name: 'Silicon' },
            { id: 15, name: 'Phosphorus' },
            { id: 16, name: 'Sulfur' },
            { id: 17, name: 'Chlorine' },
            { id: 18, name: 'Argon' },
            { id: 19, name: 'Potassium' },
            { id: 20, name: 'Calcium' }
        ];

        const columnGroups = [
            { text: 'Details', align: 'center', name: 'Details' }
        ]
        onMounted(() => {
        });
        return {
            columnGroups,
            source,
            columns
        }
    }
}
</script>
<style scoped></style>