document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: '#inpDiv',
        data: {
            newTodoText: '',
            todos: [
                {
                    id: 1,
                    title: 'Помыть посуду'
                },
                {
                    id: 2,
                    title: 'Вынести мусор'
                },
                {
                    id: 3,
                    title: 'Подстричь газон'
                }
            ],
            nextTodoId: 4
        },
        methods: {
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            }
        }
    })
});