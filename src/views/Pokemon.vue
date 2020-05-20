<template>
  <div class="home">
    <list />
    <h1>Pokemon Generator</h1>
    <div>
      <Pokemon />
    </div>
  </div>
</template>

<script>
import list from "@/components/header.vue";
import Pokemon from "@/components/Pokemon.vue";

export default {
  name: "home",
  components: {
    list,
    Pokemon,
  },
};
</script>