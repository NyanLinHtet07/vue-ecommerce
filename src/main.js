//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
//import i18n from './i18n'
//import VueFlags from "@growthbunker/vueflags"


// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {FontAweSomeIcon} from '@fortawesome/vue-fontawesome'

// library.add(fas);




createApp(App).use(router)
              .mount('#app')
              
              