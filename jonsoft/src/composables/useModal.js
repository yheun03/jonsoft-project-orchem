import { reactive } from 'vue'

const modalState = reactive({
    stack: []
})

let modalUid = 0

const normalizeConfirmOptions = (options = {}) => ({
    type: 'confirm',
    title: options.title ?? '확인',
    message: options.message ?? '계속 진행하시겠습니까?',
    confirmText: options.confirmText ?? '확인',
    cancelText: options.cancelText ?? '취소',
    closeOnDim: options.closeOnDim ?? true,
    closeOnEsc: options.closeOnEsc ?? true
})

const confirm = (options = {}) => new Promise((resolve) => {
    const id = ++modalUid
    const entry = {
        id,
        ...normalizeConfirmOptions(options),
        resolve
    }
    modalState.stack.push(entry)
})

const closeModal = (id, result = false) => {
    const index = modalState.stack.findIndex((item) => item.id === id)
    if (index < 0) {
        return
    }
    const [modal] = modalState.stack.splice(index, 1)
    if (typeof modal.resolve === 'function') {
        modal.resolve(result)
    }
}

const closeTop = (result = false) => {
    const top = modalState.stack[modalState.stack.length - 1]
    if (!top) {
        return
    }
    closeModal(top.id, result)
}

export const useModal = () => ({
    state: modalState,
    confirm,
    closeModal,
    closeTop
})

export { modalState, confirm, closeModal, closeTop }
