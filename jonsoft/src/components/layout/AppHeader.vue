<template>
    <div class="layout__header">
        <div class="layout__header-inner">
            <div class="layout__header-logo">
                <i class="app__icon app__icon-ic-logo">
                    <img class="app__header-logo-image" :src="logoUrl" alt="ORCHEM logo" />
                </i>
                <span class="layout__header-logo-text">{{ t('header.mesTablet') }}</span>
            </div>

            <div class="layout__header-account">
                <div class="layout__header-account-info">
                    <img class="layout__header-account-avatar" :src="avatarUrl" alt="User avatar" />
                    <span class="layout__header-account-name">윤규화</span>
                </div>

                <RouterLink to="/settings" aria-label="settings">
                    <AppButton layout="icon" appearance="border" color="primary-800" :ariaLabel="t('settings.title')">
                        <template #icon>
                            <IconSetting />
                        </template>
                    </AppButton>
                </RouterLink>
                <AppButton layout="icon" appearance="border" color="primary-800" ariaLabel="로그아웃">
                    <template #icon>
                        <IconLogout />
                    </template>
                </AppButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import AppButton from '@/components/AppButton.vue'
import IconSetting from '@/assets/icons/24/ic-setting.svg?component'
import IconLogout from '@/assets/icons/24/ic-sign-in.svg?component'

const { t } = useI18n()
const logoUrl = new URL('@/assets/icons/logo.png', import.meta.url).href
const avatarUrl = new URL('@/assets/icons/24/ic-profile.svg', import.meta.url).href
</script>
