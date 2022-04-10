<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"
        ><img
          class="navbar-brand-logo"
          alt="Vue logo"
          src="https://fontmeme.com/permalink/220410/6194fb6887610ecb54f31268724cd564.png"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink link="/shop" title="Shop"></NavLink>
          <NavLink link="/cart" :title="`Cart (${cart.length})`"></NavLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import NavLink from '@/components/NavLink.vue';

export default {
  name: 'NavBar',
  components: {
    NavLink,
  },
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
