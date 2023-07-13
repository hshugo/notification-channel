import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_SERVER_PORT || "http://localhost:3001/";

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
