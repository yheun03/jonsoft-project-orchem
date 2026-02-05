<template>
    <section class="component__section">
        <header class="component__section-header">
            <h1 class="component__section-title">{{ t('components.chart.title') }}</h1>
            <p class="component__section-desc">{{ t('components.chart.desc') }}</p>
        </header>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">바 차트</h2>
            <div class="chart-grid">
                <AppChart type="bar" :data="barChartData" :options="barChartOptions" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">라인 차트</h2>
            <div class="chart-grid">
                <AppChart type="line" :data="lineChartData" :options="lineChartOptions" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">바 + 라인</h2>
            <div class="chart-grid">
                <AppChart type="bar" :data="comboChartData" :options="comboChartOptions" />
            </div>
        </div>

        <div class="component__section-group">
            <h2 class="component__section-subtitle">도넛</h2>
            <div class="chart-grid chart-grid--compact">
                <AppChart type="doughnut" :data="donutChartData" :options="donutChartOptions" :height="220" />
                <AppChart type="doughnut" :data="semiDonutChartData" :options="semiDonutChartOptions" :height="220" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppChart from '@/components/AppChart.vue'

const { t } = useI18n()

const chartLabels = ['월', '화', '수', '목', '금', '토']

const barChartData = {
    labels: chartLabels,
    datasets: [
        {
            label: '생산량',
            data: [40, 65, 30, 80, 55, 70],
            backgroundColor: '#00626F',
            borderRadius: 8
        }
    ]
}

const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(0, 0, 0, 0.05)' } }
    }
}

const lineChartData = {
    labels: chartLabels,
    datasets: [
        {
            label: '수율',
            data: [20, 45, 35, 70, 60, 85],
            borderColor: '#2687D8',
            backgroundColor: 'rgba(38, 135, 216, 0.2)',
            tension: 0.35,
            fill: true,
            pointRadius: 4,
            pointBackgroundColor: '#2687D8'
        }
    ]
}

const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(0, 0, 0, 0.05)' } }
    }
}

const comboChartData = {
    labels: chartLabels,
    datasets: [
        {
            type: 'bar',
            label: '생산량',
            data: [30, 50, 45, 70, 60, 55],
            backgroundColor: 'rgba(0, 98, 111, 0.25)',
            borderRadius: 8
        },
        {
            type: 'line',
            label: '수율',
            data: [20, 40, 55, 65, 50, 75],
            borderColor: '#0A545E',
            backgroundColor: '#0A545E',
            tension: 0.35,
            pointRadius: 4
        }
    ]
}

const comboChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false }
    },
    scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(0, 0, 0, 0.05)' } }
    }
}

const donutChartData = {
    labels: ['정상', '지연', '대기', '점검'],
    datasets: [
        {
            data: [45, 25, 15, 15],
            backgroundColor: ['#00626F', '#2687D8', '#32C771', '#FFAA00'],
            borderWidth: 0,
            cutout: '68%'
        }
    ]
}

const donutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: 'bottom' }
    }
}

const semiDonutChartData = {
    labels: ['정상', '지연', '대기', '점검'],
    datasets: [
        {
            data: [45, 25, 15, 15],
            backgroundColor: ['#00626F', '#2687D8', '#32C771', '#FFAA00'],
            borderWidth: 0,
            cutout: '68%'
        }
    ]
}

const semiDonutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    circumference: 180,
    plugins: {
        legend: { position: 'bottom' }
    }
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

.chart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
}

.chart-grid--compact {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
