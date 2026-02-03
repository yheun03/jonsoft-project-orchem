import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import '../src/assets/styles/index.scss'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

createApp(App).use(router).use(i18n).mount('#app')
