<template>
    <section class="project-note">
        <div class="project-note__header">
            <div class="project-note__badge">NOTE</div>
            <h1 class="project-note__title">{{ t('projectNote.title') }}</h1>
            <p class="project-note__desc">{{ t('projectNote.desc') }}</p>
        </div>
        <article class="project-note__body" v-html="renderedHtml"></article>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import projectNote from '@root/PROJECT_NOTE.md?raw'

const { t } = useI18n()
const renderedHtml = computed(() => marked.parse(projectNote))
</script>

<style scoped>
.project-note {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 980px;
    margin: 0 auto;
}

.project-note__header {
    padding: 22px 24px;
    border-radius: 18px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(14, 116, 144, 0.08));
    border: 1px solid #e2e8f0;
}

.project-note__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #1e3a8a;
    background: #e0e7ff;
    margin-bottom: 10px;
}

.project-note__title {
    font-size: 30px;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.02em;
    margin: 0;
}

.project-note__desc {
    margin-top: 6px;
    color: #64748b;
    margin-bottom: 0;
}

.project-note__body {
    background: #ffffff;
    border-radius: 20px;
    padding: 32px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 18px 40px -28px rgba(15, 23, 42, 0.45);
}

.project-note__body :deep(h1),
.project-note__body :deep(h2),
.project-note__body :deep(h3) {
    margin: 28px 0 12px;
    font-weight: 700;
    color: #0f172a;
}

.project-note__body :deep(h1) {
    font-size: 26px;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 10px;
}

.project-note__body :deep(h2) {
    font-size: 21px;
}

.project-note__body :deep(h3) {
    font-size: 18px;
}

.project-note__body :deep(p) {
    margin: 10px 0;
    line-height: 1.75;
    color: #1f2937;
}

.project-note__body :deep(ul),
.project-note__body :deep(ol) {
    padding-left: 20px;
    margin: 10px 0;
    color: #1f2937;
}

.project-note__body :deep(li) {
    margin: 6px 0;
}

.project-note__body :deep(a) {
    color: #2563eb;
    text-decoration: none;
    border-bottom: 1px solid rgba(37, 99, 235, 0.4);
    transition: color 0.2s ease, border-color 0.2s ease;
}

.project-note__body :deep(a:hover) {
    color: #1d4ed8;
    border-color: rgba(29, 78, 216, 0.8);
}

.project-note__body :deep(blockquote) {
    margin: 14px 0;
    padding: 12px 16px;
    border-left: 4px solid #94a3b8;
    background: #f8fafc;
    color: #475569;
    border-radius: 10px;
}

.project-note__body :deep(hr) {
    border: 0;
    border-top: 1px dashed #e5e7eb;
    margin: 18px 0;
}

.project-note__body :deep(table) {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 0.95em;
}

.project-note__body :deep(th),
.project-note__body :deep(td) {
    padding: 10px 12px;
    border: 1px solid #e2e8f0;
}

.project-note__body :deep(th) {
    background: #f1f5f9;
    text-align: left;
    color: #0f172a;
}

.project-note__body :deep(img) {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 12px 24px -18px rgba(15, 23, 42, 0.35);
}

.project-note__body :deep(code) {
    padding: 2px 7px;
    border-radius: 6px;
    background: #eef2ff;
    color: #1e3a8a;
    font-family: ui-monospace, SFMono-Regular, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.9em;
}

.project-note__body :deep(pre) {
    padding: 16px 18px;
    border-radius: 14px;
    background: #111827;
    color: #f9fafb;
    overflow: auto;
    border: 1px solid rgba(148, 163, 184, 0.2);
}

.project-note__body :deep(pre code) {
    padding: 0;
    background: transparent;
    color: inherit;
}
</style>
