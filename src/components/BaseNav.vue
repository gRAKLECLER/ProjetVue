<template>
  <div class="BaseNav">
    <Header/>
    <MenuBurger @click="openMenu"/>
  </div>
</template>

<script>
import EventBus from '@/EventBus.js'
import MenuBurger from '@/components/MenuBurger.vue'
import Header from '@/components/Header.vue'

export default {
  data:() =>({
    show: true
  }),
  components: {
    MenuBurger,
    Header,
  },
  methods:{
    openMenu() {
      EventBus.$emit("open");
    }
  },
}
</script>

<style>
  .BaseNav{
    margin-top: 20px;
  }
</style>