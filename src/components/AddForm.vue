<script setup>

import {ref} from 'vue'
import {useTodoStore} from '@/stores/todoStore'
import router from '@/router';
import { useToast } from "vue-toastification";


const toast = useToast();

const todoStore = useTodoStore() 

const title = ref('')
const description = ref('')

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
};


const submit = ()=>{
    if(!title.value || !description.value){
        toast.error("Both fields must be filled!")
        return
    }
    const todo = {
        id: generateUniqueId(),
        title: title.value,
        description: description.value,
        completed: false,
    }
    todoStore.addTodo(todo)

    title.value = ''
    description.value = ''
    router.push('/')

}

</script>

<template>
     <v-sheet width="330" class="mx-auto sheet">
        <h1>Add Todo</h1>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="title"
      :counter="50"
      label="Title"
    ></v-text-field>

    <v-text-field
      v-model="description"
      :counter="300"
      label="Description"
      
    ></v-text-field>

    <v-btn type="submit" variant="outlined" color="orange" block class="mt-2">Add</v-btn>

  </form>
</v-sheet>
</template>


<style scoped>
.sheet{
    border-radius: 7px;
    margin-top: 60px;
    padding: 15px;
}
</style>