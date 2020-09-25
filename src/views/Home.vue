<template>
  <div>
    <Header/>
    <div class="searchBar">
      <form class="form" action="">
        <label for="input">Search</label>
        <input type="text" id="input" v-model="src">
        <p>{{ src }}</p>
      </form>
      <div class="filterRecipe">
        <div><p>VIANDE</p></div>
        <div><p>VIANDE</p></div>
        <div><p>VIANDE</p></div>
        <div><p>VIANDE</p></div>
      </div>
    </div>
    <section class="section">
      <BaseCard/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BaseCard from '@/components/BaseCard.vue'

export default {
  components:{
    Header,
    BaseCard
  },
  data(){ 
    return {
      src: "",
    }
  }
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
  padding: 0 1rem 0 1rem  ;
  background-color: thistle;

}

.form{
  width: 50%;
  height: 100%;
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
</style>
