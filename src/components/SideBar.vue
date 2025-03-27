<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <RouterLink to="/" class="brand-link">
            <span class="brand-text font-weight-light">LECIRT TMS</span>
        </RouterLink>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="info">
                    <RouterLink to="/" class="">
                        {{ userId }}
                    </RouterLink>
                    &nbsp;
                    <button @click="signOut" class="nav-icon fas customReset btn_logout">logout</button>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    <li class="nav-item">
                        <RouterLink to="/board" class="nav-link" active-class="active" :class="{ active: $route.path.startsWith('/board') }">
                            <i class="nav-icon fas fa-list-alt"></i>
                            <p>게시판</p>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts">
import authService from '@/services/auth.service';
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';

/* ***************************************************************************************** */
/* *********************************** DECLARATION ***************************************** */
/* ***************************************************************************************** */
const router = useRouter();
const userId = ref<string>('');

/* ***************************************************************************************** */
/* ************************************ LIFECYCLE ****************************************** */
/* ***************************************************************************************** */
onMounted(() => {
    userId.value = authService.getUserId();
});

onUpdated(() => {});

onUnmounted(() => {});

/* ***************************************************************************************** */
/* ************************************** PAGE ********************************************* */
/* ***************************************************************************************** */

/* ***************************************************************************************** */
/* ************************************* BASIC ********************************************* */
/* ***************************************************************************************** */
async function signOut() {
    try {
        await authService.signOut();

        // router.ts에서 router.beforeEach를 타기 위해 새로고침으로 라우팅 작업 시켜줌.
        router.go(0);
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
