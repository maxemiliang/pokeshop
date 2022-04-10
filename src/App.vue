<template>
  <NavBar :cart="cart"></NavBar>
  <div class="container mt-4">
    <router-view
      :cart="cart"
      @addCart="handleAddCart"
      @removeCart="handleRemoveCart"
    />
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
    handleRemoveCart(id) {
      id = parseInt(id);
      this.cart = [...this.cart.filter((pokemon) => pokemon.id !== id)];
    },
  },
};
</script>

<style>
.navbar-brand-logo {
  width: 100px;
}
</style>
