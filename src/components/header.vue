<template>
  <div class="Header" :class="{isActive : toggle}">
      <ul class="Header__nav">
        <router-link class="Header__link" to="/">Home</router-link>
        <router-link class="Header__link" to="/Playlist">Playlist</router-link>
        <router-link class="Header__link" to="Favoris">Favoris</router-link>
      </ul>
  </div>
</template>

<script>
import EventBus from '@/EventBus.js'

export default {
  data:() =>({
    toggle: false
  }),
  created(){
    EventBus.$on("open", ()=>{
      this.toggle = !this.toggle
    });
    },
  }
</script>

<style>
  .Header{
    position: absolute;
    z-index: 2;
    height: 100vh;
    width: 40vw;
    background: rgb(233, 233, 233);
    box-shadow: 3px 5px 26px -10px rgba(0,0,0,0.75);
    top: 0;
    left: -150px;
  }

  .Header__nav{
    height: 60%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .Header__link{
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
  }

  .isActive{
    left: 0px;
  }
</style>