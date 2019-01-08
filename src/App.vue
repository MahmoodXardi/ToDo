<template>
  <div>
    <!-- One root tag -->
    <todoList></todoList>
  </div>
</template>

<script>
import todoList from "./components/todoList";

export default {
  name: "App",
  components: {
    todoList
  }
};
</script>

<style>
body {
  background-color: #34495d;
}
</style>
