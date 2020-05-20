<template>
  <div class="home">
    <list />
    <h1>Cards Generator</h1>
    <div class="card__section">
      <card @addPokemon="setPokemon" v-for="(pokemon,i) in pokemons" 
      :key="i"
      :item="pokemon"
      />
    </div>
    <div>
      <todo />
    </div>
  </div>
</template>

<script>
import list from "@/components/header.vue";
import card from "@/components/card.vue";
import todo from "@/components/todo.vue";
import { GetPokemon } from "@/api.js";

export default {
  name: "home",
  data: () => ({
    add: 1,
    pokemons: {},
  }),
  components: {
    list,
    card,
    todo
  },
  methods:{
    setPokemon(id){
      this.add += id;
      this.GetPokemon();
    },
    createPokmeon(){
      GetPokemon(this.add).then(data => {
        this.pokemons = data.results;
      });
    },
    created(){
      console.log('created');
      GetPokemon(this.add).then(data => {
        this.pokemons = data.results;
      });
    }
  }
};
</script>

<style>
.card__section {
  display: flex;
  width: 95vw;
  height: 100vh;
  padding: 20px;
  justify-content: center;
}
</style>
