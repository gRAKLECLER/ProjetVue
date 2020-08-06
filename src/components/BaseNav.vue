<template>
  <div>
    <Header/>
    <MenuBurger @click="openMenu"/>
  </div>
</template>

<script>
import EventBus from '@/EventBus.js'
import MenuBurger from '@/components/MenuBurger.vue'
import Header from '@/components/Header.vue'

export default {
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

</style>