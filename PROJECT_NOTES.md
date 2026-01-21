# 프로젝트 추가 사항 정리

이 문서는 초기 세팅에서 추가/변경한 npm 패키지와 관련 구성을 간단히 정리합니다.

## 추가한 npm 패키지

- `react-router-dom`
    - 라우팅 관리용.
    - 라우트 정의 파일: `jonsoft/src/routes/AppRoutes.jsx`
    - 진입점: `jonsoft/src/App.jsx`
- `sass` (alias → `sass-embedded`)
    - SCSS 사용을 위한 패키지(Vite에서 embedded 구현 사용, legacy JS API 경고 제거 목적).
    - 엔트리: `jonsoft/src/assets/styles/main.scss`
    - 적용 위치: `jonsoft/src/main.jsx`에서 `main.scss` import
    - Vite 설정: `vite.config.js`에서 Sass modern API 사용

## Vite 마이그레이션

- 런타임/빌드 도구: CRA(`react-scripts`) → Vite
- 엔트리 변경: `jonsoft/src/index.js` → `jonsoft/src/main.jsx`
- 루트 HTML: `jonsoft/public/index.html` → `jonsoft/index.html`

### Vite로 전환한 이유

- Sass 경고(legacy JS API) 문제의 근본 원인이 CRA 빌드 체인에 있어, 최신 빌드 체인으로 전환이 필요했음
- 빠른 개발 서버(HMR)와 간단한 설정으로 초기 프로젝트 정리에 유리함
- 빌드/프리뷰 명령이 단순하고 의존성이 가벼움

## 라우팅 구조

- `jonsoft/src/routes/AppRoutes.jsx`
    - `/` → `jonsoft/src/pages/Home.jsx`
    - `*` → `jonsoft/src/pages/NotFound.jsx`

## 스타일 구조

- `jonsoft/src/assets/styles/`
    - `base/`, `components/`, `layout/`, `pages/`, `main.scss`
    - 각 SCSS 파일은 비어 있고, `main.scss`에서 `@use`로 import만 구성됨
