<template>
  <div class="col-12 mb-2">
    <div class="card px-4">
      <div class="d-flex flex-row align-items-center">
        <img :src="item.image" alt="Pokemon image" />
        <p class="fw-bold mb-0 ms-2">{{ item.name }} |</p>

        <p class="fw-bold mb-0 ms-2">
          {{ item.price }} € * <span class="amount">{{ item.count }}</span> =
          {{ item.price * item.count }} €
        </p>

        <button
          @click="$emit('removeCart', item.id)"
          class="btn btn-danger btn-sm ms-auto justify-item-end"
        >
          <i class="bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
img {
  height: 64px;
}
</style>
