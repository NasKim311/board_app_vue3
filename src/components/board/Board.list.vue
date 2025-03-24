<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4" />
        <div>
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-between">
                        <div class="col-auto">
                            <button class="btn btn-primary" type="button" @click="goPage('board/add')">신규등록</button>
                        </div>
                        <div class="col-auto">
                            <div class="row">
                                <div class="col-auto">
                                    <select class="form-select">
                                        <option value="">검색 타입</option>
                                        <option value="title">제목</option>
                                        <option value="username">작성자</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <div class="input-group">
                                        <input type="search" class="form-control" placeholder="Search" />
                                        <button class="btn btn-outline-secondary" type="button" @click="getData()">검색</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body table-responsive p-0">
                    <table class="table table-hover text-nowrap">
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
                            <tr v-for="item in items" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.username }}</td>
                                <td>{{ item.regdate }}</td>
                                <td>{{ item.moddate || '-' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer">
                    <!-- <Paginate
                            :page-count="Math.ceil(totalItems / itemsPerPage)" 
                            :click-handler="onPageChange"
                            :prev-text="'이전'" 
                            :next-text="'다음'" 
                            :container-class="'pagination'"
                            :page-class="'page-item'" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getList } from '@/mock/boards';
import type { BoardDTO } from '@/models/board';

const router = useRouter();
const items = ref<BoardDTO[]>([]);

function goPage(path: string) {
    return router.push(path);
}

function getData() {
    items.value = getList();
}
getData();
</script>

<style scoped></style>
