//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import i18n from './i18n'

import store from './store/index'




createApp(App).use(store).use(i18n).use(router)
              .mount('#app')
              
              