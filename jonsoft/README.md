# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## LNB 동작 설정

`AppSidebar`는 LNB 최초 열림 상태와 아코디언 동작을 옵션으로 제어합니다.

- `lnbInitialOpenAll`: `true`면 최초 로딩 시 모든 하위 메뉴를 열고, `false`면 모두 닫힌 상태로 시작합니다.
- `lnbSingleOpen`: `true`면 같은 레벨에서 하나의 부모만 열리며, `false`면 여러 부모를 동시에 열 수 있습니다.

기본 레이아웃을 사용할 경우 `DefaultLayout`에서 동일한 속성을 전달할 수 있습니다.
