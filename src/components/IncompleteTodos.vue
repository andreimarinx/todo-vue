<script setup>
import {useTodoStore} from '@/stores/todoStore'
import ToDo from './ToDo.vue'

const todoStore = useTodoStore()
</script>

<template>
    <div class="title" v-if="todoStore.incompleteCount === 0">
        <h2>No active tasks!</h2>
        <RouterLink to="/add-todo"><h1 class="text-orange">Create a task</h1></RouterLink>
    </div>    
<div class="task-list" v-else>     
    <div class="title">
        <h2>Active:</h2>
        <h1 class="text-orange">{{ todoStore.incompleteCount }}</h1>
    </div>
    <v-row>
        <v-col
            v-for="todo in todoStore.incomplete"
            :key="todo.id"
            cols="12" sm="4" md="20" lg="4" xl="2">
            <ToDo :todo="todo" />
        </v-col>
    </v-row></div>

</template>

<style scoped>
a{
    text-decoration: none;
}
.title{
    display: flex;
    align-items: baseline;
}
.title h2{
    margin-right: 10px;
}
</style>