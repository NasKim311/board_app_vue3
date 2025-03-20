<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goPage(path) {
    router.push(path);
}
</script>

<template>
    <div>
        <div class="content-header">
            <h4>
                <span>게시판</span>
            </h4>
        </div>
        <div class="container-fluid">
            <div class="card">
                <div class="card-header">
                    <div class="row justify-content-between gap-3">
                        <div class="col-auto">
                            <button class="btn btn-primary" type="button" @click="goPage('/board/add')">신규등록</button>
                        </div>
                        <div class="col-auto list-filter">
                            <div class="row gap-2">
                                <div class="col-auto">
                                    <select class="form-select">
                                        <option value="">검색 타입</option>
                                        <option value="title">제목</option>
                                        <option value="username">작성자</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <div class="input-group mb-3">
                                        <input type="search" class="form-control" placeholder="Search" />
                                        <button class="btn btn-outline-secondary" type="button">검색</button>
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
                            <tr>
                                <td>1</td>
                                <td>게시물 제목1</td>
                                <td>작성자1</td>
                                <td>2025-03-18</td>
                                <td>2025-03-18</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>게시물 제목2</td>
                                <td>작성자2</td>
                                <td>2025-03-18</td>
                                <td>2025-03-18</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="card-footer">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
