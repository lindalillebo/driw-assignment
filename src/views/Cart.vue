<template>
  <div class="cart">
    <h2>Your cart</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ total }}kr</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {},
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
    }),
  },
};
</script>
