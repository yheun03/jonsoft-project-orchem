<template>
    <div class="layout__header">
        <div class="layout__header-inner">
            <div class="layout__header-logo">
                <i class="app__icon app__icon-ic-logo">
                    <img class="app__header-logo-image" :src="logoUrl" alt="ORCHEM logo" />
                </i>
                <span class="layout__header-logo-text">MES  TABLET</span>
            </div>

            <div class="layout__header-account">
                <div class="layout__header-account-info">
                    <img class="layout__header-account-avatar" :src="avatarUrl" alt="User avatar" />
                    <span class="layout__header-account-name">윤규화</span>
                </div>

                <button aria-label="설정">
                    <IconSetting />
                </button>
                <button aria-label="로그아웃">
                    <IconLogout />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconSetting from '@/assets/icons/24/ic-setting.svg?component'
import IconLogout from '@/assets/icons/24/ic-sign-in.svg?component'

const logoUrl = new URL('@/assets/icons/logo.png', import.meta.url).href
const avatarUrl = new URL('@/assets/icons/24/ic-profile.svg', import.meta.url).href
</script>
