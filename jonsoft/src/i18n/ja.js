export default {
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
}
