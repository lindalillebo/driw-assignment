<template>
  <div class="container">
    <div class="card" v-for="product in products" :key="product.id">
      <div class="product-container">
        <img :src="product.image" />
        <p class="product-name">{{ product.name }}</p>
        <p class="price">{{ product.price }} kr</p>
        <div class="btn-container">
          <button class="view-product" @click="viewProduct(product)">
            View Product
          </button>
          <button @click="addProductToCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Products",
  computed: mapState({
    products: (state) => state.products.data,
  }),
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("products", ["getAllProducts"]),
    viewProduct(product) {
      this.$router.push({ path: `/product/${product.id}` });
    },
  },
  created() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
