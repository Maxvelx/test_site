import { createApp } from 'vue'
import App from "@/App.vue";
import router from "@/router";
import axios from "axios";


const app = createApp(App)

axios.defaults.baseURL = 'https://api-test-home.maxvel.pp.ua/'

app.use(router)

app.mount('#app')
