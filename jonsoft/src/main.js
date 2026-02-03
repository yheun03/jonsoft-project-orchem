import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/styles/index.scss'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

createApp(App).use(router).mount('#app')
