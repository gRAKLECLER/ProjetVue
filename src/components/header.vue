<template>
  <header class="header">
    <nav class="header__nav">
        <h1>Food Recipes</h1>
      <ul class="header__links">
        <li>Accueil</li>
        <li>Recettes</li>
        <li>Favoris</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .header{
    width: 100vw;
    background-color: chartreuse;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .header__nav{
    display: flex;
    justify-content: center;
  }

  .header__links{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    font-weight: 600;
  }
</style>