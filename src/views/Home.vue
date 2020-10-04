<template>
  <div>
    <h1>hello</h1>
    <form action="">
      <label for="character">enter a character</label>
      <input v-model="src" type="text" name="" id="character" placeholder="character">
    </form>
    <h2>Filter by race</h2>
    <div class="button">
      <button @click="filterByRace('Human')">Humans</button>
      <button @click="filterByRace('Hobbit')">Hobbit</button>
      <button>ELf</button>
      <button @click="verify = true">ALL</button>
    </div>
    <ul class="list" v-if="verify">
      <li v-for="(character, i) in filterCharacter" :key="i">
        {{ character.name }} {{ character.spouse}}
      </li>
    </ul>
    <div v-else>
      <p v-for="(race, i) in races" :key="i"> {{ race.name }} </p>
    </div>
  </div>
</template>

<script>
import { GetData } from "@/api.js";

export default {

  components:{
  },
  data: () => ({
    characters:[],
    src: "",
    races: [],
    verify: true,
    human: true,
  }),
  created(){
    GetData()
    .then(data => {
      this.characters = data.docs
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  },
  methods:{
    filterByRace(race){
      this.characters.map(character =>{
        if(character.race.startsWith(`${race}`)){
          this.races.push(character)
          this.verify = false
        }
        // this.races.splice(`${unrace}`)
      })
    },
  },
  computed:{
    filterCharacter(){
      return this.characters.filter(character => {
        return character.name.match(this.src)
      })
    }
  }
}
</script>

<style>
  li{
    list-style: none;
  }

  .list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
