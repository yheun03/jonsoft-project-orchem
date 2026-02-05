export default {
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
            desc: '선택한 행의 상세 페이지 예시입니다.',
            selectedId: '선택 ID',
            empty: '선택한 데이터를 찾을 수 없습니다.',
            fields: {
                include: '포함',
                order: '순번',
                itemCode: '검사항목',
                itemName: '검사항목명',
                result: '결과',
                value: '측정값',
                status: '상태',
                multiLeft: '다중 입력(좌)',
                multiRight: '다중 입력(우)'
            },
            actions: {
                back: '뒤로가기',
                delete: '삭제',
                save: '저장'
            },
            results: {
                none: '미선택',
                pass: '적합',
                fail: '부적합'
            },
            statuses: {
                default: '기본',
                success: '적합',
                error: '부적합'
            },
            deleteConfirm: '해당 항목을 삭제하시겠습니까?'
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
    },
    grid: {
        noRows: '검색된 결과가 없습니다',
        filter: {
            contains: '포함',
            notContains: '포함하지 않음',
            equals: '일치',
            notEquals: '불일치',
            startsWith: '시작',
            endsWith: '끝',
            blank: '빈 값',
            notBlank: '빈 값 아님'
        }
    }
}
