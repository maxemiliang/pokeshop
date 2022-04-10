<template>
  <NavBar :cart="cart"></NavBar>
  <div class="container mt-4">
    <router-view @addCart="handleAddCart" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    handleAddCart(pokemon) {
      this.cart.push(pokemon);
    },
  },
};
</script>

<style>
.navbar-brand-logo {
  width: 100px;
}
</style>
