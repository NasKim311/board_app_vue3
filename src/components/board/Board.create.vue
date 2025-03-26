<template>
    <div className="content-header">
        <h1>
            <span>게시판 등록</span>
        </h1>
    </div>
    <hr class="my-4" />
    <div className="container-fluid">
        <div class="mb-3">
            <label for="title" class="form-label">제목</label>
            <input type="text" class="form-control" id="title" v-model="item.title" />
        </div>
        <div class="mb-3">
            <label for="content" class="form-label">내용</label>
            <textarea class="form-control" id="content" rows="3" v-model="item.content"></textarea>
        </div>
        <div class="pt-4">
            <RouterLink to="/board" class="btn btn-secondary me-2">목록</RouterLink>
            <button class="btn btn-primary" @click="save">저장</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { BoardUpdateDTO } from '@/models/board';
import boardService from '@/services/board.service';
import PageUtil from '@/utils/Page.util';

/* ***************************************************************************************** */
/* *********************************** DECLARATION ***************************************** */
/* ***************************************************************************************** */
const router = useRouter();
const item = ref<BoardUpdateDTO>(new BoardUpdateDTO());

/* ***************************************************************************************** */
/* ************************************ LIFECYCLE ****************************************** */
/* ***************************************************************************************** */
onMounted(() => {});

onUpdated(() => {
    console.log('item.value', item.value);
});

/* ***************************************************************************************** */
/* ************************************** PAGE ********************************************* */
/* ***************************************************************************************** */

/* ***************************************************************************************** */
/* ************************************* BASIC ********************************************* */
/* ***************************************************************************************** */
async function save() {
    const dto = PageUtil.deepCopy(item.value);

    if (!dto.title) {
        alert('제목을 입력해주세요.');
        return;
    }
    if (!dto.content) {
        alert('내용을 입력해주세요.');
        return;
    }

    try {
        const res = await boardService.add(dto);
        console.log('res {save}', res);

        alert('저장되었습니다.');
        router.replace('/board');
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped></style>
