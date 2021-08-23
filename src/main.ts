import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@element-plus/icons'
import 'element-plus/lib/theme-chalk/display.css'
import './assets/ali-icon/iconfont.js'
// px2rem 自适应
import 'lib-flexible'
import * as echarts from 'echarts'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App).use(store).use(router).use(ElementPlus)
axios.defaults.baseURL=''
app.use(VueAxios, axios)
app.config.globalProperties.echarts = echarts;
app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
