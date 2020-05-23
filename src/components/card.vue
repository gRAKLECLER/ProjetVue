<template>
<section class="container">
    <div class="card">
      <h2 class="card__title">Si tu appuis sur le bouton tu me clone</h2>
      <button @click="createTask(card)" class="card__button">clone moi</button>
    </div>
    <div class="card" v-for="(card, i) in cards" :key="i">
      <h2 class="card__title">Si tu appuis sur le bouton tu me clone</h2>
      <button @click="createTask(card)" class="card__button">clone moi</button>
      {{ card }}
    </div>
  </section>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      cards: [],
    }
  },
  methods: {
    createTask(card) {
      this.cards.push(card);
    }
  //   addPokemon(){
  //     this.$emit("addPokemon", 1);
  //   },
  // },
  }
};
</script>

<style>
  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    height: 300px;
    width: 300px;
    padding: 2%;
    box-shadow:  0px 1px 25px -5px rgba(0,0,0,0.75);
    margin-left: 5%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card__title{
    font-size: 24px;
  }
</style>