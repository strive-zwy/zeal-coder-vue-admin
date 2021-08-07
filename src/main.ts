import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@element-plus/icons'
// import './assets/js/iconfont.js'
import 'element-plus/lib/theme-chalk/display.css'
// px2rem 自适应
import 'lib-flexible'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
