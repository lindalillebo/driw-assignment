<template>
  <div class="product">
    <div class="container">
      <img :src="product.image" />
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price }} kr</p>
      <p>{{ product.description }}</p>
      <button @click="addProductToCart(product)">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
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
    ...mapGetters("products", ["getProductById"]),
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
  },
  created() {
    this.product = this.getProductById(this.id);
  },
};
</script>


<style scoped>
button {
  display: block;
  float: right;
  margin: 0;
}
@media (min-width: 750px) {
  .container {
    width: 70%;
    margin-top: 20px;
  }
}
</style>
