# 프로젝트 공유 노트

## 기술 스택
- `Vue 3`
- `Vite 7`
- `Vue Router 4`
- `Vue I18n 11`
- `vite-svg-loader` (SVG → Vue 컴포넌트)
- `Sass (SCSS)`
- `AG Grid Community` / `ag-grid-vue3` (그리드/테이블)
- `Chart.js` (차트)
- `jqwidgets-scripts` (UI 위젯)
- `marked` (Markdown 렌더링)

## 버전
- `vue`: `^3.5.24`
- `vite`: `^7.2.4`
- `vue-router`: `^4.6.4`
- `vue-i18n`: `^11.2.8`
- `vite-svg-loader`: `^5.1.0`
- `sass`: `^1.97.3`
- `ag-grid-community`: `^35.0.1`
- `ag-grid-vue3`: `^35.0.1`
- `chart.js`: `^4.5.1`
- `jqwidgets-scripts`: `^25.0.0`
- `marked`: `^17.0.1`

## 자체 수정 버전
- `v0.1.8` (2026-02-05): 후이즈 `.htaccess` 리라이트 설정 반영 및 문서화
- `v0.1.7` (2026-02-05): 프로젝트 노트 내용 개선 및 레이아웃 사용법 정리
- `v0.1.6` (2026-02-05): 프로젝트 노트 페이지/마크다운 렌더링 및 국제화 문서화
- `v0.1.5` (2026-02-05): AppButton 개선 및 사용법 문서화
- `v0.1.4` (2026-02-05): Chart.js 통합 및 차트 컴포넌트 문서화
- `v0.1.3` (2026-02-03): 다국어(i18n) 통합 내용 문서화
- `v0.1.2` (2026-02-03): AG Grid 통합 및 테이블 컴포넌트 문서화
- `v0.1.1` (2026-02-03): 페이지 히스토리 탭(AppPageTabs) 기능 문서화
- `v0.1.0` (2026-01-30): 모달/문서 업데이트 및 데모 페이지 정리
- `v0.0.3` (2026-01-29): 공통 탭(AppTab) 및 LNB 스타일 개선 문서화
- `v0.0.2` (2026-01-29): LNB 네이밍/구조 리팩토링 문서화
- `v0.0.1` (2026-01-23): 프로젝트 공유 노트 최초 작성
- `v0.0.0` (2026-01-21): 초기 마이그레이션/프로젝트 노트 메모 기록

## 주요 설정
- 경로 별칭: `@` → `src` (`vite.config.js`, `jsconfig.json`)
- 경로 별칭: `@root` → 레포 루트 (`vite.config.js`)
- dev 서버 파일 접근: `server.fs.allow`에 레포 루트 허용
- SVG 컴포넌트 사용: `import Icon from '@/assets/icon.svg?component'`
- Markdown 원문 로딩: `import note from '@root/PROJECT_NOTE.md?raw'`
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
- 404 등 예외 페이지: 라우터 `meta.layout = 'empty'`로 레이아웃 없이 표시
- `lnbToggleMode`: `'compact' | 'hidden'` (기본 compact)
- `.control__lnb` 클릭 시 `layout__lnb-active ↔ layout__lnb-closed`로 토글됨
- `layout__lnb-active`: LNB 열림 상태 클래스
- `layout__lnb-closed`: LNB 닫힘 상태 클래스 (compact/hidden 공통)
- `hidden` 모드: LNB는 `translate`로 숨김 (폭은 유지)
- `compact` 모드: LNB 폭을 축소해서 공간만 유지
- `layout__lnb-closed` 상태에서는 LNB 내 링크/토글 동작이 비활성화됨
- LNB 상태 클래스는 `layout__*`로 통일

```vue
<DefaultLayout
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

## 프로젝트 노트 페이지
- 경로: `/project-note`
- 원문: 레포 루트의 `PROJECT_NOTE.md`
- 변경 시 HMR로 즉시 반영

## 배포 라우팅 (후이즈 등 정적 호스팅)
- 서버 리라이트가 없으면 직접 URL 접근 시 404가 발생할 수 있음
- 적용됨: 후이즈 `.htaccess`로 `/framework/*`를 `/framework/index.html`로 리라이트

```apacheconf
RewriteEngine On

# 실제 파일/폴더는 그대로 제공
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# 나머지는 SPA로
RewriteRule . /framework/index.html [L]
```

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

## 버튼(AppButton) 사용법
- 스타일 타입(`appearance`): `filled | border | text`
- 레이아웃 타입(`layout`): `text | text-icon | icon-text | icon`
- 아이콘만 있는 보더 버튼은 `appearance="border" layout="icon"` 조합
- 기존 `variant`는 하위 호환(점진 교체 권장)

```vue
<AppButton appearance="filled" layout="text" label="확인" />
<AppButton appearance="border" layout="icon" ariaLabel="설정">
  <template #icon>...</template>
</AppButton>
<AppButton appearance="text" layout="text-icon" label="다음">
  <template #icon-right>...</template>
</AppButton>
```

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
