<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { watch } from 'vue';
import { useTodoStore } from './stores/todoStore';

const todoStore = useTodoStore();

watch(() => todoStore.todos, (newTodos) => {
  localStorage.setItem('todos', JSON.stringify(newTodos));
}, { deep: true });

</script>

<template>
  <header>

    <div class="wrapper">
      <v-app>
        <v-container>
          <v-app-bar>   
            <div class="nav-items">
                <img src="./assets/technovia.png" alt="technovia-logo" height="40px"> 
            <div class="links">
              <RouterLink to="/">   
                    <v-btn  variant="tonal"  color="orange" >List</v-btn>
            </RouterLink>
              <RouterLink to="/add-todo">
                <v-btn variant="outlined" color="orange">Add Todo</v-btn>
            </RouterLink>
          </div>
         </div>
          </v-app-bar>
        </v-container>
        <RouterView class="view"  />
      </v-app>
      <nav>
     
      </nav>
    </div>
  </header>


</template>


<style scoped>
a{
  
  text-decoration: none;
  color: white;
  margin: 0 5px;
}
.nav-items{
  padding: 0 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.view{
  margin: 30px 30px;
}
</style>
