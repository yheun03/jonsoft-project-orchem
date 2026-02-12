<template>
    <teleport to="body">
        <div
            v-for="(modal, index) in stack"
            :key="modal.id"
            class="app__modal-layer"
            :style="{ zIndex: baseZ + index * 10 }"
        >
            <div class="app__modal-dim" @click="onDimClick(modal)"></div>
            <div
                class="app__modal"
                role="dialog"
                aria-modal="true"
                :aria-labelledby="getTitleId(modal)"
                :aria-describedby="getDescId(modal)"
            >
                <header class="app__modal-header">
                    <h2 :id="getTitleId(modal)" class="app__modal-title">
                        {{ modal.title }}
                    </h2>
                    <button
                        type="button"
                        class="app__modal-close"
                        aria-label="닫기"
                        @click="close(modal, false)"
                    >
                        ×
                    </button>
                </header>
                <div class="app__modal-body">
                    <p :id="getDescId(modal)" class="app__modal-message">
                        {{ modal.message }}
                    </p>
                </div>
                <footer class="app__modal-footer">
                    <AppButton
                        variant="text"
                        textColor="black-2"
                        :label="modal.cancelText"
                        @click="close(modal, false)"
                    />
                    <AppButton
                        variant="filled"
                        color="primary-500"
                        :label="modal.confirmText"
                        @click="close(modal, true)"
                    />
                </footer>
            </div>
        </div>
    </teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue'
import AppButton from '@/components/AppButton.vue'
import { modalState, closeModal } from '@/composables/useModal'

const baseZ = 2000
const stack = computed(() => modalState.stack)

const isTop = (id) => {
    const top = stack.value[stack.value.length - 1]
    return top?.id === id
}

const close = (modal, result) => {
    closeModal(modal.id, result)
}

const onDimClick = (modal) => {
    if (!modal.closeOnDim) {
        return
    }
    if (!isTop(modal.id)) {
        return
    }
    closeModal(modal.id, false)
}

const onKeydown = (event) => {
    if (event.key !== 'Escape') {
        return
    }
    const top = stack.value[stack.value.length - 1]
    if (!top || !top.closeOnEsc) {
        return
    }
    closeModal(top.id, false)
}

const getTitleId = (modal) => `app-modal-title-${modal.id}`
const getDescId = (modal) => `app-modal-desc-${modal.id}`

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
})
</script>
