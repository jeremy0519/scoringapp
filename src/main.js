import { createApp } from 'vue'
import App from './App.vue'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import our custom CSS
import './scss/styles.scss'

const app = createApp(App)
app.mount('#app')
