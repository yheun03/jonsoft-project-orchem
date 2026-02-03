import { createI18n } from 'vue-i18n'

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
    ko: {
        header: {
            mesTablet: 'MES  TABLET'
        },
        lnb: {
            home: '홈',
            component: '컴포넌트',
            font: '폰트',
            checkboxRadio: '체크박스/라디오',
            input: '인풋',
            button: '버튼',
            modal: '모달',
            table: '테이블',
            progress: '프로그레스',
            select: '셀렉트',
            settings: '설정',
            orc4164b: 'ORC-4164(B)',
            orc11111kr1: 'ORC-11111(KR)',
            orc11111kr2: 'ORC-11111(KR)',
            orc11111kr3: 'ORC-11111(KR)',
            orc11111kr4: 'ORC-11111(KR)',
            orc11111kr5: 'ORC-11111(KR)',
            orc11111kr6: 'ORC-11111(KR)',
            orc11111kr7: 'ORC-11111(KR)'
        },
        components: {
            button: {
                title: 'Button',
                desc: '디자인 시스템 버튼 컴포넌트를 한눈에 확인합니다.'
            },
            checkboxRadio: {
                title: 'Checkbox & Radio',
                desc: '디자인 시스템 체크박스/라디오 컴포넌트를 한눈에 확인합니다.'
            },
            input: {
                title: 'Input',
                desc: '디자인 시스템 입력 컴포넌트를 한눈에 확인합니다.'
            },
            modal: {
                title: 'Modal',
                desc: 'Confirm 모달 호출 방식과 옵션을 확인합니다.'
            },
            progress: {
                title: 'Progress',
                desc: '디자인 시스템 프로그레스 컴포넌트를 한눈에 확인합니다.'
            },
            select: {
                title: 'Select',
                desc: '디자인 시스템 셀렉트 컴포넌트를 한눈에 확인합니다.'
            },
            table: {
                title: 'Table',
                desc: 'JSON 데이터를 기반으로 자동 렌더링되는 그리드입니다.'
            },
            tableDetail: {
                title: 'Table Detail',
                desc: '선택한 행의 상세 페이지 예시입니다.'
            },
            font: {
                title: 'Font System',
                desc: '디자인 시스템 폰트 토큰을 한눈에 확인합니다.'
            }
        },
        settings: {
            title: '설정',
            desc: '앱에서 사용할 언어를 선택할 수 있습니다.',
            languageLabel: '언어',
            languagePlaceholder: '언어 선택',
            languageOptions: {
                ko: '한국어',
                en: '영어',
                ja: '일본어',
                vi: '베트남어'
            }
        }
    },
    en: {
        header: {
            mesTablet: 'MES  TABLET'
        },
        lnb: {
            home: 'Home',
            component: 'Components',
            font: 'Fonts',
            checkboxRadio: 'Checkbox/Radio',
            input: 'Input',
            button: 'Button',
            modal: 'Modal',
            table: 'Table',
            progress: 'Progress',
            select: 'Select',
            settings: 'Settings',
            orc4164b: 'ORC-4164(B)',
            orc11111kr1: 'ORC-11111(KR)',
            orc11111kr2: 'ORC-11111(KR)',
            orc11111kr3: 'ORC-11111(KR)',
            orc11111kr4: 'ORC-11111(KR)',
            orc11111kr5: 'ORC-11111(KR)',
            orc11111kr6: 'ORC-11111(KR)',
            orc11111kr7: 'ORC-11111(KR)'
        },
        components: {
            button: {
                title: 'Button',
                desc: 'Browse the design system button components at a glance.'
            },
            checkboxRadio: {
                title: 'Checkbox & Radio',
                desc: 'Browse the design system checkbox/radio components at a glance.'
            },
            input: {
                title: 'Input',
                desc: 'Browse the design system input components at a glance.'
            },
            modal: {
                title: 'Modal',
                desc: 'Review confirm modal invocation patterns and options.'
            },
            progress: {
                title: 'Progress',
                desc: 'Browse the design system progress components at a glance.'
            },
            select: {
                title: 'Select',
                desc: 'Browse the design system select components at a glance.'
            },
            table: {
                title: 'Table',
                desc: 'A grid that renders automatically from JSON data.'
            },
            tableDetail: {
                title: 'Table Detail',
                desc: 'Example detail page for a selected row.'
            },
            font: {
                title: 'Font System',
                desc: 'Browse the design system font tokens at a glance.'
            }
        },
        settings: {
            title: 'Settings',
            desc: 'Select the language used in the app.',
            languageLabel: 'Language',
            languagePlaceholder: 'Select language',
            languageOptions: {
                ko: 'Korean',
                en: 'English',
                ja: 'Japanese',
                vi: 'Vietnamese'
            }
        }
    },
    ja: {
        header: {
            mesTablet: 'MES  TABLET'
        },
        lnb: {
            home: 'ホーム',
            component: 'コンポーネント',
            font: 'フォント',
            checkboxRadio: 'チェックボックス/ラジオ',
            input: '入力',
            button: 'ボタン',
            modal: 'モーダル',
            table: 'テーブル',
            progress: 'プログレス',
            select: 'セレクト',
            settings: '設定',
            orc4164b: 'ORC-4164(B)',
            orc11111kr1: 'ORC-11111(KR)',
            orc11111kr2: 'ORC-11111(KR)',
            orc11111kr3: 'ORC-11111(KR)',
            orc11111kr4: 'ORC-11111(KR)',
            orc11111kr5: 'ORC-11111(KR)',
            orc11111kr6: 'ORC-11111(KR)',
            orc11111kr7: 'ORC-11111(KR)'
        },
        components: {
            button: {
                title: 'Button',
                desc: 'デザインシステムのボタンコンポーネントを一覧で確認します。'
            },
            checkboxRadio: {
                title: 'Checkbox & Radio',
                desc: 'デザインシステムのチェックボックス/ラジオを一覧で確認します。'
            },
            input: {
                title: 'Input',
                desc: 'デザインシステムの入力コンポーネントを一覧で確認します。'
            },
            modal: {
                title: 'Modal',
                desc: 'Confirm モーダルの呼び出し方法とオプションを確認します。'
            },
            progress: {
                title: 'Progress',
                desc: 'デザインシステムのプログレスコンポーネントを一覧で確認します。'
            },
            select: {
                title: 'Select',
                desc: 'デザインシステムのセレクトコンポーネントを一覧で確認します。'
            },
            table: {
                title: 'Table',
                desc: 'JSON データに基づいて自動レンダリングされるグリッドです。'
            },
            tableDetail: {
                title: 'Table Detail',
                desc: '選択した行の詳細ページ例です。'
            },
            font: {
                title: 'Font System',
                desc: 'デザインシステムのフォントトークンを一覧で確認します。'
            }
        },
        settings: {
            title: '設定',
            desc: 'アプリで使用する言語を選択できます。',
            languageLabel: '言語',
            languagePlaceholder: '言語を選択',
            languageOptions: {
                ko: '韓国語',
                en: '英語',
                ja: '日本語',
                vi: 'ベトナム語'
            }
        }
    },
    vi: {
        header: {
            mesTablet: 'MES  TABLET'
        },
        lnb: {
            home: 'Trang chủ',
            component: 'Thành phần',
            font: 'Phông chữ',
            checkboxRadio: 'Checkbox/Radio',
            input: 'Nhập liệu',
            button: 'Nút',
            modal: 'Hộp thoại',
            table: 'Bảng',
            progress: 'Tiến trình',
            select: 'Chọn',
            settings: 'Cài đặt',
            orc4164b: 'ORC-4164(B)',
            orc11111kr1: 'ORC-11111(KR)',
            orc11111kr2: 'ORC-11111(KR)',
            orc11111kr3: 'ORC-11111(KR)',
            orc11111kr4: 'ORC-11111(KR)',
            orc11111kr5: 'ORC-11111(KR)',
            orc11111kr6: 'ORC-11111(KR)',
            orc11111kr7: 'ORC-11111(KR)'
        },
        components: {
            button: {
                title: 'Button',
                desc: 'Xem nhanh các thành phần nút trong hệ thống thiết kế.'
            },
            checkboxRadio: {
                title: 'Checkbox & Radio',
                desc: 'Xem nhanh các thành phần checkbox/radio trong hệ thống thiết kế.'
            },
            input: {
                title: 'Input',
                desc: 'Xem nhanh các thành phần nhập liệu trong hệ thống thiết kế.'
            },
            modal: {
                title: 'Modal',
                desc: 'Kiểm tra cách gọi và tuỳ chọn của modal xác nhận.'
            },
            progress: {
                title: 'Progress',
                desc: 'Xem nhanh các thành phần tiến trình trong hệ thống thiết kế.'
            },
            select: {
                title: 'Select',
                desc: 'Xem nhanh các thành phần chọn trong hệ thống thiết kế.'
            },
            table: {
                title: 'Table',
                desc: 'Lưới tự động hiển thị dựa trên dữ liệu JSON.'
            },
            tableDetail: {
                title: 'Table Detail',
                desc: 'Ví dụ trang chi tiết của hàng đã chọn.'
            },
            font: {
                title: 'Font System',
                desc: 'Xem nhanh các token phông chữ trong hệ thống thiết kế.'
            }
        },
        settings: {
            title: 'Cài đặt',
            desc: 'Chọn ngôn ngữ sẽ dùng trong ứng dụng.',
            languageLabel: 'Ngôn ngữ',
            languagePlaceholder: 'Chọn ngôn ngữ',
            languageOptions: {
                ko: 'Tiếng Hàn',
                en: 'Tiếng Anh',
                ja: 'Tiếng Nhật',
                vi: 'Tiếng Việt'
            }
        }
    }
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
