import './assets/style/main.scss'
import axios from 'axios'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
axios.defaults.baseURL = 'http://127.0.0.1:3000/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
