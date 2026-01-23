# 프로젝트 공유 노트

## 기술 스택
- `Vue 3`
- `Vite 6`
- `Vue Router 4`
- `vite-svg-loader` (SVG → Vue 컴포넌트)
- `Sass (SCSS)`

## 주요 설정
- 경로 별칭: `@` → `src` (`vite.config.js`, `jsconfig.json`)
- SVG 컴포넌트 사용: `import Icon from '@/assets/icon.svg?component'`
- 폰트 경로: `@/assets/fonts` (Pretendard, NanumSquare)

## 폴더 구조
- `src/router`: 라우터 설정
- `src/pages`: 라우팅 화면 컴포넌트
- `src/layouts`: 공통 레이아웃
- `src/components`: 공통/레이아웃 UI
- `src/styles/base`: 리셋/토큰/믹스인
- `src/styles/components`: 공통 UI 스타일

## 레이아웃 사용법
- 기본: `lnb/gnb` + `lnb/content`
- `gnbFull`: `gnb/gnb` + `lnb/content`
- `hasLnb=false`: LNB 없는 레이아웃
- 404 등 예외 페이지: 라우터 `meta.layout = 'empty'`로 레이아웃 없이 표시
- `lnbToggleMode`: `'compact' | 'hidden'` (기본 compact)
- `.control__lnb` 클릭 시 `expanded ↔ lnbToggleMode`로 토글됨
