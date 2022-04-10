<template>
  <div class="about">
    <h1>PokeShop</h1>
    <div class="row shop" v-if="!loading">
      <PokemonCard
        v-bind:key="pokemon.id"
        v-for="pokemon in pokemons"
        :pokemon="pokemon"
      />
    </div>
    <div v-else>
      <span>Loading...</span>
    </div>
  </div>
</template>

<script>
const Pokedex = require('pokeapi-js-wrapper');
import PokemonCard from '@/components/PokemonCard.vue';

export default {
  name: 'ShopView',
  data() {
    return {
      pokemons: [],
      pokemonCount: 0,
      loading: false,
    };
  },
  components: {
    PokemonCard,
  },
  created() {
    this.loading = true;
    this.fetchPokemons().then(() => {
      this.loading = false;
    });
  },
  methods: {
    async fetchPokemons(offset = 0, limit = 10) {
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
    },
    async getPokemon(url) {
      const P = new Pokedex.Pokedex();
      const pokemon = await P.resource(url);
      if (pokemon) {
        this.pokemons.push(pokemon);
      }
    },
  },
};
</script>
