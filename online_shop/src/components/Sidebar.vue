<template>
  <div>
    <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky">
            <!-- 管理員 -->
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>管理員</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">
                <i class="fas fa-box-open"></i>
                產品列表</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/orders">
                <i class="far fa-list-alt"></i>
                訂單列表</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/admin/products">
                <i class="fas fa-ticket-alt"></i>
                優惠卷</router-link>
            </li>
            </ul>
            <!-- 模擬功能 -->
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>模擬功能</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
                <span data-feather="plus-circle"></span>
            </a>
            </h6>
            <ul class="nav flex-column mb-2">
            <li class="nav-item">
                <a class="nav-link" href="#">
                <span data-feather="file-text"></span>
                模擬訂單
                </a>
            </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>
