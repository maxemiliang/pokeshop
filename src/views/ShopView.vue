<template>
  <div class="about">
    <div class="d-flex flex-row justify-content-between mb-4">
      <h1>PokeShop</h1>
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="search"
        />
      </div>
    </div>
    <div class="row shop" v-if="!loading || pokemons.length > 0">
      <PokemonCard
        v-bind:key="pokemon.id"
        v-for="pokemon in pokemonList"
        :pokemon="pokemon"
        @addCart="handleAddCart"
      />
      <div
        class="d-flex justify-content-center mt-4"
        v-if="pokemonCount > pokemons.length"
      >
        <button class="btn btn-primary" @click="fetchPokemons(pokemons.length)">
          <i class="bi-arrow-clockwise me-2" v-if="!loading"></i>
          <div
            class="spinner-border spinner-border-sm me-2"
            role="status"
            v-else
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          Load more
        </button>
      </div>
    </div>
    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
const Pokedex = require('pokeapi-js-wrapper');
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  name: 'ShopView',
  emits: ['addCart'],
  data() {
    return {
      pokemons: [],
      pokemonCount: 0,
      loading: false,
      search: '',
    };
  },
  components: {
    PokemonCard,
  },
  created() {
    this.fetchPokemons().then(() => {
      this.loading = false;
    });
  },
  methods: {
    handleAddCart(pokemon) {
      this.$emit('addCart', pokemon);
    },
    async fetchPokemons(offset = 0, limit = 10) {
      this.loading = true;
      const P = new Pokedex.Pokedex();
      const pokemons = await P.resource(
        `/api/v2/pokemon/?offset=${offset}&limit=${limit}`
      );
      if (pokemons && pokemons.results) {
        pokemons.results.forEach((pokemon) => {
          this.getPokemon(pokemon.url);
        });
        this.pokemonCount = pokemons.count;
      }
      this.loading = false;
    },
    async getPokemon(url) {
      this.loading = true;
      const P = new Pokedex.Pokedex();
      const pokemon = await P.resource(url);
      if (pokemon) {
        this.pokemons.push(pokemon);
      }
      this.loading = false;
    },
  },
  computed: {
    pokemonList() {
      if (this.search !== '') {
        return this.pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      return this.pokemons;
    },
  },
};
</script>
