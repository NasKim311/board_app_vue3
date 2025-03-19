import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Board from '@/views/Board.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/board',
        component: Board,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes: routes,
});

export default router;
