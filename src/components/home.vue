<template>
  <header>
    <img class="logo" v-bind:src="img" alt="logo site">
    <div class="list" v-for="item in items" :key="item.message">
      <router-link to="/">{{ item.message }}</router-link>
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
        { message: "nos articles" },
        { message: "nos membres" },
      ],
      img: "../../assets/logo.png"
    }
  }
};
</script>

<style>

header{
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
}

.list{
  list-style: none;
}
</style>
