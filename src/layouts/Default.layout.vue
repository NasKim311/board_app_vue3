<template>
    <div className="wrapper wrapper-list">
        <Header></Header>
        <div className="content-wrapper px-4 py-2">
            <RouterView></RouterView>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';
</script>
