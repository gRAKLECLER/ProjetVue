<template>
<section class="container">
    <div class="card">
      <h2 class="card__title">{{ item.name }}</h2>
      <button @click="createTask" class="card__button">{{ button }}</button>
    </div>
    <div class="card" v-for="card in cards" v-bind:key="card">
      <h2 class="card__title">{{ card.title }}</h2>
      <button @click="createTask" class="card__button">{{ card.button }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "card",
  props:{
    item: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      text: "Si tu appuis sur le bouton tu me clone",
      button: "Clone moi",
      cards: [],
    }
  },
  methods: {
    createTask() {
      this.cards.push({
        title: this.text,
        button: this.button,
      });
    },
    addPokemon(){
      this.$emit("addPokemon", 1);
    },
  },
};
</script>

<style>
  .container {
    width: 100vw;
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