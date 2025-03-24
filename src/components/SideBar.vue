<template>
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/" className="brand-link">
            <span className="brand-text font-weight-light">LECIRT TMS</span>
        </a>

        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                    <!-- <NavLink to={`/admin/update/${userId}`} className="d-block">
                            {userId}
                            &nbsp;
                            <button className="nav-icon fas customReset btn_logout">
                                logout
                            </button>
                        </NavLink> -->
                </div>
            </div>

            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
                    <li className="nav-item">
                        <NavLink to="/statistics" className="nav-link">
                            <i className="nav-icon fas fa-chart-pie"></i>
                            <p>데이터 관리</p>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts"></script>

<style scoped></style>
