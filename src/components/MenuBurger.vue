<template>
  <div class="container">
    <div 
    v-on="$listeners"
    class="menuBurger"
    >
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .container{
    z-index: 2;
    position: relative;
    width: 10%;
    height: 10%;
  }

  .menuBurger{
    width: 35px;
    height: 3px;
    background: black;
  }

  .menuBurger:after{
    left: 0;
  }

  .menuBurger::after{
    content: '';
    position: absolute;
    width: 35px;
    height: 3px;
    background: black;
    top: 12px;
  }

  .menuBurger::before{
    left: 0;
  }

  .menuBurger::before{
    content: '';
    position: absolute;
    width: 35px;
    height: 3px;
    background: black;
    top: -12px;
  }
</style>