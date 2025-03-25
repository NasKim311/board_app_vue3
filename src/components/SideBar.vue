<template>
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <RouterLink to="/" class="brand-link">
            <span class="brand-text font-weight-light">LECIRT TMS</span>
        </RouterLink>

        <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="info">
                    <RouterLink to="/" class="d-block">
                        {{ userId }}
                        &nbsp;
                        <button @click="signOut" class="nav-icon fas customReset btn_logout">logout</button>
                    </RouterLink>
                </div>
            </div>

            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    <li class="nav-item">
                        <RouterLink to="/board" class="nav-link" active-class="active">
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
import { RouterLink } from 'vue-router';

const userId = '김남수';

function signOut() {}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
