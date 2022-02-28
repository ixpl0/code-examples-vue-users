import { createApp } from 'vue';
import app from '@/app.vue';
import router from '@/router';
import store from '@/store';

import 'element-plus/dist/index.css';

createApp(app)
  .use(store)
  .use(router)
  .mount('#app');
