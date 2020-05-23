<template>
  <section class="container">
    <div class="container__todo">
      <form class="Task" @submit.prevent="createTask()">
        <input
          class="input"
          v-model="newTodo"
          type="text"
          placeholder="add Task"
        />
        <button class="buttonTask" type="submit" name="button">Add</button>
      </form>
      <div class="content">
        <div class="content__task">
          <div class="content__title--Task"><p>Task</p><strong>{{remaining}}</strong></div>
          <ul class="contentTask">
            <li class="contentTask__element" v-for="(todo, i) in todos" :key="i">
              {{ todo }}
              <div>
              <button @click="removeTask(todo)" class="buttonTask">Delete</button>
              <button @click="doneTask(todo)" class="buttonTask">Done</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="content__done">
          <div class="content__title--done"><p>Task Done</p></div>
          <ul class="contentTask" v-for="(todo, i) in done" :key="i">
            <li>
              {{ todo }}
            </li>
          </ul>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "todo",
  data() {
    return {
      newTodo: "",
      todos: [],
      done: [],
    };
  },
  methods: {
    createTask() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    removeTask(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    doneTask(Task){
      this.done.push(Task);
      this.todos.splice(this.todos.indexOf(Task), 1);
    }
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },
  }
};
</script>

<style>
    .container{
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .container__todo{
      width: 50%;
      height: 50%;
    }
    .Task{
      background: #060146;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20%;
      width: 100%;
    }

    .contentTask{
      list-style: none;
      width: 70%;
      color: green;
    }

    .contentTask__element{
      display: flex;
      justify-content: space-between;
      padding: 5px;
      margin-top: 10px;
      width: 100%;
      background: #060146;
      color: #E7ECEF;

    }

    .content{
      background:#030027;
      height: 100%;
      width: 100%;
      display: flex;
    }

    .content__task{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
    }

    .content__done{
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
    }

    .content__title--Task{
      color: #E7ECEF;
      width: 100%;
    }

    .content__title--done{
      color: #E7ECEF;
      width: 100%;
    }
</style>