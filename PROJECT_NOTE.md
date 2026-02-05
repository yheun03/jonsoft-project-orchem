# 프로젝트 공유 노트

## 기술 스택
- `Vue 3`
- `Vite 7`
- `Vue Router 4`
- `Vue I18n 11`
- `vite-svg-loader` (SVG → Vue 컴포넌트)
- `Sass (SCSS)`
- `AG Grid Community` (그리드/테이블)
- `Chart.js` (차트)

## 주요 설정
- 경로 별칭: `@` → `src` (`vite.config.js`, `jsconfig.json`)
- SVG 컴포넌트 사용: `import Icon from '@/assets/icon.svg?component'`
- 폰트 경로: `@/assets/fonts` (Pretendard, NanumSquare)
- 타이포 믹스인: `@include font(token, weight?, family?)`
- 디자인 토큰: `primary/secondary/state/black/factory/factory-bg` 팔레트 최신화

## 폴더 구조
- `src/router`: 라우터 설정
- `src/pages`: 라우팅 화면 컴포넌트
- `src/layouts`: 공통 레이아웃
- `src/components`: 공통/레이아웃 UI
- `src/styles/base`: 리셋/토큰/믹스인
- `src/styles/components`: 공통 UI 스타일

## 네이밍 규칙
- 레이아웃: `layout__*` (예: `layout__lnb`, `layout__gnb`)
- LNB 상태: `layout__lnb-active`, `layout__lnb-compact`, `layout__lnb-hidden`, `layout__lnb-closed`
- 컴포넌트: `app__*` (예: `app__input`, `app__textarea`, `app__button-disabled`)

## 레이아웃 사용법
- 기본: `lnb/gnb` + `lnb/content`
- `gnbFull`: `gnb/gnb` + `lnb/content`
- `hasLnb=false`: LNB 없는 레이아웃
- 404 등 예외 페이지: 라우터 `meta.layout = 'empty'`로 레이아웃 없이 표시
- `lnbToggleMode`: `'compact' | 'hidden'` (기본 compact)
- `.control__lnb` 클릭 시 `expanded ↔ lnbToggleMode`로 토글됨
- `layout__lnb-active`: LNB 열림 상태 클래스
- `layout__lnb-closed`: LNB 닫힘 상태 클래스 (compact/hidden 공통)
- `layout__lnb-closed` 상태에서는 LNB 내 링크/토글 동작이 비활성화됨
- LNB 상태 클래스는 `layout__*`로 통일하며 `lnb-none`과 `lnb-hidden`은 별도 상태로 유지

### 레이아웃 그리드 구성
- 기본 구조: `lnb gnb / lnb pagination / lnb content`
- `gnbFull=true`: `gnb gnb / lnb pagination / lnb content`
- `paginationFull=true`: `lnb gnb / pagination pagination / lnb content`
- `hasLnb=false`: `gnb / pagination / content`

```vue
<DefaultLayout
  :gnb-full="false"
  :pagination-full="false"
  :has-lnb="true"
  :show-page-tabs="true"
  lnb-toggle-mode="compact"
>
  <template #gnb>...</template>
  <template #pagination>...</template>
  <template #lnb>...</template>
  <RouterView />
</DefaultLayout>
```

### 페이지 히스토리 탭(AppPageTabs)
- 기본 제공되는 `pagination` 영역에 자동으로 노출됨
- `showPageTabs=false`로 pagination 영역을 숨길 수 있음
- 사용자가 방문한 페이지 순서대로 탭이 추가됨
- 탭 클릭 시 해당 라우트로 이동, 활성 탭만 active 스타일
- X 버튼으로 탭 삭제 (탭이 1개면 X 숨김)

## LNB 데이터
- `src/data/lnb.json` flat 구조를 트리로 변환 후 최대 3뎁스 렌더링
- 항목 키: `id`, `title`, `titleKey`, `depth`, `parentId`, `order`, `to`(내부), `href`(외부), `icon`
- 링크 없는 항목은 토글 버튼으로 동작하며 자식이 펼쳐짐

## LNB 동작 설정
- `lnbInitialOpenAll`: `true`면 최초 로딩 시 모든 하위 메뉴를 열고, `false`면 모두 닫힌 상태로 시작
- `lnbSingleOpen`: `true`면 같은 레벨에서 하나의 부모만 열리고, `false`면 여러 부모를 동시에 열 수 있음

