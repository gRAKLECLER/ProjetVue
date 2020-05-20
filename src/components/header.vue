<template>
  <header>
    <img class="logo" :src="image" alt="logo site">
    <div class="list" v-for="item in items" :key="item">
      <router-link to="/">{{ item.message }}</router-link>
      <router-link to="/Pokemon">{{ item.Pokemon }}</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      items: [
        { message: "acceuil" },
        { Pokemon: "Pokemon" },
        { message: "nos membres" },
      ],
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
  list-style: none;
}
</style>
