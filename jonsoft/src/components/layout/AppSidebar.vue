<template>
    <nav class="app-lnb">
        <div class="app-lnb__header">
            <h2 class="app-lnb__title">메뉴</h2>
            <button class="app-lnb__toggle control__lnb" type="button" aria-label="메뉴 토글"></button>
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
                            {{ item.title }}
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
                            {{ item.title }}
                        </component>
                        <ul
                            v-if="item.children?.length"
                            v-show="isOpen(item.id)"
                            class="app-lnb__list app-lnb__list--depth-2 app-lnb__children"
                            :class="{ 'app-lnb__children--open': isOpen(item.id) }"
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
                                    {{ child.title }}
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
                                    {{ child.title }}
                                </component>
                                <ul
                                    v-if="child.children?.length"
                                    v-show="isOpen(child.id)"
                                    class="app-lnb__list app-lnb__list--depth-3 app-lnb__children"
                                    :class="{ 'app-lnb__children--open': isOpen(child.id) }"
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
                                            {{ leaf.title }}
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
import HomeIcon from '@/assets/icons/24/ic-home.svg?component'
import WorkIcon from '@/assets/icons/24/ic-display.svg?component'
import SystemIcon from '@/assets/icons/24/ic-system.svg?component'
import StatsIcon from '@/assets/icons/24/ic-chart.svg?component'
import ChevronIcon from '@/assets/icons/24/ic-arrow-bottom.svg?component'

const iconMap = {
    home: HomeIcon,
    work: WorkIcon,
    system: SystemIcon,
    stats: StatsIcon,
}

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

const isToggleItem = (item) => !item.to && !item.href && item.children?.length

const isOpen = (id) => openIds.value.has(id)

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
