import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

import './assets/base.css'
import navbar from './components/navBar.vue'
import card from './components/card.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

app.component('navbar', navbar)
app.component('card', card)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
//element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
