<template>
  <header>
    <img class="logo" :src="image" alt="logo site">
    <ul class="list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Pokemon">Pokemon</router-link></li>
      <li><router-link to="/TodoList">Todo List</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      image: require("@/assets/logo.png")
    }
  }
};
</script>

<style>
header {
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.list {
  display: flex;
  width: 40%;
  justify-content: space-evenly;
  list-style: none;
}
</style>
