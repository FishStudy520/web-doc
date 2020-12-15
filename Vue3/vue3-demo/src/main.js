import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import router from './router/index.js'
import store from './store/index.js'

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(store)
app.mount('#app')
