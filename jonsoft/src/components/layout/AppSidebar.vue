<template>
    <nav class="app-lnb">
        <div class="app-lnb__header">
            <div class="app-lnb__header-inner">
                <div class="today-date">
                    <span class="today-date__day">{{ today }}</span>
                </div>
            </div>
        </div>
        <div class="app-lnb__content">
            <nav class="app-lnb__nav">
                <ul class="app-lnb__list">
                    <li v-for="item in navTree" :key="item.id" class="app-lnb__item">
                        <button
                            v-if="isToggleItem(item)"
                            type="button"
                            class="app-lnb__link app-lnb__link--parent"
                            :aria-expanded="isOpen(item.id)"
                            @click="toggleOpen(item.id)"
                        >
                            <span v-if="item.icon" class="app-lnb__icon">
                                <component :is="iconMap[item.icon]" />
                            </span>
                            <p class="app-lnb__menuTitle">{{ item.title }}</p>
                            <span class="app-lnb__chevron">
                                <ChevronIcon />
                            </span>
                        </button>
                        <component
                            v-else
                            :is="item.to ? RouterLink : (item.href ? 'a' : 'span')"
                            class="app-lnb__link"
                            :to="item.to"
                            :href="item.href"
                            :target="item.href ? '_blank' : undefined"
                            :rel="item.href ? 'noreferrer' : undefined"
                        >
                            <span v-if="item.icon" class="app-lnb__icon">
                                <component :is="iconMap[item.icon]" />
                            </span>
                            <p class="app-lnb__menuTitle">{{ item.title }}</p>
                        </component>
                        <ul
                            v-if="item.children?.length"
                            class="app-lnb__list app-lnb__list--depth-2 app-lnb__children"
                            :class="{ 'app-lnb__children--open': isOpen(item.id) }"
                            :aria-hidden="!isOpen(item.id)"
                        >
                            <li v-for="child in item.children" :key="child.id" class="app-lnb__item">
                                <button
                                    v-if="isToggleItem(child)"
                                    type="button"
                                    class="app-lnb__link app-lnb__link--parent"
                                    :aria-expanded="isOpen(child.id)"
                                    @click="toggleOpen(child.id)"
                                >
                                    <span v-if="child.icon" class="app-lnb__icon">
                                        <component :is="iconMap[child.icon]" />
                                    </span>
                                    <p class="app-lnb__menuTitle">{{ child.title }}</p>
                                    <span class="app-lnb__chevron">
                                        <ChevronIcon />
                                    </span>
                                </button>
                                <component
                                    v-else
                                    :is="child.to ? RouterLink : (child.href ? 'a' : 'span')"
                                    class="app-lnb__link"
                                    :to="child.to"
                                    :href="child.href"
                                    :target="child.href ? '_blank' : undefined"
                                    :rel="child.href ? 'noreferrer' : undefined"
                                >
                                    <span v-if="child.icon" class="app-lnb__icon">
                                        <component :is="iconMap[child.icon]" />
                                    </span>
                                    <p class="app-lnb__menuTitle">{{ child.title }}</p>
                                </component>
                                <ul
                                    v-if="child.children?.length"
                                    class="app-lnb__list app-lnb__list--depth-3 app-lnb__children"
                                    :class="{ 'app-lnb__children--open': isOpen(child.id) }"
                                :aria-hidden="!isOpen(child.id)"
                                >
                                    <li v-for="leaf in child.children" :key="leaf.id" class="app-lnb__item">
                                        <component
                                            :is="leaf.to ? RouterLink : (leaf.href ? 'a' : 'span')"
                                            class="app-lnb__link"
                                            :to="leaf.to"
                                            :href="leaf.href"
                                            :target="leaf.href ? '_blank' : undefined"
                                            :rel="leaf.href ? 'noreferrer' : undefined"
                                        >
                                            <span v-if="leaf.icon" class="app-lnb__icon">
                                                <component :is="iconMap[leaf.icon]" />
                                            </span>
                                            <p class="app-lnb__menuTitle">{{ leaf.title }}</p>
                                        </component>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import navItems from '@/data/lnb.json'
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
