<template>
  <div id="nav">
    <h1 class="title">Driw Shop</h1>
    <router-link :class="{active: $route.name === 'Home'}" to="/">Shop</router-link> 
    <router-link :class="{active: $route.name === 'Cart'}" to="/cart">Cart</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
}
</script>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
