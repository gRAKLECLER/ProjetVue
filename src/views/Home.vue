<template>
  <div class="home">
    <header>
      <h1>App Music</h1>
    </header>
    <BaseNav/>
    <BasePlayer/>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav.vue'
import BasePlayer from '@/components/BasePlayer.vue'

export default {
  name: "home",
  components: {
    BaseNav,
    BasePlayer
  },
};
</script>

<style>

</style>
