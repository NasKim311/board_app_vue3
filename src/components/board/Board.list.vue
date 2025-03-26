<template>
    <div className="content-header">
        <h1>
            <span>게시판 목록</span>
        </h1>
    </div>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <RouterLink class="btn btn-primary" type="button" to="/board/add">신규등록</RouterLink>
                    </div>
                    <div class="col-auto">
                        <div class="row">
                            <div class="col-auto">
                                <select class="form-select" v-model="searchType">
                                    <option value="title">제목</option>
                                    <option value="username">작성자</option>
                                </select>
                            </div>
                            <div class="col-auto">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Search" v-model="keyword" />
                                    <button class="btn btn-outline-secondary" type="button" @click="onSearch">검색</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                    <colgroup>
                        <col width="10%" />
                        <col width="50%" />
                        <col width="10%" />
                        <col width="15%" />
                        <col width="15%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>등록일</th>
                            <th>수정일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="items.length === 0">
                            <td colspan="5">
                                <NoData />
                            </td>
                        </tr>
                        <tr v-else v-for="item in items" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>
                                <RouterLink :to="`/board/${item.id}`">
                                    {{ item.title }}
                                </RouterLink>
                            </td>
                            <td>{{ item.username }}</td>
                            <td>{{ dateFormat(item.regdate, 'YYYY.MM.DD HH:mm:ss') }}</td>
                            <td>{{ item.moddate ? dateFormat(item.moddate, 'YYYY.MM.DD HH:mm:ss') : '-' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card-footer d-flex justify-content-center align-items-center">
                <el-pagination v-model:current-page="search.page" v-model:page-size="search.size" :total="search.total" @current-change="handlePageChange" layout="prev, pager, next" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { BoardDTO, BoardSearchDTO } from '@/models/board';
import boardService from '@/services/board.service';
import NoData from '@/components/_common/NoData.vue';
import PageUtil from '@/utils/Page.util';
import { dateFormat } from '@/utils/Date.util';

/* ***************************************************************************************** */
/* *********************************** DECLARATION ***************************************** */
/* ***************************************************************************************** */
const items = ref<BoardDTO[]>([]);
const search = ref<BoardSearchDTO>(new BoardSearchDTO());
const searchType = ref<'title' | 'username'>('title');
const keyword = ref<string>('');

/* ***************************************************************************************** */
/* ************************************ LIFECYCLE ****************************************** */
/* ***************************************************************************************** */
onMounted(() => {
    getData();
});

/* ***************************************************************************************** */
/* ************************************** PAGE ********************************************* */
/* ***************************************************************************************** */
function onSearch() {
    search.value.page = 1;
    getData();
}

function handlePageChange(page: number) {
    search.value.page = page;
    getData();
}

/* ***************************************************************************************** */
/* ************************************* BASIC ********************************************* */
/* ***************************************************************************************** */
async function getData() {
    const searchDto = PageUtil.deepCopy(search.value) as BoardSearchDTO;

    if (keyword.value) {
        searchDto[searchType.value] = keyword.value;
    }
    searchDto.page -= 1;
    console.log('searchDto {getData}', searchDto);

    try {
        const res = await boardService.getList(searchDto);
        console.log('res {getData}', res);

        items.value = res.content;
        search.value.total = res.totalElements;
    } catch (error) {
        console.error(error);
    }
}
</script>

<style scoped></style>
