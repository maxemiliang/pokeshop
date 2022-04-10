<template>
  <div class="home">
    <h1>Welcome to PokeShop</h1>
    <p>Your one stop shop for all things Pokemon</p>
    <div v-if="!loading">
      <p>We currently have {{ pokemonCount }} pokemons available.</p>
      <div class="d-flex">
        <button
          class="btn btn-primary"
          @click="$router.push({ path: '/shop' })"
        >
          Take me to the shop
        </button>
        <button
          class="btn btn-warning"
          @click="
            $router.push({
              path: `/pokemon/${Math.floor(
                Math.random() * (pokemonCount - 1 + 1) + 1
              )}`,
            })
          "
        >
          Take me to a random pokemon
        </button>
      </div>
    </div>
    <div v-else>
      <span class="text-green"> Loading... </span>
    </div>
  </div>
</template>

<script>
const Pokedex = require('pokeapi-js-wrapper');

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      pokemonCount: 0,
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.fetchPokemonCount().then(() => {
      this.loading = false;
    });
  },
  methods: {
    async fetchPokemonCount() {
      const P = new Pokedex.Pokedex();
      const pokemons = await P.getPokemonsList();
      if (pokemons) {
        this.pokemonCount = pokemons.count;
      }
    },
  },
};
</script>

<style scoped>
button {
  margin-right: 1rem;
}
</style>
