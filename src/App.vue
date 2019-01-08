<template>
  <div>
    <!-- One root tag -->
    <todoList></todoList>
  </div>
</template>

<script>
import todo from "./components/todo";
import todoList from "./components/todoList";

export default {
  name: "App",
  components: {
    todo,
    todoList
  }
};
</script>

<style>
body {
  background-color: #34495d;
}
</style>
