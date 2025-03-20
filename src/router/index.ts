import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import BoardList from '@/views/board/BoardList.vue';
import BoardUpdate from '@/views/board/BoardUpdate.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/board',
        component: BoardList,
    },
    {
        path: '/board/add',
        component: BoardUpdate,
    },
    {
        path: '/board/update/:id',
        component: BoardUpdate,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;
