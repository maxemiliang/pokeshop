<template>
  <div
    class="single-pokemon d-flex align-items-center flex-column"
    v-if="!error"
  >
    <PokemonCard
      class="w-50 mb-4"
      :pokemon="pokemon"
      v-if="!loading && pokemon"
      @addCart="$emit('addCart', pokemon)"
    />
    <div class="d-flex justify-content-center">
      <router-link class="btn btn-primary" to="/shop"
        >Back to the shop</router-link
      >
    </div>
  </div>
  <div class="single-pokemon d-flex align-items-center flex-column" v-else>
    <h2 class="text-danger">Pokemon not found!</h2>
  </div>
</template>

<script>
const Pokedex = require('pokeapi-js-wrapper');
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  name: 'PokemonView',
  components: {
    PokemonCard,
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (nextParam) => {
        if (nextParam.id && parseInt(nextParam.id)) {
          this.fetchPokemon(nextParam.id);
        }
      },
      { immediate: true }
    );
  },
  data() {
    return {
      pokemon: undefined,
      loading: false,
      error: false,
    };
  },
  methods: {
    async fetchPokemon(id) {
      this.loading = true;
      this.error = false;
      const P = new Pokedex.Pokedex();
      try {
        const pokemon = await P.resource(`/api/v2/pokemon/${id}`);
        if (pokemon) {
          this.pokemon = pokemon;
        }
        this.loading = false;
      } catch (e) {
        console.error(e);
        this.error = true;
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
