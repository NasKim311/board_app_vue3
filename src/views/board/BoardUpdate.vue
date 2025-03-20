<script setup></script>

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
                            <button class="btn btn-primary" type="button">신규등록</button>
                        </div>
                        <div class="col-auto list-filter">
                            <div class="row gap-2">
                                <div class="col-auto">
                                    <select class="form-control">
                                        <option value="">판매 상태</option>
                                        <option value="A0">진행</option>
                                        <option value="C0">중지</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <select class="form-control">
                                        <option value="">지역</option>
                                        <option value="1">서울</option>
                                        <option value="2">부산</option>
                                    </select>
                                </div>
                                <div class="col-auto">
                                    <div class="input-group">
                                        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                        <div class="input-group-append">
                                            <div class="input-group-text">
                                                <i class="fa fa-search"></i>
                                            </div>
                                        </div>
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
                                <th>
                                    지역
                                    <i class="fa fa-fw fa-sort" style="cursor: pointer"></i>
                                </th>
                                <th>
                                    <span class="badge badge-info">상태</span> 제목
                                    <i class="fa fa-fw fa-sort" style="cursor: pointer"></i>
                                </th>
                                <th>
                                    캘린더
                                    <i class="fa fa-fw fa-sort" style="cursor: pointer"></i>
                                </th>
                                <th>
                                    최대인원
                                    <i class="fa fa-fw fa-sort" style="cursor: pointer"></i>
                                </th>
                                <th>
                                    키워드
                                    <i class="fa fa-fw fa-sort" style="cursor: pointer"></i>
                                </th>
                                <th>
                                    생성일
                                    <i class="fa fa-fw fa-sort" style="cursor: pointer"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>서울</td>
                                <td><span class="badge badge-secondary">진행</span> 패키지 제목</td>
                                <td>
                                    <div class="color-box" style="background-color: #ff5733"></div>
                                </td>
                                <td>100</td>
                                <td>키워드1</td>
                                <td>2025-03-18</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>부산</td>
                                <td><span class="badge badge-danger">중지</span> 패키지 제목 2</td>
                                <td>
                                    <div class="color-box" style="background-color: #33c1ff"></div>
                                </td>
                                <td>50</td>
                                <td>키워드2</td>
                                <td>2025-03-17</td>
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
