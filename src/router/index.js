import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import BoardView from '@/views/BoardView.vue';

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/board',
        component: BoardView,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes: routes,
});

export default router;
