import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import layoutDefault from '@/layouts/Default.layout.vue';
import layoutEmpty from '@/layouts/Empty.layout.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: layoutDefault,
        meta: { requiresAuth: true },
        children: [
            { path: '', name: 'Home', component: () => import('@/components/Home.vue') },
            { path: 'board', name: 'BoardList', component: () => import('@/components/board/Board.list.vue') },
            { path: 'board/add', name: 'BoardCreate', component: () => import('@/components/board/Board.update.vue') },
            { path: 'board/:id', name: 'BoardDetail', component: () => import('@/components/board/Board.detail.vue'), props: true },
            { path: 'board/:id/update', name: 'BoardUpdate', component: () => import('@/components/board/Board.update.vue'), props: true },
        ],
    },
    {
        path: '/login',
        component: layoutEmpty,
        children: [{ path: '', name: 'Login', component: () => import('@/components/login/Login.vue') }],
    },
    {
        path: '/:pathMatch(.*)*',
        component: layoutEmpty,
        children: [{ path: '', name: 'NoPage', component: () => import('@/components/NoPage.vue') }],
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!localStorage.getItem('token')) {
            next({ name: 'Login', query: { r: to.fullPath } });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
