<script setup>
import {useTodoStore} from '@/stores/todoStore'
import ToDo from './ToDo.vue'

const todoStore = useTodoStore()
</script>

<template>
<div class="container" v-if=" todoStore.completedCount !== 0">
    <div class="title">
        <h2>Completed:</h2>
        <h1 class="text-orange">{{ todoStore.completedCount }}</h1>
    </div>
  
    <v-row>
        <v-col
            v-for="todo in todoStore.complete"
            :key="todo.id"
            cols="12" sm="4" md="20" lg="4" xl="2">
            <ToDo :todo="todo" />
        </v-col>
    </v-row>
</div>
</template>

<style scoped>
.title{
    display: flex;
    align-items: baseline;
}
.title h2{
    margin-right: 10px;
}
</style>