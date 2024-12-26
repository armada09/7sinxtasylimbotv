import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
// import the bootstrap library
import 'bootstrap/dist/css/bootstrap.min.css'
// import the router js file for the navigation bar and page redirects
import router from './router'

createApp(App)
.use(router)
.mount('#app')
