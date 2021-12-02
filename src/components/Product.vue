<template>
  <div class="product section">
    <div class="container">
      <h3>{{ product.name }}</h3>
      <img :src="product.image" />
      <p>{{ product.price }} kr</p>
      <p>{{ product.description }}</p>
      <button @click="addProductToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Product",
  props: {
    id: {
      type: String,
    },
  },
  computed: {
    ...mapGetters('products', ["getProductById"])
  },
  created() {
    this.product = this.getProductById(this.id)
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"])
  },
};
</script>

<style>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
</style>


