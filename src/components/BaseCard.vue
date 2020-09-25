<template>
  <div class="recipeCard">
    <img class="recipeCard__img" src="../assets/iStock-1011302830-1152x768.jpg" alt="recipe image">
    <div class="recipeCard__description">
      <h3>this is the recipe card</h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.recipeCard{
  width: 300px;
  height: 300px;
  background-color: chartreuse;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 19px 40px -25px #2c3e50;
}

.recipeCard__img{
  object-fit: contain;
  width: 90%;
  height: 60%;
}

.recipeCard__description{
  width: 100%;
  height: 40%;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
}

</style>