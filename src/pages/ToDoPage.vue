<template class="body">
    <h3 class="text-center">LIST</h3>
    <hr>
    <div class="q-pa-xl">
        <q-form @submit.prevent="addTodo" class="q-mb-md">
            <div>
                <div>
                    <q-input v-model="newTodo" label="Add a new todo" class="">
                        <template v-slot:append>
                            <q-btn type="submit" @click="addTodo" label="Add" color="primary" />
                        </template>
                    </q-input>

                </div>
            </div>
        </q-form>
        <q-list>
            <q-item v-for="todo in todos" :key="todo.id" clickable>
                <div class="col-12">
                    <q-input filled color="purple-12" v-model="todo.text" label="Task:" class="horizontal-input  ">
                        <template v-slot:append>
                            <q-btn color="negative" label="Delete" @click="deleteTodo(todo.id)" />
                        </template>
                    </q-input>
                </div>
            </q-item>

        </q-list>


    </div>
    <div class=" q-pa-md">
        <pre>{{ JSON.stringify(todos, null, 2) }}</pre>
    </div>
</template>

<script>

import { ref } from 'vue';

export default {
    setup() {
        const todos = ref([]);
        const newTodo = ref('');
        const textInput = ref(null);

        const addTodo = () => {
            if (newTodo.value.trim() !== '') {
                todos.value.push({ id: Date.now(), text: newTodo.value });
                newTodo.value = '';
                saveTodosToLocalStorage();
                if (textInput.value) {
                    textInput.value.focus();
                }
            }
        };

        const deleteTodo = (todoId) => {
            todos.value = todos.value.filter((todo) => todo.id !== todoId);
            saveTodosToLocalStorage();
        };

        const saveTodosToLocalStorage = () => {
            localStorage.setItem('todos', JSON.stringify(todos.value));
        };

        const loadTodosFromLocalStorage = () => {
            const savedTodos = localStorage.getItem('todos');
            if (savedTodos) {
                todos.value = JSON.parse(savedTodos);
            }
        };
        
        loadTodosFromLocalStorage();

        const focusTextInput = () => {
            if (textInput.value) {
                textInput.value.focus();
            }
        };

        return {
            todos,
            newTodo,
            textInput,
            addTodo,
            deleteTodo,
            focusTextInput,
        };
    },
};
</script>

<style scoped>
.qinput {
    width: 100% !important;
    height: auto !important;
}

.horizontal-input {
    display: flex !important;
    /* flex-direction: row !important; */
    justify-content: space-between !important;
    align-items: center !important;
    color: blue !important;
}
</style>