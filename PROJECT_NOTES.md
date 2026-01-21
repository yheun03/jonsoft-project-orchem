# 프로젝트 추가 사항 정리

이 문서는 초기 세팅에서 추가한 npm 패키지와 관련 구성을 간단히 정리합니다.

## 추가한 npm 패키지

- `react-router-dom`
    - 라우팅 관리용.
    - 라우트 정의 파일: `jonsoft/src/routes/AppRoutes.jsx`
    - 진입점: `jonsoft/src/App.js`
- `sass`
    - SCSS 사용을 위한 패키지.
    - 엔트리: `jonsoft/src/assets/styles/main.scss`
    - 적용 위치: `jonsoft/src/index.js`에서 `main.scss` import

## 라우팅 구조

- `jonsoft/src/routes/AppRoutes.jsx`
    - `/` → `jonsoft/src/pages/Home.jsx`
    - `*` → `jonsoft/src/pages/NotFound.jsx`

## 스타일 구조

- `jonsoft/src/assets/styles/`
    - `base/`, `components/`, `layout/`, `pages/`, `main.scss`
    - 각 SCSS 파일은 비어 있고, `main.scss`에서 `@use`로 import만 구성됨
