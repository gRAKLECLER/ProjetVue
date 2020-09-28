<template>
  <div class="recipe">
    <Header/>
    <div class="searchBar">
      <form class="form" action="">
        <label for="input">Search</label>
        <input type="text" id="input" v-model="src">
      </form>
    </div>
    <div 
    class="recipeCard" 
    v-for="(cocktail, i) in cocktails" 
    :key="i">
      <div class="recipeInfo">
        <img 
        class="recipeCard__img" 
        :src="cocktail.strMealThumb" 
        alt="recipe image">
        <div class="recipeCard__description">
          <h3>{{ cocktail.strMeal }}</h3>
          <p>{{ cocktail.strArea }}</p>
          <p>{{ cocktail.strCategory }}</p>
        </div>
      </div>
      <div class="recipeIngredient">
        <ul>
          <li>{{ cocktail.strIngredient1 }}</li>
        </ul>
        <ul class="recipeLinks">
          <li>{{ cocktail.strSource}}</li>
          <li>{{ cocktail.strTags}}</li>
          <a href="cocktail.strYoutube"><li>{{ cocktail.strYoutube}}</li></a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { addCocktail } from "@/api.js";



export default {
  components:{
    Header,
  },
  data: () => ({
    cocktails: [],
    src: "",
  }),
  created(){
    addCocktail().then(data => {
      this.cocktails = data.meals
      console.log(data)
    })
  },
}
</script>

<style>
.section{
  padding: 1rem;
}

.searchBar{
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem 0 1rem  ;
  background-color: thistle;

}

.form{
  display: flex;
  align-items: center;
}

.filterRecipe{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.recipe {
  height: 100vh;
}

.recipeCard{
  background-color:  rgb(53, 6, 33);
  display: flex;
  justify-content: space-between;
  color: white;
}

.recipeInfo{
  display: flex;
  flex-direction: column;
  width: 50%;
}

.recipeIngredient{
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}

.recipeCard__img{
  object-fit: cover;
  width: 100%;
  height: 300px;
}

.recipeCard__description{
  width: 100%;
}

.recipeLinks{
  text-align: left;
  color: aquamarine;
}

li{
  list-style: none;
}

</style>
