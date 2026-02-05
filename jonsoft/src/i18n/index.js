import { createI18n } from 'vue-i18n'
import ko from './ko'
import en from './en'
import ja from './ja'
import vi from './vi'

const LOCALE_KEY = 'jonsoft-locale'
const SUPPORTED_LOCALES = ['ko', 'en', 'ja', 'vi']

const getSavedLocale = () => {
    if (typeof localStorage === 'undefined') {
        return null
    }
    return localStorage.getItem(LOCALE_KEY)
}

const resolveInitialLocale = () => {
    const saved = getSavedLocale()
    if (saved && SUPPORTED_LOCALES.includes(saved)) {
        return saved
    }
    return 'ko'
}

const messages = {
    ko,
    en,
    ja,
    vi,
}

const i18n = createI18n({
    legacy: false,
    locale: resolveInitialLocale(),
    fallbackLocale: 'ko',
    messages
})

export const setLocale = (locale) => {
    if (!SUPPORTED_LOCALES.includes(locale)) {
        return
    }
    i18n.global.locale.value = locale
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem(LOCALE_KEY, locale)
    }
}

export const supportedLocales = SUPPORTED_LOCALES

export default i18n
