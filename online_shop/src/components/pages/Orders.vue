<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="table-responsive">
        <table class="table table-striped mt-4" width="500">
            <thead>
                <tr>
                    <th width="100">購買時間</th>
                    <th width="100">Email</th>
                    <th width="20">購買款項</th>
                    <th width="20">應付金額</th>
                    <th width="60">是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
            </tbody>
        </table>
        <!-- <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled': !pagination.has_pre}">
                <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(pagination.current_page - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item" v-for="(page,index) in pagination.total_pages" :key="index" :class="{'active': pagination.current_page == page}">
                  <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
                </li>
                <li class="page-item" :class="{'disabled': !pagination.has_next}">
                <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pagination.current_page + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav> -->
        <!-- Delete -->
        <!-- <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger"
                        @click="deleteProduct()"
                        >確認刪除</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  data () {
    return {
      orders: [],
      pagination: {}
    }
  },
  methods: {
    getOrders () {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/orders`
      const vm = this
      vm.isLoading = true
      this.$http.get(api).then((r) => {
        console.log(r.data)
        vm.orders = r.data.orders
        vm.isLoading = false
        vm.pagination = r.data.pagination
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
