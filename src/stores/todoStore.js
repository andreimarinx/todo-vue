import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
const toast = useToast();

export const useTodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  }),
  getters: {
    complete(state) {
      return state.todos.filter((todo) => todo.completed === true);
    },
    incomplete(state) {
      return state.todos.filter((todo) => todo.completed === false);
    },
    completedCount(state) {
      return state.todos.filter((todo) => todo.completed).length;
    },
    incompleteCount(state) {
      return state.todos.filter((todo) => !todo.completed).length;
    },
    totalCount(state) {
      return state.todos.length;
    },
  },

  actions: {
    setCompleted(id) {
      toast.success("Todo Completed!");
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.completed = true;
    },
    removeTodo(id) {
      toast.success("Todo Removed!");
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo) {
      toast.success("Todo Added!");
      this.todos.push(todo);
    },
  },
});
