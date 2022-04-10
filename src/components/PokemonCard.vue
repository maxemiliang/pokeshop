<template>
  <div class="col-lg-3 col-md-4 col-6 mb-4">
    <div class="card">
      <img :src="pokemonImage" alt="" />
      <h3>{{ pokemon.name }}</h3>
      <p>
        <span class="text-success fw-bold">{{ pokemonHp.base_stat }}</span> HP
      </p>
      <p class="fw-bold">
        {{ Math.floor(Math.random() * (1000 - 1 + 1) + 1) }}
        €
      </p>
      <div class="d-flex flex-column justify-content-center gap-2">
        <button @click="$emit('addCart', pokemon)" class="btn btn-success">
          Add to cart
        </button>
        <router-link class="btn btn-primary" :to="`/pokemon/${pokemon.id}`"
          >More information</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  emits: ['addCart'],
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pokemonImage() {
      return this.pokemon?.sprites.front_default;
    },
    pokemonHp() {
      return this.pokemon?.stats.find((stat) => {
        return stat.stat.name === 'hp';
      });
    },
  },
};
</script>

<style scoped>
.card {
  padding: 1.25rem;
}
</style>
