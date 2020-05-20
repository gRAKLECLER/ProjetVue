<template>
  <section class="todoContainer">
    <form class="Task" @submit.prevent="createTask">
      <input
        class="input"
        v-model="newTodo"
        type="text"
        placeholder="add Task"
      />
      <button class="buttonTask" type="submit" name="button">Add</button>
    </form>
    <ul class="content">
      <li class="contentTask" v-for="(todo, i) in todos" :key="i">
        {{ todo.title }}
        <button @click="removeTask(todo)" class="buttonTask">Delete</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  methods: {
    createTask() {
      this.todos.push({
        title: this.newTodo,
        done: false
      });
      this.newTodo = "";
    },
    removeTask(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>

<style>
    .todoContainer{
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .Task{
      background: chartreuse;
      height: 10%;
      width: 30%;
    }

    .content{
      background: rgb(252, 246, 246);
      height: 50%;
      width: 30%;
    }
</style>