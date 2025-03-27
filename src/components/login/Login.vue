<template>
    <form @submit.prevent="signIn" class="login-wrapper">
        <div class="login-box">
            <div class="login-logo"><b>BOARD</b> TEST</div>

            <div class="card">
                <div class="card-body login-card-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Email" name="username" autoComplete="off" v-model="username" />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-4">
                        <input type="password" class="form-control" placeholder="Password" name="password" autoComplete="off" v-model="password" />
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" name="isRememberMe" id="isRememberMe" v-model="isRememberMe" />
                                <label class="ml-2" for="isRememberMe"> 자동로그인 </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" name="isSaveId" id="isSaveId" v-model="isSaveId" />
                                <label class="ml-2" for="isSaveId"> 아이디저장 </label>
                            </div>
                        </div>

                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block btn_login">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import authService from '@/services/auth.service';
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

/* ***************************************************************************************** */
/* *********************************** DECLARATION ***************************************** */
/* ***************************************************************************************** */
const router = useRouter();
const route = useRoute();
const username = ref<string>('');
const password = ref<string>('');
const isRememberMe = ref<boolean>(true);
const isSaveId = ref<boolean>(false);

/* ***************************************************************************************** */
/* ************************************ LIFECYCLE ****************************************** */
/* ***************************************************************************************** */
onMounted(() => {
    document.body.classList.add('login-page');

    isRememberMe.value = authService.getRememberMe();
    isSaveId.value = authService.getSaveId();

    if (isSaveId.value) username.value = authService.getUserId();
});

onUpdated(() => {});

onUnmounted(() => {
    document.body.classList.remove('login-page');
});

/* ***************************************************************************************** */
/* ************************************** PAGE ********************************************* */
/* ***************************************************************************************** */

/* ***************************************************************************************** */
/* ************************************* BASIC ********************************************* */
/* ***************************************************************************************** */
async function signIn() {
    try {
        await authService.signIn(username.value, password.value);

        authService.setRememberMe(isRememberMe.value);
        authService.setUserId(username.value);
        authService.setSaveId(isSaveId.value);

        const returnUri = route.query.r ? String(route.query.r) : '/';

        router.replace(returnUri);
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped></style>
