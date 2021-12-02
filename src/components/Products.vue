<template>
  <div class="card" v-for="product in products" :key="product.id">
    <h3>{{ product.name }}</h3>
    <img :src="product.image" />
    <p>{{ product.price }} kr</p>
    <button @click="addProductToCart(product)">Add to Cart</button>
    <button class="view-product" @click="$emit('view-product', product)">
      View Product
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Products",
  computed: mapState({
    products: (state) => state.products.data,
  }),
  emits: ["view-product"],
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("products", ["getAllProducts"])
  },
  created() {
    this.getAllProducts()
    console.log("message:")
  }
};
</script>