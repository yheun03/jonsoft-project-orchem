export default {
    header: {
        mesTablet: 'MES  TABLET'
    },
    lnb: {
        home: 'Trang chủ',
        component: 'Thành phần',
        font: 'Phông chữ',
        checkboxRadio: 'Checkbox/Radio',
        input: 'Nhập liệu',
            calendar: 'Lịch',
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
            desc: 'Xem nhanh các thành phần nhập liệu trong hệ thống thiết kế.',
            calendar: {
                title: 'Nhập lịch',
                single: 'Chọn một ngày',
                range: 'Chọn khoảng ngày',
                multiple: 'Chọn nhiều ngày',
                placeholderSingle: 'Chọn ngày',
                placeholderRange: 'Ngày bắt đầu ~ Ngày kết thúc',
                placeholderMultiple: 'Chọn nhiều ngày',
                helper: 'Thứ Bảy màu xanh, Chủ Nhật màu đỏ.'
            }
        },
        calendar: {
            title: 'Calendar',
            desc: 'Thành phần lịch để chọn ngày.',
            subtitle: 'Kiểu chọn',
            single: 'Chọn một ngày',
            range: 'Chọn khoảng ngày',
            multiple: 'Chọn nhiều ngày',
            placeholderSingle: 'YYYY.MM.DD',
            placeholderRange: 'YYYY.MM.DD ~ YYYY.MM.DD',
            placeholderMultiple: 'Chọn nhiều ngày',
            helper: 'Thứ Bảy màu xanh, Chủ Nhật màu đỏ.'
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
            desc: 'Ví dụ trang chi tiết của hàng đã chọn.',
            selectedId: 'ID đã chọn',
            empty: 'Không tìm thấy dữ liệu đã chọn.',
            fields: {
                include: 'Bao gồm',
                order: 'Thứ tự',
                itemCode: 'Mã hạng mục',
                itemName: 'Tên hạng mục',
                result: 'Kết quả',
                value: 'Giá trị',
                status: 'Trạng thái',
                multiLeft: 'Nhập nhiều (Trái)',
                multiRight: 'Nhập nhiều (Phải)'
            },
            actions: {
                back: 'Quay lại',
                delete: 'Xóa',
                save: 'Lưu'
            },
            results: {
                none: 'Chưa chọn',
                pass: 'Đạt',
                fail: 'Không đạt'
            },
            statuses: {
                default: 'Mặc định',
                success: 'Đạt',
                error: 'Không đạt'
            },
            deleteConfirm: 'Xóa mục này?'
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
    },
    grid: {
        noRows: 'Không có kết quả phù hợp',
        filter: {
            contains: 'Chứa',
            notContains: 'Không chứa',
            equals: 'Bằng',
            notEquals: 'Không bằng',
            startsWith: 'Bắt đầu với',
            endsWith: 'Kết thúc với',
            blank: 'Trống',
            notBlank: 'Không trống'
        }
    }
}
