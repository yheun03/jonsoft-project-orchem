# 프로젝트 추가 사항 정리

이 문서는 초기 세팅에서 추가/변경한 npm 패키지와 관련 구성을 간단히 정리합니다.

## 추가한 npm 패키지

- `react-router-dom`
    - 라우팅 관리용.
    - 라우트 정의 파일: `jonsoft/src/routes/AppRoutes.tsx`
    - 진입점: `jonsoft/src/App.tsx`
- `sass` (alias → `sass-embedded`)
    - SCSS 사용을 위한 패키지(Vite에서 embedded 구현 사용, legacy JS API 경고 제거 목적).
    - 엔트리: `jonsoft/src/assets/styles/main.scss`
    - 적용 위치: `jonsoft/src/main.tsx`에서 `main.scss` import
    - Vite 설정: `vite.config.js`에서 Sass modern API 사용
- `vite-plugin-svgr`
    - SVG를 React 컴포넌트로 임포트하기 위한 플러그인.
    - 예시: `import SettingIcon from "../assets/icons/28/ic-setting.svg?react";`
    - Vite 설정: `vite.config.js`의 `plugins`에 추가
- `typescript`, `@types/react`, `@types/react-dom`, `@types/react-router-dom`
    - 타입스크립트 마이그레이션을 위한 타입 패키지.
    - 타입 설정: `jonsoft/tsconfig.json`

## Vite 마이그레이션

- 런타임/빌드 도구: CRA(`react-scripts`) → Vite
- 엔트리 변경: `jonsoft/src/index.js` → `jonsoft/src/main.tsx`
- 루트 HTML: `jonsoft/public/index.html` → `jonsoft/index.html`

### Vite로 전환한 이유

- Sass 경고(legacy JS API) 문제의 근본 원인이 CRA 빌드 체인에 있어, 최신 빌드 체인으로 전환이 필요했음
- 빠른 개발 서버(HMR)와 간단한 설정으로 초기 프로젝트 정리에 유리함
- 빌드/프리뷰 명령이 단순하고 의존성이 가벼움

## 라우팅 구조

- `jonsoft/src/routes/AppRoutes.tsx`
    - `/` → `jonsoft/src/pages/Home.tsx`
    - `*` → `jonsoft/src/pages/NotFound.tsx`

## 타입스크립트 마이그레이션

- 엔트리: `jonsoft/src/main.tsx`
- 앱 루트: `jonsoft/src/App.tsx`
- 레이아웃: `jonsoft/src/layout/AppLayout.tsx`, `jonsoft/src/layout/Gnb.tsx`, `jonsoft/src/layout/Lnb.tsx`
- 페이지: `jonsoft/src/pages/Home.tsx`, `jonsoft/src/pages/NotFound.tsx`
- Vite 타입 선언: `jonsoft/src/vite-env.d.ts`

## 스타일 구조

- `jonsoft/src/assets/styles/`
    - `base/`, `components/`, `layout/`, `pages/`, `main.scss`
    - 각 SCSS 파일은 비어 있고, `main.scss`에서 `@use`로 import만 구성됨
