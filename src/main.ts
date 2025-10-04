import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css' // Tailwind entry

const app = createApp(App)
app.use(router)
app.mount('#app')
