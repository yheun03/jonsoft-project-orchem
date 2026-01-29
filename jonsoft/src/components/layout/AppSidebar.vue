<template>
    <div class="layout__lnb-header">
        <div class="layout__lnb-header-inner">
            <div class="app__date">
                <i class="app__icon app__icon-ic-calendar">
                    <iconCalendar />
                </i>
                <span class="app__date-day">{{ today }}</span>
            </div>
        </div>
    </div>
    <div class="layout__lnb-content">
        <nav class="app__menu">
            <ul class="app__menu-list">
                <li v-for="item in navTree" :key="item.id" class="app__menu-item">
                    <button
                        v-if="isToggleItem(item)"
                        type="button"
                        class="app__menu-link app__menu-link--parent"
                        :aria-expanded="isOpen(item.id)"
                        @click="toggleOpen(item.id)"
                    >
                        <i v-if="item.icon" :class="['app__icon', `app__icon-${item.icon}`]">
                            <component :is="iconMap[item.icon]" />
                        </i>
                        <p class="app__menu-label">{{ item.title }}</p>
                        <i class="app__icon app__icon-ic-arrow-bottom">
                            <iconArrowBottom />
                        </i>
                    </button>
                    <component
                        v-else
                        :is="item.to ? RouterLink : (item.href ? 'a' : 'span')"
                        :class="['app__menu-link', { 'app__menu-active': isActiveItem(item) }]"
                        :to="item.to"
                        :href="item.href"
                        :target="item.href ? '_blank' : undefined"
                        :rel="item.href ? 'noreferrer' : undefined"
                    >
                        <i v-if="item.icon" :class="['app__icon', `app__icon-${item.icon}`]">
                            <component :is="iconMap[item.icon]" />
                        </i>
                        <p class="app__menu-label">{{ item.title }}</p>
                    </component>
                    <ul
                        v-if="item.children?.length"
                        class="app__menu-list app__menu-list--depth-2 app__menu-children"
                        :class="{ 'app__menu-children--open': isOpen(item.id) }"
                        :aria-hidden="!isOpen(item.id)"
                    >
                        <li v-for="child in item.children" :key="child.id" class="app__menu-item">
                            <button
                                v-if="isToggleItem(child)"
                                type="button"
                                class="app__menu-link app__menu-link--parent"
                                :aria-expanded="isOpen(child.id)"
                                @click="toggleOpen(child.id)"
                            >
                                <i v-if="child.icon" :class="['app__icon', `app__icon-${child.icon}`]">
                                    <component :is="iconMap[child.icon]" />
                                </i>
                                <p class="app__menu-label">{{ child.title }}</p>
                                <i class="app__icon app__icon-ic-arrow-bottom">
                                    <iconArrowBottom />
                                </i>
                            </button>
                            <component
                                v-else
                                :is="child.to ? RouterLink : (child.href ? 'a' : 'span')"
                                :class="['app__menu-link', { 'app__menu-active': isActiveItem(child) }]"
                                :to="child.to"
                                :href="child.href"
                                :target="child.href ? '_blank' : undefined"
                                :rel="child.href ? 'noreferrer' : undefined"
                            >
                                <i v-if="child.icon" :class="['app__icon', `app__icon-${child.icon}`]">
                                    <component :is="iconMap[child.icon]" />
                                </i>
                                <p class="app__menu-label">{{ child.title }}</p>
                            </component>
                            <ul
                                v-if="child.children?.length"
                                class="app__menu-list app__menu-list--depth-3 app__menu-children"
                                :class="{ 'app__menu-children--open': isOpen(child.id) }"
                                :aria-hidden="!isOpen(child.id)"
                            >
                                <li v-for="leaf in child.children" :key="leaf.id" class="app__menu-item">
                                    <component
                                        :is="leaf.to ? RouterLink : (leaf.href ? 'a' : 'span')"
                                        :class="['app__menu-link', { 'app__menu-active': isActiveItem(leaf) }]"
                                        :to="leaf.to"
                                        :href="leaf.href"
                                        :target="leaf.href ? '_blank' : undefined"
                                        :rel="leaf.href ? 'noreferrer' : undefined"
                                    >
                                    <i v-if="leaf.icon" :class="['app__icon', `app__icon-${leaf.icon}`]">
                                        <component :is="iconMap[leaf.icon]" />
                                    </i>
                                        <p class="app__menu-label">{{ leaf.title }}</p>
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
import { RouterLink, useRoute } from 'vue-router'
import navItems from '@/data/lnb.json'
import iconCalendar from '@/assets/icons/24/ic-calendar.svg?component'
import iconArrowBottom from '@/assets/icons/24/ic-arrow-bottom.svg?component'

const iconMap = {
    'ic-calendar': iconCalendar,
    'ic-arrow-bottom': iconArrowBottom
}

const route = useRoute()

// LNB 상단 날짜 표시용 (YYYY.MM.DD)
const today = computed(() => {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}.${mm}.${dd}`
})

// flat 구조 LNB 데이터를 최대 3뎁스로 트리 변환
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

const navTree = computed(() => buildTree(navItems))
const openIds = ref(new Set())

// 링크가 없는 항목만 아코디언 토글 대상
const isToggleItem = (item) => !item.to && !item.href && item.children?.length
const isOpen = (id) => openIds.value.has(id)
const isActiveItem = (item) => {
    if (!item?.to) {
        return false
    }
    return route.path === item.to
}

// 아코디언 열림/닫힘 토글
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
