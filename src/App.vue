<template>
  <div id="nav">
    <router-link to="/">Shop</router-link>
    <router-link to="/cart">Cart ({{ cartQuantity }})</router-link>
  </div>
  <router-view />
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters("cart", {
      cartQuantity: "cartItemQuantity",
    }),
  },
};
</script>
