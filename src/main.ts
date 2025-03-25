import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';
import '@/assets/css/style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
