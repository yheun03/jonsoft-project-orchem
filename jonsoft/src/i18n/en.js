export default {
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
            desc: 'Example detail page for a selected row.',
            selectedId: 'Selected ID',
            empty: 'No data found for the selected item.',
            fields: {
                include: 'Include',
                order: 'Order',
                itemCode: 'Item Code',
                itemName: 'Item Name',
                result: 'Result',
                value: 'Value',
                status: 'Status',
                multiLeft: 'Multi Input (Left)',
                multiRight: 'Multi Input (Right)'
            },
            actions: {
                back: 'Back',
                delete: 'Delete',
                save: 'Save'
            },
            results: {
                none: 'Not selected',
                pass: 'Pass',
                fail: 'Fail'
            },
            statuses: {
                default: 'Default',
                success: 'Pass',
                error: 'Fail'
            },
            deleteConfirm: 'Delete this item?'
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
    },
    grid: {
        noRows: 'No matching rows',
        filter: {
            contains: 'Contains',
            notContains: 'Does not contain',
            equals: 'Equals',
            notEquals: 'Does not equal',
            startsWith: 'Begins with',
            endsWith: 'Ends with',
            blank: 'Blank',
            notBlank: 'Not blank'
        }
    }
}
