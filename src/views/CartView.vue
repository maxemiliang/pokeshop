<template>
  <div class="cart">
    <div class="row" v-if="cart && cart.length > 0">
      <CartItem
        v-bind:key="id"
        v-for="id in Object.keys(cartItems)"
        @removeCart="$emit('removeCart', id)"
        :item="cartItems[id]"
      />
    </div>
    <div v-else>
      <div class="d-flex justify-content-center align-items-center">
        <h3 class="fw-bold text-danger">No items in cart</h3>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue';

export default {
  name: 'CartView',
  emits: ['removeCart'],
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      const cartItems = {};
      this.cart.forEach((item) => {
        if (cartItems[item.id]) {
          cartItems[item.id].count += 1;
        } else {
          cartItems[item.id] = {
            name: item.name,
            image: item.sprites.front_default,
            price: Math.floor(Math.random() * (1000 - 1 + 1) + 1),
            count: 1,
          };
        }
      });
      return cartItems;
    },
  },
};
</script>

<style></style>
