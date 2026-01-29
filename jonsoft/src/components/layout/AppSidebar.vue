<template>
    <div class="layout__lnb-header">
        <div class="layout__lnb-header-inner">
            <div class="app__date">
                <i class="app__icon app__icon--calendar">
                    <CalendarIcon />
                </i>
                <span class="app__date-day">{{ today }}</span>
            </div>
        </div>
    </div>
    <div class="layout__lnb-content">
        <nav class="layout__lnb-menu">
            <ul class="layout__lnb-list">
                <li v-for="item in navTree" :key="item.id" class="layout__lnb-item">
                    <button
                        v-if="isToggleItem(item)"
                        type="button"
                        class="layout__lnb-link layout__lnb-link--parent"
                        :aria-expanded="isOpen(item.id)"
                        @click="toggleOpen(item.id)"
                    >
                            <span v-if="item.icon" class="layout__lnb-icon">
                            <component :is="iconMap[item.icon]" />
                        </span>
                            <p class="layout__lnb-label">{{ item.title }}</p>
                            <span class="layout__lnb-chevron">
                            <ChevronIcon />
                        </span>
                    </button>
                    <component
                        v-else
                        :is="item.to ? RouterLink : (item.href ? 'a' : 'span')"
                        class="layout__lnb-link"
                        :to="item.to"
                        :href="item.href"
                        :target="item.href ? '_blank' : undefined"
                        :rel="item.href ? 'noreferrer' : undefined"
                    >
                            <span v-if="item.icon" class="layout__lnb-icon">
                            <component :is="iconMap[item.icon]" />
                        </span>
                            <p class="layout__lnb-label">{{ item.title }}</p>
                    </component>
                    <ul
                        v-if="item.children?.length"
                            class="layout__lnb-list layout__lnb-list--depth-2 layout__lnb-children"
                            :class="{ 'layout__lnb-children--open': isOpen(item.id) }"
                        :aria-hidden="!isOpen(item.id)"
                    >
                            <li v-for="child in item.children" :key="child.id" class="layout__lnb-item">
                            <button
                                v-if="isToggleItem(child)"
                                type="button"
                                    class="layout__lnb-link layout__lnb-link--parent"
                                :aria-expanded="isOpen(child.id)"
                                @click="toggleOpen(child.id)"
                            >
                                    <span v-if="child.icon" class="layout__lnb-icon">
                                    <component :is="iconMap[child.icon]" />
                                </span>
                                    <p class="layout__lnb-label">{{ child.title }}</p>
                                    <span class="layout__lnb-chevron">
                                    <ChevronIcon />
                                </span>
                            </button>
                            <component
                                v-else
                                :is="child.to ? RouterLink : (child.href ? 'a' : 'span')"
                                class="layout__lnb-link"
                                :to="child.to"
                                :href="child.href"
                                :target="child.href ? '_blank' : undefined"
                                :rel="child.href ? 'noreferrer' : undefined"
                            >
                                    <span v-if="child.icon" class="layout__lnb-icon">
                                    <component :is="iconMap[child.icon]" />
                                </span>
                                    <p class="layout__lnb-label">{{ child.title }}</p>
                            </component>
                            <ul
                                v-if="child.children?.length"
                                    class="layout__lnb-list layout__lnb-list--depth-3 layout__lnb-children"
                                    :class="{ 'layout__lnb-children--open': isOpen(child.id) }"
                            :aria-hidden="!isOpen(child.id)"
                            >
                                    <li v-for="leaf in child.children" :key="leaf.id" class="layout__lnb-item">
                                    <component
                                        :is="leaf.to ? RouterLink : (leaf.href ? 'a' : 'span')"
                                            class="layout__lnb-link"
                                        :to="leaf.to"
                                        :href="leaf.href"
                                        :target="leaf.href ? '_blank' : undefined"
                                        :rel="leaf.href ? 'noreferrer' : undefined"
                                    >
                                            <span v-if="leaf.icon" class="layout__lnb-icon">
                                            <component :is="iconMap[leaf.icon]" />
                                        </span>
                                            <p class="layout__lnb-label">{{ leaf.title }}</p>
                                    </component>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import navItems from '@/data/lnb.json'
import CalendarIcon from '@/assets/icons/24/ic-calendar.svg?component'
import ChevronIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자: 은영환
// 메   모 : today는 현재 날짜를 'YYYY년 MM월 DD일' 형식(한국어)으로 반환하는 계산된 속성입니다.
// =======================================================
const today = computed(() => {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}.${mm}.${dd}`
})

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : LNB 트리 구조 생성 및 확장 상태 관리 함수입니다.
// =======================================================

/**
 * LNB 데이터를 계층적 트리로 변환합니다.
 * @param {Array} items - LNB 항목 목록
 * @returns {Array} 계층 트리 구조의 LNB 항목 배열
 */
// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : items에서 depth 3 이하의 값만 트리 구조로 빌드합니다.
// =======================================================
const buildTree = (items) => {
    const map = new Map()
    const roots = []

    items.forEach((item) => {
        if (item.depth > 3) {
            return
        }
        map.set(item.id, { ...item, children: [] })
    })

    items.forEach((item) => {
        if (item.depth > 3) {
            return
        }
        const node = map.get(item.id)
        if (!node) {
            return
        }
        if (item.parentId && map.has(item.parentId)) {
            map.get(item.parentId).children.push(node)
            return
        }
        roots.push(node)
    })

    // =======================================================
    // 수 정 일 : 2026-01-29
    // 수 정 자 : 은영환
    // 메   모 : 트리 노드들을 order 순으로 정렬합니다.
    // =======================================================
    const sortNodes = (nodes) => {
        nodes.sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        nodes.forEach((node) => {
            if (node.children?.length) {
                sortNodes(node.children)
            }
        })
    }

    sortNodes(roots)
    return roots
}

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : 트리형 LNB 데이터 계산 속성입니다.
// =======================================================
const navTree = computed(() => buildTree(navItems))

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : 열려 있는 LNB 노드 id 집합입니다.
// =======================================================
const openIds = ref(new Set())

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : 하위 메뉴 toggle 대상인지 판별합니다.
// =======================================================
const isToggleItem = (item) => !item.to && !item.href && item.children?.length

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : 해당 id 노드의 열림 여부 반환
// =======================================================
const isOpen = (id) => openIds.value.has(id)

// =======================================================
// 수 정 일 : 2026-01-29
// 수 정 자 : 은영환
// 메   모 : id의 열림/닫힘 상태를 토글합니다.
// =======================================================
const toggleOpen = (id) => {
    const next = new Set(openIds.value)
    if (next.has(id)) {
        next.delete(id)
    } else {
        next.add(id)
    }
    openIds.value = next
}
</script>
