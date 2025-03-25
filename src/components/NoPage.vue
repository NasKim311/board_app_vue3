<template>
    <div class="text-center py-5">
        <h1>404 Not Found</h1>
        <div class="text-muted">요청한 페이지를 찾을 수 없습니다.</div>
        <div class="mt-4">
            <RouterLink to="/">
                <button class="btn btn-primary">Home</button>
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
