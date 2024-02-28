<script setup>

import { defineProps } from 'vue';
import {useTodoStore} from '@/stores/todoStore'
const todoStore = useTodoStore()

const props = defineProps({
    todo:{
        type: Object,
        required: true
    }
})
</script>

<template>
      <v-card
          class="mx-auto"
          max-width="344"
          :variant="todo.completed? 'outlined' :'elevated'"
          :color="todo.completed? 'orange':''"
        >
          <v-card-item>
            <div>
              <div class="text-overline mb-1">
                {{ todo.completed? 'COMPLETED': 'IN PROGRESS' }}
              </div>
              <div class="text-h6 mb-1">
               {{ todo.title }}
              </div>
              <div class="text-caption">{{ todo.description }}</div>
            </div>
          </v-card-item>


          <div v-show="!todo.completed" > 
          <v-card-actions>
             <v-btn color="green" variant="tonal" @click="todoStore.setCompleted(todo.id)">
              Complete
            </v-btn>
            <v-btn color="red" variant="outlined" @click="todoStore.removeTodo(todo.id)">
              Remove
            </v-btn>
          </v-card-actions>
        </div>
        </v-card>
</template>