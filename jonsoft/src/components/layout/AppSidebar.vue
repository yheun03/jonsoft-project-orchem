<template>
    <nav class="app-lnb">
        <div class="app-lnb__header">
            <h2 class="app-lnb__title">메뉴</h2>
            <button class="app-lnb__toggle control__lnb" type="button" aria-label="메뉴 토글"></button>
        </div>
        <div class="app-lnb__content">
            <ul class="app-lnb__list">
                <li v-for="item in navTree" :key="item.id" class="app-lnb__item">
                    <component
                        :is="item.to ? RouterLink : (item.href ? 'a' : 'span')"
                        class="app-lnb__link"
                        :class="{ 'app-lnb__link--parent': !item.to && !item.href }"
                        :to="item.to"
                        :href="item.href"
                        :target="item.href ? '_blank' : undefined"
                        :rel="item.href ? 'noreferrer' : undefined"
                    >
                        {{ item.title }}
                    </component>
                    <ul v-if="item.children?.length" class="app-lnb__list app-lnb__list--depth-2">
                        <li v-for="child in item.children" :key="child.id" class="app-lnb__item">
                            <component
                                :is="child.to ? RouterLink : 'a'"
                                class="app-lnb__link"
                                :to="child.to"
                                :href="child.href"
                                :target="child.href ? '_blank' : undefined"
                                :rel="child.href ? 'noreferrer' : undefined"
                            >
                                {{ child.title }}
                            </component>
                            <ul
                                v-if="child.children?.length"
                                class="app-lnb__list app-lnb__list--depth-3"
                            >
                                <li v-for="leaf in child.children" :key="leaf.id" class="app-lnb__item">
                                    <component
                                        :is="leaf.to ? RouterLink : 'a'"
                                        class="app-lnb__link"
                                        :to="leaf.to"
                                        :href="leaf.href"
                                        :target="leaf.href ? '_blank' : undefined"
                                        :rel="leaf.href ? 'noreferrer' : undefined"
                                    >
                                        {{ leaf.title }}
                                    </component>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import navItems from '@/data/lnb.json'

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
</script>
