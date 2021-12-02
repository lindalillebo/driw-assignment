<template>
  <div class="home">
    <h2>Products</h2>
      <Products v-on:view-product="viewProduct($event)"/>
  </div>
</template>

<script>
import Products from '../components/Products.vue'

export default {
  name: 'Home',
  components: {
    Products
  },
  methods: {
    viewProduct(product) {
      this.$router.push({ path: `/product/${product.id}` })
      console.log(product)
    }
  }
}
</script>
