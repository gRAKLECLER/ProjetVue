<template>
  <div class="Todo">
    <list/>
    <todo/>
  </div>
</template>

<script>
  import list from "@/components/header.vue";
  import todo from "@/components/todo.vue";

export default {
    name: "Todo",
    components: {
    todo,
    list,
  },
}
</script>

<style>

</style>