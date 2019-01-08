<template>
  <div class="container">
    <div class="row">
      <div class="col s12 l12 m12">
        <h2 class="white-text">{{ title }}</h2>
        <ul v-if="items.length">
          <li
            class="lime lighten-2 card-panel"
            v-bind:style="styleObject"
            v-for="(item, index) in items"
            :key="item"
          >
            {{ item }}
            <span @click="remove(index);"
              ><i
                class=" red-text text-darken-3 zmdi zmdi-badge-check zmdi-hc-2x right"
              ></i>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div v-show="!items.length" :style="styleEmpty">{{ emptyList }}</div>

    <!-- Add item to list via click on Enter or ADD TASK button -->
    <div class="row">
      <div class="input-field col s12 l12 m12">
        <input
          type="text"
          class="validate"
          v-model="currentValue"
          :placeholder="newTask"
          @keyup.enter="add"
        />
      </div>
    </div>

    <!-- Submit button to add list -->
    <div class="row">
      <div class="col s12 l3 m6">
        <button
          @click="add"
          :disabled="!currentValue"
          class="waves-effect waves-light btn-large "
        >
          {{ addTask }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  data() {
    return {
      title: "TO DO list on Vue.js",
      emptyList: "List is empty. Please add your first task.",
      addTask: "Add task",
      newTask: "New Task",
      failToast: "You must type a task",
      succesToast: "Added a new task",
      items: [],
      currentValue: "",
      styleObject: {
        color: "#f50057 ",
        fontSize: "22px",
        fontWeight: "bold"
      },
      styleEmpty: {
        color: "orange",
        fontSize: "22px",
        fontWeight: "bold"
      },
      failClass: "rounded yellow-text bold"
    };
  },
  methods: {
    add() {
      // check if text field is Empty string
      if (this.currentValue === "") {
        M.toast({ html: this.failToast, classes: this.failClass });
      } else {
        this.items.push(this.currentValue);
        this.currentValue = ""; // Cleaning typed text variable
        //M.toast({ html: this.succesToast, classes: "rounded green bold" });
      }
    },
    remove(itemIndex) {
      this.items.splice(itemIndex, 1);
    }
  }
};
</script>

<style scoped></style>
