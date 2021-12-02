<template>
  <div class="cart container">
    <h2>Your cart</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart.</i>
    </p>
    <table class="cart-items">
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
      </tr>
    </table>
    <div class="price-container">
      <p class="total">Sub Total: {{ cart.subtotal?.toFixed(2) }} kr</p>
      <p class="total">
        Discounts ({{ cart.discountPercentage }}%):
        {{ cart.discount?.toFixed(2) }} kr
      </p>
      <p class="total">Tax (12%): {{ cart.tax?.toFixed(2) }} kr</p>
      <b class="total">Total: {{ cart.total?.toFixed(2) }} kr</b>
    </div>
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
      cart: "cartTotalPrice",
    }),
  },
};
</script> 