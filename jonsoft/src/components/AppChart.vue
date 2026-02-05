<template>
    <div class="app__chart" :style="chartStyle">
        <canvas ref="canvasRef" />
    </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
    type: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        default: null
    },
    dataSource: {
        type: [String, Function, Object],
        default: null
    },
    mapData: {
        type: Function,
        default: null
    },
    options: {
        type: Object,
        default: () => ({})
    },
    height: {
        type: Number,
        default: 240
    }
})

const canvasRef = ref(null)
const chartInstance = ref(null)
const resolvedData = ref(props.data)
let loadId = 0

const chartStyle = computed(() => ({
    height: `${props.height}px`
}))

const destroyChart = () => {
    if (chartInstance.value) {
        chartInstance.value.destroy()
        chartInstance.value = null
    }
}

const renderChart = async () => {
    await nextTick()
    const canvas = canvasRef.value
    if (!canvas || !resolvedData.value) {
        return
    }
    destroyChart()
    chartInstance.value = new Chart(canvas, {
        type: props.type,
        data: resolvedData.value,
        options: props.options
    })
}

const resolveData = async () => {
    const currentId = ++loadId
    let source = props.dataSource ?? props.data
    if (!source) {
        resolvedData.value = null
        return
    }

    try {
        if (typeof source === 'string') {
            const url = new URL(source, import.meta.env.BASE_URL).toString()
            const response = await fetch(url)
            const json = await response.json()
            source = props.mapData ? props.mapData(json) : json
        } else if (typeof source === 'function') {
            const result = await source()
            source = props.mapData ? props.mapData(result) : result
        } else {
            source = props.mapData ? props.mapData(source) : source
        }
    } catch (error) {
        console.warn('[AppChart] failed to load data:', error)
        return
    }

    if (currentId !== loadId) {
        return
    }

    resolvedData.value = source
    renderChart()
}

onMounted(() => {
    resolveData()
})
onBeforeUnmount(destroyChart)

watch(
    () => [props.dataSource, props.data, props.mapData],
    () => {
        resolveData()
    },
    { deep: true }
)

watch(
    () => [props.type, props.options],
    () => {
        renderChart()
    },
    { deep: true }
)
</script>
