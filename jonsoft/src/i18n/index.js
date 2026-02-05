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
            chart: '차트',
            projectNote: '프로젝트 노트',
            close: '메뉴 닫기',
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
            },
            chart: {
                title: 'Chart',
                desc: '바/라인/도넛 등 차트 스타일을 한눈에 확인합니다.'
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
        },
        projectNote: {
            title: '프로젝트 노트',
            desc: 'PROJECT_NOTE.md 내용을 그대로 표시합니다.'
        },
        home: {
            eyebrow: 'JO&SOFT Framework',
            title: 'UI 프레임워크',
            subtitle: 'JO&SOFT 표준 UI 프레임워크로, 공통 레이아웃과 컴포넌트, 다국어 및 디자인 토큰 체계를 기반으로 일관된 화면을 빠르게 구축합니다.',
            actions: {
                projectNote: '프로젝트 노트 보기',
                components: '컴포넌트 살펴보기'
            },
            cards: {
                goal: {
                    title: '핵심 목표',
                    items: [
                        '표준 레이아웃과 UI 컴포넌트 체계 제공',
                        '페이지 히스토리, 모달, 차트 등 공통 기능 내장',
                        '다국어(i18n) 및 디자인 토큰 기반 확장성 확보'
                    ]
                },
                scope: {
                    title: '주요 구성',
                    items: [
                        '레이아웃: GNB, LNB, 콘텐츠 영역',
                        'UI: 버튼, 입력, 테이블, 차트, 탭, 토글',
                        '데이터: LNB 메뉴 JSON, 테이블 샘플'
                    ]
                },
                guide: {
                    title: '빠른 안내',
                    items: [
                        '신규 페이지 추가 시 라우터와 LNB를 함께 갱신',
                        '공통 스타일은 SCSS 토큰/믹스인 기준으로 적용',
                        '프로젝트 노트에 변경 이력을 체계적으로 기록'
                    ]
                }
            }
        },
        notFound: {
            title: '페이지를 찾을 수 없습니다',
            descLine1: '요청하신 주소가 변경되었거나 삭제되었습니다.',
            descLine2: '아래 버튼을 통해 홈으로 이동해 주세요.',
            back: '이전 화면',
            home: '홈으로 돌아가기'
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
            chart: 'Chart',
            projectNote: 'Project Notes',
            close: 'Close menu',
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
            },
            chart: {
                title: 'Chart',
                desc: 'Browse bar/line/donut chart styles at a glance.'
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
        },
        projectNote: {
            title: 'Project Notes',
            desc: 'Displays the contents of PROJECT_NOTE.md as-is.'
        },
        home: {
            eyebrow: 'JO&SOFT Framework',
            title: 'UI Framework',
            subtitle: 'The JO&SOFT standard UI framework enables rapid, consistent screen building based on shared layouts, components, i18n, and design tokens.',
            actions: {
                projectNote: 'View Project Notes',
                components: 'Explore Components'
            },
            cards: {
                goal: {
                    title: 'Core Goals',
                    items: [
                        'Provide standardized layouts and UI components',
                        'Include common features like page history, modal, and charts',
                        'Ensure scalability with i18n and design tokens'
                    ]
                },
                scope: {
                    title: 'Key Modules',
                    items: [
                        'Layout: GNB, LNB, content area',
                        'UI: buttons, inputs, tables, charts, tabs, toggles',
                        'Data: LNB menu JSON, table samples'
                    ]
                },
                guide: {
                    title: 'Quick Guide',
                    items: [
                        'Update router and LNB together when adding pages',
                        'Apply common styles using SCSS tokens/mixins',
                        'Record changes in the project notes'
                    ]
                }
            }
        },
        notFound: {
            title: 'Page not found',
            descLine1: 'The address you requested has changed or was removed.',
            descLine2: 'Please use the buttons below to continue.',
            back: 'Go back',
            home: 'Back to home'
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
            chart: 'チャート',
            projectNote: 'プロジェクトノート',
            close: 'メニューを閉じる',
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
            },
            chart: {
                title: 'Chart',
                desc: 'バー/ライン/ドーナツなどのチャートを一覧で確認します。'
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
        },
        projectNote: {
            title: 'プロジェクトノート',
            desc: 'PROJECT_NOTE.md の内容をそのまま表示します。'
        },
        home: {
            eyebrow: 'JO&SOFT Framework',
            title: 'UI フレームワーク',
            subtitle: 'JO&SOFT 標準 UI フレームワークとして、共通レイアウトとコンポーネント、多言語対応、デザイントークンに基づき一貫した画面を迅速に構築します。',
            actions: {
                projectNote: 'プロジェクトノートを見る',
                components: 'コンポーネントを見る'
            },
            cards: {
                goal: {
                    title: '主要目的',
                    items: [
                        '標準レイアウトと UI コンポーネントの提供',
                        'ページ履歴、モーダル、チャートなどの共通機能を内蔵',
                        '多言語対応とデザイントークンによる拡張性を確保'
                    ]
                },
                scope: {
                    title: '主な構成',
                    items: [
                        'レイアウト: GNB、LNB、コンテンツ領域',
                        'UI: ボタン、入力、テーブル、チャート、タブ、トグル',
                        'データ: LNB メニュー JSON、テーブルサンプル'
                    ]
                },
                guide: {
                    title: 'クイックガイド',
                    items: [
                        '新規ページ追加時はルーターと LNB を同時に更新',
                        '共通スタイルは SCSS トークン/ミックスインで適用',
                        'プロジェクトノートに変更履歴を記録'
                    ]
                }
            }
        },
        notFound: {
            title: 'ページが見つかりません',
            descLine1: '指定されたアドレスは変更または削除されました。',
            descLine2: '下のボタンから移動してください。',
            back: '前の画面へ',
            home: 'ホームへ戻る'
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
            chart: 'Biểu đồ',
            projectNote: 'Ghi chú dự án',
            close: 'Đóng menu',
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
            },
            chart: {
                title: 'Chart',
                desc: 'Xem nhanh các kiểu biểu đồ bar/line/donut.'
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
        },
        projectNote: {
            title: 'Ghi chú dự án',
            desc: 'Hiển thị nguyên bản nội dung PROJECT_NOTE.md.'
        },
        home: {
            eyebrow: 'JO&SOFT Framework',
            title: 'Khung giao diện UI',
            subtitle: 'Khung UI chuẩn của JO&SOFT giúp xây dựng màn hình nhất quán và nhanh chóng dựa trên layout, component dùng chung, i18n và design token.',
            actions: {
                projectNote: 'Xem ghi chú dự án',
                components: 'Xem các component'
            },
            cards: {
                goal: {
                    title: 'Mục tiêu chính',
                    items: [
                        'Cung cấp layout và component UI theo chuẩn',
                        'Tích hợp tính năng chung như lịch sử trang, modal, biểu đồ',
                        'Đảm bảo khả năng mở rộng với i18n và design token'
                    ]
                },
                scope: {
                    title: 'Thành phần chính',
                    items: [
                        'Layout: GNB, LNB, khu vực nội dung',
                        'UI: nút, nhập liệu, bảng, biểu đồ, tab, toggle',
                        'Dữ liệu: menu LNB JSON, mẫu bảng'
                    ]
                },
                guide: {
                    title: 'Hướng dẫn nhanh',
                    items: [
                        'Cập nhật router và LNB khi thêm trang mới',
                        'Áp dụng style chung bằng SCSS token/mixin',
                        'Ghi lại thay đổi trong project note'
                    ]
                }
            }
        },
        notFound: {
            title: 'Không tìm thấy trang',
            descLine1: 'Địa chỉ bạn yêu cầu đã thay đổi hoặc đã bị xóa.',
            descLine2: 'Vui lòng dùng các nút bên dưới để tiếp tục.',
            back: 'Quay lại',
            home: 'Về trang chủ'
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
