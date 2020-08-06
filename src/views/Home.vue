<template>
  <div class="home">
    <h1>Meteo app</h1>
    <BaseNav/>
    <div class="text">
      <h1>Paris,France</h1>
      <h2>Jeudi 16 Mai 2020</h2>
    </div>
    <div class="card"></div>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav.vue'

export default {
  name: "home",
  components: {
    BaseNav,
  },
};
</script>

<style>

.text{
  margin-top: 20%;
  width: 100%;
  text-align: left;
}

.card{
  width: 250px;
  height: 150px;
  background: silver;
}

h1{
  margin: 0;
}

h2{
  margin: 0;
}
</style>
