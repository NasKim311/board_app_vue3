// Vue 관련 기본 import
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';

// UI 라이브러리 import
import ElementPlus from 'element-plus';
// import { createVuestic } from 'vuestic-ui';

// CSS import (라이브러리 CSS 먼저, 이후 커스텀 CSS)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'element-plus/dist/index.css';
// import 'vuestic-ui/css';
import '@/assets/css/style.css';

// Vue 앱 생성 및 설정
const app = createApp(App);

// 플러그인 등록
app.use(router);
app.use(ElementPlus);
// app.use(createVuestic());

// 앱 마운트
app.mount('#app');
