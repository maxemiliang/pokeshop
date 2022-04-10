<template>
  <NavBar></NavBar>
  <div class="container mt-4">
    <router-view />
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
};
</script>

<style>
.navbar-brand-logo {
  width: 100px;
}
</style>
