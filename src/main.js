import { createApp, ref } from 'vue'
import App from './App.vue'

import './assets/style/main.css'


const app = createApp(App)

// 全局依赖 url
const mdURL = ref('http://ironcentury.cc/externalLinksController/chain/JWT.md?ckey=4xDG2Rqywh1cezE8sfzIFZho6n1PcVjWf4wbIICatFmXOigPkB%2BpcqiZYb6WpcTv')
app.provide('mdURL', mdURL)

// app.use(router)

app.mount('#app')
