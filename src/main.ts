import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/index.less'
import { createPinia } from 'pinia'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const store = createPinia();
const app = createApp(App);

app.use(ElementPlus, { size: 'medium', locale: zhCn })
app.use(store);
app.use(router);
app.mount('#app');
