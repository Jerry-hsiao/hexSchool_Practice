<template>
  <div class="table-responsive">
    .
    <div class="text-right">
      <button>Add new Product</button>
    </div>
    <table class="table table-striped table-sm">
        <thead>
            <tr>
                <th>分類</th>
                <th>產品名稱</th>
                <th>原價</th>
                <th>售價</th>
                <th>是否啟用</th>
                <th>編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
                <td>{{item.category}}</td>
                <td>{{item.title}}</td>
                <td class="text-right">{{item.origin_price}}</td>
                <td class="text-right">{{item.price}}</td>
                <td>
                    <span v-if="item.is_enabled" class="text-success">Enable</span>
                    <span v-else>Unable</span>
                </td>
                <td>
                    <button class="btn btn-outline-primary btn-sm">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
      const vm = this
      this.$http.get(api).then((r) => {
        console.log(r.data)
        vm.products = r.data.products
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
