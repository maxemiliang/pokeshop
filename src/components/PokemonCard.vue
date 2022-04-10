<template>
  <div class="col-lg-3 col-md-4 col-6 card">
    <img :src="pokemonImage" alt="" />
    <h3>{{ pokemon.name }}</h3>
    <p>
      <span class="text-success fw-bold">{{ pokemonHp.base_stat }}</span> HP
    </p>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
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

<style></style>
