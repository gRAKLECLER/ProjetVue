<template>
  <div class="Formulaire">
    <list />
    <div class="Form">
      <form class="Form__container" @submit.prevent="GetProfile()">
        <div class="Form__input">
          <label for="name">Name</label>
          <input v-model="name" type="text" name="name" id="name">
        </div>
        <div class="Form__input">
          <label for="email">Email</label>
          <input v-model="email" type="email" name="email" id="email">
        </div>
        <div class="Form__input">
          <label for="tel">Tél</label>
          <input v-model="tel" type="tel" name="tel" id="tel">
        </div>
        <button class="Form__button" type="submit">Envoyé</button>
      </form>
      <div class="Form__content">
        <div class="Form__info">
          <ul class="Form__text" v-for="(info, i) in infos" :key="i">
            <li>{{ info }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from '@/components/header.vue';

export default {
  name: "Formulaire",
  data(){
    return {
      name: "",
      email: "",
      tel: "",
      infos: [],
    }
  },
  components: {
    list,
  },
  methods:{
    GetProfile(){
      this.infos.push(this.name, this.email, this.tel);
      this.name = "";
      this.email = "";
      this.tel = "";
    }
  }
}
</script>

<style>
.Form{
  width: 100vw;
  height: 80vh;
  display: flex;
}

.Form__container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 90%;
}

.Form__input{
  margin-top: 20px;
}

.Form__button{
  margin-top: 20px;
  width: 10%;
}

.Form__content{
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 90%;
  background-color: greenyellow;
}

.Form__info{
  text-align: start;
  width: 300px;
  height: 200px;
}

.Form__text{
  list-style: none;
  background-color: tomato;
}

</style>