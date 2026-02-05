import { ref } from 'vue'
import tableRows from '@/data/table.json'

export const tableRowsStore = ref(Array.isArray(tableRows) ? tableRows : [])