## 공통 탭 컴포넌트
- `src/components/AppTab.vue`는 탭 목록과 렌더러를 props로 주입받는 범용 컴포넌트
- 필수 데이터: `tabs: [{ key, label, component, disabled? }]` (페이지에서 컴포넌트 전달)
- 초기 탭 지정: `initialKey` (없으면 첫 번째 탭)
- 빈 탭일 때는 안내 문구가 표시됨
- 사용 예시:
  - `<AppTab :tabs="tabs" initialKey="overview" />`

## 타이포 사용법
- `@include font(h1)` → Heading1 / 800 / Pretendard
- `@include font(t1)` → Title1 / 600 / Pretendard
- `@include font(t1, medium)` → Title1 / 400 / Pretendard
- `@include font(t1, medium, sub)` → Title1 / 400 / NanumSquare

## 모달(Confirm) 사용법
- 전역 모달은 `DefaultLayout`에서 렌더링됨
- `confirm()`은 `Promise<boolean>`을 반환 (확인=true / 취소=false)
- 닫기: 딤 클릭, X 버튼, 취소/확인 버튼, `ESC` 키
- 중첩 모달은 스택으로 관리되며 나중에 열린 모달이 더 높은 `z-index`

```js
import { confirm } from '@/composables/useModal'

const result = await confirm({
  title: '삭제',
  message: '정말 삭제할까요?',
  confirmText: '삭제',
  cancelText: '취소',
  closeOnDim: false,
  closeOnEsc: true
})
```

## 컴포넌트 데모 페이지
- `Font System` (`/component/font`): 폰트 토큰 표
- `Checkbox & Radio` (`/component/checkbox-radio`): 체크박스/라디오 variants
- `Input` (`/component/input`): input/textarea 상태 및 헬퍼 텍스트
- `Button` (`/component/button`): 버튼 variants와 접근성 속성 예시
- `Select` (`/component/select`): 기본/커스텀 키 옵션 예시
- `Modal` (`/component/modal`): confirm 옵션과 중첩 모달 동작
- `Table` (`/component/table`): JSON 기반 그리드 기능 데모
- `Chart` (`/component/chart`): 바/라인/도넛/반도넛 데모
- `Settings` (`/settings`): 다국어 선택

## i18n 사용법
- 초기 세팅: `src/i18n/index.js`에서 메시지/언어 관리
- 기본 로케일: `ko` (저장된 로케일이 있으면 우선 적용)
- 지원 로케일: `ko`, `en`, `ja`, `vi`
- LNB 타이틀: `titleKey`로 번역 키 지정 (없으면 `title` 사용)
- 헤더 타이틀/컴포넌트 페이지 타이틀·설명은 i18n 키로 렌더링

```js
import { setLocale } from '@/i18n'

setLocale('en')
```

## 공용 컴포넌트 접근성/속성
- `AppButton`: `ariaLabel`, `ariaLabelledby`, `ariaDescribedby`, `id`, `name`
- `AppCheckbox`: `ariaLabel`, `ariaLabelledby`, `ariaDescribedby`, `id`, `name`
- `AppRadio`: `ariaLabel`, `ariaLabelledby`, `ariaDescribedby`, `id`
- `AppSelect`: `ariaLabel`, `ariaLabelledby`, `ariaDescribedby`, `id`, `name`

`AppSelect`는 `name`이 있을 때 폼 제출을 위해 hidden input을 생성함

## 그리드(AppGrid) 사용법
- 공통 그리드 컴포넌트: `src/components/AppGrid.vue`
- AG Grid Community 기반으로 컬럼 드래그/정렬/리사이즈/선택 기능 제공
- `AppGridMultiInputRenderer`로 다중 입력 셀 렌더링 지원

```vue
<AppGrid
  :column-defs="columnDefs"
  :row-data="rows"
  :grid-options="gridOptions"
  :default-col-def="defaultColDef"
  :quick-filter-text="keyword"
/>
```

## 차트(AppChart) 사용법
- 공통 차트 컴포넌트: `src/components/AppChart.vue`
- Chart.js 기반으로 바/라인/도넛/반도넛 차트 렌더링
- `data`에 Chart.js 데이터 객체를 넘기면 즉시 렌더링
- `dataSource`로 JSON/비동기 데이터를 받아와 자동 반영 가능

```vue
<AppChart type="bar" :data="chartData" :options="chartOptions" />
```

```vue
<AppChart
  type="line"
  :data-source="'/data/chart.json'"
  :map-data="(json) => ({
    labels: json.labels,
    datasets: json.datasets
  })"
/>
```
