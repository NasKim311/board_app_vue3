<template>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light p-2">
        <ul class="navbar-nav">
            <li class="nav-item relative">
                <button class="nav-link ic_expend" @click="onToggle" role="button">
                    <i class="fas fa-bars"></i>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
function onToggle() {
    document.body.classList.toggle('sidebar-collapse');
}
</script>

<style scoped></style>
