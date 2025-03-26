<template>
    <div className="content-header">
        <h1>
            <span>게시판 상세</span>
        </h1>
    </div>
    <hr class="my-4" />
    <div className="container-fluid">
        <div class="mb-3 row">
            <div class="col-6">
                <label class="form-label col-2">제목</label>
                <span class="pl-2 col-auto">{{ item.title }}</span>
            </div>
            <div class="col-6">
                <label class="form-label col-2">등록일</label>
                <span class="pl-2 col-auto">{{ dateFormat(item.regdate, 'YYYY.MM.DD HH:mm:ss') }}</span>
            </div>
        </div>
        <div class="mb-3 row">
            <div class="col-6">
                <label class="form-label col-2">작성자</label>
                <span class="pl-2 col-auto">{{ item.username }}</span>
            </div>
            <div class="col-6">
                <label class="form-label col-2">수정일</label>
                <span class="pl-2 col-auto">{{ item.moddate ? dateFormat(item.moddate, 'YYYY.MM.DD HH:mm:ss') : '-' }}</span>
            </div>
        </div>
        <div class="mb-3 row">
            <div class="col-12">
                <label class="form-label col-2">내용</label>
                <p class="pl-3">{{ item.content }}</p>
            </div>
        </div>
    </div>
    <hr class="my-4" />
    <div class="row pt-4 g-2">
        <div class="col-auto">
            <button class="btn btn-secondary">이전글</button>
        </div>
        <div class="col-auto">
            <button class="btn btn-secondary">다음글</button>
        </div>
        <div class="col-auto me-auto"></div>
        <div class="col-auto">
            <RouterLink to="/board" class="btn btn-secondary">목록</RouterLink>
        </div>
        <div class="col-auto">
            <RouterLink class="btn btn-success" :to="`/board/${props.id}/update`">수정</RouterLink>
        </div>
        <div class="col-auto">
            <button class="btn btn-danger" @click="remove">삭제</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { BoardDTO } from '@/models/board';
import boardService from '@/services/board.service';
import { dateFormat } from '@/utils/Date.util';
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';

/* ***************************************************************************************** */
/* *********************************** DECLARATION ***************************************** */
/* ***************************************************************************************** */
const router = useRouter();
const props = defineProps<{ id: string }>();
const item = ref<BoardDTO>(new BoardDTO());

/* ***************************************************************************************** */
/* ************************************ LIFECYCLE ****************************************** */
/* ***************************************************************************************** */
onMounted(() => {
    getData(parseInt(props.id));
});

onUpdated(() => {});

onUnmounted(() => {});

/* ***************************************************************************************** */
/* ************************************** PAGE ********************************************* */
/* ***************************************************************************************** */
async function getData(id: number) {
    try {
        const res = await boardService.get(id);
        console.log('res {getData}', res);

        item.value = res;
    } catch (error) {
        console.error(error);
    }
}

async function remove() {
    const isRemove = confirm('삭제하시겠습니까?');
    if (!isRemove) return;

    try {
        const res = await boardService.remove(parseInt(props.id));

        alert('삭제되었습니다.');
        router.replace('/board');
    } catch (error) {
        console.error(error);
    }
}

/* ***************************************************************************************** */
/* ************************************* BASIC ********************************************* */
/* ***************************************************************************************** */
</script>

<style scoped></style>
