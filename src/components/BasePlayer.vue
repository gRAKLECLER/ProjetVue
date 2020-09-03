<template>
  <div class="audio">
    <h3>Player</h3>
    <p 
    v-for="(song, id) in songs" 
    :key="id">
      {{ song.name }}</p>
    <div class="audio__player">
      <img class="audio__img" src="../assets/previous.svg" alt="previous">
      <img class="audio__img" src="../assets/play.svg" alt="play">
      <img class="audio__img" src="../assets/next.svg" alt="next">
    </div>
  </div>
</template>

<script>
export default {
  data:() => ({
    songs:[
      {id: 1, name:"LP - Muddy Waters"},
    ]
  }),
}
</script>

<style>
.audio{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
}

.audio__player{
  height: auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.audio__img{
  width: 10%;
}
</style>