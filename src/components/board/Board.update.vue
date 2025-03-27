<template>
    <div className="content-header">
        <h1>
            <span v-if="isUpdate">게시판 수정</span>
            <span v-if="!isUpdate">게시판 등록</span>
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
        <hr class="my-4" />
        <div class="pt-4">
            <RouterLink v-if="!isUpdate" to="/board" class="btn btn-secondary me-2">목록</RouterLink>
            <button v-if="isUpdate" @click="router.go(-1)" class="btn btn-secondary me-2">이전</button>
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
const props = defineProps<{ id?: string }>();
const item = ref<BoardUpdateDTO>(new BoardUpdateDTO());
const isUpdate = ref<boolean>(props.id ? true : false);

/* ***************************************************************************************** */
/* ************************************ LIFECYCLE ****************************************** */
/* ***************************************************************************************** */
onMounted(() => {
    // 수정 페이지로의 접근일 경우 데이터 조회
    if (isUpdate.value && props.id) getData(parseInt(props.id));
});

onUpdated(() => {});

/* ***************************************************************************************** */
/* ************************************** PAGE ********************************************* */
/* ***************************************************************************************** */

/* ***************************************************************************************** */
/* ************************************* BASIC ********************************************* */
/* ***************************************************************************************** */
async function getData(id: number) {
    try {
        const res = await boardService.get(id);
        // console.log('res {getData}', res);

        item.value = res;
    } catch (error) {
        console.error(error);
    }
}

async function save() {
    const isSave = confirm('저장하시겠습니까?');
    if (!isSave) return;

    const dto = PageUtil.deepCopy(item.value);

    if (!dto.title) {
        alert('제목을 입력해주세요.');
        return;
    }
    if (!dto.content) {
        alert('내용을 입력해주세요.');
        return;
    }

    const req = isUpdate.value && props.id ? boardService.update(parseInt(props.id), dto) : boardService.add(dto);

    try {
        const res = await req;
        // console.log('res {save}', res);

        alert('저장되었습니다.');
        router.replace('/board');
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped></style>
