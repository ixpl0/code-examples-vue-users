import { createRouter, createWebHistory } from 'vue-router';
import users from '@/components/users.vue';

const routes = [
  {
    path: '/',
    component: users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
