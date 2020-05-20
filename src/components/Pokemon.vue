<template>
  <div>
    <div>
      <li v-for="(pokemon, i) in pokemons" :key="i">
        {{ pokemon.name }}
      </li>
    </div>
  </div>
</template>

<script>
import { GetPokemon } from "@/api.js";

export default {
name: 'Pokemon',
  data: () => ({
    pokemons: {},
  }),
  created() {
    GetPokemon()
      .then((data) => {
        this.pokemons = data.results;
      });
  },
}
</script>

<style>

</style>